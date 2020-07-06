import React from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import PopulationDemonstration from "./demonstration/Index";
import Breadcrumbs from "../../common/Breadcrumb";

function Population() {
  let breadcrumbs = ["Главная", "Модели", "Модель расселения и структуры населения"];
    return (
      <Switch>
        <Route path="/models/population/demonstration" component={PopulationDemonstration} />
        <Route path="/models/population">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-3">
                  {breadcrumbs[breadcrumbs.length - 1]}
                </h3>
                <ul>
                  <li className="sidebar-item ">
                    <a>Последнее обновление: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>
                      <span className=" is-info has-text-weight-normal	">
                        {" "}
                        Данные: дата Модель: дата
                      </span>
                    </a>
                  </li>
                </ul>

                <ul>
                  <li className="sidebar-item ">
                    <a>Правообладатель: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
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
                        ИДУ, Лаборатория ЦТУГ
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
                      <a href="mailto:  mityagin@itmo.ru"> mityagin@itmo.ru</a>
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
                        Модель представляет оценку ожидаемого распределения
                        жителей по территории Санкт-Петербурга. Включает
                        возрастную структуру жителей для каждого жилого дома, а
                        также возрастную структуру ожидаемых социальных групп и
                        людей в специфических жизненных ситуациях.
                      </p>
                      <p>
                        Социальные группы включают возрастные социальные группы:
                        население моложе трудоспособного возраста,
                        трудоспособное население и старше трудоспособного
                        возраста. Специфические группы населения: беременные
                        женщины, владельцы домашних животных, велосипедисты,
                        автовладельцы. Жизненные ситуации: обращение за
                        государственными и муниципальными услугами, травма,
                        роды, свидание, заболевания.
                      </p>
                      <p>
                        Всего в модели представлено 57 социальных групп и
                        жизненных ситуаций.
                      </p>
                      <p>
                        В качестве исходных данных использованы данные
                        официальной статистики по структуре населения, данные
                        паспортов многоквартирных домов, а также открытые данные
                        OSM(ссылка).{" "}
                      </p>
                      <p>
                        Модель представляет ожидаемое распределения с учетом
                        сведений о жилых домах, в том числе вводимых в
                        эксплуатацию, и с минимальным отклонением от официальной
                        статистики.
                      </p>
                      <div></div>
                    </div>
                    <div className="btn-in-model-descr">
                      <Link to="/models/population/demonstration/">
                        <button className="button is-outlined is-danger is-m-5">
                          Модель населения
                        </button>
                      </Link>
                      <Link to="/models/population-social/demonstration/">
                        <button className="button is-outlined is-danger  is-m-5">
                          К модели Соц ...
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <hr />
                {/* //Data and Resorses  */}

                <article className="panel is-info">
                  <p className="panel-heading">Данные и Ресурсы</p>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Ссылка на исходный код модели
                  </a>
                  <a className="panel-block">
                    <span className="panel-icon"></span>
                    Описание модели
                  </a>
                  <a className="panel-block">
                    <span className="panel-icon"></span>
                    Исходные данные
                  </a>
                  <a className="panel-block">
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

export default Population;
