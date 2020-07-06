import React, { useEffect } from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
// import EcologyDemonstration from "./demonstration/Index";
import Breadcrumbs from "../../common/Breadcrumb";

function Ecology() {
  let breadcrumbs = ["Главная", "Модели", "Экологическое воздействие"];
    return (
      <Switch>
        {/* <Route path="/models/ecology/demonstration" component={EcologyDemonstration} /> */}
        <Route path="/models/ecology">
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
                        Модель представляет интегральную оценку экологического
                        воздействия от экологически-активных объектов:
                        промышленные объекты, транспорт, рекреационные зоны.
                        Интегральная оценка строится на основе нормированных
                        значений загрязнения воздуха.
                      </p>

                      <hr />
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}

                <article className="panel is-info">
                  <p className="panel-heading">Материалы</p>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Экологическое воздействие автотранспорта
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Экологическое воздействие предприятий{" "}
                  </a>
                </article>
                <article className="panel is-info">
                  <p className="panel-heading">Данные и Ресурсы</p>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Описание модели экологического воздействия
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

export default Ecology;
