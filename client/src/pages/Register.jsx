import React from "react";


export default function Register() {


    return (
        <>
            <div className="conrainer min-vh-70">
                <div className="mt-5 text-center">
                    <img className="d-block mx-auto mb-4"
                        src='/img/logo-white-min.png'
                        alt="logo"
                        width="80"
                        height="56" />
                    <h3>РЕГИСТРАЦИЯ</h3>
                </div>
                <div className="row m-0 mb-2 g-3 justify-content-center">
                    <div className="col-4">
                    <form>
                        <div className="col-12">
                        <div className="row m-2">
                            <div className="col-2"><label htmlFor="name" className="form-label">Name</label></div>
                            <div className="col-10"><input type="name" className="form-control" name="name" placeholder="name"></input></div>
                        </div>   
                            
                        <div className="row m-2">
                            <div className="col-2"><label htmlFor="name" className="form-label">Email</label></div>
                            <div className="col-10"><input type="name" className="form-control" name="email" placeholder="your@example.com"></input></div>
                        </div> 
                        
                        <div className="row m-2">
                            <div className="col-2"><label htmlFor="Password" className="form-label">Password</label></div>
                            <div className="col-10"><input type="password" className="form-control" name="password" placeholder="********"></input></div>
                        </div> 
                        </div>
                        <div className="row m-2">
                        <input type="submit" value="зарегистрировать" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>


    )


}