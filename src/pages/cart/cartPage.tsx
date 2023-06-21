// import "./cart.css"
// import React, { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector, useLocalStorage } from '../hooks/hook';
// import { cartItems } from '../redux/features/cartSlice';
// import { actionCart, actionOrder } from '../redux/sagas/sagaActions';
// import { decodeToken } from "react-jwt";
// import StripeCheckout from "react-stripe-checkout";
// import '../App.css';
// import { incremCartSaga } from '../redux/sagas/handlers/cartSaga';
// import { Link, useNavigate } from 'react-router-dom';
// import { nanoid } from '@reduxjs/toolkit';


// const CartPage:React.FC = () => {
//   const CartItems = useAppSelector(cartItems);
//   const dispatch = useAppDispatch();

//   const [totalPrice, setTotalPrice] = useState(0);
//   const [shouldUpdate, setShouldUpdate] = useState(false);

//   const user: any = localStorage.getItem("token");
//   const decoded: any = decodeToken(user);
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetchCartItems();
//   }, [decoded.id, shouldUpdate]);

//   useEffect(() => {
//     calculateTotalPrice();
//   }, [CartItems]);

//   const fetchCartItems = () => {
//     dispatch({
//       type: actionCart.GET_CART,
//       id: decoded.id,
//     });
//   };

//   const calculateTotalPrice = () => {
//     if (!CartItems || CartItems.length === 0) {
//       setTotalPrice(0);
//       return;
//     }
  
//     const price = CartItems.reduce(
//       (total, item) => total + (item.Product.price * item.quantity),
//       0
//     );
//     setTotalPrice(price);
//   };
//   const orderProduct = useAppSelector(orderItems);
//   const dispatch=useAppDispatch()
//   const user: any = localStorage.getItem("token");
//   const decoded: any = decodeToken(user);
//   useEffect(() => {
//      dispatch ({
//         type: actionOrder.GET_ORDER,
//         user_id: decoded.id,
//       });
//   },[decoded.id, CartItems]) 

//   const incrementCount = (id: number) => {
//     setShouldUpdate(!shouldUpdate);
//     dispatch({
//       type: actionCart.INCREMENT,
//       payload: {
//         ProductId: id,
//         userId: decoded.id
//       }
//     });
//   };

//   const makePayment = (token:any) => {
   
//     dispatch({type:actionOrder.PAYMENT,
//       payload:{token,userId:decoded.id},navigate})
 
//    }

//   const decrementCount = (id: number) => {
//     setShouldUpdate(!shouldUpdate);
//     dispatch({
//       type: actionCart.DECREMENT,
//       payload: {
//         ProductId: id,
//         userId: decoded.id
//       }
//     });
//   };
//   const RemoveItem = (id: number) => {
//     setShouldUpdate(!shouldUpdate);
//     dispatch({
//       type: actionCart. DELETE_CART,
//       payload: {
//         ProductId: id,
//         userId: decoded.id
//       }
//     });
//   };
//   return (
//     <>
//       <section className='cart-items'>
//         <div className='container d_flex'>
  

//           <div className='cart-details'>
//             {CartItems.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            
//             {CartItems.map((item) => {
//               const productQty = item.price * item.qty

//               return (
//                 <div className='cart-list product d_flex' key={item.id}>
//                   <div className='img'>
//                     <img src={item.cover} alt='' />
//                   </div>
//                   <div className='cart-details'>
//                     <h3>{item.name}</h3>
//                     <h4>
//                       ${item.price}.00 * {item.qty}
//                       <span>${productQty}.00</span>
//                     </h4>
//                   </div>
//                   <div className='cart-items-function'>
//                     <div className='removeCart'>
//                       <button className='removeCart'>
//                         <i className='fa-solid fa-xmark'></i>
//                       </button>
//                     </div>
                
//                     <div className='cartControl d_flex'>
//                       <button className='incCart' onClick={() => addToCart(item)}>
//                         <i className='fa-solid fa-plus'></i>
//                       </button>
//                       <button className='desCart' onClick={() => decreaseQty(item)}>
//                         <i className='fa-solid fa-minus'></i>
//                       </button>
//                     </div>
//                   </div>

//                   <div className='cart-item-price'></div>
//                 </div>
//               )
//             })}
//           </div>

//           <div className='cart-total product'>
//             <h2>Cart Summary</h2>
//             <div className=' d_flex'>
//               <h4>Total Price :</h4>
//               <h3>${totalPrice}.00</h3>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default CartPage

