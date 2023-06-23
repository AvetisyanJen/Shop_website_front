import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { actionOrder } from '../../redux/sagas/sagaActions';
import { orderItems } from '../../redux/features/orderSlice';
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import "./order.css"; 
import "../products/products.css"

const Order: React.FC = () => {
  const orderProduct = useAppSelector(orderItems);
  const dispatch = useAppDispatch();
  const user: any = localStorage.getItem("token");
  const decoded: any = decodeToken(user);

  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    dispatch({
      type: actionOrder.GET_ORDER,
      user_id: decoded.id,
    });
  }, [decoded.id]);

  useEffect(() => {
    if (orderProduct.length > 0) {
      setLoading(false); // Set loading to false when orderProduct is available
    }
  }, [orderProduct]);

  const formatDateTime = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="order-container">
      <h1 className="order-heading">Order History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        orderProduct.map((order: any) => (
          <div key={order.id} className="order-item">
            <h2 className="order-id">Order ID: {order.id}</h2>
            <p className="order-total">Total: ${order.total}.00</p>
            <p className="order-payment-date">
              Payment Date: {formatDateTime(order.createdAt)}
            </p>
            <div className="order-products-list">
              {order.OrderProducts.map((product: any) => (
                <div key={product.id} className="order-product">
                  <div className="orderDiv">
                    <div className='product mtop'>
                      <div className='img'>
                        {product.Product.Photos && (
                          <img
                            src={"http://localhost:3333/images/" + product.Product?.Photos[0]?.url}
                            style={{ width: '200px', height: '200px' }}
                            alt={product.name}
                          />
                        )}
                      </div>
                      <div className='product-details'>
                        <h3>{product.Product.name}</h3>
                        <div className='rate'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                        </div>
                        <div className='price'>
                          <h5>${product.Product.price}.00 </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      
    </div>)
}
export default Order 



