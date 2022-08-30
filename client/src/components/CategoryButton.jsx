import React from 'react'
import { useDispatch } from 'react-redux';
import { getProductsWhereCategoryId } from '../store/actions/productsActions.js'

export default function CategoryBurron (props) {

    const category = props.category;
    const dispatch = useDispatch()

    let name = 'загрузка'
    let id = ''

    if (category !== null) {
        name = category.name
        id = category.id
    }

    return (
        <button type="button" onClick={() => getProductsWhereCategoryId(dispatch, id)} className="btn btn-outline-dark">{name}</button>
    )

}