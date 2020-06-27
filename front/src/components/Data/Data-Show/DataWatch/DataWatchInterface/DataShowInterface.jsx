import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import MainAndMAP from "./Map";

function ModelPopulationDescription() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <MainAndMAP />
              
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>);
}

export default ModelPopulationDescription;
