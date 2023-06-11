import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector, useLocalStorage } from '../hooks/hook';
import { cartItems } from '../redux/features/cartSlice';
import { actionCart, actionOrder } from '../redux/sagas/sagaActions';
import { decodeToken } from "react-jwt";
import StripeCheckout from "react-stripe-checkout";
import '../App.css';
import { incremCartSaga } from '../redux/sagas/handlers/cartSaga';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const RootContainer = styled('div')({
  maxWidth: 600,
  margin: '0 auto',
  padding: 16,
});

const ItemContainer = styled(ListItem)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Cart: React.FC = () => {
  const CartItems = useAppSelector(cartItems);
  const dispatch = useAppDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const user: any = localStorage.getItem("token");
  const decoded: any = decodeToken(user);

  useEffect(() => {
    fetchCartItems();
  }, [decoded.id, shouldUpdate]);

  useEffect(() => {
    calculateTotalPrice();
  }, [CartItems]);

  const fetchCartItems = () => {
    dispatch({
      type: actionCart.GET_CART,
      id: decoded.id,
    });
  };

  const calculateTotalPrice = () => {
    if (!CartItems || CartItems.length === 0) {
      setTotalPrice(0);
      return;
    }
  
    const price = CartItems.reduce(
      (total, item) => total + (item.Product.price * item.quantity),
      0
    );
    setTotalPrice(price);
  };
  

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
  const makePayment = (token:any) => {

   dispatch({type:actionOrder.PAYMENT,payload:{token,userId:decoded.id}})

  }

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
    setShouldUpdate(!shouldUpdate);
    dispatch({
      type: actionCart. DELETE_CART,
      payload: {
        ProductId: id,
        userId: decoded.id
      }
    });
  };
  return (
    <RootContainer className='root-container'>
      <div>
        <Typography variant="h5" gutterBottom>
          Shopping Cart
        </Typography>
        {CartItems.length === 0 ? (<div><Typography variant="body1" color="textSecondary">
      Your shopping cart is empty. Go to the main page 
      to select products or use the search function to find what you need.
    </Typography>
    <Link to="/"><Button
     variant="contained"
     color="secondary"
     style={{
       background: 'linear-gradient(to right, #4D1175, #4D1175)',
       borderRadius: '5px',
       padding: '10px 20px',
       minWidth: '100px',
       color: 'white',
       fontWeight: 'bold'}}>
      Back to homepage
    </Button></Link>
    </div>
        ) : (
          <>
            <List
              style={{
                marginRight: '50px',
                marginLeft: '-10px',
                padding: '10px',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '10px',
              }}
            >
              {CartItems.map((cartItem,index) => (
                <ItemContainer
                key={nanoid()}
                style={{
                  margin: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                  <img
                    src={'http://localhost:3333/images/' + cartItem?.Product?.Photos[0]?.url}
                    style={{ width: '130px', height: '120px' }}
                  />
                  <ListItemText primary={cartItem?.Product?.name} secondary={`$${cartItem?.Product?.price}`} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Button
                      aria-label="reduce"
                      style={{
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        padding: '3px',
                      }}
                      onClick={() => decrementCount(cartItem.ProductId)}
                    >
                      -
                    </Button>
                    <div style={{ color: 'black' }}>{cartItem.quantity}</div>
                    <Button
                      aria-label="increase"
                      style={{
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        padding: '3px',
                      }}
                      onClick={() => incrementCount(cartItem.ProductId)}
                    >
                      +
                    </Button>
                    <IconButton edge="end" aria-label="delete" sx={{ marginLeft: '50px' }} 
                                 onClick={() => RemoveItem(cartItem.ProductId)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </ItemContainer>
              ))}
            </List>

            <div
              style={{
                marginTop: '20px',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '10px',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Total Quantity: {CartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Total Price: ${totalPrice}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          
                  <StripeCheckout
              stripeKey="pk_test_51KjlUTEwie5RP3GFlb1RGB6Re8hesKixRU6ofIHQ6IcifCzvGY8KW7bxzNy89bfzgxQHf69Sx5U0EZSJ92Z0KwZm00AjClehJP"
               token={makePayment}
              name="Buy products"
              amount={totalPrice * 100}
            
             
            />
                {/* style={{
                background: 'linear-gradient(to right, #4D1175, #4D1175)',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    minWidth: '100px',
                    color: 'white',
                    fontWeight: 'bold',
              }} */}
              
              </div>
            </div>
          </>
        )}
      </div>
    </RootContainer>
  );
};

export default Cart;
          