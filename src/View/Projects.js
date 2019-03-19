import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import HeaderImg from './headerImg';
import Hero from '../Img/Projects.jpg';

class Projects extends  Component{
    render(){
        return(
            <div>
                <HeaderImg Hero={Hero} Text={"Projects"} SubText={""} />
            
                <div className="Projects">
                    
                    <Card className="Project-Item">
                        <Card.Title>1050 leds and an Xbox Kinect</Card.Title>
                        <Card.Body>
                        <p>Intro Back in May 2018 my web developer pal Dan Wright, roped me into collaborating with him on an art installation at Pickathon 2018. His original concept for the interactive project was to use the flaschen taschen project, and build a giant Etch-a-Sketch that would be operated by two people. After a few morning coffee sessions in our living room the project evolved into a light display that would use Xbox Kinect it depth sensor to project human movement even in pitch black darkeness.</p>
                        <p><Link to="/Projects/LED"><button className="pButton">View</button></Link></p>
                        </Card.Body>
                    </Card>
                    <Card className="Project-Item">
                    <Card.Title>Auto Grow</Card.Title>
                    <Card.Body>
                    <p>Intro I have wanted to build an automated grow tent/room for some time. Such a thing would allow me to leave my home days at a time, or even weeks with the reassurance that my plants will be fine. I will be using a Rasberry pi 3, appropriate sensors, stepper motors, paristalic pumps and Relays. I will be implementing this project in C++. Goals: Watering Temperature control Humidity control Light height I want to have a moisture sensor that will indicate when soil reaches a level of moisture that requires wire. </p>
                    <p><Link to="/Projects/AutoGrow"><button className="pButton">View</button></Link></p>

                    </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Projects;