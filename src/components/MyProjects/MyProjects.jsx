import './index.css'
import ImageGallery from 'react-image-gallery';
import {images} from '../../constants'
import Background from '../../assets/background-section.jpg'

const MyProjects = ({myRef}) => {

    return (
        <div ref={myRef} className="MyProjects">
            <div className="bkg-container">
            <img className="MyProjects-background" src={Background} alt="backgound-project" />
            </div>
            <h2 className="MyProjects-title">My Recent Work</h2>
            <ImageGallery items={images} showFullscreenButton={true} useBrowserFullscreen={false} showPlayButton={false} autoPlay={false} />
            <p>Here are some of the selected project I have been working on!</p>
        </div>
    )
}

export default MyProjects;