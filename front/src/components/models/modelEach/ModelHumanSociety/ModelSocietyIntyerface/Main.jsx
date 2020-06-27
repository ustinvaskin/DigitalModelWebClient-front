import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import ChartNodes from "./ChartsNode.jsx";
import "./Styles/styles.css";
import TableSocial from "./SocialGropusFromNodeChart.jsx";

function MapIs() {
  const [dataGraph, setDataGraph] = useState([]);
  const [DataGroups, setDataGroups] = useState([]);
  const [SelectedTerrName, setSelectedTerrName] = useState("");

  // Getting data from API fror groups
  useEffect(() => {
    axios.get("./living_model_data_groups.json").then((res) => {
      setDataGroups(res.data.territories);
    });
    // Getting data from API charts bubble nodes

    axios.get("./AllCharts.json").then((res) => {
      setDataGraph(res.data);
    });
    return function cleanup() {};
  });

  let onSelectTerr = (e) => {
    setSelectedTerrName(e.target.value);
  };

  let onSelectTerrBeg = (e) => {
    setSelectedTerrName("Санкт-Петербург");
  };

  console.log(SelectedTerrName);
  console.log(DataGroups);

  console.log(dataGraph["Санкт-Петербург"]);
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
              <Link to="/humansosciety">Модель человеческого общества</Link>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Модель жизни в умном городе
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
              <h3 class="heading-sidebar is-size-4 ">
                Модель жизни в умном городе
              </h3>
              <br />
              <select className="select-css" onChange={onSelectTerr}>
                <option value="Не выбрано">Не выбрано</option>
                {DataGroups.map((data, e) => (
                  <option
                    className="option-css"
                    class="list-item"
                    // key={data.id}
                    value={data.full_name}
                    // name={data.short_name}
                    // groups={data.groups}
                  >
                    {data.full_name}
                  </option>
                ))}
              </select>

              <br />
              <br />
              <br />
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title is-size-6 has-text-grey-dark heading-sidebar">
                    Индекс Жизненных Траекторий
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p className="is-size-6	">
                      Индекс умности города:
                      <span className="tag is-info tgsisiinloyalty is-size-5">
                        0,4
                      </span>
                    </p>
                    <p className="is-size-6">
                      Индекс качества жизни:{" "}
                      <span className="tag is-info tgsisiinloyalty is-size-5">
                        0,6
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="ChooseTerr-and-Index">
                  <span>
                    <label htmlFor="MOs">Самые Обеспеченные</label>
                    <input
                      type="checkbox"
                      name="MOs"
                      id="MOs"
                      value=""
                      onChange=""
                    />
                  </span>
                  <br />
                  <br />
                  <span>
                    <label htmlFor="MOs">Индекс связанности</label>
                    <input
                      className="radioInput"
                      type="range"
                      id="connected"
                      name="connected"
                      min="0"
                      max="10"
                    />
                  </span>
                </div> */}
            </div>
            {/* END OF _____Aside Left */}
            {/* Main cotent  */}
            <div class="col-md-5 col-sm-12 col-xs-12 news-content">
              {SelectedTerrName === "Санкт-Петербург" && (
                <ChartNodes data={dataGraph["Санкт-Петербург"]} />
              )}
              {SelectedTerrName === "Адмиралтейский район" && (
                <ChartNodes data={dataGraph["Адмиралтейский район"]} />
              )}
              {SelectedTerrName === "МО Адмиралтейский" && (
                <ChartNodes data={dataGraph["МО Адмиралтейский"]} />
              )}
              {SelectedTerrName === "МО Екатерингофский" && (
                <ChartNodes data={dataGraph["МО Екатерингофский"]} />
              )}
              {SelectedTerrName === "МО Измайловский" && (
                <ChartNodes data={dataGraph["МО Измайловский"]} />
              )}
              {SelectedTerrName === "МО Коломна" && (
                <ChartNodes data={dataGraph["МО Коломна"]} />
              )}
              {SelectedTerrName === "МО Семеновский" && (
                <ChartNodes data={dataGraph["МО Семеновский"]} />
              )}
              {SelectedTerrName === "МО Сенной" && (
                <ChartNodes data={dataGraph["МО Сенной"]} />
              )}
              {SelectedTerrName === "Василеостровский район" && (
                <ChartNodes data={dataGraph["Василеостровский район"]} />
              )}
              {SelectedTerrName === "7-й муниципальный округ" && (
                <ChartNodes data={dataGraph["7-й муниципальный округ"]} />
              )}
              {SelectedTerrName === "МО Васильевский" && (
                <ChartNodes data={dataGraph["МО Васильевский"]} />
              )}
              {SelectedTerrName === "МО Гавань" && (
                <ChartNodes data={dataGraph["МО Гавань"]} />
              )}
              {SelectedTerrName === "МО Морской" && (
                <ChartNodes data={dataGraph["МО Морской"]} />
              )}
              {SelectedTerrName === "МО Остров Декабристов" && (
                <ChartNodes data={dataGraph["МО Остров Декабристов"]} />
              )}
              <br />
              {/* <DailyChart /> */}
            </div>
            <div class="sidebar col-md-4 col-sm-12 col-xs-12">
              <h3 class="heading-sidebar is-size-6 has-text-grey-dark">
                Значимость сервисов
              </h3>
              {SelectedTerrName === "Санкт-Петербург" && (
                <TableSocial terrName="Санкт-Петербург" />
              )}
              {SelectedTerrName === "Адмиралтейский район" && (
                <TableSocial terrName="Адмиралтейский район" />
              )}
              {SelectedTerrName === "МО Адмиралтейский" && (
                <TableSocial terrName="МО Адмиралтейский" />
              )}
              {SelectedTerrName === "МО Екатерингофский" && (
                <TableSocial terrName="МО Екатерингофский" />
              )}
              {SelectedTerrName === "МО Измайловский" && (
                <TableSocial terrName="МО Измайловский" />
              )}
              {SelectedTerrName === "МО Коломна" && (
                <TableSocial terrName="МО Коломна" />
              )}
              {SelectedTerrName === "МО Семеновский" && (
                <TableSocial terrName="МО Семеновский" />
              )}
              {SelectedTerrName === "МО Сенной" && (
                <TableSocial terrName="МО Сенной" />
              )}
              {SelectedTerrName === "Василеостровский район" && (
                <TableSocial terrName="Василеостровский район" />
              )}
              {SelectedTerrName === "7-й муниципальный округ" && (
                <TableSocial terrName="7-й муниципальный округ" />
              )}
              {SelectedTerrName === "МО Васильевский" && (
                <TableSocial terrName="МО Васильевский" />
              )}
              {SelectedTerrName === "МО Гавань" && (
                <TableSocial terrName="МО Гавань" />
              )}
              {SelectedTerrName === "МО Морской" && (
                <TableSocial terrName="МО Морской" />
              )}
              {SelectedTerrName === "МО Остров Декабристов" && (
                <TableSocial terrName="МО Остров Декабристов" />
              )}
              <br />
              {/* {DataGroups.map((data) => data.groups.name)} */}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapIs;
