import React, {Component} from 'react';
import NavBar from './header';
import {Image, Jumbotron} from 'react-bootstrap';

import "../css/headerImg.scss";

class HeaderImg extends Component {
    render() {
        let text = this.props.Text;
        let path = this.props.Hero;
        let subtxt = this.props.SubText;
       let backGrndImg = {
            backgroundImage: "url("+path+")", 
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            minHeight: "450px",
        }
        console.log(this.props);
        return (
            
            <header className="Header" style={backGrndImg} >
                <NavBar />
               <Jumbotron>
                    <h1>{text}</h1>
                    <h4>{subtxt}</h4>
                 </Jumbotron>
            </header>
        );
    }
}

export default HeaderImg;