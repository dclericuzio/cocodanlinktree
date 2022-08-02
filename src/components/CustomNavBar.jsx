import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../assets/img/cocodan.png';

const CustomNavBar = () => {
    const [activeLink, setActiveLink] =  useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#sosmed" className={activeLink === 'sosmed' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('sosmed') }>Social Media</Nav.Link>
              <Nav.Link href="#grab" className={activeLink === 'grab' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('grab') }>GrabFood</Nav.Link>
              <Nav.Link href="#gojek" className={activeLink === 'gojek' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('gojek') }>GoFood</Nav.Link>
              <Nav.Link href="#branch" className={activeLink === 'branch' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('branch') }>Branch Store</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default CustomNavBar