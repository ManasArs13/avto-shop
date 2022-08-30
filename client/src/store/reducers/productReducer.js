import initialState from "../initialState";

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCT_ID':
            return action.product;



        default:
            return state;
    }
}