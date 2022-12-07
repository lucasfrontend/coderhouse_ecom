import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.scss'

export const ItemDetail = ({product}) =>{


    return (
        <div className="item-detail">
            <div className="item-detail-info">
                <img className="item-detail-img" src={product.img} alt="..." />
                <h2 className="item-detail-name">{product.name}</h2>
                <h3>{product.description}</h3>
            </div>
        </div>
    )
}