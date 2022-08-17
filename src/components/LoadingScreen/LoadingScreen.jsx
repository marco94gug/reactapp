import {useEffect, useState} from 'react';
import './index.css';
import logo from '../../assets/logoW.png';

export default function LoadingScreen ({isVisible}) {
    const [value, setValue] = useState("");

    useEffect(() => {
        setTimeout(() => setValue("active"), 200);
        setTimeout(() => setValue(""), 1500);
    }, [])
    return (
        <div className={isVisible ? "LoadingScreen" : "LoadingScreen deactivate"}>
            <img className={`LoadingScreen__logo ${value}`} src={logo} alt="Loading" />
        </div>
    )
}