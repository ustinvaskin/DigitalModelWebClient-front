import React from "react";
import axios from "axios";
import { Map, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Styles/styles.css";
import Basemap from "./BaseMap";
// // Geo Json Layers
import MOGeojsonLayer from "./GeoJsonLayers/MOGeoJsonLayer";
import DistrictsGeoJSONLayer from "./GeoJsonLayers/DistrictGeoJsonLayer";
import BlocksGeoJson from "./GeoJsonLayers/BlocksGeoJsonLayer";
// Individual layers
import DistrictGeoJsonVisibleIndividual from "./GeoJsonLayers/DistrictGeoJsonIndividualVisible";
import MOGeoJsonVisibleIndividual from "./GeoJsonLayers/MOGeoJsonIndividualVisible";
class MapIs extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // Id for later selecting specifit MO or District
      DistValueName: "",
      districtId: "",
      MoId: "",
      MoChoosenName: "",
      ChoosenDistCenter: [],
      MoCoord: [],
      // Map basic info
      latLon: [59.97003, 30],
      zoom: 8.9,
      basemap: "osm",
      // List of names for select/option
      MoNames: [],
      DistNames: [],
      HouseNames: [],
      BlocksfromChosenMO: [],
      // GeoJsonLayers
      MoGeoJsonVisible: false,
      BlockGeoJsonVisible: false,
      DistrictGeoJsonVisible: false,
      visibleModal: false,
      // GeoJsonVisibleIndividual
      DistrictGeoJsonVisibleIndividual: false,
      MOGeoJsonVisibleIndividual: true,
    };
  }

  // Change tilelayer
  onBMChange = (bm) => {
    console.log(this);
    this.setState({
      basemap: bm,
    });
  };
  // MO GeoJson layer show
  onMOGeojsonToggle = (e) => {
    this.setState({
      MoGeoJsonVisible: e.currentTarget.checked,
    });
  };
  // Disctricts GeoJson layer show
  onDistrictGEOJSON = (e) => {
    this.setState({
      DistrictGeoJsonVisible: e.currentTarget.checked,
    });
  };
  // Blocks GeoJson layer  show
  onBlockGeoJSON = (e) => {
    this.setState({
      BlockGeoJsonVisible: e.currentTarget.checked,
    });
  };
  // Hosuses GeoJson layer show
  onBlocksjson = (e) => {
    this.setState({
      BlockGeoJsonVisible: e.currentTarget.checked,
    });
  };
  onSelectDist = (e, state) => {
    this.setState({
      districtId: e.target.value,
      DistrictGeoJsonVisible: false,
      DistrictGeoJsonVisibleIndividual: !this.state
        .DistrictGeoJsonVisibleIndividual,
    });
  };
  onSelectMO = (e) => {
    //var MOBounds = this.refs.map.leafletElement.getBounds(e.target[e.target.selectedIndex].getAttribute('borders'));
    //var MOCenter = e.target[e.target.selectedIndex].getAttribute('coord');
    this.setState({
      MoId: e.target.value,
      MoChoosenName: e.target.name,
      MOGeoJsonVisibleIndividual: !this.state.MOGeoJsonVisibleIndividual,
      MoCoord: e.target[e.target.selectedIndex].getAttribute("borders"),
      latLon: [
        this.state.MoNames[
          e.target[e.target.selectedIndex].getAttribute("idkey")
        ].center.coordinates[1],
        this.state.MoNames[
          e.target[e.target.selectedIndex].getAttribute("idkey")
        ].center.coordinates[0],
      ],
      zoom: 11,
    });

    console.log(this.state.MOGeoJsonVisibleIndividual);
    //console.log(e.target[e.target.selectedIndex].getAttribute('coord'));
    console.log(
      this.state.MoNames[e.target[e.target.selectedIndex].getAttribute("idkey")]
    );
    //this.refs.map.leafletElement.setZoom(12);
    //this.refs.map.leafletElement.setZoom(2);
    //this.refs.map.leafletElement.panTo(MOCenter);
    //this.refs.map.leafletElement.fitBounds(MOBounds);
    //this.refs.map.leafletElement.fitBounds([ [60.31198766441137, 31.289062500000004], [59.624714093129306, 28.71002] ]);
    //this.refs.map.leafletElement.setView(MOCenter);
    //this.refs.map.leafletElement.fitBounds([[MOBounds._southWest.lat.toString(), MOBounds._southWest.lng.toString()], [MOBounds._northEast.lat.toString(), MOBounds._northEast.lng.toString()]]);
    //this.refs.map.leafletElement.fitBounds(MOBounds);
  };
  // Getting data from API
  componentDidMount() {
    axios.get(`http://10.32.1.62:1234/api/municipalities`).then((res) => {
      const MoNames = res.data._embedded.municipalities;
      this.setState({ MoNames, loading: false });
    });
    axios.get(`http://10.32.1.62:1234/api/districts`).then((res) => {
      const DistNames = res.data._embedded.districts;
      this.setState({ DistNames });
    });
    // axios.get(`districts/${this.state.districtId}`).then((res) => {
    //   const ChoosenDistCenter = res.data.center;
    //   this.setState({ ChoosenDistCenter });
    //   console.log(ChoosenDistCenter);
    // });
    // axios.get(`municipalities/${this.state.MoId}/blocks`).then((res) => {
    //   const BlocksfromChosenMO = res.data._embedded.blocks;
    //   this.setState({ BlocksfromChosenMO });
    //   console.log(this.state.BlocksfromChosenMO);
    // });
  }
  // To change basemaplayer
  render() {
    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    };
    console.log(this.state.MoId);
    console.log(this.state.MoNames);
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
                <Link to="/models">Модели</Link>
              </li>
              <li>
                <Link to="/population">Модель Населения</Link>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  Интерфейс Модели Населения
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
                <h3 class="heading-sidebar is-size-4">Модель Населения</h3>
                {/* END OF ___Aside Left Name */}
                {/* Choose Territiry checkboxes */}
                <ul>
                  <li class="sidebar-item is-size-6">
                    <div className=" has-text-left is-choose-territory">
                      <br />
                      <h3 class="heading-sidebar is-size-6 ">
                        Выберите территорию
                      </h3>
                      <br />
                      <div className="sidebar-main">
                        <span>
                          <label htmlFor="Districts">Районы </label>
                          <input
                            type="checkbox"
                            name="Districts"
                            id="Districts"
                            value={this.state.DistrictGeoJsonVisible}
                            onChange={this.onDistrictGEOJSON}
                          />
                        </span>
                        <span>
                          <label htmlFor="MOs">МО</label>
                          <input
                            type="checkbox"
                            name="MOs"
                            id="MOs"
                            value={this.state.MoGeoJsonVisible}
                            onChange={this.onMOGeojsonToggle}
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* END OF Choose Territiry */}
                <br />
                {/* Dropdown Territiry */}
                {/* Mo */}
                <select
                  className="select-css"
                  id="mo"
                  // this is to choose value from a list and then use to show only spesific multypoligon and data for this specific multypoligon
                  onChange={this.onSelectMO}
                >
                  <option selected="selected">Не выбрано(МО)</option>
                  {this.state.MoNames.map((data, e) => (
                    <option
                      className="option-css"
                      class="list-item"
                      key={e}
                      value={data.id}
                      name={data.short_name}
                      coord={data.center.coordinates}
                      idkey={e}
                    >
                      {data.short_name}
                    </option>
                  ))}
                </select>
                {/* END of MO */}
                {/* Districts */}
                <select
                  className="select-css"
                  name="district"
                  id="district"
                  // this is to choose value from a list and then use to show only spesific multypoligon and data for this specific multypoligon
                  onChange={this.onSelectDist}
                >
                  {" "}
                  <option selected="selected">Не выбрано(Район)</option>
                  {this.state.DistNames.map((data, id) => (
                    <option key={id} class="list-item" value={data.id}>
                      {data.short_name}
                    </option>
                  ))}
                </select>
                {/* District Table */}
                {this.state.DistrictGeoJsonVisible && (
                  <table class="table">
                    <thead>
                      <br />
                      <h3 class="heading-sidebar has-text-centered is-size-6 ">
                        Районы
                      </h3>
                      <tr>
                        <th>
                          <abbr title="Position">Название</abbr>
                        </th>
                        <th></th>
                        <th>
                          <abbr title="Position">Численность</abbr>
                        </th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>
                          <abbr title="Position">Название</abbr>
                        </th>
                        <th></th>
                        <th>
                          <abbr title="Position">Численность</abbr>
                        </th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        {this.state.DistNames.map((data, id) => (
                          <th class="list-item" value={data.id}>
                            {data.short_name}
                          </th>
                        ))}
                        <td></td>
                        {this.state.DistNames.map((data, id) => (
                          <td class="list-item" value={data.id}>
                            {data.population}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                )}
                {/* MO Table */}
                <br />
                {this.state.MoGeoJsonVisible && (
                  <table class="table">
                    <thead>
                      <h3 class="heading-sidebar has-text-centered is-size-6 ">
                        МО
                      </h3>
                      <tr>
                        <th>
                          <abbr title="Position">Название</abbr>
                        </th>
                        <th></th>
                        <th>
                          <abbr title="Position">Численность</abbr>
                        </th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>
                          <abbr title="Position">Название</abbr>
                        </th>
                        <th></th>
                        <th>
                          <abbr title="Position">Численность</abbr>
                        </th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        {this.state.MoNames.map((data, id) => (
                          <th class="list-item" value={data.id}>
                            {data.short_name}
                          </th>
                        ))}
                        <td></td>
                        {this.state.MoNames.map((data, id) => (
                          <td class="list-item" value={data.id}>
                            {data.population}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
              {/* END OF _____Aside Left */}
              {/* Main cotent  */}
              <div class="col-md-9 col-sm-12 col-xs-12 news-content">
                <div className="leaflet-container leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
                  <Map
                    center={this.state.latLon}
                    zoom={this.state.zoom}
                    ref="map"
                  >
                    <TileLayer
                      url={basemapsDict[this.state.basemap]}
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* BaseMap Component */}
                    <Basemap
                      basemap={this.state.basemap}
                      onChange={this.onBMChange}
                    />
                    {/* // Layess on button clikc  */}
                    {this.state.MoGeoJsonVisible && (
                      <MOGeojsonLayer
                        url="http://10.32.1.62:1234/api/municipalities"
                        terr="http://10.32.1.62:1234/api/municipalities"
                      />
                    )}
                    {/* {this.state.DistrictGeoJsonVisible && (
                     <DistrictsGeoJSONLayer url="districts" terr="districts" />
                     )} */}
                    {this.state.BlockGeoJsonVisible && (
                      <BlocksGeoJson
                        url="http://10.32.1.62:1234/api/blocks"
                        terr="http://10.32.1.62:1234/api/blocks"
                      />
                    )}
                    {this.state.DistrictGeoJsonVisible && (
                      <DistrictsGeoJSONLayer
                        // url={`districts/search/findByName?name=Петродворцовый`}
                        url="http://10.32.1.62:1234/api/districts"
                        terr="http://10.32.1.62:1234/api/districts"
                      />
                    )}
                    {this.state.DistrictGeoJsonVisibleIndividual && (
                      <DistrictGeoJsonVisibleIndividual
                        url={`http://10.32.1.62:1234/api/districts/${this.state.districtId}`}
                        terr={this.state.districtId}
                      />
                    )}
                    {this.state.MOGeoJsonVisibleIndividual && (
                      <MOGeoJsonVisibleIndividual
                        url={`http://10.32.1.62:1234/api/municipalities/${this.state.MoId}`}
                        terr={this.state.MoId}
                        zoom={this.zoomToFeature}
                      />
                    )}
                  </Map>
                </div>
                {this.state.DistrictGeoJsonVisible && (
                  <div className="population-color-tags has-text-weight-bold">
                    <span>Население Районов</span>
                    <span class="tag is-dist-2000">> 2000</span>
                    <span class="tag is-dist-1000">> 1000</span>
                    <span class="tag is-dist-500">> 500</span>
                    <span class="tag is-dist-300">> 300</span>
                    <span class="tag is-dist-100">> 100</span>
                    <span class="tag is-dist-50">> 50</span>
                  </div>
                )}
                {this.state.MoGeoJsonVisible && (
                  <div className="population-color-tags has-text-weight-bold">
                    <span>Население МО</span>
                    <span class="tag is-mo-2000">> 25000</span>
                    <span class="tag is-mo-1000">> 20000</span>
                    <span class="tag is-mo-500">> 10000</span>
                    <span class="tag is-mo-300">> 5000</span>
                    <span class="tag is-mo-100">> 1000</span>
                    <span class="tag is-mo-50">> 500</span>
                  </div>
                )}
                {this.state.MOGeoJsonVisibleIndividual && (
                  <div className="population-color-tags has-text-weight-bold">
                    <span>Население Домов</span>
                    <span class="tag is-mo-2000">> 2000</span>
                    <span class="tag is-mo-1000">> 1000</span>
                    <span class="tag is-mo-500">> 500</span>
                    <span class="tag is-mo-300">> 300</span>
                    <span class="tag is-mo-100">> 200</span>
                    <span class="tag is-mo-50">> 100</span>
                  </div>
                )}
                {this.state.DistrictGeoJsonVisibleIndividual && (
                  <div className="population-color-tags has-text-weight-bold">
                    <span>Население Домов</span>
                    <span class="tag is-mo-2000">> 2000</span>
                    <span class="tag is-mo-1000">> 1000</span>
                    <span class="tag is-mo-500">> 500</span>
                    <span class="tag is-mo-300">> 300</span>
                    <span class="tag is-mo-100">> 200</span>
                    <span class="tag is-mo-50">> 100</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MapIs;
