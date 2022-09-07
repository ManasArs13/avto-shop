import axios from "axios";

export const getProducts = (dispatch) => {
            axios.get('http://avto-shop/api/products')
                .then(resp => dispatch(getProductsSucces(resp.data)))
                .catch(err => console.log(err))
}
    export const getProductsSucces = (response) => {
        return {
            type: 'GET_PRODUCTS_ALL',
            products: ['ВСЕ ТОВАРЫ', 'all', response]
        };
    }


export const getProductsWhereCategoryId = (dispatch, id) => {
    axios.get('http://avto-shop/api/category/' + id)
        .then(resp => dispatch(getProductsWhereCategoryIdSucces(resp.data)))
        .catch(err => console.log(err))
}
    export const getProductsWhereCategoryIdSucces = (response) => {
     
        return {
            type: 'GET_PRODUCTS_CATEGORY_ID',
            products: response,
        };
    }