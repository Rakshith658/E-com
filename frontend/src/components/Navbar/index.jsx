import React from 'react'
import './styles.css'
import { Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Index = ({click}) => {
    const cart = useSelector(state => state.cart)

    const {cartitems}=cart

    const getcartcount = ()=>{
        return cartitems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <Link to='/'>
                    <h2> Shopping </h2>
                </Link>
            </div>
            {/* Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            cart
                            <span className="cartlogo__bedge">{getcartcount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        shooping
                    </Link>
                </li>
            </ul>
            {/* hamburger Menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Index
