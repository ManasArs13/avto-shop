import React from "react";
// import { useParams } from 'react-router-dom';

// import { useSelector, useDispatch } from "react-redux";
// import { getProduct } from "../store/actions/productActions";

export default function Basket() {

    return (
        <div className="container min-vh-70 mt-3 mb-5">
            <div className="row text-black justify-content-center">
                <div className="col-10">
                    <h1>КОРЗИНА</h1>
                </div>
            </div>
            <div className="row text-black">
                <div className="col-8">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/img/po.jpg" className="card-img-top p-4"
                                    alt="logo"
                                   
                                    height="100" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">333333 p</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/img/po.jpg" className="card-img-top p-4"
                                    alt="logo"
                                   
                                    height="100" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">333333 p</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                
                <div className="col-4">
                <table className="table">
  
  <tbody>
    <tr>
      <th scope="row">Всего</th>
      <td>500</td>
      
    </tr>
    <tr>
      <th scope="row">Товаров</th>
      <td>3</td>
     
    </tr>

  </tbody>
</table>



                </div>

            </div>

        </div>
    )
}