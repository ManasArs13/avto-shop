import React from 'react'
import { Link } from "react-router-dom";
//import { useDispatch } from 'react-redux';
//import { getProductsWhereCategoryId } from '../store/actions/productsActions.js'

export default function CategoryBurron (props) {

    const category = props.category;
   // const dispatch = useDispatch()

    let name = 'загрузка'
    let id = ''

    if (category !== null) {
        name = category.name
        id = category.id
    }

    return (
        <Link to={'/category/' + id}>
        <button type="button" className="btn btn-outline-dark">{name}</button>
        </Link>
    )

}