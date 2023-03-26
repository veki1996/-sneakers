
import Clasess from './Card.module.css'
import Modal from '../UI/Modal'
import MainImage from '../Main/MainImage'


const Card = (props)=>{
    return(
        <Modal Klikni={props.Klikni}>
            <div className={Clasess.main}>   
             <MainImage/>
            <button onClick={props.Close} className={Clasess.ikx}>X</button>
            </div>
        </Modal>
    )
}
export default Card