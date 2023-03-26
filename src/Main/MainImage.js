import MainI from '../Images/slika1.jpg'
import slika2 from '../Images/slika2.jpg'
import slika3 from '../Images/slika3.jpg'
import slika4 from '../Images/slika4.jpg'
import Clasess from './MainImage.module.css'
import { useState } from 'react'
const MainImage = (props) => {
    const [targetImage, setTargetImage] = useState(MainI)
    const [ currentindex, setcurentindex]= useState(0)
    const[I, setI] =useState(true)
    const images = [MainI, slika2, slika3, slika4]


    const AllImeges = (event) => {
        setI(true)
        const targetPic = event.target.src
        setTargetImage(targetPic)
        const Taslika = event.target
        const disp = document.querySelectorAll('#veki img')
        for (let a of disp) {
            if (Taslika) {
                a.style.filter = 'none'
                a.style.borderStyle = 'none'

            }
        }
        if (Taslika) {
            Taslika.style.borderStyle = 'solid'
            Taslika.style.filter = 'grayscale(100%)'
        }
    }

const MinusHandler = ()=>{
    setI(false)
    if (currentindex === 0) {
        setcurentindex(images.length - 1);
      } else {
        setcurentindex(currentindex - 1);
      }
}
const PlusHandler = ()=>{
    setI(false)
    if(currentindex === images.length -1 ){
        setcurentindex(0)
    }else{
        setcurentindex(currentindex + 1)
    }

}
let src
     if(I === true){
        src = targetImage
     }else if(I ===false){
        src = images[currentindex]
     }
    return (
        <div className={Clasess.main}>

            <button onClick={MinusHandler} className={Clasess.minus}>-</button>
            <img className={Clasess.MImg} src={src} onClick={props.Klik} />
            <button onClick={PlusHandler} className={Clasess.plus}>+</button>
            <div id='veki' className={Clasess.AllPIC}>
                <img onClick={AllImeges} src={MainI} />
                <img onClick={AllImeges} src={slika2} />
                <img onClick={AllImeges} src={slika3} />
                <img onClick={AllImeges} src={slika4} />
            </div>
        </div>
    )
}
export default MainImage