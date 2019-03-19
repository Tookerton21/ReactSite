import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import ProfilePic from '../Img/Niko.jpg';


class HomeBody extends Component{

    render(){
        var cardPos = {
            width: '55%',
            marginTop: '20px',
            marginBottom: '45px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        var imgPos = {
            width: '73%',
            height: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        return(
            <Card style={cardPos}>
             <Card.Title>Niko Ruiz</Card.Title>
            <Card.Img variant="top" src={ProfilePic} style={imgPos} fluid/>
            <Card.Body>
             
              <Card.Text>
              I'm one of those recent “Californian transplants”. I fell victim to Portland’s magnetic pull seven years ago. I was on an eight-week road trip in 2011 when I stopped into the Rose city for a day and a half to visit a friend. That's all it really took for me to fall in love with the city and promise myself that I would move to Portland the following year. I'm one to keep my promises and did exactly that. I love exploring the city especially by bike. 
              </Card.Text>
              
            </Card.Body>
          </Card>
        );
    }
}

export default HomeBody;