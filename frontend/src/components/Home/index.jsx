import React, { useEffect } from 'react'
import './styles.css'
import Product from '../Product'
import {useDispatch,useSelector} from 'react-redux'

//action 
import {getProducts as listProducts} from '../../redux/action/productAction'

const Index = () => {

    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)

    const {products,loading,error}=getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    // console.log(products);
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? <h2>Loading.....</h2>:error?<h3>{error}</h3>:products.map((p)=><div key={p._id}><Product products={p}/></div>)}
            </div>
        </div>
    )
}

export default Index
