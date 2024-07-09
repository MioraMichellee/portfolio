import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className='absolute blur blur1'></div>
      <div className='absolute blur blur2'></div>
      <NavBar/>
      <Banner />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
