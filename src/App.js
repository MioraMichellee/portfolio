import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Loader } from './components/Loader/Loader';
import './style.css'
import { useEffect, useState } from 'react';


function App() {
    const playAudio = () => {
    let audio = new Audio('/assets/audio/audio.wav'); // Assurez-vous que le chemin est correct
    audio.play();
  }

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() =>{
      const fakeDataFetch = () => {
        setTimeout(()=>{
          setIsLoading(false)
        },5000)
      }
    
    fakeDataFetch();
  }, [])


  return (
    <div className="App">

<section class="wrapper">
       {isLoading? <Loader/> : <> <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className='absolute blur blur1'></div>
      {/* <div className='absolute blur blur-round 3rem'></div> */}
      {/* <div className='absolute blur blur-round prj1'></div> */}
      <NavBar/>

      {/* <button onClick={playAudio}>Play</button> */}
      <Banner />
      <Skills/>
      <Projects/>
      <Contact/></>}
        
    </section>
     
    </div>
  );
}

export default App;
