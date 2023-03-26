import minus from '../Images/minus.jpg'
import plus from '../Images/plus.jpg'
import Classes from './Button.module.css'
import { useRef, useState } from 'react'
const Button = (props) => {
    const [myvalue, setMyValue ]= useState(0)
    const curentvalue = useRef()
    const Minuss = () => {
       
        let newValues = curentvalue.current.value
        let numMInus = Number(newValues)
        let finaleNum =  numMInus -1 
        if(finaleNum === -1){
            finaleNum = 0
        }
      setMyValue(finaleNum)
    
        }
    const  pluss = ()=>{
        let newValues = curentvalue.current.value
        let numMInus = Number(newValues)
        let finaleNum =  numMInus + 1
        if(finaleNum === -1){
            finaleNum = 0
        }
      setMyValue(finaleNum)
     
    }
   const Klikni =()=>{
    props.onItemSend(myvalue)
   }
    return (
        <div className={Classes.main}>
            <img onClick={Minuss} src={minus} />
            <input ref={curentvalue} type="number"  value={myvalue} defaultValue="1" />
            <img onClick={pluss} src={plus} />
            <button onClick={Klikni}>Add to Cart</button>
        </div>
    )
}
export default Button