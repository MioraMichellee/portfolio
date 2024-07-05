import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <div className='blur'></div>
      <div className='blur2'></div>
      <NavBar/>
      <Banner />
      <Skills/>
    </div>
  );
}

export default App;
