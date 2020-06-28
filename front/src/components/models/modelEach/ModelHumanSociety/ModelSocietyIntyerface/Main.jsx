import React from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import ChartNodes from "./ChartsNode.jsx";
import "./Styles/styles.css";
import TableSocial from "./SocialGropusFromNodeChart.jsx";

class MapIs extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataGraph: [],
      DataGroups: [],
      SelectedTerrName: "",
    };
  }

  // Getting data from API fror groups
  componentDidMount() {
    axios.get("./living_model_data_groups.json").then((res) => {
      const DataGroups = res.data.territories;
      this.setState({ DataGroups });
    });
    // Getting data from API charts bubble nodes

    axios.get("./AllCharts.json").then((res) => {
      const dataGraph = res.data;
      this.setState({ dataGraph });
    });
  }

  onSelectTerr = (e) => {
    this.setState({ SelectedTerrName: e.target.value });
  };

  onSelectTerrBeg = (e) => {
    this.setState({ SelectedTerrName: "Санкт-Петербург" });
  };

  render() {
    console.log(this.state.SelectedTerrName);

    console.log(this.state.dataGraph["Санкт-Петербург"]);
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
                  Лояльность населения к умному городу
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
                  Лояльность населения к умному городу
                </h3>
                <br />
                <select className="select-css" onChange={this.onSelectTerr}>
                  <option value="Не выбрано">Не выбрано</option>
                  {this.state.DataGroups.map((data, e) => (
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
                {this.state.SelectedTerrName === "Санкт-Петербург" && (
                  <ChartNodes data={this.state.dataGraph["Санкт-Петербург"]} />
                )}
                {this.state.SelectedTerrName === "Адмиралтейский район" && (
                  <ChartNodes
                    data={this.state.dataGraph["Адмиралтейский район"]}
                  />
                )}
                {this.state.SelectedTerrName === "МО Адмиралтейский" && (
                  <ChartNodes
                    data={this.state.dataGraph["МО Адмиралтейский"]}
                  />
                )}
                {this.state.SelectedTerrName === "МО Екатерингофский" && (
                  <ChartNodes
                    data={this.state.dataGraph["МО Екатерингофский"]}
                  />
                )}
                {this.state.SelectedTerrName === "МО Измайловский" && (
                  <ChartNodes data={this.state.dataGraph["МО Измайловский"]} />
                )}
                {this.state.SelectedTerrName === "МО Коломна" && (
                  <ChartNodes data={this.state.dataGraph["МО Коломна"]} />
                )}
                {this.state.SelectedTerrName === "МО Семеновский" && (
                  <ChartNodes data={this.state.dataGraph["МО Семеновский"]} />
                )}
                {this.state.SelectedTerrName === "МО Сенной" && (
                  <ChartNodes data={this.state.dataGraph["МО Сенной"]} />
                )}
                {this.state.SelectedTerrName === "Василеостровский район" && (
                  <ChartNodes
                    data={this.state.dataGraph["Василеостровский район"]}
                  />
                )}
                {this.state.SelectedTerrName === "7-й муниципальный округ" && (
                  <ChartNodes
                    data={this.state.dataGraph["7-й муниципальный округ"]}
                  />
                )}
                {this.state.SelectedTerrName === "МО Васильевский" && (
                  <ChartNodes data={this.state.dataGraph["МО Васильевский"]} />
                )}
                {this.state.SelectedTerrName === "МО Гавань" && (
                  <ChartNodes data={this.state.dataGraph["МО Гавань"]} />
                )}
                {this.state.SelectedTerrName === "МО Морской" && (
                  <ChartNodes data={this.state.dataGraph["МО Морской"]} />
                )}
                {this.state.SelectedTerrName === "МО Остров Декабристов" && (
                  <ChartNodes
                    data={this.state.dataGraph["МО Остров Декабристов"]}
                  />
                )}
                <br />
                {/* <DailyChart /> */}
              </div>
              <div class="sidebar col-md-4 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-6 has-text-grey-dark">
                  Значимость сервисов
                </h3>
                {this.state.SelectedTerrName === "Санкт-Петербург" && (
                  <TableSocial terrName="Санкт-Петербург" />
                )}
                {this.state.SelectedTerrName === "Адмиралтейский район" && (
                  <TableSocial terrName="Адмиралтейский район" />
                )}
                {this.state.SelectedTerrName === "МО Адмиралтейский" && (
                  <TableSocial terrName="МО Адмиралтейский" />
                )}
                {this.state.SelectedTerrName === "МО Екатерингофский" && (
                  <TableSocial terrName="МО Екатерингофский" />
                )}
                {this.state.SelectedTerrName === "МО Измайловский" && (
                  <TableSocial terrName="МО Измайловский" />
                )}
                {this.state.SelectedTerrName === "МО Коломна" && (
                  <TableSocial terrName="МО Коломна" />
                )}
                {this.state.SelectedTerrName === "МО Семеновский" && (
                  <TableSocial terrName="МО Семеновский" />
                )}
                {this.state.SelectedTerrName === "МО Сенной" && (
                  <TableSocial terrName="МО Сенной" />
                )}
                {this.state.SelectedTerrName === "Василеостровский район" && (
                  <TableSocial terrName="Василеостровский район" />
                )}
                {this.state.SelectedTerrName === "7-й муниципальный округ" && (
                  <TableSocial terrName="7-й муниципальный округ" />
                )}
                {this.state.SelectedTerrName === "МО Васильевский" && (
                  <TableSocial terrName="МО Васильевский" />
                )}
                {this.state.SelectedTerrName === "МО Гавань" && (
                  <TableSocial terrName="МО Гавань" />
                )}
                {this.state.SelectedTerrName === "МО Морской" && (
                  <TableSocial terrName="МО Морской" />
                )}
                {this.state.SelectedTerrName === "МО Остров Декабристов" && (
                  <TableSocial terrName="МО Остров Декабристов" />
                )}
                <br />
                {/* {this.state.DataGroups.map((data) => data.groups.name)} */}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapIs;
