import React from "react";

import Main from "./Main";

class ModelPopulationDescription extends React.Component {
  state = {};

  // To scroll up back again
  componentDidMount() {
    {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return <Main />;
  }
}

export default ModelPopulationDescription;
