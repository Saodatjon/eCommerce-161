import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import categoriesReducer from './categoriesReducer'
import modalReducer from './modalReducer'
import productReducer from './productReducer'
import productsReducer from './productsReducer'
import userReducer from './userReducer'
import searchTitleReducer from './searchTitleReducer'

export const reducers = combineReducers({
    productsState: productsReducer,
    cartProducts: cartReducer,
    modal: modalReducer,
    categories: categoriesReducer,
    product: productReducer,
    userState: userReducer,
    searchTitle:searchTitleReducer,
})