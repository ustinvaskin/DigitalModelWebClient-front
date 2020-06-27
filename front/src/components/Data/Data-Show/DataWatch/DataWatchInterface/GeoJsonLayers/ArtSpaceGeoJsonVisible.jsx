import React, { useEffect, useState } from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";
import axios from "axios";

function GeojsonLayer(props) {
    const [art_spaces, setArt_Spaces] = useState([]);

  const myStyle = () => {
    return {
      fillColor: "red",
      weight: 2,
      opacity: 1,
      color: "red",
      dashArray: "1",
      fillOpacity: 0.7,
    };
  };

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setArt_Spaces(res.data._embedded.art_spaces);
    });
  });

    console.log(art_spaces);
    return (
      <FeatureGroup>
        {art_spaces.map((art_space) => {
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

export default GeojsonLayer;