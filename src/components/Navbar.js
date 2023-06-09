import React from 'react'


export const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">SewItSeems 🧵</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Tshirts">T-Shirts<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Pants">Pants<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Shorts">Shorts<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Shoes">Shoes<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <a type="button" className="btn btn-outline-light me-2" href="/Login">Login</a>
                    <a type="button" className="btn btn-outline-light me-2" href="/Signup">Sign Up</a>
                    </form>
                </div>
            </nav>
            <div className="d-flex justify-content-center">
                {/* <a type="button" href="/Checkout" className="btn btn-success btn-lg checkout-btn">CHECKOUT ITEM</a> */}
                <a type="button" href="/Cart" className="btn btn-success btn-lg checkout-btn">MY CART</a>
            </div>
            
        </div>
        
    )
}