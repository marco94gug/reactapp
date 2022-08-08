import './index.css';

const Button = ({btnText, onClick = () => {}, className}) => {

    return (
        <button type="submit" className={className} onClick={onClick} >{btnText}</button>
    )
}

export default Button;