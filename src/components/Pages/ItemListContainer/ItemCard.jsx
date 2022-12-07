import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.scss"

export const ItemCard = ({product}) => {

    return (
        <>
            <div className="card">
                <img src={product.img} alt=""/>
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <p>{product.description}
                    </p>
                </div>
                <div className="button-link">
                    <Link to={`/detail/${product.id}`}>
                        <button className="btn card-btn">Ver detalle</button>
                    </Link>

                </div>
            </div>
        </>
    )
}