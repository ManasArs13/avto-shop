import React from "react";

 import { useSelector, useDispatch } from 'react-redux';

 import { getCategories } from "../store/actions/categoriesAction.js";


import CategoryCard from "../components/CategoryCard";


export default function Home() {
    
    const dispatch = useDispatch()
    const categories = useSelector((state)=> state.categories)
  
    let isCategories = <CategoryCard category={null}/>
    
    if (categories === null) {
        getCategories(dispatch)
    } else {
        isCategories = categories.map((category) => <CategoryCard category={category} key={category.id}/>)
    }


    return (
        <>
            <div className="container min-vh-60 mt-3 mb-5">
                <div className="row text-black justify-content-center">
                    <div className="col-10">
                        <h1>ВСЕ КАТЕГОРИИ</h1>
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
        </>)
}