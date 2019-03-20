import React, { Component } from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import Git from '../Img/github.png';
import GitHover from '../Img/git_Hover.png';
import Lin from '../Img/linkedin.png';
import LinHover from '../Img/linked_Hover.png';
import '../css/header.scss';


class Header extends Component {
  state = {
    gitImg: Git,
    LinImg: Lin,
}
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
            <a href="https://www.github.com/Tookerton21" style={{paddingRight: '40px'}}><Image src={this.state.gitImg}
                        onMouseEnter = {() => {this.setState({gitImg: GitHover})}}
                        onMouseOut = {() => {this.setState({gitImg: Git})}}></Image></a>
                    <a href="https://www.linkedin.com/in/niko-ruiz"><Image src={this.state.LinImg}
                        onMouseEnter = {() => {this.setState({LinImg: LinHover})}}
                        onMouseOut = {() => {this.setState({LinImg: Lin})}}
                    ></Image></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
 
  
      );
    }
  }
  
  export default Header;