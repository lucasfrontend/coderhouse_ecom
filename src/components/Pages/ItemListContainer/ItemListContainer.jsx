import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "./ItemCard";
import { gfetch } from '../../../helpers/gFetch'
import { Audio } from 'react-loader-spinner'
import "./ItemListContainer.scss"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        if(categoryId) {
            gfetch()
            .then(data => setProducts(data.filter(prod => prod.category === categoryId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))            
        } else {
            gfetch()
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }
    }, [categoryId])
    
    
    return (
        <>        
        <div className="container">
            <div className="flex">
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
                    : 
                        products.map(product => (<ItemCard key={product.id} product={product}/>))
                }
            </div>
        </div>
        </>
    )
}