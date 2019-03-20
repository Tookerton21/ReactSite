import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

import HeaderImg from './headerImg';
import Hero from '../Img/niko_hero.JPG';
import '../css/general.scss';
import "../css/Card.scss";


class About extends Component{
    render(){
        var cardPos = {
            width: '75%',
            marginTop: '5%',
            marginBottom: '50px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
           
        }

        var cardBody = {
            paddingTop: '0px',
        }

        var cardTitle = {
            backgroundColor: 'grey',
            width: '100%',
        }
        return(
            <div>
                 <HeaderImg Hero={Hero} Text={"About Me"} SubText={"Niko Ruiz"} />
                <Card style={cardPos}>
                   <Card.Body className="AboutMe" style={cardBody}>
                       <Card.Body>
                           <h4 ClassName="h4-Title"><u>General</u></h4>
                            <p>I'm one of those recent “Californian transplants”. I fell victim to Portland’s magnetic pull seven years ago. I was on an eight-week road trip in 2011 when I stopped into the Rose city for a day and a half to visit a friend. That's all it really took for me to fall in love with the city and promise myself that I would move to Portland the following year. I'm one to keep my promises and did exactly that. I love exploring the city especially by bike</p>                       
                            <h4 ClassName="h4-Title"><u>Hobbies</u></h4>
                            <p>As passionate as I am about coding I have hobbies that get me away from the screen. I ride and maintain a Honda Cbr RR motorcycle. I love experiencing new things through travel and exploring the city by bike, discovering new art, food and brews. But what keeps me centered is my love of gardening. I love tending to my plants, figuring out what they need, informing myself through research and past journals on how to improve with each following year.</p>
                            <p>Other hobbies that I enjoy are: snowboarding, (thankfully we are quite close to Mt. Hood), , Mountain biking, Soccer, surfing, building things, and taking things apart. I’m also a bit of a gym rat; I love trying to set new PR’s at the gym.</p>
                       </Card.Body>
                   </Card.Body>
                </Card>
            </div>
        );
    }
}

export default About; 