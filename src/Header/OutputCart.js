import { useContext } from "react"
import CartContext from "../Store/Cart-Context"
import Clasess from './OutputCart.module.css'
import CloseBtn from "./CloseBtn"
const OutputCart = (props) => {

  const ctx = useContext(CartContext)
  let brojA = ctx.num
  let price = ctx.totalAmount
  const name = ctx.name
 
  
 


  return (
     <div className={Clasess.main}>
      <div>
        <CloseBtn />
      </div>
      <h1> Cijena {brojA} {name} iznosi {price}$ </h1>
    </div>
  )
}
export default OutputCart