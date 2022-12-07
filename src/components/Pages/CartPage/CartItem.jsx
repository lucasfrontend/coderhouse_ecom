import './CartItem.scss'

export const CartItem = ({product}) => {

    return (
        <div className="cart-item">
            <div className='cart-item-detail'>
                <div className="cart-item-img">
                    <img src={product.img} alt="" />
                </div>
                <div className="cart-item-info">
                    <h3 className='cart-item-title'>{product.name}</h3>
                    <div>
                    {product.store !== "" && <span className='cart-item-data platform'></span>}
                    </div>
                    <span className='cart-item-data'>Cantidad: {product.stock}</span>
                    <span className='cart-item-price'>Precio: </span>
                </div>
            </div>
            <button className='btn'></button>
        </div>
    )
}