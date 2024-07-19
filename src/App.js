import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './style.css'

function App() {
  return (
    <div className="App">

<section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className='absolute blur blur1'></div>
      {/* <div className='absolute blur blur-round 3rem'></div> */}
      {/* <div className='absolute blur blur-round prj1'></div> */}
      <NavBar/>
      <Banner />
      <Skills/>
      <Projects/>
      <Contact/>
        
    </section>
     
    </div>
  );
}

export default App;
