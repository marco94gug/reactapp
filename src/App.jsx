import {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button'
import ModalWindow from './components/ModalWindow';
import SlideModal from './components/SlideModal';
import Logo from './assets/logo.png'

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

  return (
    <div className="App">
      <Navbar>
        <img className="Logo" src={Logo} />
        <p>Lorem ipsum dolor sit amet.</p>  
      </Navbar>
      <main className="main_section">
        <h1>{value ? 'true' : 'false'}</h1>
        <div className="button-container">
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
        </ModalWindow> }
        </main>
    </div>
  );
}

export default App;
