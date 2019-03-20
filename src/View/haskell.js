import React, { Component } from 'react';
import {Card } from 'react-bootstrap';
import HeaderImg from '../View/headerImg';
import Hero from '../Img/HomeHero.jpg';
import "../css/projects.scss";
import "../css/Card.scss";

class Haskell extends  Component{
    render(){
        return(
            <div >
                <HeaderImg Hero={Hero} Text={"Haskell Banking + SQL Lite"} SubText={"Personal Project"} />
                <Card className="Projects"></Card>
                <Card className="Projects">
                    <Card.Title>Haskell Banking Application</Card.Title>
                    <Card.Body>
                        <p>I just learned about function programming at the time and wanted to put those newly aquired skills to the test. I went in with a classmate to work on this projectm and we decided to work on a Banking application. We wanted to see how functional Programming would work with a database so we decided to try out SQL lite to store our data. For this project we decided to do some pair programming for the entire project, using GitHub to share, and modify data.</p>
                    
                        <p> The Goals that we were able to accomplish were
                            <ul>
                                <li>Set up a SQL lite database</li>
                                <li>add a user to database</li>
                                <li>remove a user from database</li>
                                <li>set checking and savings</li>
                                <li>print function for testing/debugging</li>
                                <li>Wire Transfers from one user to another</li>
                                <li>Ensure user has enough funds for transfer</li>
                            </ul>
                        </p>
                        <p><b>What we learned?</b></p>
                        <p>We learned that working in a function language is much harder when we are trying to deal with user input. Having immutibility is a curse and a blessing at the same time. Since we were working with user input we had to work in the realm of "unsafe". It was a great project to learn about functional programming and has helped me with a greater understanding of programming in general. </p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Haskell;