import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import L from "leaflet";

import ArtSpaceGeoJsonVisible from "./GeoJsonLayers/ArtSpaceGeoJsonVisible";
import DistrictsGeoJSONLayer from "./GeoJsonLayers/DistrictGeoJsonLayer";
import MOGeojsonLayer from "./GeoJsonLayers/MOGeoJsonLayer";
import "./Styles/styles.css";

function DataShowInterface() {
  // Map basic info
  const mapInfo = {
    latLon: [59.97003, 30],
    zoom: 8.9,
    basemap: "osm",
  };

  const onShow = {
    ArtSpaceGeoJsonVisible: false,
    DistrictGeoJsonVisible: false,
    MoGeoJsonVisible: false,
    // List of names for select/option
  };

  function getDatasets() {
    let urls = [
      {
        url: "schools/search/findByGeometryType?type=ST_Point",
      },
      {
        url: "churches",
        params: {
          size: "4",
        },
      },
      {
        url: "charging_stations",
        params: {
          size: "2",
        },
      },
      {
        url: "cemeteries",
        params: {
          size: "6",
        },
      },
      {
        url: "kindergartens",
        params: {
          size: "7",
        },
      },
      {
        url: "colleges",
        params: {
          size: "8",
        },
      },
      {
        url: "universities",
        params: {
          size: "9",
        },
      },
    ];
    const axiosConfig = {
      method: "get",
      baseURL: `${process.env.REACT_APP_MAIN_API}/api/`,
    };
    return urls.map((url) =>
      axios(Object.assign(axiosConfig, url)).then(({ data }) => data._embedded)
    );
  }
  function createDatasets() {
    let aggregatedDatasets = aggregateDatasets(rawDatasets);
    return aggregatedDatasets;
  }
  async function aggregateDatasets(rawDatasets) {
    return await Promise.allSettled(rawDatasets).then((rawDatasets) =>
      rawDatasets.reduce(
        (accum, rawDataset) => Object.assign(accum, rawDataset.value),
        {}
      )
    );
  }

  const rawDatasets = getDatasets();

  //useEffect(() => {
  async function createMap() {
    const normalizedNames = {
      cemeteries: "Кладбища",
      charging_stations: "Заправки автомобилей",
      churches: "Церкви",
      colleges: "Колледжи",
      kindergartens: "Детские сады",
      schools: "Школы",
      universities: "Университеты",
    };
    const iconForEvent = new L.Icon({
      iconUrl: require("../../../../../img/marker.svg"),
      iconRetinaUrl: require("../../../../../img/marker.svg"),
      iconSize: new L.Point(30, 30),
      className: "leaflet-div-icon",
    });
    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    };
    let baseMaps = {
      OSM: L.tileLayer(basemapsDict.osm, {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }),
      "OSM HOT": L.tileLayer(basemapsDict.hot, {
        attribution: "",
      }),
      DARK: L.tileLayer(basemapsDict.dark, {
        attribution: "",
      }),
      "CYCLE MAP": L.tileLayer(basemapsDict.cycle, {
        attribution: "",
      }),
    };

    function getLayerGroups(datasets) {
      return Object.keys(datasets).reduce((accum, key) => {
        let markers = datasets[key].map((point) => {
          return L.marker(point.geometry.coordinates.reverse(), {
            icon: iconForEvent,
          }).bindPopup(point.name);
        });
        return Object.assign(accum, { [key]: L.layerGroup(markers) });
      }, {});
    }

    let datasets = await createDatasets();
    let layerGroups = getLayerGroups(datasets);
    const mapOptions = { layers: [baseMaps.OSM, layerGroups.schools] };
    let map = L.map("map", mapOptions).setView(mapInfo.latLon, mapInfo.zoom);
    L.control.layers(baseMaps, layerGroups).addTo(map);
    return map;
  }
  let map = createMap();
  // });

  return (
    <div id="map">
      {0 && (
        <ArtSpaceGeoJsonVisible
          url={`${process.env.REACT_APP_MAIN_API}/api/art_spaces`}
        />
      )}
      {/* Districts */}
      {0 && (
        <DistrictsGeoJSONLayer
          // url={`districts/search/findByName?name=Петродворцовый`}
          url={`${process.env.REACT_APP_MAIN_API}/api/districts`}
          terr={`${process.env.REACT_APP_MAIN_API}/api/districts`}
        />
      )}

      {/* Show MO */}

      {0 && (
        <MOGeojsonLayer
          url={`${process.env.REACT_APP_MAIN_API}/api/municipalities/?size=111`}
          terr={`${process.env.REACT_APP_MAIN_API}/api/municipalities`}
        />
      )}
    </div>
  );
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
