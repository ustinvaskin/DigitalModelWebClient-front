import React from "react";

import MainAndMAP from "./MainEvents";

class EventsInterface extends React.Component {
  state = {};

  // To scroll up back again
  componentDidMount() {
    {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return <MainAndMAP />;
  }
}

export default EventsInterface;
