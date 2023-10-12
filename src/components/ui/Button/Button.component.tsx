import style from "./Button.module.scss"

interface ButtonProps {
    title: string;
    link ?: string;
}

const Button = (props:ButtonProps) => {

    return (
        <button className={style.primary_button}>{props.title}</button>
    );
}
export default Button;