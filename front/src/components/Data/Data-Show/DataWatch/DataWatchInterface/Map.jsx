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
        url: "/schools/search/findByGeometryType",
        params: {
          type: "ST_Point",
        },
      },
      {
        url: "/schools/search/findByGeometryType",
        params: {
          type: "ST_Polygon",
        },
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
        url: "/colleges/search/findByGeometryType",
        params: {
          type: "ST_Point",
        },
      },
      {
        url: "/colleges/search/findByGeometryType",
        params: {
          type: "ST_Polygon",
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
  async function createDatasets() {
    let aggregatedDatasets = aggregateDatasets(rawDatasets);
    return aggregatedDatasets;
  }
  async function aggregateDatasets(rawDatasets) {
    return await Promise.allSettled(rawDatasets)
      .then((rawDatasets) =>
        rawDatasets.map((datasets) => {
          return Object.entries(datasets.value).reduce((accum, arr) => {
            return Object.assign(accum, { name: arr[0], value: arr[1] });
          }, {});
        })
      )
      .then((datasets) => {
        datasets.forEach((curr, i) => {
          let finded = datasets.find((curr2, i2) => {
            return curr.name == curr2.name && i != i2;
          });
          if (!finded) return;
          datasets[i].value = datasets[i].value.concat(finded.value);
          finded.value = finded.name = undefined;
        });
        return datasets.filter((dataset) => dataset.name);
      });
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
      datasets = datasets.reduce((accum, type) => {
        return Object.assign(accum, { [type.name]: type.value });
      }, {});
      return Object.keys(datasets).reduce((accum, key) => {
        let markers = datasets[key].map((point) => {
          if (point.geometry.type == "Polygon") {
            let reversedCoords = point.geometry.coordinates[0].map((coord) =>
              coord.reverse()
            );
            return L.polygon(reversedCoords, { color: "red" }).bindPopup(
              point.name
            );
          }
          if (point.geometry.type == "Point") {
            return L.marker(point.geometry.coordinates.reverse(), {
              icon: iconForEvent,
            }).bindPopup(point.name);
          }
        });
        return Object.assign(accum, { [key]: L.layerGroup(markers) });
      }, {});
    }

    let datasets = await createDatasets();
    let layerGroups = getLayerGroups(datasets);
    const mapOptions = { layers: [baseMaps.OSM] };
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
