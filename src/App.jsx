import {useState} from 'react'
import './App.css';
import { BiUser } from "react-icons/bi";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

import Navbar from './components/Navbar';
import HamMenu from './components/HamMenu';
import Hero from './components/Hero';
// import Button from './components/Button';
// import ModalWindow from './components/ModalWindow';
import SlideModal from './components/SlideModal';
import Logo from './assets/logoW.png';
import Experiences from './components/Experiences';
import MyProjects from './components/MyProjects';

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
    text: 'My Projects',
    icon: <MdOutlineWorkOutline className='my_projects'/>
  },
  {
    text: 'Contact',
    icon: <AiOutlineMail className='contact'/>
  }
]

function App() {
  // const [value, setValue] = useState(false)
  const [slideVisible, setSlideVisible] = useState(false)
  const [sectionValue, setSectionValue] = useState('About');
  const [isActive, setActive] = useState(false);


  // const handleOnClickAccept = () => {
  //   setValue(true);
  //   console.log(value)
  // }
  // const handleOnClickCancel = () => {
  //   setValue(false);
  //   console.log(value);
  // }
  // const handleOnClickSlide = () => {
  // setSlideVisible(true);
  // }
//   const handleModalClose = (e) => {
// if (e.target.classList.contains('ModalWindow__overlay'))
//   setValue(false);
//   }
  const handleOnClickList = (item) => {
    
    console.log(sectionValue);
    if (item === 'Contact') {
      setSlideVisible(true)
      setActive(!isActive)
      
    }
    if (item === 'About') {
      setSlideVisible(false)
      setActive(!isActive)
      setSectionValue(item)
    }
    if (item === 'Experiences') {
      setSlideVisible(false)
      setActive(!isActive)
      setSectionValue(item)
    }
    if (item === 'My Projects') {
      setSlideVisible(false)
      setActive(!isActive)
      setSectionValue(item)
    }
  }

  return (
    <div className="App">
      <Navbar>
        <img className="Logo" src={Logo} alt="logo"/>
      </Navbar>
      <HamMenu setActive={setActive} isActive={isActive}>
        <ul className='menu-list'>
          { menuList.map((item, index) => <li onClick={() => handleOnClickList(item.text)} key={item.text + index}>{item.icon}{item.text}</li> )}
        </ul>
      </HamMenu>
      
      <main className="main_section">
        {sectionValue === "About" && <Hero/>}
        {sectionValue === "Experiences" && <Experiences />}
        {sectionValue === "My Projects" && <MyProjects />}
        <SlideModal slideVisible={slideVisible} setSlideVisible={setSlideVisible}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, numquam. Quos atque dolor natus consectetur!</p>
      </SlideModal> 
          
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
