import React from "react";
// import { useParams } from 'react-router-dom';
import CategoryCard from "../components/CategoryCard";
// import { useSelector, useDispatch } from "react-redux";
// import { getProduct } from "../store/actions/productActions";

export default function Wishlist () {

    let isCategories = <CategoryCard category={null}/>
    let wishlist = localStorage.getItem('wishlist')
    let wish = wishlist.split(', ')
    console.log(wish)


    
    return (
        <div className="container min-vh-70 mt-3 mb-5">
        <div className="row text-black justify-content-center">
            <div className="col-10">
                <h1>ИЗБРАННЫЕ ТОВАРЫ</h1>
            </div>
        </div>
        <div className="row text-black">
            <div className="col-12">
                <div className="row row-cols-2 row-cols-md-4 justify-content-center g-3 m-1">
                {isCategories}
                </div>
            </div>
        </div>
    </div>
    )
}