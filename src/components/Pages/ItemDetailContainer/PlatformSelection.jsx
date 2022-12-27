export const PlatformSelection = ({product, handlePlatformSelection}) =>{
    
    const handlePlatform = (platform) =>{
        handlePlatformSelection(platform)
    }

    return (
        <div className="platform-selection">
            <h2 className="platform-selection-title">Plataformas</h2>
            {/*
            <select className="form-select" aria-label="platform select" onChange={(value) => handlePlatform(value.target.value)}>
                
                
                
                <option value={""}>Seleccionar plataforma</option>
                {
                    product.platforms.map((option, index) =>{
                        return  (<option key={index} value={option.platform.slug}>
                            {option.platform.name}
                        </option>)
                    })
                }
            </select>
            */}
        </div>
    )
}