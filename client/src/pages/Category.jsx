import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {    getProducts, 
            getProductsWhereCategoryId } from '../store/actions/productsActions.js'
import { getCategoriesWithProducts } from "../store/actions/categoriesAction.js";
//import Navi from "@/Layouts/navi";

import ProductCard from "../components/ProductCard";
import CategoryBurron from "../components/CategoryButton";

export default function Category() {

    const param = useParams();
    
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const categories = useSelector((state)=> state.categories)
  
    let isProducts = <ProductCard product={null}/>
    let isCategories = <CategoryBurron category={null}/>
    let isTitle = 'ЗАГРУЗКА'
   
    if (products === null ) {
        getProductsWhereCategoryId(dispatch, param.id);
    } else if (!(param.id == products[1])) { // !!!решить проблему с типизацией
         getProductsWhereCategoryId(dispatch, param.id); 
           } else {
  
      isProducts = products[2].map((product) => <ProductCard product={product} key={product.id}/>)
      isTitle = products[0]
   }

    if (categories === null) {
        getCategoriesWithProducts(dispatch)

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
                            <Link to={'/category/all'}>
                            <button type="button" className="btn btn-outline-dark">все товары</button>
                            </Link>
                        </div>    
                    </div>
                    <div className="col-10">
                    <div className="row justify-content-center mt-3">
                    <div className="col-5">
                    <h1>{isTitle}</h1>
                    </div>
                    </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 m-1">    
                            {isProducts}
                        </div>
                    </div>                  
                </div>
            </div>          
        </>
    )
}