import React from "react";
import { GeoJSON, FeatureGroup, Popup } from "react-leaflet";

import axios from "axios";

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DistrictOne: [],
      houses: [],
      MunicipalitiesWithDistrict: [],
      districtName: this.props.terr,
    };
  }

  myStyleDistrictOne = () => {
    return {
      color: "white",
      weight: 2,
      opacity: 1,
      fillColor: "orange",
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
      const DistrictOne = res.data;
      this.setState({ DistrictOne });
    });
    axios.get(`${this.props.url}/municipalities`).then((res) => {
      const MunicipalitiesWithDistrict = res.data._embedded.municipalities;
      this.setState({ MunicipalitiesWithDistrict });
    });
    axios
      .get(
        `${process.env.REACT_APP_MAIN_API}/api/houses/search/findByDistrictId?districtId=${this.props.terr}`
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
          key={this.state.DistrictOne.id}
          data={this.state.DistrictOne.geometry}
          style={this.myStyleDistrictOne}
        >
          <Popup>{this.state.DistrictOne.short_name}</Popup>
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
        {this.state.MunicipalitiesWithDistrict.map((mo) => {
          this.style = (feature) => {
            return {
              color: "white",
              weight: 2,
              opacity: 1,
              fillColor:
                mo.population > 25000
                  ? "#800026"
                  : mo.population > 20000
                  ? "#BD0026"
                  : mo.population > 10000
                  ? "#E31A1C"
                  : mo.population > 5000
                  ? "#FC4E2A"
                  : mo.population > 1000
                  ? "#FD8D3C"
                  : mo.population > 500
                  ? "#FEB24C"
                  : mo.population > 100
                  ? "#FED976"
                  : "#FFEDA0",
              dashArray: "3",
              fillOpacity: 0.5,
            };
          };
          return (
            <GeoJSON key={mo.id} data={mo.geometry} style={this.style}>
              <Popup>
                <p> МО {mo.short_name}</p>
                <p> Население {mo.population}</p>
              </Popup>
            </GeoJSON>
          );
        })}
      </FeatureGroup>
    );
  }
}
