import React from "react";
import { CartContextProvider }  from './context/CartContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Pages/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import { CartPage } from "./components/Pages/CartPage/CartPage";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import "./App.css";
import { WishlistContextProvider } from "./context/WishlistContext";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <WishlistContextProvider>
                    <Navbar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer/>}/>
                            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                            {/*
                            
                            <Route path="/category/:categoryId/:storeId" element={<ItemListContainer/>}/>
                            */}
                            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
                            <Route path="/cart" element={<CartPage/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    <Footer />
                </WishlistContextProvider>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;