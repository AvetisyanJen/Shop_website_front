import { takeEvery } from "redux-saga/effects";
import { actionCart, actionOrder, actionProducts, actionUser } from "./sagaActions";
import { getProductsSaga } from "./handlers/productsSaga";
import { addUserSaga, loginUserSaga } from "./handlers/userSaga";
import { addCartSaga, decremCartSaga, deleteCartSaga, getCartSaga, incremCartSaga } from "./handlers/cartSaga";
import { addOrderSaga } from "./handlers/orderSaga";

export default function* watchSaga() {
  yield takeEvery(actionProducts.GET_PRODUCTS, getProductsSaga);
  yield takeEvery(actionUser.ADD_USER, addUserSaga);
  yield takeEvery(actionUser.LOGIN_USER,loginUserSaga);
  yield takeEvery(actionCart.ADD_CART,addCartSaga);
  yield takeEvery(actionCart.GET_CART,getCartSaga),
  yield takeEvery(actionCart.INCREMENT,incremCartSaga),
  yield takeEvery(actionCart.DECREMENT,decremCartSaga),
  yield takeEvery(actionCart.DELETE_CART,deleteCartSaga),
  yield takeEvery(actionOrder.PAYMENT,addOrderSaga)
}
