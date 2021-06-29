import React from 'react'
import './styles.css'
import Cartitem from "../Cartitem"

const index = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shooping Cart</h2>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>subtotal (0) items</p>
                    <p>$44.55</p>
                </div>
                <div>
                    <button>Processed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default index
