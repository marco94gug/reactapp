import './index.css';
import {useState, useEffect} from 'react'

const Button = ({btnText, onClick = () => {}, className}) => {
// const [classValue, setClassValue] = useState('');
   
// useEffect(() => {
// switch (className) {
//     case ('accept') : {setClassValue('general-btn')}
//     break;
//     case ('return') : {setClassValue('return-btn')}
//     break; 
//     case ('close') : {setClassValue('close-btn')}
//     break;
//     default : {setClassValue('accept')}
// }}, []);
// console.log(classValue);

    return (
        <button type="submit" className={className} onClick={onClick} >{btnText}</button>
    )
}

export default Button;