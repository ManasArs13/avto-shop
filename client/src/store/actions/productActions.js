import axios from "axios";

export const getProduct = (dispatch, id) => {
            axios.get('http://avto-shop/api/product/' + id)
            .then(resp => dispatch(getProductSucces(resp.data)))
            .catch(err => console.log(err))
   }

export const getProductSucces = (response) => {
    return {
        type: 'GET_PRODUCT_ID',
        product: response,
    };
}
