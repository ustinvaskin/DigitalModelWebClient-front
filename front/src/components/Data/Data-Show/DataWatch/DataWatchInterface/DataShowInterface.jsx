import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import MainAndMAP from "./Map";

function ModelPopulationDescription() {
  return (
    <div>
      <br />
      <br />
      <br />
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
            <li className="is-active">
              <a href="#" aria-current="page">
                Просмотр данных
            </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* END OF _____Breadcrumbs */}
      <div className="page-content container">
        <div className="wrapper">
          {/* Aside Left */}
          {/* Aside Left Name */}
          <div className="col-md-12 col-sm-12 col-xs-12 news-content">
            <div className="leaflet-container leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
              <MainAndMAP />
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default ModelPopulationDescription;
