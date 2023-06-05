import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import curriculo from '../assets/documento/curriculo.pdf';
import navIcon2 from '../assets/img/nav-icon2.png';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/port#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/port#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="/port#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projetos</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
          <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/rodrigo-dias-oliver/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/RodrigoDia-s"><img src={navIcon2} alt="" /></a>
               
                
              </div>
              <a href={curriculo} target="_blank" download='curriculo.pdf'>
                <button className="vvd"><span>Baixe meu CV!</span></button>
              </a>
            </span>
        </Container>
      </Navbar>
    </Router>
  )
}


export default NavBar;