import style from "./NavigationLesson.module.scss";

const NavigationLesson = ()=>{
    return (<div className={style.list_wrapper}>
        <span className={style.title}>Onderdeel van lespakket:</span>
        <span className={style.title2}> Wiskunde A Havo 2 - Examen Domein: floepsiefloep </span>
        <div className={style.list}><span className={style.list_number}>Les 1</span><span className={style.list_type}>Simpele vergelijking</span></div>
        <div className={style.list}><span className={style.list_number}>Les 2</span><span className={style.list_type}>Lastige vergelijkingen</span></div>
        <div className={style.list}><span className={style.list_number}>Les 3</span><span className={style.list_type}>Erg moeilijke vergelijkingen</span></div>        
    </div>);
}

export default NavigationLesson;