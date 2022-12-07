import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemDetail } from "./ItemDetail";
import {gfetch} from '../../../helpers/gFetch'
import './ItemDetailContainer.scss'



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams()
    console.log("productId", productId)

    useEffect(() => {
        gfetch()
        .then(data => setProduct(data.filter(prod => prod.id === productId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))  
    })

    console.log("products", products)

    return (
        <div className="detail-container">
            { loading ? <h1>Cargando</h1> : <ItemDetail product={products}/>}
            <div>
                <ItemCount />
            </div>
        </div>
    )
}