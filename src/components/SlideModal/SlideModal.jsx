import './index.css'
import Button from '../Button'

const SlideModal = ({children, slideVisible, setSlideVisible}) => {

    const handleOnClickClose = () => {
        setSlideVisible(false);
    }

    return (
        <div className={!slideVisible ? 'SlideModal' : 'SlideModal active'}>
            <div className='btn-container'>
            <Button btnText=">" className="close-btn" onClick={handleOnClickClose}/>
            </div>
            {children}
        </div>
    )
}

export default SlideModal;