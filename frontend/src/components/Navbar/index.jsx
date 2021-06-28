import React from 'react'
import './styles.css'
import { Link} from "react-router-dom"

const index = ({click}) => {
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
                            <span className="cartlogo__bedge">0</span>
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

export default index
