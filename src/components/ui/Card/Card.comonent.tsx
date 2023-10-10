
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
const Card=(props)=>{

    return (
        <div className={props.className}>
        <Link to={`/content`}><div className={style.card_wrapper}>
            <img className={style.thumbnail} src='https://source.unsplash.com/05A-kdOH6Hw/' alt=''/>
            <h3>Vergelijkingen oplossen (Havo wiskunde A)</h3>
            <span className={style.details}>Docent: Frodo Baggins</span>
            <span className={style.details}>Upload datum: 01-01-2023</span>
            <span className={style.details}>Aantal lessen: 6</span>
            <span className={style.details}>Inhoud:</span>
            <span className={style.tag}>Video</span>
            <span className={style.tag}>Opdracht</span>
            <span className={style.tag}>Theorie tekst</span>
        </div></Link>
        </div>
    );
}
export default Card;