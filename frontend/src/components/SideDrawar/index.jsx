import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

const index = ({show,click}) => {
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
                            <span className="sidedrawer__cartbedge">0</span>
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

export default index
