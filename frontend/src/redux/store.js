import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools }from 'redux-devtools-extension'

import {cartReduceres}from './reduceres/cartRuceres'
import { getProductDetails ,getProductsReducer} from './reduceres/productReducer'

const reducer = combineReducers({
    cart:cartReduceres,
    getProducts:getProductsReducer,
    getProductDetails:getProductDetails
})

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
    cart: {
      cartItems: cartItemsInLocalStorage,
    },
};
  
const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store