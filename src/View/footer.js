import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import Git from '../Img/github.png';
import Lin from '../Img/linkedin.png';
import '../css/footer.scss';

class Footer extends Component {

    render(){
        return(
            <footer className="Footer">
                <a>© 2019 Niko Ruiz</a>
                <div className="icons">
                    <a href="https://www.github.com/Tookerton21" className="icon-Padding"><Image src={Git}></Image></a>
                    <a href="https://www.linkedin.com/in/niko-ruiz"><Image src={Lin}></Image></a>
                </div>
            </footer>
        );
    }
}

export default Footer;