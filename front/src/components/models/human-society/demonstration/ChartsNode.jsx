import Graph from "react-graph-vis";

import React from "react";

function ChartNodes(props) {
  console.log(props)
  let data = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  }
  // return (<br/>);
    //let selectedGroupId = '';
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
          height: "500px"
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
        let { nodes, edges } = event;
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges)
      }
    };
    return (
      <Graph
        graph={data}
        //data={selectedGroupId}
        // options={options}
        // events={events}
        style={{ height: "640px" }}
      />
    );
}

export default ChartNodes;
