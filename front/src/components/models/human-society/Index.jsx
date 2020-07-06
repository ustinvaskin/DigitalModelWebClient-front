import React from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import HumanSocietyDemonstration from "./demonstration/Index";
import Breadcrumbs from "../../common/Breadcrumb";

function HumanSociety() {
  let breadcrumbs = ["Главная", "Модели", "Модель горожанина и жизни в умном городе"];
    return (
      <Switch>
        <Route path="/models/human-society/demonstration" component={HumanSocietyDemonstration} />
        <Route path="/models/human-society">
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
                  <p className="card-header-title is-size-4">Описание модели</p>
                  <Link to="/models/human-society">
                    <button className="button is-outlined is-danger is-m-5 is-longer-btn-loyal">
                      <span className="fa fa-long-arrow-right isinModel"></span> Демонстрация модели жизни в умном городе
                        </button>
                  </Link>
                  <div className="card-content">
                    <div className="content">
                      <p>
                        Модель представляет оценку ожидаемой лояльности горожан
                        к решениям развития города с точки зрения уровня
                        обеспечения жизни горожан всех групп и жизненных
                        ситуаций. <p />
                        Модель предназначена для управления процессом внедрения
                        решений умного города и реализует концепцию умного
                        города НЦКР. В основе модели заложена
                        ценностно-ориентированная оценка качества жизни в умном
                        городе, основанная на представлении структуры ценностей
                        и мотиваций всех групп города в различных жизненных
                        ситуациях.{" "}
                      </p>
                      <p>
                        Лояльность основана на выявлении потребности социальных
                        групп в целом и на отдельных территориях в обеспечении
                        сервисами и функциями города в каждой жизненной
                        ситуации.
                      </p>
                      <p>
                        Такой подход позволяет определить обеспеченность и
                        дефицит сервисов применительно к конкретным жизненным
                        ситуациям, выявить необеспеченные группы населения, и
                        оценить потребности в сервисах умного города с точки
                        зрения текущей ситуации в городе.»{" "}
                      </p>

                      <div></div>
                    </div>

                  </div>
                </div>

                <hr />
                {/* //Data and Resorses  */}

                <article className="panel is-info">
                  <p className="panel-heading">Данные и Ресурсы</p>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
            Описание ценностной модели горожанина
                  </a>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Коэффициенты модели ценностно-ориентированной оценки
                    качества жизни в умном городе{" "}
                  </a>
                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Описание модели ценностно-ориентированной оценки качества
                    жизни в умном городе{" "}
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

export default HumanSociety;
