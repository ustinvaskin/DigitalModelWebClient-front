import React from "react";
import axios from "axios";
import { Map, Popup, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import ArtSpaceGeoJsonVisible from "./GeoJsonLayers/ArtSpaceGeoJsonVisible";
import DistrictsGeoJSONLayer from "./GeoJsonLayers/DistrictGeoJsonLayer";
import MOGeojsonLayer from "./GeoJsonLayers/MOGeoJsonLayer";
import { Link } from "react-router-dom";
import "./Styles/styles.css";
import Basemap from "./BaseMap";

class DataShowInterface extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],

      // Map basic info
      latLon: [59.97003, 30],
      zoom: 8.9,
      basemap: "osm",
      schools: [],
      churches: [],
      cemeteries: [],
      charging_stations: [],
      kindergartens: [],
      art_spaces: [],
      colleges: [],
      universities: [],
      onShowChurhces: false,
      onShowSchools: false,
      onShowChargingStations: false,
      onShoweCmeteries: false,
      onShowKindergartens: false,
      ArtSpaceGeoJsonVisible: false,
      DistrictGeoJsonVisible: false,
      MoGeoJsonVisible: false,
      OnShowColleges: false,
      onShowUni: false,
      // List of names for select/option
    };
  }

  componentDidMount() {
    // For initial data
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/schools?size=624`)
      .then((res) => {
        const schools = res.data._embedded.schools;
        this.setState({ schools });
      });
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/churches?size=245`)
      .then((res) => {
        const churches = res.data._embedded.churches;
        this.setState({ churches });
      });
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/charging_stations?size=29`)
      .then((res) => {
        const charging_stations = res.data._embedded.charging_stations;
        this.setState({ charging_stations });
      });
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/cemeteries?size=40`)
      .then((res) => {
        const cemeteries = res.data._embedded.cemeteries;
        this.setState({ cemeteries });
      });
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/kindergartens?size=964`)
      .then((res) => {
        const kindergartens = res.data._embedded.kindergartens;
        this.setState({ kindergartens });
      });
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/colleges?size=101`)
      .then((res) => {
        const colleges = res.data._embedded.colleges;
        this.setState({ colleges });
      });
    axios
      .get(`${process.env.REACT_APP_MAIN_API}/api/universities?size=135`)
      .then((res) => {
        const universities = res.data._embedded.universities;
        this.setState({ universities });
      });
  }
  // Change tilelayer
  onBMChange = (bm) => {
    console.log(this);
    this.setState({
      basemap: bm,
    });
  };

  onShowSchools = (e) => {
    this.setState({
      onShowSchools: e.currentTarget.checked,
    });
  };

  onShowChurhces = (e) => {
    this.setState({
      onShowChurhces: e.currentTarget.checked,
    });
  };

  onShowChargingStations = (e) => {
    this.setState({
      onShowChargingStations: e.currentTarget.checked,
    });
  };

  onShoweCmeteries = (e) => {
    this.setState({
      onShoweCmeteries: e.currentTarget.checked,
    });
  };

  onShowKindergartens = (e) => {
    this.setState({
      onShowKindergartens: e.currentTarget.checked,
    });
  };

  OnShowColleges = (e) => {
    this.setState({
      OnShowColleges: e.currentTarget.checked,
    });
  };

  onShowUni = (e) => {
    this.setState({
      onShowUni: e.currentTarget.checked,
    });
  };

  onShowArtSpaces = (e) => {
    this.setState({
      ArtSpaceGeoJsonVisible: !this.state.ArtSpaceGeoJsonVisible,
    });
  };

  onDistrictGEOJSON = (e) => {
    this.setState({
      DistrictGeoJsonVisible: e.currentTarget.checked,
    });
  };

  onMOGeojsonToggle = (e) => {
    this.setState({
      MoGeoJsonVisible: e.currentTarget.checked,
      DistrictGeoJsonVisible: false,
    });
  };
  render() {
    console.log(process.env.REACT_APP_MAIN_API);
    console.log(this.state.cemeteries);
    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    };

    const iconForEvent = new L.Icon({
      iconUrl: require("../../../../../img/marker.svg"),
      iconRetinaUrl: require("../../../../../img/marker.svg"),
      iconSize: new L.Point(30, 30),
      className: "leaflet-div-icon",
    });
    console.log(this.state.charging_stations);

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
              <li class="is-active">
                <a href="#" aria-current="page">
                  Просмотр данных
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
                <h3 class="heading-sidebar is-size-4">Просмотр данных</h3>
                {/* END OF ___Aside Left Name */}
                {/* Choose Territiry checkboxes */}
                <ul>
                  <li class="sidebar-item is-size-6">
                    <div className=" has-text-left is-choose-territory">
                      <h3 class="heading-sidebar is-size-6 ">
                        Выберите территорию
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="col-md-6 col-sm-12 col-xs-12 news-content">
                <div className="leaflet-container leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
                  <Map center={this.state.latLon} zoom={this.state.zoom}>
                    <TileLayer
                      url={basemapsDict[this.state.basemap]}
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* // Show Schools  */}
                    {this.state.onShowSchools &&
                      this.state.schools.map((school) => {
                        return (
                          <Marker
                            key={school.name}
                            position={school.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{school.name}</p>
                              <p>{school.address}</p>
                            </Popup>
                          </Marker>
                        );
                      })}
                    {/* // Show Churhces  */}
                    {this.state.onShowChurhces &&
                      this.state.churches.map((church) => {
                        return (
                          <Marker
                            key={church.name}
                            position={church.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{church.name}</p>
                            </Popup>
                          </Marker>
                        );
                      })}
                    {/* // Show Charging Stations  */}
                    {this.state.onShowChargingStations &&
                      this.state.charging_stations.map((chargStat) => {
                        return (
                          <Marker
                            key={chargStat.name}
                            position={chargStat.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{chargStat.name}</p>
                            </Popup>
                          </Marker>
                        );
                      })}
                    {/* // Show Charging Cemeteries  */}
                    {this.state.onShoweCmeteries &&
                      this.state.cemeteries.map((cemetery) => {
                        return (
                          <Marker
                            key={cemetery.name}
                            position={cemetery.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{cemetery.name}</p>
                            </Popup>
                          </Marker>
                        );
                      })}
                    {/* // Show Charging Kindergartens  */}
                    {this.state.onShowKindergartens &&
                      this.state.kindergartens.map((kindergarten) => {
                        return (
                          <Marker
                            key={kindergarten.name}
                            position={kindergarten.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{kindergarten.name}</p>
                              <p>{kindergarten.address}</p>
                            </Popup>
                          </Marker>
                        );
                      })}

                    {/* // Show Charging Art Spaces  */}
                    {this.state.ArtSpaceGeoJsonVisible && (
                      <ArtSpaceGeoJsonVisible
                        url={`${process.env.REACT_APP_MAIN_API}/api/art_spaces`}
                      />
                    )}
                    {/* Districts */}
                    {this.state.DistrictGeoJsonVisible && (
                      <DistrictsGeoJSONLayer
                        // url={`districts/search/findByName?name=Петродворцовый`}
                        url={`${process.env.REACT_APP_MAIN_API}/api/districts`}
                        terr={`${process.env.REACT_APP_MAIN_API}/api/districts`}
                      />
                    )}

                    {/* Show MO */}

                    {this.state.MoGeoJsonVisible && (
                      <MOGeojsonLayer
                        url={`${process.env.REACT_APP_MAIN_API}/api/municipalities/?size=111`}
                        terr={`${process.env.REACT_APP_MAIN_API}/api/municipalities`}
                      />
                    )}

                    {/* Show Colleges Marker  */}
                    {this.state.OnShowColleges &&
                      this.state.colleges.map((college) => {
                        return (
                          <Marker
                            key={college.name}
                            position={college.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{college.name}</p>
                              <p>{college.address}</p>
                            </Popup>
                          </Marker>
                        );
                      })}

                    {/* Marker Uni  */}
                    {this.state.onShowUni &&
                      this.state.universities.map((university) => {
                        return (
                          <Marker
                            key={university.name}
                            position={university.geometry.coordinates}
                            icon={iconForEvent}
                          >
                            <Popup>
                              <p>{university.name}</p>
                              <p>{university.address}</p>
                            </Popup>
                          </Marker>
                        );
                      })}
                    {/* BaseMap Component */}
                    <Basemap
                      basemap={this.state.basemap}
                      onChange={this.onBMChange}
                    />
                    {/* // Layess on button clikc  */}
                  </Map>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 col-xs-12 news-content">
                <p class="heading-sidebar is-size-5">Набор Данных</p>
                <div>
                  <input
                    type="checkbox"
                    name="schools"
                    id="schools"
                    value={this.state.schools}
                    onChange={this.onShowSchools}
                  />
                  <label htmlFor="schools">Школы </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="churches"
                    id="churches"
                    value={this.state.churches}
                    onChange={this.onShowChurhces}
                  />
                  <label htmlFor="churches">Церкви </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="charging_stations"
                    id="charging_stations"
                    value={this.state.charging_stations}
                    onChange={this.onShowChargingStations}
                  />
                  <label htmlFor="charging_stations">
                    {" "}
                    Заправки электромобилей{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Cemeteries"
                    id="Cemeteries"
                    value={this.state.cemeteries}
                    onChange={this.onShoweCmeteries}
                  />
                  <label htmlFor="Cemeteries">Кладбища </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Kindergartens"
                    id="Kindergartens"
                    value={this.state.kindergartens}
                    onChange={this.onShowKindergartens}
                  />
                  <label htmlFor="Kindergartens">Детские сады </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="art_spaces"
                    id="art_spaces"
                    value={this.state.ArtSpaceGeoJsonVisible}
                    onChange={this.onShowArtSpaces}
                  />
                  <label htmlFor="art_spaces">Арт площадки </label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="District"
                    id="District"
                    value={this.state.onDistrictGEOJSON}
                    onChange={this.onDistrictGEOJSON}
                  />
                  <label htmlFor="District">Районы </label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="MO"
                    id="MO"
                    value={this.state.onMOGeojsonToggle}
                    onChange={this.onMOGeojsonToggle}
                  />
                  <label htmlFor="MO">МО </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="colleges"
                    id="colleges"
                    value={this.state.colleges}
                    onChange={this.OnShowColleges}
                  />
                  <label htmlFor="colleges">Колледжи </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="universities"
                    id="universities"
                    value={this.state.universities}
                    onChange={this.onShowUni}
                  />
                  <label htmlFor="universities">Университеты </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DataShowInterface;

// Записи
// некоторые школы мультиполтгоны им надо GeoJson
// школы и униыверситеты и дет сады потом разделят по типам point для маркера и polygon для geogson object
// потмо будем axios обращение к ним и рендерить на карте соответственно

// полигоны школ
// 625 - 643
// полигоны колледж
// 101-109?
// полигоны универ
// 136-150

// Все марекеры тут необходимо поменять координаты [0][1] на [1][0]
