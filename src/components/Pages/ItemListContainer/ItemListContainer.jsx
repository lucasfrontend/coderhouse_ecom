import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "./ItemCard";
import { gfetch } from '../../../helpers/gFetch'
import { Audio } from 'react-loader-spinner'
import { collection, getDocs, getFirestore} from "firebase/firestore";
import "./ItemListContainer.scss"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    const {storeId} = useParams()

    const filterCategory = (productsData) => {
        return productsData.filter(product => product.platforms.find(plat => {
            return plat.platform.slug.includes(categoryId)
        }))
    }

    const filterStore = (productsData) => {
        return productsData.filter(product => product.stores.find(sto => {
            return sto.store.slug.includes(storeId)
        }))
        
    }

    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    useEffect(() =>{
        getDocs(queryCollection)
        .then((res) => {
                if (categoryId) {
                    if (storeId) { 
                        setProducts(filterStore(filterCategory(res.docs.map(prod => ({id: prod.id, ...prod.data()})))))
                    } else { 
                        setProducts(filterCategory(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                    }
                } else { 
                    setProducts(res.docs.map(prod=> ({id: prod.id, ...prod.data()})))
                }
            }
        )
        .finally(() => setLoading(false))
    },[categoryId, storeId])
    
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