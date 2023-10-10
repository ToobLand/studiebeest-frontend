import style from "./ContentPlayer.module.scss";
import {
	Header
} from "../../layout/index";
import {
	NavigationContent,NavigationLesson, InfoHeader
} from "./components/index";

const ContentPlayer = ()=>{
    return (<div className={style.content_wrapper}><Header />
    <InfoHeader />
    <NavigationContent />
        De content
        <NavigationLesson />
    </div>);
}

export default ContentPlayer;