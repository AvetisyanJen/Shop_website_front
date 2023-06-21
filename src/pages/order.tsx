// import { useAppDispatch, useAppSelector } from '../hooks/hook';
// import React, { useEffect } from "react";
// import { decodeToken } from "react-jwt";
// import { orderItems } from '../redux/features/orderSlice';
// import { actionOrder } from '../redux/sagas/sagaActions';


//  const Order:React.FC=()=> {
//     const orderProduct = useAppSelector(orderItems);
//     const dispatch=useAppDispatch()
//     const user: any = localStorage.getItem("token");
//     const decoded: any = decodeToken(user);
//     useEffect(() => {
//        dispatch ({
//           type: actionOrder.GET_ORDER,
//           user_id: decoded.id,
//         });
//     },[decoded.id]) 
// console.log(orderProduct)
//   return (
//     <div>order</div>
//   )
// }
// export default Order
