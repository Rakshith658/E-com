import React from 'react'
import './styles.css'
import Cartitem from "../Cartitem"
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
// import {useEffect} from 'react'

import {addtoCart,removeFromCart} from '../../redux/action/cartAction'

const Index = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const {cartitems}=cart
    const qtychangeHandler = (id ,qty) => {
        dispatch(addtoCart(id,qty))
    }
    const removefromcart = (id) => {
        dispatch(removeFromCart(id))
    }
    const getcartcount = ()=>{
        return cartitems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }

    const getcartSubtotal = () => {
        return cartitems.reduce((price,item)=>(item.price * item.qty)+price,0)
    }
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shooping Cart</h2>
                {cartitems.length === 0 ?(
                    <div>
                        Your cart is empty<Link to='/'>Go to Back</Link>
                    </div>
                ):cartitems.map((c)=><Cartitem key={c.product} item={c} qtychangeHandler={qtychangeHandler} removefromcart={removefromcart}/>)}
                
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>subtotal ({getcartcount()}) items</p>
                    <p>${getcartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Processed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Index
