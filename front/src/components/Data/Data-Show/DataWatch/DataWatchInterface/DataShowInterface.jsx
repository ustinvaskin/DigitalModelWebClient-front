import React from "react";

import MainAndMAP from "./Map";

class ModelPopulationDescription extends React.Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <MainAndMAP />;
  }
}

export default ModelPopulationDescription;
