import './index.css'
import {useState} from 'react';

const HamMenu = ({children}) => {
    const [isActive, setActive] = useState(false);

    const handleOnClick = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div onClick={handleOnClick} className={!isActive ? 'toggle' : 'toggle active'}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
                <div className={!isActive ? 'HamMenu' : 'HamMenu active'}>
                    {children}
                </div> 
            
        </>
    )
}

export default HamMenu;