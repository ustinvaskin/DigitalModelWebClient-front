import React from "react";

import axios from "axios";

import { Map, Popup, Marker, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";

import "./Styles/styles.css";

class MainEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      onShowEvent: false,
      ChosenEventsTitles: [],
      // Map basic info
      latLon: [59.97003, 30],
      zoom: 8.9,
      basemap: "osm",
    };
  }

  onClearEvents = () => {
    window.location.reload();
  };

  count = () => {
    // array merging events
    let myArray = [];
    {
      this.state.events.map((event) => {
        myArray.push(event.title);
        console.log(myArray);
      });
    }
    // getting identical values to analayze later
    var merged = [].concat.apply([], myArray);
    console.log(merged);
    merged.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < merged.length; i++) {
      if (merged[i] != current) {
        if (cnt > 0) {
          console.log(current + " comes --> " + cnt + " times<br>");
        }
        current = merged[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      console.log(current + " comes --> " + cnt + " times");
    }
  };

  onShowEvents = () => {
    axios
      .get(`${process.env.REACT_APP_EVENTS_API}/incidents/search/getByDate`, {
        params: {
          minDate: this.state.startDate,
          maxDate: this.state.endDate,
        },
      })
      .then((res) => {
        const events = res.data._embedded.incidents;
        this.setState({ events });
        this.setState({ onShowEvent: true });
      });
  };

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

  // Getting data from API
  // To change basemaplayer
  render() {
    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    };

    const iconForEvent = new L.Icon({
      iconUrl: require("../../../../img/marker.svg"),
      iconRetinaUrl: require("../../../../img/marker.svg"),
      iconSize: new L.Point(30, 30),
      className: "leaflet-div-icon",
    });

    console.log(this.state.events);

    return (
      <div>

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <nav
            className=" breadcrumb has-arrow-separator is-centered"
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
              <li className="is-active">
                <a href="#" aria-current="page">
                  Публикации в социальных сетях
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* END OF _____Breadcrumbs */}

        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              {/* Aside Left */}
              {/* Aside Left Name */}
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-4">
                  Публикации в социальных сетях
                </h3>

                {/* END OF ___Aside Left Name */}
                {/* Choose Territiry checkboxes */}
                <ul>
                  <li className="sidebar-item is-size-6">
                    <div className=" has-text-left is-choose-territory">
                      <br />
                      <h3 className="heading-sidebar is-size-6 ">
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

                  <button
                    className="button is-outlined is-danger is-in-problems"
                    onClick={this.onShowEvents}
                  >
                    Применить
                  </button>
                  <button
                    className="button is-outlined is-danger is-in-problems"
                    onClick={this.onClearEvents}
                  >
                    Отчистить
                  </button>
                  <button
                    className="button is-outlined is-danger is-in-problems"
                    onClick={this.count}
                  >
                    console
                  </button>
                  <br />
                  {this.state.events.length === 0 &&
                    this.state.onShowEvent === true && (
                      <h1>
                        Событий на заданный период нет, выберите больший
                        промежуток
                      </h1>
                    )}
                </ul>
              </div>

              {/* // MAP  */}
              {/* END OF _____Aside Left */}
              {/* Main cotent  */}
              <div className="col-md-9 col-sm-12 col-xs-12 news-content">
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
                    {this.state.events.map((event) => {
                      return (
                        <Marker
                          key={event.id}
                          position={event.geometry.coordinates}
                          icon={iconForEvent}
                        >
                          <Popup>
                            <p>{event.title}</p>
                            <p>{event.start} </p>
                          </Popup>
                        </Marker>
                      );
                    })}
                    )
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

export default MainEvents;
