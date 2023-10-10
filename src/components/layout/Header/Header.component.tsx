import style from "./Header.module.scss";

const Header = ()=>{
    return (<div className={style.header_wrapper}>
        <div className={style.menu_wrapper}>
        <img className={style.logo} src='/assets/logo_temp.png' alt='Studiebeest.'/>
        <div className={style.menu_button}>Content plaatsen?</div>
        <div className={style.menu_button}>Inloggen</div>
        <div className={style.menu_button}>Mijn favorieten</div>
        </div>
    </div>);
}

export default Header;