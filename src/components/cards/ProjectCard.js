import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import {Frame} from 'framer'

export default function ProjectCard(props) {

  let [isHover, setHover] = useState(false);
  const project = props.project


  let Card = styled(Frame)`
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  `

  let Header = styled.h3`
    margin: 30px 10px;
    display: flex;
    justify-content: center;
    color: white;
  `

  let Body = styled.p`
    display: flex;
    align-items: center;
    margin: 0% 5%;
  `

  function onHover() {
    if (isHover === true) {
      setHover(false);
    }
    if (isHover === false) {
      setHover(true);
    }
  }


  return(
    <Card height={300} width={300} position={'relative'}>
      <Header>{project.name}</Header>
      <Body>{project.description}</Body>
    </Card>
  )

    // return (
    //   <div
    //     onMouseEnter={onHover}
    //     onMouseLeave={onHover}
    //     className="pb-4"
    //   >
    //     <a className="project-link" href={project.href} target="_blank">
    //       {!isHover ? <Card
    //         bg="secondary"
    //         text="light"
    //         style={{ width: '350px', height: '300px' }}
    //       >
    //         <Card.Header as="h5">{project.name}</Card.Header>

    //         <Card.Body>
    //           <Card.Text>{project.description}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //         :
    //         <Card
    //         bg="light"
    //         text="secondary"
    //         style={{ width: '350px', height: '300px' }}
    //       >
    //         <Card.Header as="h5">{project.name}</Card.Header>

    //         <Card.Body>
    //           <Card.Text>{project.description}</Card.Text>
    //         </Card.Body>
    //         </Card>}

    //     </a>
    //   </div>
    // )
}
