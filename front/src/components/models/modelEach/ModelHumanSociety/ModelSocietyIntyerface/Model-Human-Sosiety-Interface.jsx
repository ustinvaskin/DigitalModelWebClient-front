import React, { useEffect } from "react";

import Main from "./Main";

function ModelPopulationDescription() {

  // To scroll up back again
  useEffect(() => {
      window.scrollTo(0, 0);
  });
  return <Main />;
}

export default ModelPopulationDescription;
