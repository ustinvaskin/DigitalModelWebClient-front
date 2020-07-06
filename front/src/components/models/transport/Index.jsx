import React, { useEffect } from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
// import TransportDemonstration from "./demonstration/Index";
import Breadcrumb from "../../common/Breadcrumb";

function Transport() {
    let breadcrumbs = ["Главная", "Модели", "Транспортная обеспеченность"];
    return (
      <Switch>
        {/* <Route path="/models/transport/demonstration" component={TransportDemonstration} /> */}
        <Route path="/models/transport">
      <Breadcrumb breadcrumbs={breadcrumbs} />
        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-3">
                  {breadcrumbs[breadcrumbs.length - 1]}
                </h3>
                <ul>
                  <li className="sidebar-item">
                    <a>Последнее обновление: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <a>
                      <span className=" is-info has-text-weight-normal">
                        Данные: дата Модель: дата
                      </span>
                    </a>
                  </li>
                </ul>

                <ul>
                  <li className="sidebar-item">
                    <a>Правообладатель: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <a>
                      <span className="tag is-info">ИТМО</span>
                      <span className="tag is-info">НЦКР</span>{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>Разработчик: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>
                      <span className=" is-info has-text-weight-normal	">
                        {" "}
                        ИДУ, Лаборатория ОТС
                      </span>
                    </a>
                  </li>
                </ul>

                <ul>
                  <li className="sidebar-item ">
                    <a>Как связаться: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <span className="is-size-7 has-text-weight-normal	">
                      <a href="mailto:  volotskiy@gmail.com ">
                        {" "}
                        volotskiy@gmail.com{" "}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Main cotent  */}
              <div className="col-md-9 col-sm-12 col-xs-12 news-content">
                {/* Description */}
                <div>
                  <p className="card-header-title is-size-4">Описание Модели</p>
                  <hr />
                  <div className="card-content">
                    <div className="content">
                      <p>
                        Оценка транспортной доступности территории предоставляет
                        возможность оценки доступности городских объектов и
                        территорий для различных видов транспорта от заданной
                        точки за определенное время в различное время суток.
                        Сервис также позволяет сформировать маршрут между двумя
                        точками на личном или общественном транспорте.
                      </p>
                      <p>
                        Модель транспортной доступности совместно с моделью
                        транспортной обеспеченности позволяет оценить и повысить
                        эффективность транспортной системы города.
                      </p>
                      <p>
                        Основой сервиса служит мультиагентная транспортная
                        модель Санкт- Петербургской агломерации. Модель
                        мультимодальная, то есть включает возможность
                        перемещения агентов как на личном, так и на общественном
                        транспорте. Транспортный спрос в модели задан на основе
                        данных о расселении населения, расположении мест
                        приложения труда, учебных заведений, мест досуга,
                        социальных и других объектов, а также на основе
                        исследований о транспортном поведении населения.
                      </p>
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}
                <article className="panel is-info">
                  <p className="panel-heading">Данные и Ресурсы</p>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Описание сервиса транспортной доступности
                  </a>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Пользовательская документация сервиса
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Доступ к программному интерфейсу сервиса
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Руководство пользователя модели{" "}
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Route>
      </Switch>
    );
}

export default Transport;
