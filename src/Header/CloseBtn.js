import CartContext from "../Store/Cart-Context"
import { Fragment, useContext } from "react"
const CloseBtn = ()=>{
   const ctx =  useContext(CartContext)
   const closeBtn= ()=>{
    ctx.removeItem()

   }
 
    return(
        <Fragment>
        <button onClick={closeBtn}>Remove</button>
        </Fragment>
    )
}
export default CloseBtn