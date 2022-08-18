import './index.css';

const Button = ({btnText, onClick = () => {}, className, disabled}) => {

    return (
        <button disabled={disabled} type="submit" className={className} onClick={onClick} >{btnText}</button>
    )
}

export default Button;