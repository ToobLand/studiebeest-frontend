import style from "./NavigationContent.module.scss";

const NavigationContent = ()=>{
    return (<div className={style.list_wrapper}>
        <span className={style.list_title}>Les inhoud:</span>
        <div className={style.list}><span className={style.list_number}>1</span><span className={style.list_type}>Video</span></div>
        <div className={style.list}><span className={style.list_number}>2</span><span className={style.list_type}>Opdracht</span></div>
        <div className={style.list}><span className={style.list_number}>3</span><span className={style.list_type}>Opdracht</span></div>        
        <div className={style.list}><span className={style.list_type}>Vraag stellen of opmerking plaatsen</span></div>        
    </div>);
}

export default NavigationContent;