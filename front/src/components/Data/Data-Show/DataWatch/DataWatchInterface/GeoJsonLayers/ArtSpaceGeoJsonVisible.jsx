import React from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";
import axios from "axios";

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      art_spaces: [],
    };
  }

  myStyle = () => {
    return {
      fillColor: "red",
      weight: 2,
      opacity: 1,
      color: "red",
      dashArray: "1",
      fillOpacity: 0.7,
    };
  };

  componentDidMount() {
    axios.get(this.props.url).then((res) => {
      const art_spaces = res.data._embedded.art_spaces;
      this.setState({ art_spaces });
    });
  }

  render() {
    console.log(this.state.art_spaces);
    return (
      <FeatureGroup>
        {this.state.art_spaces.map((art_space) => {
          this.style = (feature) => {
            return {
              color: "red",
              weight: 2,
              opacity: 1,
              fillColor: "#800026",
              dashArray: "3",
              fillOpacity: 0.5,
            };
          };
          return (
            <GeoJSON
              key={art_space.name}
              data={art_space.geometry}
              style={this.style}
            >
              <Popup>
                <p>Art Space</p>
              </Popup>
            </GeoJSON>
          );
        })}
      </FeatureGroup>
    );
  }
}
