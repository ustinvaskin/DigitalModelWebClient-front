import React, { useEffect } from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
// import ServicesDemonstration from "./demonstration/Index";
import Breadcrumb from "../../common/Breadcrumb";

function Services() {
    let breadcrumbs = ["Главная", "Модели", "Обеспеченность населения сервисами и функциями"];
    return (
      <Switch>
        {/* <Route path="/models/services/demonstration" component={ServicesDemonstration} /> */}
        <Route path="/models/services">
      <Breadcrumb breadcrumbs={breadcrumbs}/>
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
                        Модель представляет оценку обеспеченности всех групп
                        населения и людей в специфических жизненных ситуациях
                        городскими сервисами, функциями и инфраструктурой.
                        Модель учитывает доступность сервисов и функций для
                        жителей каждого жилого дома, а также потребности в
                        горожан сервисах и функциях в разных жизненных ситуациях
                      </p>
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}
                <hr />
                <article className="panel is-info">
                  <p className="panel-heading">Данные и Ресурсы</p>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Ссылка на исходный код модели
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Описание модели
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Исходные данные
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Руководство пользователя модели
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

export default Services;
