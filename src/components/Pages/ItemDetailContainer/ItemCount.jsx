import { useState } from "react"
import './ItemCount.scss'

export const ItemCount = () => {

    return (
        <>
            <div className="item-count">
                <h2 className="item-count-title">itemCount</h2>
                <div className="item-count-selector">
                    <span className="item-count-value">6</span>
                    <div className="item-count-btns">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}