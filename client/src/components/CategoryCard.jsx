import React from 'react';
import { Link } from "react-router-dom";

export default function CategoryCard(props) {

    const category = props.category;

    let name = 'загрузка';
    let id = '';

    if (category !== null) {
        name = category.name
        id = category.id
    }

    return (
        <div className="col" >
            <Link to={'/category/' + id}>
                <div className="card h-100 border-0">
                    <img src='/img/po.jpg' className="card-img-top p-4" alt="S" />
                    <div className="card-footer text-center">
                        <h5>{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}
