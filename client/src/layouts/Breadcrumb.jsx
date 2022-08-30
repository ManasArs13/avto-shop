import React from "react";
import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from 'react-redux';

export default function Breadcrumb() {
  //  const all = useSelector((state) => state)
  //      console.log(all)

    return (
        <div className="container">
         <div className="row border-bottom justify-content-center pt-2">
            <nav aria-label="breadcrumb" className="w-50">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Главная</Link></li>
                    <li className="breadcrumb-item"><Link to="/product">Библиотека</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Библиотека</Link></li>
                </ol>
            </nav>
         </div>
        </div>
    )
}