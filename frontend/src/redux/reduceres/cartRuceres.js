import * as actiontype from '../constants/cartConstants'


export const cartReduceres =(state={cartitems:[]},action)=>{
    switch (action.type) {
        case actiontype.ADD_TO_CART:
            const item = action.payload
            const existitem = state.cartitems.find((x)=>x.product === item.product)

            if (existitem) {
                return{
                    ...state,
                    cartitems:state.cartitems.map((x)=>x.product===existitem.product ?item:x)
                }
            } else {
                return{
                    ...state,
                    cartitems:[...state.cartitems,item]
                }
            }
        case actiontype.REMOVE_FROM_CART:
            return{
                ...state,
                cartitems:state.cartitems.filter(x=>x.product !== action.payload)
            }
        case actiontype.CART_RESET:
            return state={cartitems:[]}
            
        default:
            return state
    }
}