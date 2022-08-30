import axios from "axios";

export const getProducts = (dispatch) => {
            axios.get('http://avto-shop/api/products')
                .then(resp => dispatch(getProductsSucces(resp.data)))
                .catch(err => console.log(err))
}
    export const getProductsSucces = (response) => {
        return {
            type: 'GET_PRODUCTS_ALL',
            products: response,
        };
    }


export const getProductsWhereCategoryId = (dispatch, id) => {
    axios.get('http://avto-shop/api/category/' + id)
        .then(resp => dispatch(getProductsWhereCategoryIdSucces(resp.data)))
        .catch(err => console.log(err))
}
    export const getProductsWhereCategoryIdSucces = (response) => {
       console.log(response)
        return {
            type: 'GET_PRODUCTS_CATEGORY_ID',
            products: response[1],
        };
    }