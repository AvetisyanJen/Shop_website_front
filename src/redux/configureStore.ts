import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import watchSaga from "./sagas/rootSaga";

import ProductReducer from "./features/ProductSlice";
import CartReducer from "./features/cartSlice";
import UserReducer from "./features/userSlice";
import CategoryReducer from "./features/categorySlice"
import OrderReducer from "./features/orderSlice"
import movementReducer from "./features/movementSlice";
import brandReducer from "./features/brandSlice";
import genderReducer from "./features/genderSlice";



const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:{
    product:ProductReducer,
    user:UserReducer,
    cart:CartReducer,
    category:CategoryReducer,
    order:OrderReducer,
    movement:movementReducer,
    brand:brandReducer,
    gender:genderReducer
    },
    
    middleware:[sagaMiddleware]
})
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

sagaMiddleware.run(watchSaga);
export default store;
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch