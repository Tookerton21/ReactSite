import React, { Component } from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import Git from '../Img/github.png';
import Lin from '../Img/linkedin.png';
import '../css/header.scss';


class Header extends Component {
  
    render() {
      var floatRight = {
        justifyContent: 'flex-end',
      };
      return (
        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="/Home">Niko Ruiz</Navbar.Brand>
          <Nav className="NavMenu"  >
            <div className="left">
              <Nav.Link href="/About" actions="replace">About Me</Nav.Link>
              <Nav.Link href="/Projects" actions="replace">Projects</Nav.Link>
              <Nav.Link href="/Resume" actions="replace">Resume</Nav.Link>
            </div>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="icons">
                <a href="https://www.github.com/Tookerton21" style={{paddingRight: '20px'}}><Image src={Git}></Image></a>
                <a href="https://www.linkedin.com/in/niko-ruiz"><Image src={Lin}></Image></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
 
  
      );
    }
  }
  
  export default Header;