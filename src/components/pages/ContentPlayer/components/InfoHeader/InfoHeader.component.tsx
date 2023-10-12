import style from "./InfoHeader.module.scss";

const InfoHeader = ()=>{
    return (<div className={style.header_wrapper}>
        <div className={style.header_flex}>
        <div className={style.header_left}>
        <span className={style.list_title}>Les 3. De stelling van Pythagoras - Wiskunde A Havo 2</span>
        </div>
        <div className={style.header_right}>
        <span className={style.list_title}>Als favoriet opslaan</span>
        <span className={style.list_title}>Like</span>
        </div>          
        </div>      
    </div>);
}

export default InfoHeader;