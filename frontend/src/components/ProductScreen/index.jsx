import React from 'react'
import './styles.css'

const index = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__life">
                <div className="left__image">
                    <img 
                        src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" 
                        alt="product name"
                    />
                </div>
                <div className="left__info">
                    <p className="left__name">Product</p>
                    <p>Price:$44.55</p>
                    <p>Description : Note that the development build is not optimized. Note that the development build is not optimized.</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$44.55</span>
                    </p>
                    <p>
                        Stauts: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button>
                    </p>
                </div>
            </div>  
        </div>
    )
}

export default index
