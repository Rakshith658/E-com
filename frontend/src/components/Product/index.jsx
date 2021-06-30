import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"

const index = ({products}) => {

    // console.log(products);
    return (
        <div className="product">
            <img 
                src={products.imageUrl} 
                alt="product name" 
            />
            <div className="product__info">
                <p className="info__name">{products.name}</p>
                <p className="info__description"> {products.description}</p>
                <p className="info__price">${products.price}</p>
                <Link to={`/product/${products._id}`} className="info__button">View</Link> 
            </div>
        </div>
    )
}

export default index
