import React from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";
import axios from "axios";

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alldist: [],
      layer: [],
      myStyle: {
        color: "blue",
        weight: 2,
        opacity: 1,
        fillColor: "gray",
        dashArray: "8 5",
        coordinates: [],
      },
    };
  }

  componentDidMount() {
    axios.get(this.props.url).then((res) => {
      const alldist = res.data._embedded.municipalities;
      this.setState({ alldist });
    });
  }

  highlightFeature = (e) => {
    this.state.layer = e.target;
    this.state.layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
  };

  resetHighlight = (e) => {
    this.state.layer = e.target;
    this.state.layer.resetStyle();
  };

  // zoomToFeature(e) {
  //   Map.fitBounds(e.target.getBounds());
  // }
  render() {
    return (
      <FeatureGroup>
        {this.state.alldist.map((alldist) => {
          this.style = (feature) => {
            return {
              color: "white",
              weight: 2,
              opacity: 1,
              fillColor:
                alldist.population > 500000
                  ? "#800026"
                  : alldist.population > 300000
                  ? "#BD0026"
                  : alldist.population > 200000
                  ? "#E31A1C"
                  : alldist.population > 100000
                  ? "#FC4E2A"
                  : alldist.population > 50000
                  ? "#FD8D3C"
                  : alldist.population > 25000
                  ? "#FEB24C"
                  : alldist.population > 10000
                  ? "#FED976"
                  : "#FFEDA0",
              dashArray: "3",
              fillOpacity: 0.5,
            };
          };
          return (
            <GeoJSON
              onmouseover={this.highlightFeature}
              onmouseout={this.resetHighlight}
              onclick={this.zoomToFeature}
              key={alldist.id}
              data={alldist.geometry}
              style={this.style}
              value={alldist.short_name}
            >
              <Popup>
                <p>{alldist.short_name}</p>
                <p>Население: {alldist.population}</p>
              </Popup>
            </GeoJSON>
          );
        })}
      </FeatureGroup>
    );
  }
}
