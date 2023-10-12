import style from "./Content.module.scss"

const Video=()=>{
    return(
        <div className={style.content_wrapper}>
            <h2>1. Video</h2>
            <h3>De stelling van Pythagoras</h3>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Eq3Md_XENxw?si=gfRZuyyiimnktoO5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}
export default Video;