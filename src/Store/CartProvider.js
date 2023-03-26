import CartContext from "./Cart-Context"
import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0,
    name : " ",
    num: 0,
    set: false
}
const reducer = (state, action) => {
    if (action.type === "ADD") {
        const updateItems = state.items.concat(action.item)
        const updateAmount = state.totalAmount + action.item.price * action.item.amount
        const name = action.item.name
        let broj  = state.num + action.item.amount
        
       
        return {
            items: updateItems,
            totalAmount: updateAmount,
            name : name,
            num :broj,
            set:true
        }
    }
 if(action.type === "ID"){

    return{
        items: [],
        totalAmount: 0,
        name : " ",
        num :0,
        set:false

    }
 }

    return defaultCartState
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({type: "ID", id:id})
     }
    
   
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        name: cartState.name,
        num: cartState.num,
        set:cartState.set,
        addItems: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider