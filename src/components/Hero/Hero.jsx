import './index.css'
import Button from '../Button'

export default function Hero() {

    const handleOnClickLink = () => {
        window.open('https://edgemony.com/')
     }
    
   
    return (
        <div className="Hero">
            <p className='presentation-text'>Hi, my name is</p>
            <h1 className='title'>Marco Guglielmino.</h1>
            <h2 className='subtitle'>I build things for the web.</h2>
            <p className='description-text'>Front-end Developer Computer enthusiast since childhood. 
              I have various experience in the tech field, such as photo editing and sound design. 
              Currently I am improving my javascript, specifically the reactJS framework at <span onClick={handleOnClickLink} className='edgemony'>Edgemony</span>, 
              to grow my knowledge and enhance my creativity.</p>
            <div className="btn-knowledge">
            <Button btnText="Check out my knowledge" className="return-btn" />
            </div>     
        </div>
    )
}

