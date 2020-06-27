import Graph from "react-graph-vis";

import React from "react";

function ChartSPB(props) {
    const options = {
      layout: {
        randomSeed: true,
        improvedLayout: true,
        clusterThreshold: 500000,
        hierarchical: {
          enabled: false,
          direction: "UD", // UD, DU, LR, RL
          sortMethod: "directed", // hubsize, directed
        },
      },
      edges: {
        color: "#b0b0b0",
        arrows: {
          to: {
            enabled: false,
          },
          middle: {
            enabled: false,
          },
          from: {
            enabled: false,
          },
        },
      },
      nodes: {
        shape: "dot",
        scaling: {
          customScalingFunction: function (min, max, total, value) {
            return value / total;
          },
          min: 0,
          max: 150,
        },
      },
    };

    const events = {
      select: function (event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes.value);
        console.log("Selected edges:");
        console.log(edges);
      },
    };

    return (
      <Graph
        graph={props.data}
        options={options}
        events={events}
        style={{ height: "640px" }}
      />
    );
}

export default ChartSPB;
