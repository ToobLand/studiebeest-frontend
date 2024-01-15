import style from "./ContentPlayer.module.scss";
import {
	Header
} from "../../layout/index";
import {
	NavigationContent,NavigationLesson, InfoHeader, Video, Text, Exercise
} from "./components/index";

const ContentPlayer = ()=>{
    return (
    <div className={style.content_wrapper}>
        <Header />
        <InfoHeader />
        <div className={style.flex_wrapper}>
        <div className={style.left_menu}>
            <NavigationContent />
        </div>
        <div className={style.main}> 
           
            <div className={style.content}>
                <Video />
                <Text />
                <Exercise />
            </div><br/><br/>
           <b style={{fontSize: "20px"}}> previous lesson - Next lesson</b>
            <br/><br/>
        </div>
        </div>
    </div>);
}

export default ContentPlayer;