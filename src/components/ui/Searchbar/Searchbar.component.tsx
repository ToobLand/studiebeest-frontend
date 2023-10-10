import style from "./Searchbar.module.scss";

const Searchbar = ()=>{
    return (<div className={style.search_wrapper}>
       <input type='text' className={style.searchbar} placeholder="Wat wil je leren vandaag?"/>
    </div>);
}

export default Searchbar;