import style from "./NavigationContent.module.scss";
import {Button} from "../../../../ui/index";

const NavigationContent = ()=>{
    return (<div className={style.list_wrapper}>
        <span className={style.title}>Auteur:</span><br/>
        <span className={style.title2}>Frodo Baggins</span><br/><br/>
        <span className={style.title}>Inhoud:</span>
        <span className={style.list_title}></span>
        <div className={style.list}><span className={style.list_number}>1.</span><span className={style.list_type}>Video</span></div>
        <div className={style.list}><span className={style.list_number}>2.</span><span className={style.list_type}>Tekst</span></div>
        <div className={style.list}><span className={style.list_number}>3.</span><span className={style.list_type}>Opdracht</span></div>        
        <div className={style.list}><Button title="Vraag of opmerking plaatsen" /></div>        
    </div>);
}

export default NavigationContent;