import React, { Component } from "react";
import { ProjectsPage, HomePage } from "..";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <ProjectsPage />
      </div>
    );
  }
}
