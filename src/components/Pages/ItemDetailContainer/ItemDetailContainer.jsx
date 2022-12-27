import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
//import {gfetch} from '../../../helpers/gFetch'
import { Audio } from 'react-loader-spinner'
import './ItemDetailContainer.scss'



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const {productId} = useParams()

    const db = getFirestore()
    const queryDoc = doc(db, 'games', productId)
    useEffect(() =>{
        getDoc(queryDoc)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .finally(() => setLoading(false))
    },[])

    console.log("products", product)

    /*
    useEffect(() => {

            gfetch()
            .then(data => setProduct(data.find(prod => prod.id == productId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))           

    })
    */


    return (
        <div className="detail-container">
            { 
                    loading 
                
                ? 
                
                    <div className="audio-container">
                        <Audio
                            height="180"
                            width="180"
                            radius="9"
                            color="black"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        /> 
                    </div>
                
                : (<ItemDetail key={product.id} product={product}/>)
            }
            <div>
                <ItemCount />
            </div>
        </div>
    )
}