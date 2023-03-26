import Carts from '../Images/card.png'
import Clasess from './Cart.module.css'
import CartContext from '../Store/Cart-Context'
import { useContext } from 'react'
const Cart = (props)=>{
  const CartCtx =   useContext(CartContext)
   const a = CartCtx.num
  
    return (
        <div onClick={props.output} className={Clasess.MainCart}>
            <img src={Carts} alt='cart'/>
            <span>{a}</span>
        </div>
    )
}
export default Cart