import './ItemDetail.scss'

export const ItemDetail = ({product}) =>{

    console.log("product", product)
    return (
        <div className="detail-card">
            <div className="card-body">
                <img className="img" src={product.img} alt="..." />
                <h2 className="item-detail-name">{product.name}</h2>
                <h3>{product.description}</h3>
            </div>
        </div>
        
    )
}