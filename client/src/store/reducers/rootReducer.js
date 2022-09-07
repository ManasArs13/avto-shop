import { combineReducers } from 'redux'

import categoriesReducer from './categoriesReducer.js';
import productReducer from './productReducer.js';
import productsReducer from './productsReducer.js';


export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    product: productReducer,
});

