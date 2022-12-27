import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { Ring } from '@uiball/loaders'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import './OrderForm.scss'

const generateOrderSchema = yup.object()
    .shape({
        name: yup.string().required("Debes ingresar tu nombre"),
        phone: yup.number("Debes ingresar un numero valido").positive("No se pueden usar numeros negativos").integer("No se pueden utilizar numeros con coma").required("Debes ingresar un numero valido"),
        email: yup.string().email("Debes ingresar un email valido").required("Debes ingresar un email valido"),
        confirmEmail: yup.string().oneOf([yup.ref('email'), null], "Los emails deben coincidir").required("Los emails deben coincidir")
    })

export const OrderForm = ({cartList, emptyCart, cartTotalPrice, cartQuant, handleOrderId}) => {

    const {register, handleSubmit, formState: { errors }} = useForm( {resolver: yupResolver(generateOrderSchema)});

    const db = getFirestore()
    const orders = collection(db, 'orders')
    const queryCollection = collection(db, 'games')

    const generateOrder = async (buyerData) => {
        const order = {}

        order.buyer = {
            name: buyerData.name,
            phone: buyerData.phone,
            email: buyerData.email
        }

        order.items = cartList.map(prod => {
            let price = prod.price - (prod.price * prod.sale / 100)
            const {id, name, quant, platform, store} = prod
            return {id, name, quant, platform, store, price}
        })

        order.total = cartTotalPrice

        order.date = new Date().toLocaleDateString()

        const queryUpdateStock = query(queryCollection, where(documentId(), 'in', cartList.map(item => item.id)))

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: (res.data().stock - cartList.find(item => item.id === res.id).quant)
        })))
        batch.commit()

        await addDoc(orders, order)
        .then(resp => handleOrderId(resp.id))
        .finally(emptyCart)
    }

    const onSubmit = (data) => {
        generateOrder(data)
    }

    return (
        <div>
            <h2 className='form-title'>Formulario de compra</h2>
            <div className='form-detail'>
                <form className='form-buy' onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <input className='form-buy-input' type="text" {...register("name")} placeholder="Nombre completo"/>
                        {errors.name && <p className='form-error'>{errors.name.message}</p>}
                    </div>
                    <div>
                        <input className='form-buy-input' type="tel" {...register("phone")} placeholder="Telefono de contacto"/>
                        {errors.phone && <p className='form-error'>{errors.phone.message}</p>}
                    </div>
                    <div>
                        <input className='form-buy-input' type="email" {...register("email")} placeholder="Email"/>
                        {errors.email && <p className='form-error'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <input className='form-buy-input' type="email" {...register("confirmEmail")} placeholder="Repetir email"/>
                        {errors.confirmEmail && <p className='form-error'>{errors.confirmEmail.message}</p>}
                    </div>
                    <button className="btn cart-btn" type="submit">Finalizar compra</button>
                </form>
                <div className="cart-info">
                    <h3 className="cart-info-title">Subtotal</h3>
                    <div className="cart-info-detail">
                        <p className="cart-info-data">Cantidad: {cartQuant} Items</p>
                        {
                            <>
                                <p className="cart-info-data">Sumatoria: ${cartTotalPrice}</p>
                                {cartQuant >= 15 && <p className="cart-info-offer">Oferta por cantidad: 10% (15+)</p> || cartQuant >= 10 && <p className="cart-info-offer">Oferta por cantidad: 5% (10+)</p>}
                                {cartQuant >= 15 && <h4 className="cart-info-total">Total: ${cartTotalPrice - (cartTotalPrice*0.1)}</h4> || cartQuant >= 10 && <h4 className="cart-info-total">Total: ${cartTotalPrice - (cartTotalPrice*0.05)}</h4> || <h4 className="cart-info-total">Total: ${cartTotalPrice}</h4>}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}