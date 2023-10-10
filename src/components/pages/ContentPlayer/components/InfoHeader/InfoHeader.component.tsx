import style from "./InfoHeader.module.scss";

const InfoHeader = ()=>{
    return (<div className={style.header_wrapper}>
        <span className={style.list_title}>Auteur: Frodo Baggins</span>
        <span className={style.list_title}>Alle lessen van Frodo Baggins bekijken</span>
        <span className={style.list_title}>Als favoriet opslaan</span>
        <span className={style.list_title}>Like</span>                
    </div>);
}

export default InfoHeader;