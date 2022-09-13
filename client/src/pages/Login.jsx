import React from "react";
import axios from "axios";

export default function Login() {


    const login = (email, password) => {
        axios.defaults.withCredentials = true

        axios.get('http://avto-shop/sanctum/csrf-cookie', { withCredentials: true })
            .then(response => {
                console.log(response)
                axios.post('http://avto-shop/api/login', {
                    "email": "test@example.com",
                    "password": "password"
                }).then(function (response) {
                    console.log(response);
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }).catch(err => console.log(err))

        /*
        axios.post('http://avto-shop/api/login', {
                "email": "test@example.com",
                "password": "password"
            }).then(function(response) {
                console.log(response);        
              })
              .catch(function (error) {
                console.log(error);
              });
        */
        /*
        
            axios.get('http://avto-shop/sanctum/csrf-cookie').then((res)=> {
                console.log(res)
            axios.post('http://avto-shop/api/login', {
                "email": "test@example.com",
                "password": "password"
            }, {headers: { 'Accept': 'application/json' }}).then(function(response) {
                console.log(response);        
              })
              .catch(function (error) {
                console.log(error);
              });
        */
        //  }) .catch(function (error) {
        //   console.log(error);
        //  });

    }




    return (
        <>
            <div className="conrainer min-vh-70">
                <div className="mt-5 text-center">
                    <img className="d-block mx-auto mb-2"
                        src='/img/logo-white-min.png'
                        alt="logo"
                        width="80"
                        height="56" />
                    <h3>Войти</h3>
                </div>
                <div className="row m-0 mb-2 g-3 justify-content-center">
                    <div className="col-4">
                        {/* <form onSubmit={() => login('test@example.com', "password")} > */}
                        <div className="col-12">

                            <div className="row m-2">
                                <div className="col-2"><label htmlFor="name" className="form-label">Email</label></div>
                                <div className="col-10"><input type="name" className="form-control" name="email" placeholder="your@example.com"></input></div>
                            </div>

                            <div className="row m-2">
                                <div className="col-2"><label htmlFor="Password" className="form-label">Password</label></div>
                                <div className="col-10"><input type="password" className="form-control" name="password" placeholder="********"></input></div>
                            </div>
                            <div className="row m-2">
                                <input type="submit" onClick={() => login('test@example.com', "password")} value="войти" />
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>


    )


}