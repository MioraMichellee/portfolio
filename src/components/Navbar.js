 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

// import logo from '../assets/img/logo.svg';
import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const NavBar = () =>{

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll)
    }, [])


    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return( 
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <h1 style={{color:'white'}}>Miora</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/mioramichelle/"><img src={navIcon} alt=""/></a>
                <a href="https://web.facebook.com/miora.ratsimbazafy.31/"><img src={navIcon2} alt=""/></a>
                <a href="https://github.com/MioraMichellee"><img src={navIcon4} alt=""/></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}>
                <span>Let's Connect </span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    )
}