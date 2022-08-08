import './index.css';
import { useEffect, useState } from 'react';

const ModalWindow = ({children, onClick}) => {
    const [windowVisible, setWindowVisible] = useState(false)

     useEffect(() => {
         setWindowVisible(true);
     }, [])
    
    return (
        <div onClick={onClick}  className="ModalWindow__overlay">
            <div className={!windowVisible ? "ModalWindow__window" : "ModalWindow__window active"}  >
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;