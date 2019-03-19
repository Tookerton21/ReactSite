import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

import Hero from '../Img/pi.jpg';
import HeaderImg from './headerImg';
import "../css/projects.scss";

class Autogrow extends Component{
    render() {
        return(
            <div>
                <HeaderImg Hero={Hero} Text={"AutoGrow"} SubText={"Personal Project"} />
                <Card className="Projects">
                    <Card.Body>
                        <h2>Intro</h2>
                        <p>I have wanted to build an automated grow tent/room for some time. Such a thing would allow me to leave my home days at a time, or even weeks with the reassurance that my plants will be fine. I will be using a Rasberry pi 3, appropriate sensors, stepper motors, paristalic pumps and Relays. I will be implementing this project in C++.</p>
                        <h2>Goals:</h2>
                        <ul>
                            <li>Watering</li>
                            <li>Temperature control</li>
                            <li>Humidity control</li>
                            <li>Light height</li>
                        </ul>
            

                        <p>I want to have a moisture sensor that will indicate when soil reaches a level of moisture that requires wire. In which case will turn on the stepper motor using a relay system. I will be using a DHT11 temperature-humidity sensor to gather environment information to turn on humidifier/dehumidifier and heater/airconditioner. An ultrasonic will be placed at the level of the lights that will dictate the height of the lights move adjust during plant growth to prevent burning.</p>
                        
                        <h2>Hardware:</h2>
                        <ul>
                            <br />
                            <li>Raspberry Pi 3b</li>
                            <li>Arduino Uno</li>
                            <li>8Gig+ Micro SD card</li>
                            <li>Channel 20A Relay Control Module</li>
                            <li>1ft Power extension cord, 3 prong</li>
                            <li>Ultrasonic Module HC-SR04</li>
                            <li>Temperature and humidity Sensor DHT11</li>
                            <li>12V 30A DC Universal Regulated Power Supply</li>
                            <li>12V Dosing Peristalic Pump</li>
                            <li>Air tubing</li>
                            <li>Air valve connectors</li>
                            <li>TE215 Dual Mode Soil moisture sensor</li>
                            <li>Personal AC</li>
                            <li>Personal Heater</li>
                            <li>Personal de-humifier</li>
                            <li>Personal humidifier</li>
                        </ul>
                        <p>In my original implementation of the the project I was only going to use a Pi but ran into issues with the relay module. The Pi was lagging when sending signals to the relays. I decided to get an Arduino to use a slave to control the relays. I am using the serial library of wiringPi to communicate with the pi. I currently have it hooked up Via usb at the moment and have had no lag in the program execution.</p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Autogrow;
