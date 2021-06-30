import React from 'react'
import "./styles.css"
import {Link} from 'react-router-dom'

const index = ({item,qtychangeHandler,removefromcart}) => {
    
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img 
                    src={item.imageUrl} 
                    alt={item.name}
                />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">Price:${item.price} </p>
            <select className="cartitem__select" value={item.qty} onChange={(e)=>qtychangeHandler(item.product,e.target.value)}>
                {[...Array(item.countInStock).keys()].map((x)=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartitem__deletebtn" onClick={()=>removefromcart(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default index
