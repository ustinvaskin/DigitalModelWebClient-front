import React from "react";

import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";

import { Map, Popup, Marker, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";

import "./Styles/styles.css";

import Basemap from "./BaseMap";

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
      date1: [],
      showChart: false,
      ShowMarkers: false,
      showChartHashtag: false,
      hashatgsFrequesncy: [],
    };
  }

  onClearEvents = () => {
    window.location.reload();
  };

  // Change tilelayer
  onBMChange = (bm) => {
    console.log(this);
    this.setState({
      basemap: bm,
    });
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

    var hashtag = null;
    var cnt = 0;
    let fooo = [];
    for (var i = 0; i < merged.length; i++) {
      if (merged[i] != hashtag) {
        if (cnt > 0) {
          fooo.push([hashtag, cnt]);
        }
        hashtag = merged[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    this.setState({
      hashatgsFrequesncy: fooo,
    });
    console.table(fooo);
    console.log(fooo);

    this.setState({
      showChartHashtag: true,
    });
  };

  countWithDays = () => {
    // array merging events
    let myDaysArray = [];
    {
      this.state.events.map((event) => {
        myDaysArray.push(event.start.substring(0, 10));
        console.log(myDaysArray);
      });

      // getting identical values to analayze later
      var mergedDates = [].concat.apply([], myDaysArray);
      console.log(mergedDates);
      mergedDates.sort();

      var date = null;
      var cnt = 0;
      let foo = [];
      for (var i = 0; i < mergedDates.length - 1; i++) {
        if (mergedDates[i] !== date) {
          if (cnt > 0) {
            foo.push([date, cnt]);
          }
          date = mergedDates[i];
          cnt = 1;
        } else {
          cnt++;
        }
      }
      this.setState({
        date1: foo,
      });
      console.table(foo);
      console.log(foo);
      this.setState({
        showChart: true,
      });
    }
  };

  onShowEvents = () => {
    axios
      .get(`${process.env.REACT_APP_EVENTS_API}/incidents/search/getByDate`, {
        params: {
          minDate: `${this.state.startDate}-01`,
          maxDate: `${this.state.endDate}-30`,
        },
      })
      .then((res) => {
        const events = res.data._embedded.incidents;
        this.setState({ events });
        this.setState({ onShowEvent: true });
        this.countWithDays();
        this.count();
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
    //console.log([[["Dinosaur", "Length"]].concat(this.state.date1)]);
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
                  Публикации в социальных сетях
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
                  Публикации в социальных сетях
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
                      type="month"
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
                      type="month"
                      id="end"
                      name="trip-start"
                      onChange={this.onSelectEnd}
                    />
                  </div>

                  <button
                    class="button is-outlined is-danger is-in-problems"
                    onClick={this.onShowEvents}
                  >
                    Применить
                  </button>
                  <button
                    class="button is-outlined is-danger is-in-problems"
                    onClick={this.onClearEvents}
                  >
                    Отчистить
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
                    {this.state.onShowEvent &&
                      this.state.events.map((event) => {
                        return (
                          <Marker
                            key={Math.floor(Math.random() * 100)}
                            position={event.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup key={event.id}>
                              <p>{event.title}</p>
                              <p>{event.start} </p>
                            </Popup>
                          </Marker>
                        );
                      })}
                    {/* BaseMap Component */}
                    <Basemap
                      basemap={this.state.basemap}
                      onChange={this.onBMChange}
                    />
                    )
                  </Map>
                </div>
                {this.state.showChart && this.state.events.length > 6 && (
                  <div>
                    <div className="chartIsInEvents">
                      <br />
                      <h3 class="heading-sidebar is-size-6 has-text-centered	 ">
                        Количество публикаций по дням{" "}
                      </h3>
                      <ResponsiveBar
                        data={this.state.date1.map((date) => {
                          return {
                            Дата: date[0],
                            "Количество на": date[1],
                          };
                        })}
                        keys={["Количество на"]}
                        indexBy="Дата"
                        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                        padding={0.3}
                        colors={{ scheme: "nivo" }}
                        defs={[
                          {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "#38bcb2",
                            size: 4,
                            padding: 1,
                            stagger: true,
                          },
                          {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: "#eed312",
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                          },
                        ]}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", 1.6]],
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: -40,
                          legend: "Дата",
                          legendPosition: "middle",
                          legendOffset: 62,
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "Количество",
                          legendPosition: "middle",
                          legendOffset: -40,
                        }}
                        enableGridX={true}
                        enableLabel={false}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                          from: "color",
                          modifiers: [["darker", 1.6]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="chartIsInEvents">
                      <h3 class="heading-sidebar is-size-6 has-text-centered	 ">
                        Частота хештегов{" "}
                      </h3>
                      <ResponsiveBar
                        data={this.state.hashatgsFrequesncy.map((hastag) => {
                          return {
                            "Кол-во": hastag[0],
                            Хэштег: hastag[1],
                          };
                        })}
                        keys={["Хэштег"]}
                        indexBy="Кол-во"
                        margin={{ top: 50, right: 50, bottom: 90, left: 60 }}
                        padding={0.3}
                        colors={{ scheme: "accent" }}
                        defs={[
                          {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "#38bcb2",
                            size: 4,
                            padding: 1,
                            stagger: true,
                          },
                          {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: "#eed312",
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                          },
                        ]}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", 1.6]],
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: -40,
                          legend: "Кол-во",
                          legendPosition: "middle",
                          legendOffset: 62,
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "Количество",
                          legendPosition: "middle",
                          legendOffset: -40,
                        }}
                        enableGridX={true}
                        enableLabel={false}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                          from: "color",
                          modifiers: [["darker", 1.6]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                      />
                    </div>
                  </div>
                )}
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainEvents;
