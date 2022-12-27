import { useContext, createContext, useState, useEffect } from "react";

const WishlistContext = createContext([])

export const useWishlistContext = () => useContext(WishlistContext)

const getWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist')
    return storedWishlist ? JSON.parse(storedWishlist) : []
}


export const WishlistContextProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(getWishlist)

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])

    const addItemWl = (product) => {
        if (isInWishlist(product)) {
            let existingProd = wishlist.find((prod) =>{
                return (
                    (prod.id === product.id) && 
                    (prod.platform === product.platform) &&
                    (prod.store === product.store)
                    )
            })
            existingProd && (existingProd.quant += product.quant)
            setWishlist([...wishlist])
        } else {
            setWishlist([...wishlist, product])
        }
    }

    const emptyWishlist = () => {
        setWishlist([])
    }

    const isInWishlist = (product) => {
        return wishlist.some(prod => (
            (prod.id === product.id) && 
            (prod.platform === product.platform) &&
            (prod.store === product.store)
            ))
    }

    const removeItemWl = (index) => {
        setWishlist(wishlist.filter(item => wishlist.indexOf(item) !== index))
    }

    return(
        <WishlistContext.Provider value={{wishlist, addItemWl, emptyWishlist, removeItemWl}}>
            {children}
        </WishlistContext.Provider>
    )
}