import React from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";
import axios from "axios";

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocksall: [],
    };
  }

  myStyle = () => {
    return {
      fillColor: "white",
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "1",
      fillOpacity: 0.7,
    };
  };

  componentDidMount() {
    axios.get(this.props.url).then((res) => {
      const blocksall = res.data._embedded.blocks;
      this.setState({ blocksall });
    });
  }

  render() {
    return (
      <FeatureGroup>
        {this.state.blocksall.map((blocksall) => {
          this.style = (feature) => {
            return {
              color: "white",
              weight: 2,
              opacity: 1,
              fillColor:
                blocksall.population > 25000
                  ? "#800026"
                  : blocksall.population > 20000
                  ? "#BD0026"
                  : blocksall.population > 10000
                  ? "#E31A1C"
                  : blocksall.population > 5000
                  ? "#FC4E2A"
                  : blocksall.population > 1000
                  ? "#FD8D3C"
                  : blocksall.population > 500
                  ? "#FEB24C"
                  : blocksall.population > 100
                  ? "#FED976"
                  : "#FFEDA0",
              dashArray: "3",
              fillOpacity: 0.5,
            };
          };
          return (
            <GeoJSON
              key={blocksall.id}
              data={blocksall.geometry}
              style={this.style}
            >
              <Popup>
                <p>Нвселение {blocksall.population}</p>
              </Popup>
            </GeoJSON>
          );
        })}
      </FeatureGroup>
    );
  }
}
