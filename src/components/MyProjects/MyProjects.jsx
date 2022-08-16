import './index.css'
import ImageGallery from 'react-image-gallery';
import {images} from '../../constants'

const MyProjects = ({myRef}) => {

    return (
        <div ref={myRef} className="MyProjects">
            <h2 className="MyProjects-title">My Recent Work</h2>
            <ImageGallery items={images} showFullscreenButton={true} useBrowserFullscreen={false} showPlayButton={false} autoPlay={false} />
            <p>Here are some of the selected project I have been working on!</p>
        </div>
    )
}

export default MyProjects;