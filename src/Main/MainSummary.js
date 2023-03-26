import MainImage from "./MainImage"
import Items from "./Items"
import Classes from './MainSummary.module.css'
const MainSummary = (props)=>{
    return(
        <div className={Classes.Summary}>
            <MainImage Klik={props.Klikni}/>
            <Items/>
            <p></p>
        </div>
    )   
}
export default MainSummary