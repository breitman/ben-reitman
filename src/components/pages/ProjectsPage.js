import React, {Component} from 'react'
import ProjectCard from '../cards/ProjectCard'
import styled from 'styled-components'


let projects = [
  {
    name: 'Poodle',
    description:
      'An open source experimental email client with social features.',
    href: 'https://github.com/PoodleApp/poodle'
  },
  {
    name: 'ARcity',
    description:
      'An immersive Augmented Reality iOS experience that allows users to walk around the city, play AR games, and earn fun collectable trophies.',
    href: 'https://github.com/Capstone-mARio/ARcity'
  },
  { //GET A TM supertext on STAR WARS
    name: 'StarShips',
    description:
      'A parody e-commerce website that sells starships as seen in the Star Wars™ series.',
    href: 'https://grace-starships.herokuapp.com/'
  },
  {
    name: 'The Floor is Lava',
    description:
      'A single player, 2D platformer, endless runner game, where a player has to jump from one platform to another, without falling into the lava. Each platform has its own characteristics, keeping the game challenging and the players’ next moves uncertain.',
    href: 'https://simmer.io/@b_reity/the-floor-is-lava'
  },
  {
    name: 'Zombie Shooter',
    description:
      'A First Person Shooter, zombie surviver game. The objective is to survive rounds by shooting incoming zombies with fun objects picked up from the ground',
    href: 'https://simmer.io/@b_reity/zombie-killer-5000'
  },
  {
    name: '537Make',
    description: 'An imitation of the make utility in Linux/Unix'
  },
  { //BLANK PROJECT MODEL
    name: 'malloc/free',
    description: 'A mock implementation of the malloc and free routines run in C',
  },
]

let count = 1;

let ProjCard  = styled(ProjectCard)`
`

let Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

class ProjectsPage extends Component {

  render() {
    return (
      <div className="projects" id="projects">
        <h1 className="project-title">Projects</h1>
        <Container>
            {projects && projects.map(project => (
              <ProjCard
                className="card"
                project={project}
                key={count++}
              />
            ))}
        </Container>
      </div>
    )
  }
}

export default ProjectsPage;
