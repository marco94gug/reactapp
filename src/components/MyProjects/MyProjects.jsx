import './index.css'
import ImageGallery from 'react-image-gallery';
import {images} from '../../constants'

const MyProjects = ({myRef}) => {

    return (
        <div ref={myRef} className="MyProjects">
            <h2 className="MyProjects-title">My Projects</h2>
            <ImageGallery items={images} showFullscreenButton={true} useBrowserFullscreen={false} showPlayButton={false} autoPlay={false} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe temporibus esse facere numquam soluta?</p>
        </div>
    )
}

export default MyProjects;