import React from "react";

 const CartContext= React.createContext({
    items:[],
    totalAmount: 0,
    name: ' ',
    num: 0,
    set: false,
    addItems:(item)=>{},
    removeItem:(id)=>{}
})
export default CartContext