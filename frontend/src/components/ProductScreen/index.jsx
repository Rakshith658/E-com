import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import {getProductDetails} from "../../redux/action/productAction"
import {addtoCart} from '../../redux/action/cartAction'

const Index = ({match,history}) => {
    const [qty, setqty] = useState(1)
    const dispatch = useDispatch()
    

    const ProductDetails = useSelector(state => state.getProductDetails)

    const {product,loading,error}=ProductDetails

    useEffect(() => {
        if (product && match.params.id !== product._id) {  
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch,product,match.params.id])
    const addtoCartHandler = ()=>{
        dispatch(addtoCart(product._id,qty))
        history.push('/cart')
    }
    return (
        <div className="productscreen">
            {loading ? <h2>Loading.....</h2>:error?<h3>{error}</h3>:( <>
                    <div className="productscreen__life">
                    <div className="left__image">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name}
                        />
                    </div>
                    <div className="left__info">
                        <p className="left__name">{product.name}</p>
                        <p>Price:${product.price}</p>
                        <p>Description :{product.description}</p>
                    </div>
                </div>
                <div className="productscreen__right">
                    <div className="right__info">
                        <p>
                            Price: <span>${product.price}</span>
                        </p>
                        <p>
                            Stauts: <span>{product.countInStock>0 ?"In stock":"out stock"}</span>
                        </p>
                        <p>
                            Qty
                            <select value={qty} onChange={(e)=>setqty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x)=>(
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                ))}
                            </select>
                        </p>
                        <p>
                            <button type="button" onClick={addtoCartHandler}>Add to Cart</button>
                        </p>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Index
