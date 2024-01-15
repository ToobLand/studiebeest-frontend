import style from "./NavigationLesson.module.scss";

const NavigationLesson = ()=>{
    return (<div className={style.list_wrapper}>
        <span className={style.title}>All related lessons:</span>
        <div className={style.list}><span className={style.list_number}>1.</span><span className={style.list_type}>Lesson 1. this is about something</span></div>
        <div className={style.list}><span className={style.list_number}>2.</span><span className={style.list_type}>Lesson 2. this is about another thing</span></div>
        <div className={style.list}><span className={style.list_number}>2.</span><span style={{fontWeight: "500"}} className={style.list_type}>Lesson 3. this is the active lesson </span></div>
        <div className={style.list}><span className={style.list_number}>2.</span><span className={style.list_type}>Lesson 4. this is the last lesson</span></div>
    </div>);
}

export default NavigationLesson;