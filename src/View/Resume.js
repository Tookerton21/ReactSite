import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import HomeHero from '../Img/HomeHero.jpg';
import HeaderImg from './headerImg';

import '../css/Resume.scss';
import '../css/general.scss';

class Resume extends Component{
    render(){
        return(
            <div className="Resume">
                <HeaderImg Hero={HomeHero} Text={"Niko Ruiz"} SubText={"Let's build something amazing together"}/>
                <Card className="cardMods">
                        <Card.Body className="CardBody">
                            <h4 className="h4-Title"><u>Summary</u></h4>
                            <p>Software Engineer with an excellent work ethic and proven team leadership, seeking to enhance professional skills while contributing to new developments in the field.</p>
                            
                            <h4 className="h4-Title"><u>Tech</u></h4>
                            <ul className="Ul-List">
                                <li>Mac</li>
                                <li>Linux</li>
                                <li>Embedded Software Engineering</li>
                                <li>Client/Server</li>
                                <li>Full Stack</li>
                                <li>Android</li>
                                <li>IOS</li>
                                <li>Docker</li>
                                <li>Parallel Cluster Computing</li>
                                <li>SQL</li>
                                <li>NoSql</li>
                                <li>RESTful</li>
                            </ul>

                            <h4 className="h4-Title"><u>Computer Languages</u></h4>
                            <ul className="Ul-List">
                                <li>C++</li>
                                <li>C</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>Rust</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>Haskell</li>
                                <li>Chappel-Lang</li>
                            </ul>

                            <h4 className="h4-Title"><u>Education</u></h4>
                            <p><b>Portland State University</b>, BS in Computer Science
                                <br/>
                                Portland, Oregon | 2018
                            </p>

                            <h4 className="h4-Title"><u>Education</u></h4>
                            <p><b>Pickathon | Software Engineer</b> May ‘18 - August ‘18</p>
                            <p>Program custom live-lightwall show. Translate live depth information from an Xbox Kinect to a custom LED light display. Uses a client-server model for communication between LED control and video data.</p>
                        
                            <p><b>Portland Opera Website, Capstone | Full Stack developer</b> April ‘18 - August ‘18</p>
                            <p>Re-design of the website including; optimization for mobile and tablet interface, streamline page UI.</p>

                            <a href="https://drive.google.com/file/d/1CmP8mdT_iLcHZvRbnSVlYk2i3eGts-SG/view?usp=sharing">Resume PDF</a>
                        </Card.Body>
                </Card>
           </div>
        );
    }
}

export default Resume;