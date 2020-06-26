import React from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";
import axios from "axios";

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get(this.props.url).then((res) => {
      const data = res.data._embedded.municipalities;
      this.setState({ data, loading: false });
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

  render() {
    const data = this.state.data;
    const loading = this.state.loading;
    console.log(loading);

    return (
      <FeatureGroup>
        {data.map((data) => {
          this.style = (feature) => {
            return {
              color: "white",
              weight: 2,
              opacity: 1,
              fillColor:
                data.population > 50000
                  ? "#800026"
                  : data.population > 30000
                  ? "#BD0026"
                  : data.population > 10000
                  ? "#E31A1C"
                  : data.population > 5000
                  ? "#FC4E2A"
                  : data.population > 1000
                  ? "#FD8D3C"
                  : data.population > 500
                  ? "#FEB24C"
                  : data.population > 100
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
              key={data.id}
              data={data.geometry}
              style={this.style}
            >
              <Popup>
                <p>{data.short_name}</p>
                <p>Население: {data.population}</p>
              </Popup>
            </GeoJSON>
          );
        })}
      </FeatureGroup>
    );
  }
}
