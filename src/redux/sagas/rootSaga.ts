import { takeEvery } from "redux-saga/effects";
import { actionBrand, actionCart, actionCategory, actionGender, actionMovement, actionOrder, actionProducts, actionUser } from "./sagaActions";
import { getProductsSaga, getSingleProductSaga } from "./handlers/productsSaga";
import { addUserSaga, loginUserSaga } from "./handlers/userSaga";
import { addCartSaga, decremCartSaga, deleteCartSaga, getCartSaga, incremCartSaga } from "./handlers/cartSaga";
import { addOrderSaga, getOrderSaga } from "./handlers/orderSaga";
import { addCategorySaga, getCategorySaga } from "./handlers/categorySaga";
import { getMovementSaga } from "./handlers/movementSaga";
import { getBrandSaga } from "./handlers/brandSaga";
import { getGenderSaga } from "./handlers/genderSaga";

export default function* watchSaga() {
  yield takeEvery(actionProducts.GET_PRODUCTS, getProductsSaga);
  yield takeEvery(actionUser.ADD_USER, addUserSaga);
  yield takeEvery(actionUser.LOGIN_USER,loginUserSaga);
  yield takeEvery(actionCart.ADD_CART,addCartSaga);
  yield takeEvery(actionCart.GET_CART,getCartSaga),
  yield takeEvery(actionCart.INCREMENT,incremCartSaga),
  yield takeEvery(actionCart.DECREMENT,decremCartSaga),
  yield takeEvery(actionCart.DELETE_CART,deleteCartSaga),
  yield takeEvery(actionOrder.PAYMENT,addOrderSaga),
  yield takeEvery(actionCategory.GET_CATEGORY,getCategorySaga)
  yield takeEvery (actionCategory.ADD_CATEGORY,addCategorySaga)
  yield takeEvery( actionOrder.GET_ORDER,getOrderSaga)
  yield takeEvery (actionMovement.GET_MOVEMENT,getMovementSaga)
  yield takeEvery (actionBrand.GET_BRAND,getBrandSaga)
  yield takeEvery(actionGender.GET_GENDER,getGenderSaga)
  yield takeEvery(actionProducts.GET_ONEPRODUCT,getSingleProductSaga)
}
