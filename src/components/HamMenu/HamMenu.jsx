import './index.css'
import {useState} from 'react';

const HamMenu = () => {
    const [isActive, setActive] = useState(false);

    const handleOnClick = () => {
        setActive(!isActive);
    }

    return (
        <div onClick={handleOnClick} className={!isActive ? 'toggle' : 'toggle active'}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamMenu;