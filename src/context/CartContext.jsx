import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const getCartList = () => {
    const storedCartList = localStorage.getItem('cartList')
    return storedCartList ? JSON.parse(storedCartList) : []
}

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState(getCartList)
    const [cartQuant, setCartQuant] = useState(0)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList))
        getCartQuant()
        getCartTotalPrice()
    }, [cartList])

    const getCartQuant = () => {
        setCartQuant(cartList.reduce((acc, el) => acc + el.quant, 0))
    }

    const getCartTotalPrice = () => {
        setCartTotalPrice(cartList.reduce((acc, el) => 
        acc + (((el.price)-(el.price)*(el.sale)/100)* el.quant), 0))
    }

    const addToCart = (product) => {
        if (isInCart(product)) {
            let existingProd = cartList.find((prod) =>{
                return (
                    (prod.id === product.id) && 
                    (prod.platform === product.platform) &&
                    (prod.store === product.store)
                    )
            })
            existingProd && (existingProd.quant += product.quant)
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product])
        }
    }

    const emptyCart = () => {
        setCartList([])
        setCartQuant(0)
    }

    const isInCart = (product) => {
        return cartList.some(prod => (
            (prod.id === product.id) && 
            (prod.platform === product.platform) &&
            (prod.store === product.store)
            ))
    }

    const removeItem = (index) => {
        setCartList(cartList.filter(item => cartList.indexOf(item) !== index))
    }

    return(
        <CartContext.Provider value={{
            cartList,
            cartTotalPrice,
            cartQuant,
            addToCart,
            emptyCart,
            removeItem,
            setCartList

        }}>
            { children }
        </CartContext.Provider>
    )
}