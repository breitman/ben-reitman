import React, {Component} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from './linked-in-profile.jpg'

class AboutMePage extends Component {
  render() {
     return (
      <Container id="aboutme">
        <Row>
          <Col>
            <p className="about">
              I was born and raised in Palm Beach Gardens, Florida.
              During my Sophomore year of High School, I became extremely
              interested in programming after enrolling in my first Computer
              Science class. I am a recent grad from the University of
              Wisconsin-Madison with a BS degree in Computer Science and a
              Certificate in Entrepreneurship. I am also a graduate of the
              Fullstack Academy of Code!
            </p>
          </Col>
          <Col>
            <img className="about-image" src={img} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AboutMePage
