import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import ProductReducer from "./features/ProductSlice";

import CartReducer from "./features/cartSlice";
import watchSaga from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware()
import UserReducer from "./features/userSlice";

const store = configureStore({
    reducer:{
    product:ProductReducer,
    user:UserReducer,
    cart:CartReducer
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