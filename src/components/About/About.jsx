import './index.css'
import { Parallax, ParallaxBanner} from 'react-scroll-parallax';

import Avatar from '../../assets/avatar.png';

export default function About({myRef, knowledgeRef}) {

    return (
        // <div ref={myRef} style={{width: '100%'}}>
        <div ref={myRef} className="About">
        <ParallaxBanner className="parallax-banner"
        layers={[
            {
                image: "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
                speed: -20,
            }
]}
        >
   
        <div className="About_card">
        <div className="About__container">
        
            <h2  className='About__title'>About me:</h2>
            
            <div  className="About__main_content">
                <div className="About__main_content_text">
                    <p>Hello! My name is Marco and I enjoy creating things that live on the internet. My interest in web development started from childhood, when I decided to try editing custom Tumblr themes.</p>
                    <p>
                    Fast-forward to today, and I’ve had the privilege of working in a <span className="About__improvement">wedding photography studio where I improved my knowledge in Adobe Photoshop and Illustrator.</span> My main focus these days is to increase my knowledge in JavaScript and Reactjs, to create digital experiences for a variety of clients.
                    </p>
                    <p>
                    I am currently following an advanced Javascript and ReactJS course at Edgemony.
                    </p>
                </div>
                    <div className="avatar-container">
                    <Parallax translateY={[-60, 40]} translateX={[-60, 47]} opacity={[-3, 5]}>
                        <div className="About__corner_avatar" />
                    </Parallax>
                    <Parallax translateY={[40, -84]} translateX={[38, -68]} opacity={[-0.9, 8]}>
                            <div className="avatar-img-over">    
                                <div className="overlay__avatar" />
                                <img className="About__avatar" src={Avatar} alt="avatar" /> 
                            </div>
                    </Parallax>
                    </div> 
            </div>
           
        </div>
        
        <div ref={knowledgeRef} className="About__knowledge">
            <p className="title__knowledge">Here are a few technologies and skills I've been working recently:</p>
            <ul className="About__knowledge_list">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Pixellu SmartAlbum</li>
                <li>Steinberg Cubase</li>
                <li>Davinci Resolve</li>
                <li>HTML/CSS</li>
                <li>JavaScript ES6</li>
                <li>React.Js</li>
            </ul>
        </div>
        </div>
   

        </ParallaxBanner>
        </div>
        // </div>
    )
}