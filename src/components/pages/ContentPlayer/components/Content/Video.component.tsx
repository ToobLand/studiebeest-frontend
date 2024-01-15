import style from "./Content.module.scss"

const Video=()=>{
    return(
        <div>
        <div className={style.content_wrapper}>
            <h2>1. Introductie</h2>
            <p>De stelling van Pythagoras introductie tekst. <br/>
            Bekijk onderstaande video voor de uitleg over de stelling van Pythagoras</p>
            </div>
        <iframe className={style.iframe_style} width="560" height="315" src="https://www.youtube-nocookie.com/embed/Eq3Md_XENxw?si=gfRZuyyiimnktoO5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}
export default Video;