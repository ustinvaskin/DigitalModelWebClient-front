// http://localhost:3000/#/InterfaceHumanSociety
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ChartNodes from "./ChartsNode.jsx";
import "./Styles/styles.css";
import TableSocial from "./SocialGropusFromNodeChart.jsx";
import Breadcrumbs from "../../../common/Breadcrumb";

function PopulationDemonstration(props) {
  return(<div>TEST</div>);
  console.log(props);
      let [selectedTerrName, setSelectedTerrName] = useState("Санкт-Петербург");
      let territories = {
        "Санкт-Петербург": {"levelSmart": 0.4, "levelLife": 0.6},
        "Адмиралтейский район": {"levelSmart": 0.3, "levelLife": 0.6},
        "МО Адмиралтейский": {"levelSmart": 0.3, "levelLife": 0.5},
        "МО Екатерингофский": {"levelSmart": 0.4, "levelLife": 0.5},
        "МО Измайловский": {"levelSmart": 0.3, "levelLife": 0.6},
        "МО Коломна": {"levelSmart": 0.4, "levelLife": 0.6},
        "МО Семеновский": {"levelSmart": 0.4, "levelLife": 0.5},
        "МО Сенной": {"levelSmart": 0.3, "levelLife": 0.4},
        "Василеостровский район": {"levelSmart": 0.5, "levelLife": 0.6},
        "7-й муниципальный округ": {"levelSmart": 0.3, "levelLife": 0.5},
        "МО Васильевский": {"levelSmart": 0.4, "levelLife": 0.5},
        "МО Гавань": {"levelSmart": 0.3, "levelLife": 0.6},
        "МО Морской": {"levelSmart": 0.4, "levelLife": 0.5},
        "МО Остров Декабристов": {"levelSmart": 0.3, "levelLife": 0.4}
      };
    
  let onSelectTerr = (e) => {
    console.log('terrname', e.target.value);
    setSelectedTerrName(e.target.value);
  };
    return (
      <div>
        <Breadcrumbs breadcrumbs={["Главная", "Модели", "Модель человеческого общества", "Демонстрация модели жизни в умном городе"]} />
        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              {/* Aside Left */}
              {/* Aside Left Name */}
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-4 ">
                  Демонстрация модели жизни в умном городе
                </h3>
                <br />
                <select className="select-css" value={selectedTerrName} onChange={onSelectTerr}>
                  <option value="Не выбрано">Не выбрано</option>
                  {props.dataGroups.map((data, e) => (
                    <option
                      className="option-css"
                      className="list-item"
                      // key={data.id}
                      // selected=""
                      value={data.full_name}
                    // name={data.short_name}
                    // groups={data.groups}
                    >
                      {data.full_name}
                    </option>
                  ))}
                </select>
                <br />
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title is-size-6 has-text-centered has-text-grey-dark heading-sidebar">
                      Индекс Жизненных Траекторий
                    </p>
                  </header>
                  <div className="card-content is-size-4	has-text-centered">
                      <div className="content">
                          <p className="is-size-6 has-text-centered	">
                              Индекс умности города:
                              <span className="tag is-info tgsisiinloyalty is-size-5">
                                {territories[selectedTerrName].levelSmart}
                              </span>
                          </p>
                          <p className="is-size-6 has-text-centered">
                              Индекс качества жизни:
                              <span className="tag is-info tgsisiinloyalty is-size-5">
                                {territories[selectedTerrName].levelLife}
                              </span>
                          </p>
                      </div>
                  </div>
                </div>
              </div>
              {/* END OF _____Aside Left */}
              {/* Main cotent  */}
              <div className="col-md-5 col-sm-12 col-xs-12 news-content">
                {selectedTerrName && (
                  <ChartNodes data={props.dataGraph[selectedTerrName]} />
                )}
                <br />
              </div>
              <div className="sidebar col-md-4 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-6 has-text-centered has-text-grey-dark">
                  Значимость сервисов
                </h3>
                {/*selectedTerrName && (
                  <TableSocial
                    terrName={selectedTerrName} 
                    dataGroups={props.dataGroups}
                    dataGraph={props.dataGraph}
                  />
                )*/}
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PopulationDemonstration;
