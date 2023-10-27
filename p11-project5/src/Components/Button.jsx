import "./Button.css";

const Button = ({text, id, hrefBtn, classBtn}) => {
    return (
    <a 
        href={hrefBtn} 
        className={classBtn} 
        id={id}
    >
        {text}
    </a>
    );
}

export default Button;