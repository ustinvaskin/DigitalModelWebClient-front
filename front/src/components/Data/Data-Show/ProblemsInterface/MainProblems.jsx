import React from "react";

import axios from "axios";
import L from "leaflet";

import { Map, Popup, Marker, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import "./Styles/styles.css";

import Basemap from "./BaseMap";

class MainAndMapProblems extends React.Component {
  constructor() {
    super();
    this.state = {
      problems: [],
      startDate: "",
      groups: [],
      groupselected: "",
      endDate: "",
      onShowProblems: false,
      markers: [51.505, -0.09],
      // Id for later selecting specifit MO or District

      // Map basic info
      latLon: [59.97003, 30],
      zoom: 8.9,
      basemap: "osm",
    };
  }

  // Change tilelayer

  onBMChange = (bm) => {
    console.log(this);
    this.setState({
      basemap: bm,
    });
  };

  onShowProblems = () => {
    axios
      .get(`${process.env.REACT_APP_PROBLEMS_API}/api/problems/search`, {
        params: {
          minDate: this.state.startDate,
          maxDate: this.state.endDate,
          category: this.state.groupselected,
          limit: 100,
        },
      })
      .then((res) => {
        const problems = res.data._embedded.problems;
        this.setState({ problems });
        this.setState({ onShowProblems: true });
      });
  };

  onClearEvents = () => {
    window.location.reload();
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_PROBLEMS_API}/api/groups/category`)
      .then((res) => {
        const groups = res.data._embedded.groups;
        this.setState({ groups });
      });
  }

  onSelectStart = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };

  onSelectEnd = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  onselectGropup = (e) => {
    this.setState({
      groupselected: e.target.value,
    });
  };

  // Getting data from API

  // To change basemaplayer
  render() {
    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    };

    console.log(this.state.problems);
    console.log(this.state.groupselected);

    const iconForEvent = new L.Icon({
      iconUrl: require("../../../../img/marker.svg"),
      iconRetinaUrl: require("../../../../img/marker.svg"),
      iconSize: new L.Point(30, 30),
      className: "leaflet-div-icon",
    });

    return (
      <div>
        <br />
        <br />
        <br />
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <nav
            class=" breadcrumb has-arrow-separator is-centered"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <Link to="/data">Данные</Link>
              </li>
              <li>
                <Link to="/dataShow">Оперативные данные</Link>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  Жалобы и обращения населения на портал Наш Санкт-Петербург
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* END OF _____Breadcrumbs */}

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              {/* Aside Left */}
              {/* Aside Left Name */}
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-4">
                  Жалобы и обращения населения на портал Наш Санкт-Петербург
                </h3>

                {/* END OF ___Aside Left Name */}
                {/* Choose Territiry checkboxes */}
                <ul>
                  <li class="sidebar-item is-size-6">
                    <div className=" has-text-left is-choose-territory">
                      <br />
                      <h3 class="heading-sidebar is-size-6 ">
                        Выберите период
                      </h3>
                      <br />
                      <div className="sidebar-main"></div>
                    </div>
                  </li>
                  <div>
                    <label for="start">Начало:</label>
                    <input
                      className=""
                      type="date"
                      id="start"
                      name="trip-start"
                      onChange={this.onSelectStart}
                    />
                  </div>
                  <br />
                  <div>
                    <label for="start">Конец:</label>
                    <input
                      className="dateInput"
                      type="date"
                      id="end"
                      name="trip-start"
                      onChange={this.onSelectEnd}
                    />
                  </div>
                </ul>
                <br />
                <h3 class="heading-sidebar is-size-6 ">
                  Выберите категорию обращения
                </h3>
                <br />
                <select
                  className="select-css"
                  name="mo"
                  id="mo"
                  // this is to choose value from a list and then use to show only spesific multypoligon and data for this specific multypoligon
                  onChange={this.onselectGropup}
                >
                  <option selected="selected">Не выбрано (группа)</option>
                  {this.state.groups.map((data, e) => (
                    <option
                      className="option-css"
                      class="list-item"
                      value={data.name}
                      name={data.name}
                    >
                      {data.name}
                    </option>
                  ))}
                </select>
                <button
                  class="button is-outlined is-danger is-in-problems"
                  onClick={this.onShowProblems}
                >
                  Применить
                </button>
                <button
                  class="button is-outlined is-danger is-in-problems"
                  onClick={this.onClearEvents}
                >
                  Отчистить
                </button>
                {this.state.groupselected === "" &&
                  this.state.onShowProblems === true && (
                    <h1>Выберите группу</h1>
                  )}
                {this.state.problems.length === 0 &&
                  this.state.onShowProblems === true && (
                    <h1>По данным параметрам проблем не найдено</h1>
                  )}
              </div>

              {/* // MAP  */}
              {/* END OF _____Aside Left */}
              {/* Main cotent  */}
              <div class="col-md-9 col-sm-12 col-xs-12 news-content">
                <div className="leaflet-container leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
                  <Map
                    ref="map"
                    center={this.state.latLon}
                    zoom={this.state.zoom}
                  >
                    <TileLayer
                      url={basemapsDict[this.state.basemap]}
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {this.state.problems.map((problem) => {
                      return (
                        <Marker
                          key={problem._self}
                          position={problem.coordinates}
                          icon={iconForEvent}
                        >
                          <Popup>
                            <p>{problem.description}</p>
                            <p>{`Статус: ${problem.status}`}</p>
                            {/* <p>Cсылка ${problem._links.self}</p> */}
                          </Popup>
                        </Marker>
                      );
                    })}
                    {/* BaseMap Component */}
                    <Basemap
                      basemap={this.state.basemap}
                      onChange={this.onBMChange}
                    />
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainAndMapProblems;
