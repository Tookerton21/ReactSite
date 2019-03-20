import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import Git from '../Img/github.png';
import GitHover from '../Img/git_Hover.png';
import Lin from '../Img/linkedin.png';
import LinHover from '../Img/linked_Hover.png';
import '../css/footer.scss';

class Footer extends Component {
    state = {
        gitImg: Git,
        LinImg: Lin,
    }
    render(){
        return(
            <footer className="Footer">
                <a>© 2019 Niko Ruiz</a>
                <div className="icons">
                    <a href="https://www.github.com/Tookerton21" className="icon-Padding"><Image src={this.state.gitImg}
                        onMouseEnter = {() => {this.setState({gitImg: GitHover})}}
                        onMouseOut = {() => {this.setState({gitImg: Git})}}></Image></a>
                    <a href="https://www.linkedin.com/in/niko-ruiz"><Image src={this.state.LinImg}
                        onMouseEnter = {() => {this.setState({LinImg: LinHover})}}
                        onMouseOut = {() => {this.setState({LinImg: Lin})}}
                    ></Image></a>
                </div>
            </footer>
        );
    }
}

export default Footer;