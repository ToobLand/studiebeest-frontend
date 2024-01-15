import style from "./NavigationContent.module.scss";
import {Button} from "../../../../ui/index";

const NavigationContent = ()=>{
    return (<div className={style.list_wrapper}>
        <div className={style.author_wrapper}><span className={style.title2}>Auteur: <span className={style.author}>Frodo Baggins</span></span></div>
        <div className={style.content_wrapper}>
        <span className={style.title}>inhoud:</span>
        <div className={style.list_active}><span className={style.list_number}>1.</span><span  className={style.list_type}>Introduction</span></div>
        <div className={style.list}><span className={style.list_number}>2.</span><span className={style.list_type}>Video</span></div>
        <div className={style.list}><span className={style.list_number}>3.</span><span  className={style.list_type}>Text theory: Beginselen van de stelling van Pythagoras</span></div>
        <div className={style.list}><span className={style.list_number}>4.</span><span className={style.list_type}>Multiple choice exercise</span></div>        
        <br/><br/><Button title="Vragen en opmerkingen" /> 
        </div> 
        <div className={style.button_wrapper}> 
        <Button title="Vorige les" /> <Button title="Volgende les" />
        </div>
    </div>);
}

export default NavigationContent;