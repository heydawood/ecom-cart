import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux';
import './style.css'

const Header = () => {

    const getData = useSelector((state)=>state.cartReducer.carts)
    //console.log(getData)

    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid ">
                <Link className="navbar-brand header" to="/">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </div>
                </div>
                <CartIcon/>

            </div>
        </nav>
    )
}

export default Header
