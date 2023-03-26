import Button from "../UI/Button"
import Classes from './Items.module.css'
import { useContext, useRef } from "react"
import CartContext from "../Store/Cart-Context"
const Items = () => {
    const Price = useRef()
    const Name = useRef()
    const Ctx = useContext(CartContext)

    const NumOfItem = (amount) => {
        const price = Price.current.innerText
        const prices = Number(price)
        const name = Name.current.innerText
     
        Ctx.addItems({
            amount: amount,
            price: prices,
            name: name
        })

    }

    return (
        <div className={Classes.main}>
            <h2 ref={Name}>Patika za trcanje</h2>
            <h1>Fall Limitless Sneakers</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div>
                <span ref={Price}>125.00</span>
                <span>50%</span>
            </div>
            <span>$250.00</span>
            <Button onItemSend={NumOfItem}  />
        </div>
    )
}
export default Items