import initialState from "../initialState";

export default function categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_CATEGORIES_ALL':
            return action.categories;


            default:
                return state;
    }
}