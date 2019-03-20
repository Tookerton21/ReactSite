import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import HeaderImg from '../View/headerImg';
import Hero from '../Img/Kinnect_wall.jpg';
import "../css/projects.scss";
import "../css/Card.scss";

class Led extends Component{
    render() {
        return(
            <div>
                <HeaderImg Hero={Hero} Text={"1050 leds and an Xbox Kinect"} SubText={"Pickathon"} />
                <Card className="Projects">
                <h1>1050 leds and an Xbox Kinect</h1>
                
                <Card.Body>
                    <h2>Intro</h2>
                    <p>Back in May 2018 my web developer pal Dan Wright, roped me into collaborating with him on an art installation at Pickathon 2018. His original concept for the interactive project was to use the flaschen taschen project, and build a giant Etch-a-Sketch that would be operated by two people. After a few morning coffee sessions in our living room the project evolved into a light display that would use Xbox Kinect it depth sensor to project human movement even in pitch black darkeness. I took the challenge of getting the data from the Kinect to display on the LED display.</p>
                    <p>We are now expanding our collaboration into new art projects.</p>
                
                    <h2>Challenges</h2>
                    <p>The first challenge was understanding how the flaschen taschen project works. his Project uses Udp Server/Client system, we were to use the unmodified server for the project that would run on a raspberry pi. Project provided an API in C++, that would allow one to set each individual pixel to the desired color.</p>
                    <p>Second challenge, was studying the Xbox Kinect api, and what sensor would work best for our purposes. I came to the conclusion that the depth sensor would be the best option since it needed no lighting to get data to display. The Xbox Kinect support is only for Windows, and trying to implement on OSX. I found some open source wrappers to the Kinect API at Open Kinect that would work on the desired setup.</p>
                    <p>Finally I had to figure out how to take the data from the depth sensor, and convert that to a useful piece of data. What came to mind at the moment was to use OpenGl to render an image in a window. Use OpenGl API to get pixels from the window displayed on my computer screen from the depth sensor, and save the desired pixels. Unable to display all the pixels on the LED bottle display, I would skip over x amount based on the display constraints. Save this in an instance of a udp flaschen taschen object, and send this over to the server.</p>

                    <h2>Final Results</h2>
                    <p>With a constrained 2 month project timeline, our first implementation was complete just in time to display at Pickathon’s 20th anniversary festival on August 3rd - 5th 2018. We were able to deliver the display on August 2nd this gave us time complete any final touches before the event opened on August 3rd. We were able to send 15-22 fps with this initial implementation and it worked flawlessly. The display ran perfectly as planned; the only hiccup we encountered was due to a power source failure at the event level, it got us scrambling for a bit but once we reset everything was running smooth again.</p>
                    <p>No sooner did we get unpacked from Pickathon then we were invited to display again at the Portland Winter Light Festival 2019. Dan and I have rethought the concept and we plan to use Glow in the dark paint, in an enclosed display instead of LED light to render our images. The enclosed space will be more practical for typical Oregon February weather patterns. We plan to flash the paint with LED’s to hold a portrait image that lasts for a minute or so.</p>
                    <p>The code conversions I am working on now should make our platform more flexible allowing us to focus on the other technical challenges of this new implimentation.</p>
                
                    <h2>Demo</h2>

                </Card.Body>
                <Card.Body className="video-body">
                    
                    <iframe className="video" src="https://drive.google.com/file/d/1XmJuSfNQg-ILEWU36KPvZy8sj7tr_yjs/preview" width="640" height="480"></iframe>
                </Card.Body>
            </Card>
            
        </div>
        );
    }
}

export default Led;