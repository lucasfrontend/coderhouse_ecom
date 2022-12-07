import React from "react";
import './CartWidget.scss'

export const CartWidget = () => {

    return (
        <div className="carrito">
            <div className="cart">
                <svg viewBox="0 0 36 26">
                    <path d="M1 2.5H6L10 18.5H25.5L28.5 7.5L7.5 7.5" className="first" />
                    <path d="M11.5 25C12.6046 25 13.5 24.1046 13.5 23C13.5 21.8954 12.6046 21 11.5 21C10.3954 21 9.5 21.8954 9.5 23C9.5 24.1046 10.3954 25 11.5 25Z" class="wheel" />
                    <path d="M24 25C25.1046 25 26 24.1046 26 23C26 21.8954 25.1046 21 24 21C22.8954 21 22 21.8954 22 23C22 24.1046 22.8954 25 24 25Z" class="wheel" />
                    <path d="M14.5 13.5L16.5 15.5L21.5 10.5" class="tick" />
                </svg>
            </div>
            <div className="number">3</div>
        </div>
    )
}