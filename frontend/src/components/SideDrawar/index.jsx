import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Index = ({show,click}) => {
    const cart = useSelector(state => state.cart)

    const {cartitems}=cart

    const getcartcount = ()=>{
        return cartitems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }
    const sideDrawerClass = ["sidedrawer"];
    if (show) {
        sideDrawerClass.push("show");
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            cart
                            <span className="sidedrawer__cartbedge">{getcartcount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shooping
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Index
