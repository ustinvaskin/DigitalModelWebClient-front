import React from "react";
import axios from "axios";
import { Map, TileLayer, Marker, Popup, LayersControl, Circle, FeatureGroup } from "react-leaflet";
import { Link, useParams } from "react-router-dom";
import "./Styles/styles.css";
import PopulationLabels from './PopulationLabels';
// // Geo Json Layers
import MOGeoJsonLayer from "./GeoJsonLayers/MOGeoJsonLayer";
import DistrictsGeoJSONLayer from "./GeoJsonLayers/DistrictGeoJsonLayer";
import BlocksGeoJson from "./GeoJsonLayers/BlocksGeoJsonLayer";
// Individual layers
import DistrictGeoJsonVisibleIndividual from "./GeoJsonLayers/DistrictGeoJsonIndividualVisible";
import MOGeoJsonVisibleIndividual from "./GeoJsonLayers/MOGeoJsonIndividualVisible";
// ChartMO
import ChartMO from "./MOChart";
import Breadcrumbs from "../../../common/Breadcrumb";

class PopulationDemonstration extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // Id for later selecting specifit MO or District
      DistValueName: "",
      districtId: "",
      MoId: "",
      ShowMO: false,
      MoChoosenName: "",
      ChoosenDistCenter: [],
      MoCoord: [],
      DistCoord: [],
      GenerateMO: false,
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
      DistrictGeoJsonVisible: true,
      visibleModal: false,
      // GeoJsonVisibleIndividual
      DistrictGeoJsonVisibleIndividual: false,
      MOGeoJsonVisibleIndividual: false,
    };
  }

  onClearDistMO = (e) => {
    this.setState({
      MoGeoJsonVisible: false,
      DistrictGeoJsonVisible: false,
    });
  }
  // MO GeoJson layer show
  onMOGeojsonToggle = (e) => {
    this.setState({
      MoGeoJsonVisible: e.currentTarget.checked,
      DistrictGeoJsonVisible: false,
    });
  };
  // Disctricts GeoJson layer show
  onDistrictGEOJSON = (e) => {
    this.setState({
      DistrictGeoJsonVisible: e.currentTarget.checked,
      MoGeoJsonVisible: false,
    });
  };

  onSelectDist = (e, state) => {
    this.setState({
      districtId: e.target.value,
      zoom: 10,
      MoGeoJsonVisible: false,
      BlockGeoJsonVisible: false,
      DistrictGeoJsonVisible: false,
      ShowMO: true,
      DistrictGeoJsonVisibleIndividual: !this.state
        .DistrictGeoJsonVisibleIndividual,
      DistCoord: e.target[e.target.selectedIndex].getAttribute("borders"),
      latLon: [
        this.state.DistNames[
          e.target[e.target.selectedIndex].getAttribute("idkey")
        ].center.coordinates[1],
        this.state.DistNames[
          e.target[e.target.selectedIndex].getAttribute("idkey")
        ].center.coordinates[0],
      ],
    });
  };

  onSelectMO = (e) => {
    //var MOBounds = this.refs.map.leafletElement.getBounds(e.target[e.target.selectedIndex].getAttribute('borders'));
    //var MOCenter = e.target[e.target.selectedIndex].getAttribute('coord');
    this.setState({
      MoId: e.target.value,
      zoom: 12,
      MoChoosenName: e.target.name,
      MoGeoJsonVisible: false,
      DistrictGeoJsonVisible: false,
      MOGeojsonLayer: false,
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
    });
  };

  onLoadMap = (e) => {

  };

  componentWillMount() {
    // For initial data
    axios.get(`${process.env.REACT_APP_MAIN_API}/api/districts`).then((res) => {
      const DistNames = res.data._embedded.districts;
      this.setState({ DistNames });
    });
  }
  fetchMO = () => {
    axios
      .get(
        `${process.env.REACT_APP_MAIN_API}/api/districts/${this.state.districtId}/municipalities`
      )
      .then((res) => {
        const MoNames = res.data._embedded.municipalities;
        this.setState({ MoNames, loading: false, GenerateMO: true, ShowMO: false });
      });
  };

  render() {
    console.log(this.state.MoNames,this.state.MoId,this.state.MoNames);
    let breadcrumbs = ["Главная", "Модели", "Модель Населения", "Интерфейс Модели Населения"];
    return (
      <div>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              {/* Aside Left */}
              {/* Aside Left Name */}
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                {/* END OF ___Aside Left Name */}
                

                {/* Districts */}
                <select
                  className="select-css"
                  name="district"
                  id="district"
                  // this is to choose value from a list and then use to show only spesific multypoligon and data for this specific multypoligon
                  onChange={this.onSelectDist}
                >
                  {" "}
                  <option selected={true}>Не выбрано(Район)</option>
                  {this.state.DistNames.map((data, e) => (
                    <option
                      className="option-css"
                      className="list-item"
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
                {this.state.ShowMO && (
                  this.fetchMO()
                )}
                {this.state.GenerateMO && (
                  <select
                    className="select-css"
                    id="mo"
                    onChange={this.onSelectMO}
                  >
                    <option selected={true}>Не выбрано(МО)</option>
                    {this.state.MoNames.map((data, e) => (
                      <option
                        className="option-css"
                        className="list-item"
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
                )}

                {this.state.DistrictGeoJsonVisible && (
                    <PopulationLabels
                      text="Население Районов"
                      classNamePart="dist"
                      labelsValues={['500K', '300K', '200K', '100K', '50K', '10k']}
                    />
                )}
                {this.state.MoGeoJsonVisible && (
                    <PopulationLabels
                      text="Население МО"
                      classNamePart="mo"
                      labelsValues={[25000, 20000, 10000, 5000, 1000, 500]}
                    />
                )}
                {this.state.MOGeoJsonVisibleIndividual &&
                  this.state.DistrictGeoJsonVisibleIndividual == false && (
                    <PopulationLabels
                      text="Население Домов"
                      classNamePart="mo"
                      labelsValues={[2000, 1000, 500, 300, 200, 100]}
                    />
                  )}
                {this.state.DistrictGeoJsonVisibleIndividual &&
                  this.state.MOGeoJsonVisibleIndividual === false && (
                    <PopulationLabels
                      text="Население Домов"
                      classNamePart="mo"
                      labelsValues={[2000, 1000, 500, 300, 200, 100]}
                    />
                  )}
                {this.state.DistrictGeoJsonVisibleIndividual &&
                  this.state.MOGeoJsonVisibleIndividual && (
                    <PopulationLabels
                      text="Население Домов"
                      classNamePart="mo"
                      labelsValues={[2000, 1000, 500, 300, 200, 100]}
                    />
                  )}
              </div>
              {/* END OF _____Aside Left */}
              {/* Main cotent  */}
              <div className="col-md-9 col-sm-12 col-xs-12 news-content">
                <div className="leaflet-container leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
                  <Map
                    center={this.state.latLon}
                    zoom={this.state.zoom}
                    ref="map"
                    onload={this.onLoadMap}
                  >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LayersControl position="topright">
                    <LayersControl.BaseLayer name="OSM">
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="HOT">
                      <TileLayer
                        attribution=''
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="DARK">
                      <TileLayer
                        attribution=''
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="CYCLE">
                      <TileLayer
                        attribution=''
                        url="https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.Overlay name="Районы">
                      <DistrictsGeoJSONLayer
                        // url={`districts/search/findByName?name=Петродворцовый`}
                        url={`${process.env.REACT_APP_MAIN_API}/api/districts`}
                      />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="МО">
                      <MOGeoJsonLayer
                        url={`${process.env.REACT_APP_MAIN_API}/api/municipalities/?size=111`}
                      />
                    </LayersControl.Overlay>
                  </LayersControl>

                    {this.state.DistrictGeoJsonVisibleIndividual && (
                      <DistrictGeoJsonVisibleIndividual
                        url={`${process.env.REACT_APP_MAIN_API}/api/districts/${this.state.districtId}`}
                        terr={this.state.districtId}
                      />
                    )}
                    {this.state.MOGeoJsonVisibleIndividual && (
                      <MOGeoJsonVisibleIndividual
                        url={`${process.env.REACT_APP_MAIN_API}/api/municipalities/${this.state.MoId}`}
                        terr={this.state.MoId}
                        zoom={this.zoomToFeature}
                      />
                    )}
                  </Map>
                </div>
                <ChartMO />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopulationDemonstration;
