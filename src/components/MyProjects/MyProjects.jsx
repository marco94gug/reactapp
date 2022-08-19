import './index.css'
import {useEffect, useRef, useState} from 'react';
import ModalWindow from '../ModalWindow/ModalWindow'
import Button from '../Button'
import {images} from '../../constants'
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';


const MyProjects = ({myRef, aboutRef}) => {
const scrollingImg = useRef(null);
const [isModalVisible, setModalVisible] = useState(false);
const [index, setIndex] = useState("");

useEffect(() => {
    window.addEventListener('scroll', () => {
        const AboutBottomCord = aboutRef.current.offsetTop + (aboutRef.current.offsetHeight / 2) -180
      
        if ((window.scrollY > AboutBottomCord - 600)) {
            scrollingImg.current.scroll({
                left: window.scrollY - AboutBottomCord,
              })
        }
    })
}, [aboutRef])

const onHandleClick = (item) => {
    setModalVisible(true); 
    setIndex(item);
}

const handleOnClickOverlay = (e) => {
    if (e.target.tagName !== 'svg' && e.target.tagName !== 'IMG' && e.target.tagName !== 'path') {
    setModalVisible(false);
    }
}

// console.log(scrollingImg.current.offsetTop)
    return (
        <div ref={myRef}>
        <ParallaxBanner className='myprojects-parallax'>
            <ParallaxBannerLayer image="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80" speed={-20} />
            <ParallaxBanner>
        <div  className="MyProjects">
            <h2 className="MyProjects-title">My Recent Work</h2>
            
            <div ref={scrollingImg} className="img_container">
                {images.map((image, index) => <img onClick={(e) => onHandleClick(e.target.alt)} src={image.original} alt={index} key={index} />)}
            </div>
                {/* <img src={images[0].original} alt={images[1].original} /> */}
            {isModalVisible && <ModalWindow onClick={(e) => handleOnClickOverlay(e)} >
                <img src={images[index].original} alt="img" />
                <div className='MyProjects__btn_container'>
                <Button disabled={Number(index) === 0} onClick={() => setIndex( prev => Number(prev) - 1)} btnText={<FaAngleLeft className="btn_left"/>} className="arrow" />
                <Button disabled={Number(index) === images.length -1} onClick={() => setIndex( prev => Number(prev) + 1)} btnText={<FaAngleRight className="btn_right"/>} className="arrow" />
                </div>
                </ModalWindow>}
            {/* <ImageGallery items={images} showFullscreenButton={true} useBrowserFullscreen={false} showPlayButton={false} autoPlay={false} /> */}
            <p>Here are some of the selected project I have been working on!</p>
        </div>
        </ParallaxBanner>
        </ParallaxBanner>
        </div>
    )
}

export default MyProjects;