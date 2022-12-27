import React, { useState } from 'react'
import { useCartContext } from '../../../context/CartContext'
import { useWishlistContext } from "../../../context/WishlistContext";
import { PlatformSelection } from './PlatformSelection'
import { StoreSelection } from "./StoreSelection";
import { ItemCount } from './ItemCount'
import './ItemDetail.scss'

export const ItemDetail = ({ product }) =>{
    const {addItem} = useCartContext()
    const {addItemWl} = useWishlistContext()
    const [platform, setPlatform] = useState("")
    const [store, setStore] = useState("")
    const [isCount ,setIsCount] = useState(true)
    
    
    const addToCart = (quant) => {
        let item = {...product, quant, platform, store}
        addItem(item)
        setIsCount('cart')
    }

    const addToWishlist = (quant) => {
        let item = {...product, quant, platform, store}
        addItemWl(item)
        setIsCount('wishlist')
    }

    return (
        <div className="detail-card">
            <div className="card-body">
                <img className="img" src={product.img} alt="..." />
                <h2 className="item-detail-name">{product.name}</h2>
                <h3>{product.description}</h3>
            </div>
            <div className="">
                    {(product.sale > 0) ?
                        <>
                            <div>
                                <span className="">${product.price}</span>
                                <span className="">${(product.price)-((product.price)*(product.sale))/100}</span>
                            </div>
                            <span className="">{product.sale}%</span>
                        </>
                        :
                        <div>
                            <span className="">${product.price}</span>
                        </div>
                    }
                </div>
            <button>Add to cart</button>
            <div className="item-detail-buy">
                {
                    isCount === true ?
                        <>
                            <PlatformSelection product={product} handlePlatformSelection={setPlatform}/>
                            <StoreSelection product={product} platform={platform} handleStoreSelection={setStore}/>
                            <ItemCount platform={platform} store={store} addToCart={addToCart} stock={product.stock} addToWishlist={addToWishlist} init={1}/>
                        </>
                    :
                    <div className="item-detail-btn-group">
                        <Link to={isCount === 'cart' && "/cart" || isCount === 'wishlist' && "/wishlist"}>
                            <button className="btn item-btn">{isCount === 'cart' && "Terminar compra" || isCount === 'wishlist' && "Ir a la wishlist"}</button>
                        </Link>
                        <Link to="/">
                            <button className="btn item-btn">Ir a inicio</button>
                        </Link>
                    </div>
                }
            </div>
            <div>

{/*
                <ItemCount
                    stock={11}
                    initial={1}
                    onAdd={onAdd}    
                />

*/}
            </div>
        </div>
        
    )
}