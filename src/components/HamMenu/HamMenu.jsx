import './index.css'

const HamMenu = ({children, setActive, isActive, myRef}) => {
    
    const handleOnClick = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div ref={myRef} onClick={handleOnClick} className={!isActive ? 'toggle' : 'toggle active'}>
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