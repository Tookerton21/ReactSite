import React, {Component} from 'react';
import HomeHero from '../Img/HomeHero.jpg';
import HeaderImg from './headerImg';
import BioPic from '../Img/Profile_pic.jpg';
import {Image, Card} from 'react-bootstrap';
import "../css/Home.scss";
import "../css/Card.scss";
class Home extends Component{
    render(){
        const Hero = HomeHero;
        console.log(HomeHero);

        const Education = () => {
            return <div className="HomeItem" stytle={{paddingbottom: '20px'}}>

                <h3><u>Education</u></h3>
                <p><b>Portland State University</b><br />Bachelors of Science<br /> <i>December 2018</i></p>

            </div>
        }

        const Bio = () => {
            return <div className="HomeItem" style= {{paddingTop: '20px'}}>
                <h3><u>Niko Ruiz</u></h3>
                <p>Software developer with an excellent work ethic and proven team leadership, seeking to enhance professional skills while contributing to new developments in the field.</p>
                <p>I enjoy working, and socializing with others and I thrive off of interactive team environments. When I’m not at my desk coding you can probably find me at the local tap house coding. I always strive for excellence, but know how to balance that when pressed for time to meet any deadlines.</p>
            </div>
        }

        const SoftSkills = () => {
            return <div className="HomeItem">
                <ul className="flexList">
                    <li className="NoBul">Team Player</li>
                    <li>Role Model</li>
                    <li>Goal-Oriented</li>
                    <li>Great Communication</li>
                    <li>Open Minded</li>
                    <li>Problem Solver</li>
                    <li>Approachable</li>
                    <li>Dependable</li>
                    <li>Resourceful</li>
                </ul>
            </div>
        }

        const Skills = () => {
            return <div className="HomeItem">
                <h3>Technical Skills:</h3>
                <ul >
                    <li>Front End Web</li>
                    <li>Back End Web</li>
                    <li>Mobile Application</li>
                    <li>Desktop Applications</li>
                    <li>Embedded Software</li>
                </ul>
            </div>
        }

        return(
            <div className="Home">
                <HeaderImg Hero={HomeHero} Text={"Niko Ruiz"} SubText={"Software Engineer"} />
                <Image className="BioPic" src={BioPic} roundedCircle />
                <Card className="cardMods">
                    <Bio />
                    <SoftSkills />
                    <Education />
                </Card>
                
                
            </div>

        );     
    }
}

export default Home;