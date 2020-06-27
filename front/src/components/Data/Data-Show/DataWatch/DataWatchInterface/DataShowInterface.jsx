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
            <div class="col-md-3 col-sm-12 col-xs-12 news-content">
              <p class="heading-sidebar is-size-5">Набор Данных</p>
              <div>
                <input
                  type="checkbox"
                  name="schools"
                  id="schools"
                  // value={dataSets.schools}
                  //onChange={onShowSchools}
                />
                <label htmlFor="schools">Школы </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="churches"
                  id="churches"
                  // value={dataSets.churches}
                  //onChange={onShowChurches}
                />
                <label htmlFor="churches">Церкви </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="charging_stations"
                  id="charging_stations"
                  // value={dataSets.charging_stations}
                  //onChange={onShowChargingStations}
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
                  // value={dataSets.cemeteries}
                  //onChange={onShowCemeteries}
                />
                <label htmlFor="Cemeteries">Кладбища </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Kindergartens"
                  id="Kindergartens"
                  // value={dataSets.kindergartens}
                  //onChange={onShowKindergartens}
                />
                <label htmlFor="Kindergartens">Детские сады </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="art_spaces"
                  id="art_spaces"
                  // value={dataSets.ArtSpaceGeoJsonVisible}
                  //onChange={onShowArtSpaces}
                />
                <label htmlFor="art_spaces">Арт площадки </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="District"
                  id="District"
                  // value={dataSets.onDistrictGEOJSON}
                  //onChange={onDistrictGEOJSON}
                />
                <label htmlFor="District">Районы </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="MO"
                  id="MO"
                  // value={dataSets.onMOGeojsonToggle}
                  //onChange={onMOGeojsonToggle}
                />
                <label htmlFor="MO">МО </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="colleges"
                  id="colleges"
                  // value={dataSets.colleges}
                  //onChange={OnShowColleges}
                />
                <label htmlFor="colleges">Колледжи </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="universities"
                  id="universities"
                  //value={dataSets.universities}
                  //onChange={onShowUni}
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

export default ModelPopulationDescription;
