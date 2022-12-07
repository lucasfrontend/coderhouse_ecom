import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";


import './CartPage.scss'

export const CartPage = () => {

    return (
        <>
            <div className="cart-container">
                <h2 className="cart-title">Carrito</h2>
                <div className="cart-detail">
                    <div className="cart-items">             
                    </div>
                </div>
            </div>
        </>
    )
}