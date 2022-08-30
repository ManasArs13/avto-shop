import axios from "axios";

export const getCategories = (dispatch) => {
            axios.get('http://avto-shop/api/categories')
                .then(res => dispatch(getCategoriesSucces(res.data)))
                .catch(err => console.log(err))
}

    export const getCategoriesSucces = (response) => {
        return {
            type: 'GET_CATEGORIES_ALL',
            categories: response,
        }
    }