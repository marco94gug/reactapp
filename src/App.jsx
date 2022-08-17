import {useState, useRef} from 'react'
import './App.css';
import { BiUser } from "react-icons/bi";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

import Navbar from './components/Navbar';
import HamMenu from './components/HamMenu';
import Hero from './components/Hero';
import Button from './components/Button';
import SlideModal from './components/SlideModal';
import Logo from './assets/logoW.png';
import Experiences from './components/Experiences';
import MyProjects from './components/MyProjects';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About/About';

function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const myProjects = useRef(null);
  const knowledge = useRef(null);
  const hamMenu = useRef(null);

  const [slideVisible, setSlideVisible] = useState(false)
  const [sectionValue, setSectionValue] = useState('About');
  const [isActive, setActive] = useState(false);

  const menuList = [
    {
      text: 'About',
      icon: <BiUser className='aboutme' />, 
      ref: about,
    },
    {
      text: 'Experiences',
      icon: <AiOutlineProject className='experiences'/>,
      ref: experience,
    },
    {
      text: 'My Projects',
      icon: <MdOutlineWorkOutline className='my_projects'/>,
      ref: myProjects,
    },
    {
      text: 'Contact',
      icon: <AiOutlineMail className='contact'/>
    }
  ]
 
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 40,
      behavior: 'smooth',
    })
  };

  const scrollTop = () => {
    window.scrollTo({
      top: -40,
      behavior: 'smooth',
    })
  }

  const handleOnClickList = (item) => {
    
    if (item === 'Contact') {
      setSlideVisible(true)
      
    }
    if (item === 'About') {
      setSlideVisible(false)
      setSectionValue(item)
    }
    if (item === 'Experiences') {
      setSlideVisible(false)
      setSectionValue(item)
    }
    if (item === 'My Projects') {
      setSlideVisible(false)
      setSectionValue(item)
    }
  }

  const appClick = (e) => {
    if (e.target !== hamMenu.current && e.target.tagName !== hamMenu.current.children[0].tagName) {
      setActive(false)
    }
  }

  return (
    <div onClick={(e) => appClick(e)} className="App">
      <ScrollToTop scrollTop={scrollTop} />
      <Navbar>
        <img onClick={scrollTop} className="Logo" src={Logo} alt="logo"/>
      </Navbar>
      <HamMenu myRef={hamMenu} setActive={setActive} isActive={isActive}>
        <ul className='menu-list'>
          { menuList.map((item, index) => <li onClick={() => {handleOnClickList(item.text); (item.ref && scrollToSection(item.ref))}} key={item.text + index}>{item.icon}{item.text}</li> )}
        </ul>
      </HamMenu>
      
      <main className="main_section">
        <Hero onClick={scrollToSection} refValue={knowledge}/>
        <About myRef={about} knowledgeRef={knowledge}/>
        <Experiences myRef={experience} />
        <MyProjects myRef={myProjects} />
        <SlideModal slideVisible={slideVisible} setSlideVisible={setSlideVisible}>
          <h2>Interested in collaborating with me?</h2>
          <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <a href="mailto:marco.guglielmino94@gmail.com">
          <Button btnText="Say Hello!" className="return-btn"/>
          </a>
        </SlideModal> 
        </main>
    </div>
  );
}

export default App;
