import {useState} from 'react'
import './App.css';
import { BiUser } from "react-icons/bi";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

import Navbar from './components/Navbar';
import HamMenu from './components/HamMenu';
import Hero from './components/Hero';
import Button from './components/Button';
import ModalWindow from './components/ModalWindow';
import SlideModal from './components/SlideModal';
import Logo from './assets/logoW.png';

const menuList = [
  {
    text: 'About',
    icon: <BiUser className='aboutme' />
  },
  {
    text: 'Experiences',
    icon: <AiOutlineProject className='experiences'/>
  },
  {
    text: 'Work',
    icon: <MdOutlineWorkOutline className='work'/>
  },
  {
    text: 'Contact',
    icon: <AiOutlineMail className='contact'/>
  }
]

function App() {
  const [value, setValue] = useState(false)
  const [slideVisible, setSlideVisible] = useState(false)

  const handleOnClickAccept = () => {
    setValue(true);
    console.log(value)
    }
  const handleOnClickCancel = () => {
    setValue(false);
    console.log(value);
  }
 const handleOnClickSlide = () => {
  setSlideVisible(true);
 }
 const handleModalClose = (e) => {
if (e.target.classList.contains('ModalWindow__overlay'))
  setValue(false);
 }
 const handleOnClickLink = () => {
    window.open('https://edgemony.com/')
 }

  return (
    <div className="App">
      <Navbar>
        <img className="Logo" src={Logo} alt="logo"/>
      </Navbar>
      <HamMenu>
        <ul className='menu-list'>
          { menuList.map((item, index) => <li key={item.text + index}>{item.icon}{item.text}</li> )}
        </ul>
      </HamMenu>
      <main className="main_section">
        <Hero>
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
        </Hero>
        {/* <div className="button-container">
          <Button btnText="Open SlideModal" className="return-btn" onClick={handleOnClickSlide} />
          <Button btnText="Open ModalWindow" className="general-btn" onClick={handleOnClickAccept} />
        </div>
      <SlideModal slideVisible={slideVisible} setSlideVisible={setSlideVisible}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, numquam. Quos atque dolor natus consectetur!</p>
      </SlideModal> 
        
        { value &&
        <ModalWindow onClick={handleModalClose}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa incidunt odio corrupti nobis nemo! Molestias, ut ad. Ad, laborum libero!</p>
          <div className="button-container">
            <Button btnText="Close" className="return-btn" onClick={handleOnClickCancel}/>
            <Button btnText="Accept" className="general-btn" onClick={handleOnClickAccept} />
          </div>
        </ModalWindow> } */}
        </main>
    </div>
  );
}

export default App;
