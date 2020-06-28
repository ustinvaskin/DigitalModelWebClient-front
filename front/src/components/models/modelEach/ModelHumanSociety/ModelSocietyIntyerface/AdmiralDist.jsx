import Graph from "react-graph-vis";

import React from "react";

class ChartSPB extends React.Component {
  state = {
    graph: {
      nodes: [
        {
          id: 1,
          label: "Моложе трудоспособного возраста",
          color: "#F47575",
          value: 20,
          provision: 0.4,
          avg_age: 8,
        },
        {
          id: 1.1,
          label: "Дети дошкольного возраста",
          color: "#F1E15B",
          value: 10,
          provision: 0.2,
          avg_age: 5,
        },
        {
          id: 1.2,
          label: "Дети младшего школьного возраста",
          color: "#F47575",
          value: 8,
          provision: 0.4,
          avg_age: 9,
        },
        {
          id: 1.3,
          label: "Подростки младшего возраста",
          color: "#F47575",
          value: 5,
          provision: 0.4,
          avg_age: 13,
        },
        {
          id: 2,
          label: "Трудоспособного возраста",
          color: "#61CDBB",
          value: 60,
          provision: 0.8,
          avg_age: 27,
        },
        {
          id: 2.1,
          label: "Студенты",
          color: "#61CDBB",
          value: 18,
          provision: 0.9,
          avg_age: 20,
        },
        {
          id: 2.2,
          label: "Работающие горожане среднего возраста",
          color: "#61CDBB",
          value: 30,
          provision: 0.8,
          avg_age: 34,
        },
        {
          id: 3,
          label: "Старше трудоспособного возраста",
          color: "#61CDBB",
          value: 20,
          provision: 0.7,
          avg_age: 65,
        },
        {
          id: 4,
          label: "Родители",
          color: "#F47575",
          value: 40,
          provision: 0.5,
          avg_age: 32,
        },
        {
          id: 4.1,
          label: "Горожане с младенцами",
          color: "#F1E15B",
          value: 20,
          provision: 0.3,
          avg_age: 27,
        },
        {
          id: 4.2,
          label: "Горожане с детьми до-детсадовского возраста",
          color: "#F1E15B",
          value: 20,
          provision: 0.3,
          avg_age: 29,
        },
        {
          id: 5.1,
          label: "Владельцы собак",
          color: "#F1E15B",
          value: 25,
          provision: 0.3,
          avg_age: 40,
        },
        {
          id: 5.2,
          label: "Горожане, ведущие активный образ жизни",
          color: "#F47575",
          value: 20,
          provision: 0.4,
          avg_age: 29,
        },
      ],
      edges: [
        { from: 1, to: 1.1 },
        { from: 1, to: 1.2 },
        { from: 1, to: 1.3 },
        { from: 1.1, to: 1.2 },
        { from: 1.2, to: 1.3 },
        { from: 1, to: 2 },
        { from: 2, to: 2.1 },
        { from: 2, to: 2.2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2.1, to: 2.2 },
        { from: 4, to: 4.1 },
        { from: 4, to: 4.2 },
        { from: 4.1, to: 4.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
        { from: 4.2, to: 5.2 },
      ],
    },
  };
  render() {
    const options = {
      layout: {
        randomSeed: undefined,
        improvedLayout: true,
        clusterThreshold: 150,
        hierarchical: {
          enabled: false,

          direction: "UD", // UD, DU, LR, RL
          sortMethod: "hubsize", // hubsize, directed
          shakeTowards: "leaves", // roots, leaves
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
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
      },
    };

    return (
      <Graph
        graph={this.state.graph}
        options={options}
        events={events}
        style={{ height: "440px" }}
      />
    );
  }
}

export default ChartSPB;
