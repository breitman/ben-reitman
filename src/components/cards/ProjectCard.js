import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  padding: 8px;
  background-color: #001b2e;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 1), 0 15px 40px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 1), 0 15px 40px rgba(0, 0, 0, 1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 1), 0 15px 40px rgba(0, 0, 0, 1);
`;

const Header = styled.h3`
  margin-top: 30px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  color: white;
`;

const Body = styled.p`
  display: flex;
  // align-items: center;
  margin-left: 5%;
`;

const Link = styled.a`
  background-color: #ffc49b;
  display: flex;
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #001b2e;
  text-align: center;
  height: 50px;
  padding: 8px;
  margin-right: 10px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);

  &:hover {
    text-decoration: none;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.disabled {
    background-color: grey;
  }
`;

export default function ProjectCard(props) {
  const project = props.project;

  return (
    <Card>
      <Header>{project.name}</Header>
      <Body>{project.description}</Body>
      <Link className={project.disable ? "disabled" : ""} href={project.href}>
        {project.goTo}
      </Link>
    </Card>
  );
}
