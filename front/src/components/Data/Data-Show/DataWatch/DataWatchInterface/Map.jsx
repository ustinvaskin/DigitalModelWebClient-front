import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import L, { polygon } from "leaflet";

import Deflate from 'react-leaflet-deflate';

import ArtSpaceGeoJsonVisible from "./GeoJsonLayers/ArtSpaceGeoJsonVisible";
import DistrictsGeoJSONLayer from "./GeoJsonLayers/DistrictGeoJsonLayer";
import MOGeojsonLayer from "./GeoJsonLayers/MOGeoJsonLayer";
import "./Styles/styles.css";

function DataShowInterface() {
  
  const mapInfo = {
    latLon: [59.97003, 30],
    zoom: 8.9
  };

  function getDatasets() {
    let urls = [
      {
        url: '/kindergartens/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: '/kindergartens/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: '/schools/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: '/schools/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: '/colleges/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: '/colleges/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: '/universities/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: '/universities/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: 'art_spaces/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: 'art_spaces/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: 'art_spaces/search/findByGeometryType',
        params: {
          type: 'ST_MultiPolygon'
        }
      },
      {
        url: 'churches/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: 'churches/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: 'cemeteries/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: 'cemeteries/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      },
      {
        url: 'charging_stations/search/findByGeometryType',
        params: {
          type: 'ST_Point'
        }
      },
      {
        url: 'charging_stations/search/findByGeometryType',
        params: {
          type: 'ST_Polygon'
        }
      }
    ];
    const axiosConfig = {
      method: 'get',
      baseURL: `${process.env.REACT_APP_MAIN_API}/api/`
    };
    return urls.map(url => axios(Object.assign(axiosConfig, url))
      .then(({ data }) => data._embedded));
  }
  async function createDatasets() {
    let aggregatedDatasets = aggregateDatasets(rawDatasets);
    return aggregatedDatasets;
  }
  async function aggregateDatasets(rawDatasets) {
    return await Promise.allSettled(rawDatasets)
      .then(rawDatasets => rawDatasets.map(datasets => {
        return Object.entries(datasets.value).reduce((accum, arr) => {
          return Object.assign(accum, { name: arr[0], value: arr[1] });
        }, {});
      }))
      .then(datasets => {
        datasets.forEach((curr, i) => {
          let finded = datasets.find((curr2, i2) => {
            return (curr.name === curr2.name) && (i !== i2);
          });
          if ((finded === undefined) || (finded.value === undefined)) return;
          datasets[i].value = datasets[i].value.concat(finded.value);
          finded.value = finded.name = undefined;
        });

        return datasets.filter(dataset => dataset.name);
      });
  }

  const rawDatasets = getDatasets();

  async function createMap() {
    const normalizedNames = {
      cemeteries: 'Кладбища',
      charging_stations: 'Заправки электромобилей',
      churches: 'Церкви',
      colleges: 'Колледжи',
      kindergartens: 'Детские сады',
      schools: 'Школы',
      universities: 'Университеты',
      art_spaces: 'Арт-пространства'
    };
    const iconForEvent = new L.Icon({
      iconUrl: require("../../../../../img/marker.svg"),
      iconRetinaUrl: require("../../../../../img/marker.svg"),
      iconSize: new L.Point(25, 25),
      className: "leaflet-div-icon",
    });
    const clusterizationParams = {
      minSize: 15,
      markerCluster: true,
      markerOptions: {
        icon: iconForEvent
      },
      markerClusterOptions: {
        maxClusterRadius: 40
      }
    };
    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    };
    let baseMaps = {
      "OSM": L.tileLayer(basemapsDict.osm, {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }),
      "OSM HOT": L.tileLayer(basemapsDict.hot, {
        attribution: ''
      }),
      "DARK": L.tileLayer(basemapsDict.dark, {
        attribution: ''
      }),
      "CYCLE MAP": L.tileLayer(basemapsDict.cycle, {
        attribution: ''
      })
    };

    function renameLayers(layers) {
      let normalizedLayers = {};
      for (const key in layers) {
        normalizedLayers[normalizedNames[key]] = layers[key];
      }
      return normalizedLayers;
    }
    function onEachFeature(feature, layer) {
      layer.bindPopup(feature.properties.name);
    }
    function pointToLayer(feature, latlng) {
      return L.marker(latlng, {
        icon: iconForEvent
      });
    }
    function getLayerGroups(datasets) {
      datasets = datasets.reduce((accum, type) => {
        return Object.assign(accum, { [type.name]: type.value });
      }, {});
      return Object.keys(datasets)
        .reduce((accum, key) => {
          let clusteredGroup = L.deflate(clusterizationParams);
          datasets[key].forEach(point => {
            // let reversedCoords = reverse(point.geometry.coordinates);
            let geoJSON = L.geoJSON(point, {
              onEachFeature,
              pointToLayer,
              style: (feature) => {
                switch (feature.geometry.type) {
                  case 'Polygon':
                  case 'MultiPolygon': return {
                    color: 'red'
                  };
                }
              }
            });
            geoJSON.addTo(clusteredGroup);
          });
          return Object.assign(accum, { [key]: clusteredGroup });
        }, {});
    }

    let datasets = await createDatasets();
    console.log(datasets);
    datasets = datasets.map(dataset => {
      let value = dataset.value.map(GEOjson => {
        let geometry = Object.assign({}, GEOjson.geometry);
        delete GEOjson.geometry;
        let properties = GEOjson;
        return {
          type: 'Feature',
          geometry,
          properties
        };
      });
      return {name: dataset.name, value};
    });
    let layerGroups = getLayerGroups(datasets);
    let clusteredMarkers = renameLayers(layerGroups);
    const mapOptions = { layers: [baseMaps.OSM] };
    let map = L.map('map', mapOptions);
    map.setView(mapInfo.latLon, mapInfo.zoom);
    L.control.layers(baseMaps, clusteredMarkers, {collapsed: false}).addTo(map);
    return map;
  }
  let map = createMap();

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
    </div>);
}

export default DataShowInterface;
