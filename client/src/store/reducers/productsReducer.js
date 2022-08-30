import initialState from "../initialState";

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS_ALL':
            return action.products;
        case 'GET_PRODUCTS_CATEGORY_ID':
            return action.products;


        default:
            return state;
    }
}