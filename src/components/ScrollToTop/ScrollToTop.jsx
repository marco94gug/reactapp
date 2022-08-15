import './index.css';
import { useEffect, useState} from 'react';
import { IoMdArrowDropupCircle } from "react-icons/io";

const ScrollToTop = ({scrollTop}) => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }});
    }, [])

    return (
        <div className="ScrollToTop">
        {showScrollTopButton && <IoMdArrowDropupCircle className='top-btn-position' onClick={scrollTop}/>}
        </div>
    )
}

export default ScrollToTop;