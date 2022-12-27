export const StoreSelection = ({platform, handleStoreSelection, product}) => {
    const handleStore = (store) =>{
        handleStoreSelection(store)
    }
    const pcStores = ["steam", "gog", "epic-games" ]
    if (platform === "pc"){
        return (
        <div className="store-selection">
            <h2 className="store-selection-title">Tienda</h2>
            <select className="form-select" aria-label="store select" onChange={(value) => handleStore(value.target.value)}>
                <option value={""}>Seleccionar tienda</option>
                {
                    product.stores.map((option, index) => {
                        return (
                            pcStores.includes(option.store.slug) && <option key={index} value={option.store.slug}>
                                {option.store.name}
                            </option>
                        )
                    })
                        
                }
            </select>
        </div>
        )
    }
}