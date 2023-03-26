import Clasess from './Header.module.css'
import ManImege from '../Images/image-avatar.png'
import { Fragment, useContext, useState} from 'react'
import Cart from './Cart'
import OutputCart from './OutputCart'
import CartContext from '../Store/Cart-Context'

const Header = () => {
   const ctx =  useContext(CartContext)
   const [b, setB ]= useState(false)
   
 const onKlik=()=>{
    const a = ctx.set
    setB(a)
 }
  
    return (
        <Fragment>
            <div className={Clasess.Menu}>
                <div className={Clasess.Article}>
                    <h1>sneakers</h1>
                    <span>Collections</span>
                    <span>Man</span>
                    <span>Woman</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <div className={Clasess.Cart}>
                  <Cart output={onKlik}/>
                    <img src={ManImege} alt='Man' />
                    <div className={Clasess.OUCard}>
                  {b&&  <OutputCart />}
                    </div>
                </div>
              
            </div>
            <hr />
         
        </Fragment>

    )
}
export default Header