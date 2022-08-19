import './index.css'
import Button from '../Button'
import {useEffect, useState} from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export default function Hero({myRef, onClick, refValue}) {
const [value, setValue] = useState('');

    useEffect(() => {
        setValue('active');
    },[])

    const handleOnClickLink = () => {
        window.open('https://edgemony.com/')
     }
    
   
    return (
        <ParallaxBanner className="parallax-hero">
        <ParallaxBannerLayer image="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" speed={-40} />
        <ParallaxBannerLayer>
        <div ref={myRef} className="Hero">
            <div className='hero-container'>
            <p className={`presentation-text ${value}`}>Hi, my name is</p>
            <h1 className={`title ${value}`}>Marco Guglielmino.</h1>
            <h2 className={`subtitle ${value}`}>I build things for the web.</h2>
            <p className={`description-text ${value}`}>Front-end Developer Computer enthusiast since childhood. 
              I have various experience in the tech field, such as photo editing and sound design. 
              Currently I am improving my javascript, specifically the reactJS framework at <span onClick={handleOnClickLink} className='edgemony'>Edgemony</span>, 
              to grow my knowledge and enhance my creativity.</p>
            <div className="btn-knowledge">
            <Button onClick={() => onClick(refValue)} btnText="Check out my knowledge" className={`return-btn ${value}`}/>
            </div>  
            </div>
               
        </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>
    )
}

