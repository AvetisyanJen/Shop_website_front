import { decodeToken } from "react-jwt";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { cartItems } from "../../redux/features/cartSlice";
import "./cart.css"
import React, { useEffect, useState } from 'react';
import { actionCart, actionOrder } from "../../redux/sagas/sagaActions";

import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import Login from "../user/login";


const CartPage: React.FC = () => {
  const CartItems = useAppSelector(cartItems);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [isDel, setisDel] = useState(false);
  const user: any = localStorage.getItem("token");
  const decoded: any = decodeToken(user);
  const totalPrice = CartItems.reduce((price, item) => price + item.quantity * item.Product.price, 0)

  useEffect(() => {
    if (decoded) {
      dispatch({
        type: actionCart.GET_CART,
        id: decoded.id,
      });
    }
  }, [dispatch, shouldUpdate, isDel])

  const incrementCount = (id: number) => {
    setShouldUpdate(!shouldUpdate);
    dispatch({
      type: actionCart.INCREMENT,
      payload: {
        ProductId: id,
        userId: decoded.id
      }
    });
  };
  const decrementCount = (id: number) => {
    setShouldUpdate(!shouldUpdate);
    dispatch({
      type: actionCart.DECREMENT,
      payload: {
        ProductId: id,
        userId: decoded.id
      }
    });
  };
  const RemoveItem = (id: number) => {
    setisDel(!isDel);
    dispatch({
      type: actionCart.DELETE_CART,
      payload: {
        ProductId: id,
        userId: decoded.id
      }
    });
  };

  const makePayment = (token: any) => {

    dispatch({
      type: actionOrder.PAYMENT,
      payload: { token, userId: decoded.id }
    })
    navigate('/order')
  }
  return (
    <>
      {user ? (<section className='cart-items'>
        <div className='cont d_flex'>


          <div className='cart-details'>
            {CartItems.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}


            {CartItems.map((item, id) => {
              const productQty = item.Product.price * item.quantity

              return (
                <div className='cart-list product d_flex' key={id}>
                  <div className='img'>
                    <img
                      src={'http://localhost:3333/images/' + item?.Product?.Photos[0]?.url}
                      alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.Product?.name}</h3>
                    <h4>
                      ${item.Product.price}.00 * {item.quantity}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>

                      <i
                        onClick={() => RemoveItem(item.ProductId)}
                        className='fa-solid fa-xmark' ></i>

                    </div>

                    <div className='cartControl d_flex'>
                      <div className='incCart' onClick={() => incrementCount(item.ProductId)}>
                        <i className='fa-solid fa-plus'></i>
                      </div>
                      <p className="number">{item.quantity}</p>
                      <div className='desCart' onClick={() => decrementCount(item.ProductId)}>
                        <i className='fa-solid fa-minus'></i>
                      </div>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total prod'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>

            </div>
            <div className="pay">
              <StripeCheckout
                stripeKey="pk_test_51KjlUTEwie5RP3GFlb1RGB6Re8hesKixRU6ofIHQ6IcifCzvGY8KW7bxzNy89bfzgxQHf69Sx5U0EZSJ92Z0KwZm00AjClehJP"
                token={makePayment}
                name="Buy products"
                amount={totalPrice * 100}


              />
            </div>
          </div>


        </div>
      </section>) : (<Login />)}
    </>
  )
}

export default CartPage
