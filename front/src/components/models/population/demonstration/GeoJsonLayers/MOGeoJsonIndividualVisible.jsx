import React from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";

import axios from "axios";

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MoOne: [],
      houses: [],
      blocksinMunicipal: [],
      districtName: this.props.terr,
    };
  }

  myStyleMoOne = () => {
    return {
      color: "white",
      weight: 2,
      opacity: 1,
      fillColor: "white",
      dashArray: "8 5",
    };
  };

  myStyleHouse = () => {
    return {
      color: "red",
      weight: 2,
      opacity: 1,
      fillColor: "red",
      dashArray: "8 5",
    };
  };

  componentDidMount() {
    axios.get(this.props.url).then((res) => {
      const MoOne = res.data;
      this.setState({ MoOne });
    });
    axios.get(`${this.props.url}/blocks`).then((res) => {
      const blocksinMunicipal = res.data._embedded.blocks;
      this.setState({ blocksinMunicipal });
    });
    axios
      .get(
        `${process.env.REACT_APP_MAIN_API}/api/houses/search/findByMunicipalId?municipalId=${this.props.terr}`
      )
      .then((res) => {
        const houses = res.data._embedded.houses;
        this.setState({ houses });
      });
  }

  render() {
    return (
      <FeatureGroup>
        <GeoJSON
          key={this.state.MoOne.id}
          data={this.state.MoOne.geometry}
          style={this.myStyleMoOne}
          onclick={this.props.zoom}
        >
          <Popup>{this.state.MoOne.short_name}</Popup>
        </GeoJSON>
        {this.state.houses.map((houses) => {
          this.styleHouse = (feature) => {
            return {
              color: "white",
              weight: 2,
              opacity: 1,
              fillColor:
                houses.populationBalanced > 2000
                  ? "#800026"
                  : houses.populationBalanced > 1000
                  ? "#BD0026"
                  : houses.populationBalanced > 500
                  ? "#E31A1C"
                  : houses.populationBalanced > 300
                  ? "#FC4E2A"
                  : houses.populationBalanced > 200
                  ? "#FD8D3C"
                  : houses.populationBalanced > 100
                  ? "#FEB24C"
                  : houses.populationBalanced > 50
                  ? "#FED976"
                  : "#FFEDA0",
              dashArray: "1",
              fillOpacity: 0.9,
            };
          };
          return (
            <GeoJSON
              key={houses.id}
              data={houses.geometry}
              style={this.styleHouse}
            >
              <Popup>
                <p>{houses.description}</p>
                <p>Адресс {houses.address}</p>
                <p>Год постройки {houses.yearConstruct}</p>
                <p>Кол-во Жителей {houses.populationBalanced}</p>
              </Popup>
            </GeoJSON>
          );
        })}
        {this.state.blocksinMunicipal.map((block) => {
          this.style = (feature) => {
            return {
              color: "white",
              weight: 2,
              opacity: 1,
              fillColor:
                block.population > 25000
                  ? "#800026"
                  : block.population > 20000
                  ? "#BD0026"
                  : block.population > 10000
                  ? "#E31A1C"
                  : block.population > 5000
                  ? "#FC4E2A"
                  : block.population > 1000
                  ? "#FD8D3C"
                  : block.population > 500
                  ? "#FEB24C"
                  : block.population > 100
                  ? "#FED976"
                  : "#FFEDA0",
              dashArray: "3",
              fillOpacity: 0.5,
            };
          };
          return (
            <GeoJSON key={block.id} data={block.geometry} style={this.style}>
              <Popup>
                <p> Квартал ID {block.id}</p>
                <p> Население {block.population}</p>
              </Popup>
            </GeoJSON>
          );
        })}
      </FeatureGroup>
    );
  }
}
