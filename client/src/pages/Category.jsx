import React from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import {    getProducts, 
            getProductsWhereCategoryId } from '../store/actions/productsActions.js'
import { getCategories } from "../store/actions/categoriesAction.js";
//import Navi from "@/Layouts/navi";

import ProductCard from "../components/ProductCard";
import CategoryBurron from "../components/CategoryButton";

export default function Category() {

    const param = useParams();
    console.log(param)
    
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const categories = useSelector((state)=> state.categories)
    
    let isProducts = <ProductCard product={null}/>
    let isCategories = <CategoryBurron category={null}/>
   
    if (products === null) {
        getProductsWhereCategoryId(dispatch, param.id);
   } else {
      isProducts = products.map((product) => <ProductCard product={product} key={product.id}/>)
   }

    if (categories === null) {
        getCategories(dispatch)
    } else {
        isCategories = categories.map((category) => <CategoryBurron category={category} key={category.id}/>)
    }
        
    return (
        <>            
            <div className="container min-vh-70 mt-2 mb-5">           
                <div className="row text-black">
                    <div className="col-2  pt-4">
                        <div className="btn-group-vertical w-100">     
                            {isCategories}
                            <button type="button" onClick={() => getProducts(dispatch)} className="btn btn-outline-dark">все товары</button>
                        </div>    
                    </div>
                    <div className="col-10">
                        <div className="row row-cols-1 row-cols-md-3 g-4 m-1">    
                            {isProducts}
                        </div>
                    </div>                  
                </div>
            </div>          
        </>
    )
}