import React from "react";
import { Link } from "react-router-dom";;


export default function Footer() {

    return (
        <div className="container-fluid border-top border-dark">
            <div className="row justify-content-md-center p-3" id="footer">
                <div className="col text-center">
                    <Link className="navbar-brand text-light" to='/home/' >О нас</Link>
                </div>
                <div className="col text-center">
                    <Link className="navbar-brand " to='/home/' >
                        <img src='/img/logo-black.png' alt="logo" width="250" height="40" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link className="navbar-brand text-light" to='/home/' >Админ-панель</Link>
                </div>
            </div>
        </div>
    )
}