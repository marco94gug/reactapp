import './index.css'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

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