import * as actiontype from '../constants/cartConstants'
import axios from 'axios'


export const addtoCart =(id,qty)=>async (dispatch,getState)=>{
    try {
        const {data} =await axios.get(`/api/products/${id}`)
        dispatch({
            type:actiontype.ADD_TO_CART,
            payload:{
                product:data._id,
                name:data.name,
                imageUrl:data.imageUrl,
                price:data.price,
                countInStock:data.countInStock,
                qty
            }
        })
    } catch (error) {
        console.log();
    }
    


    localStorage.setItem('cart',JSON.stringify(getState().cart.cartitems))
}

export const removeFromCart =(id)=>(dispatch,getState)=>{
    dispatch({
        type:actiontype.REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartitems))
}