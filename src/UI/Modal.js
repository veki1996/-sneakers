import { Fragment } from "react"
import ReactDOM from 'react-dom'
import Clasess from './Modal.module.css'
const Overlay =(props)=>{
    return <div onClick={props.Klikni} className={Clasess.over}></div>
}
const Backdrop =(props)=>{
    return<div className={Clasess.backd}>
        {props.children}
    </div>
}
const ids = document.getElementById('overlays')
const Modal =(props)=>{

    return(<Fragment>
        {ReactDOM.createPortal(<Overlay Klikni={props.Klikni}/>, ids)}
        {ReactDOM.createPortal(<Backdrop>{props.children}</Backdrop>,ids)}
    </Fragment>
    )
}
export default Modal