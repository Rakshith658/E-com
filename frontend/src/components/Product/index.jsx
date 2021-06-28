import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"

const index = () => {
    return (
        <div className="product">
            <img 
                src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" 
                alt="product name" 
            />
            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__description">Note that the development build is not optimized. Note that the development build is not optimized.</p>
                <p className="info__price">$5.5</p>
                <Link to={`/product/${1}`} className="info__button">View</Link> 
            </div>
        </div>
    )
}

export default index
