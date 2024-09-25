import React from "react";
import Typed from "typed.js";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GraphQl_Logo from "../../logos/graphql.svg";
import HTML_Logo from "../../logos/html-5.svg";
import Javascript_Logo from "../../logos/javascript.svg";
import Node_Logo from "../../logos/nodejs-1.svg";
import React_Logo from "../../logos/react.svg";
import Redux_Logo from "../../logos/redux.svg";
import Jest_Logo from "../../logos/jest-0.svg";
import CSS_Logo from "../../logos/css3.svg";
import Python_Logo from "../../logos/python-5.svg";
import Typescript_Logo from "../../logos/typescript.svg";
import Unity_Logo from "../../logos/unity-69.svg";
import Java_Logo from "../../logos/java-4.svg";
import Git_Logo from "../../logos/git.svg";
import FireBase_Logo from "../../logos/firebase-1.svg";
import PostGres_Logo from "../../logos/postgresql.svg";
import AWS_Logo from "../../logos/aws.svg";
import MongoDB_Logo from "../../logos/mongoDB.svg";
import Slider from "../helpers/Slider.js";

const Icon = styled(FontAwesomeIcon)`
  color: #294c60;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;

const Logo = styled.img`
  padding-right: 60px;
  height: auto;
  width: 130px;
`;

const SLIDES = [
  <Logo src={Python_Logo} alt="Python Logo" />,
  <Logo src={Typescript_Logo} alt="TS Logo" />,
  <Logo src={Unity_Logo} alt="Unity Logo" />,
  <Logo src={FireBase_Logo} alt="Firebase logo" />,
  <Logo src={PostGres_Logo} alt="Postgresql Logo" />,
  <Logo src={Java_Logo} alt="Java Logo" />,
  <Logo src={Git_Logo} alt="Git Logo" />,
  <Logo src={GraphQl_Logo} alt="GraphQL Logo" />,
  <Logo src={HTML_Logo} alt="HTML Logo" />,
  <Logo src={Javascript_Logo} alt="JS Logo" />,
  <Logo src={Node_Logo} alt="Node Logo" />,
  <Logo src={React_Logo} alt="React Logo" />,
  <Logo src={Redux_Logo} alt="Redux Logo" />,
  <Logo src={Jest_Logo} alt="Jest Logo" />,
  <Logo src={CSS_Logo} alt="CSS Logo" />,
  <Logo src={AWS_Logo} alt="AWS Logo" />,
  <Logo src={MongoDB_Logo} alt="MongoDB Logo" style={{ width: "200px" }} />,
];

const options = {
  strings: [
    `I am <span style="color: #FFC49B"> Ben Reitman</span>`,
    'I am a <span style="color: #FFC49B">Programmer</span>',
    'I am a <span style="color: #FFC49B">Traveler</span>',
    'I am a <span style="color: #FFC49B">Gamer</span>',
    'I am an <span style="color: #FFC49B">Athlete</span>',
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 800,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
};

const TypedText = styled.div`
  font-size: 2.75rem;
  align-items: center;
  vertical-align: middle;
  white-space: "pre";
  text-align: center;
  color: #001b2e;
  vertical-align: middle;
  margin-bottom: 32px;
`;

const Container = styled.div`
  padding-top: 120px;
`;

const HomePage = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const typed = new Typed(ref.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <TypedText ref={ref} />
      <div style={{ textAlign: "center" }}>
        <a
          className="icon"
          href="https://github.com/breitman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center" }}
        >
          <Icon icon={["fab", "github"]} size="5x" />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/benjamin-reitman-769b21161/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={["fab", "linkedin"]} size="5x" transform="right-1" />
        </a>
        <a
          className="icon"
          href="https://docs.google.com/document/d/e/2PACX-1vR_TdaXa9dBPiJufiA0gPVIU2urvdOkCHqN3hliCuOV69XrAZ8Ro4o8CAJg18RDGx2HeLXM5tnhp5UA/pub"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Icon icon="file-alt" size="5x" transform="right-3" />
        </a>
      </div>
      <div style={{ margin: "120px 0px" }}>
        <Slider slides={SLIDES} />
      </div>
    </Container>
  );
};

export default HomePage;
