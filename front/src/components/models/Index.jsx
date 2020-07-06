import React, {useEffect } from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";

function Models() {
  let breadcrumbs = ["Главная", "Модели"];
    return (
      <div>
        <Breadcrumb breadcrumbs={breadcrumbs}/>
        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-2">
                  {breadcrumbs[breadcrumbs.length - 1]}
                </h3>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/models/population">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Расселение и структура населения
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/models/human-society">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Лояльность населения к умному городу
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <Link to="#">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Обеспеченность населения сервисами и функциями
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/models/ecology">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Экологическое воздействие
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/models/transport">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Транспортная доступность{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-9 col-sm-12 col-xs-12 news-content">
                <div className="cards cards--3">
                  <div className="card--image">
                    <img
                      src="https://img.gazeta.ru/files3/602/11700602/Depositphotos_73113069_xl-2015-pic4_zoom-1500x1500-63885.jpg"
                      alt="Население"
                    />
                    <div className="card-content card-content-slide-up">
                      <h4 className="card-title is-size-5 has-text-weight-medium ">
                        Расселение и структура населения
                      </h4>

                      <div className="card-description">
                        Модель представляет оценку ожидаемого распределения
                        жителей по территории Санкт-Петербурга. Включает
                        возрастную структуру жителей для каждого жилого дома, а
                        также возрастную структуру ожидаемых социальных групп и
                        людей в специфических жизненных ситуациях.{" "}
                      </div>
                      <div className="card-link-wrapper">
                        <Link
                          to="/models/population"
                          className="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card--image">
                    <img
                      src="https://s0.rbk.ru/v6_top_pics/media/img/7/58/755817103264587.jpeg"
                      alt="Обеспеченность"
                    />
                    <div className="card-content card-content-slide-up">
                      <h4 className="card-title is-size-5 has-text-weight-medium">
                        Обеспеченность населения сервисами и функциями
                      </h4>

                      <div className="card-description">
                        Модель представляет оценку обеспеченности всех групп
                        населения и людей в специфических жизненных ситуациях
                        городскими сервисами, функциями и инфраструктурой.
                        Модель учитывает доступность сервисов и функций для
                        жителей каждого жилого дома, а также потребности в
                        горожан сервисах и функциях в разных жизненных
                        ситуациях.{" "}
                      </div>
                      <div className="card-link-wrapper">
                        <Link
                          to="/models/population"
                          className="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card--image">
                    <img src="https://i.imgur.com/Mc0TOh2.jpg" alt="Общество" />
                    <div className="card-content card-content-slide-up">
                      <h4 className="card-title is-size-5 has-text-weight-medium">
                        Лояльность населения к умному городу
                      </h4>

                      <div className="card-description">
                        Модель представляет оценку ожидаемой лояльности горожан
                        к решениям развития города с точки зрения уровня
                        обеспечения жизни горожан всех групп и жизненных
                        ситуаций. Модель основана на восстановлении структуры
                        жизненных ситуаций для населения и паттернов ежедневной
                        активности для каждой группы населения. Лояльность
                        основана на выявлении потребности социальных групп в
                        целом и на отдельных территориях в обеспечении сервисами
                        и функциями города в каждой жизненной ситуации.
                      </div>
                      <div className="card-link-wrapper">
                        <Link
                          to="/models/human-society"
                          className="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card--image">
                    <img
                      src="https://kudago.com/media/images/list/e5/fd/e5fd858dc2641e46e9bf5f8613ff3ed4.jpg"
                      alt="Транспорт"
                    />
                    <div className="card-content card-content-slide-up">
                      <h4 className="card-title is-size-5 has-text-weight-medium">
                        Транспортная доступность
                      </h4>

                      <div className="card-description">
                        Модель оценки транспортной доступности территорий
                        города, основанная на агентной модели транспорта и
                        модели транспортного спроса. Модель обеспечивает
                        построение полигона транспортной доступности для города
                        на личном и на общественном транспорте за заданное
                        время.
                      </div>
                      <div className="card-link-wrapper">
                        <Link
                          to="/models/transport"
                          className="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card--image">
                    <img
                      src="https://kuda-spb.ru/uploads/614b5818d0347984cbf3f739ecca320f.png"
                      alt="Экология"
                    />
                    <div className="card-content card-content-slide-up">
                      <h4 className="card-title is-size-5 has-text-weight-medium">
                        Экологическое воздействие
                      </h4>
                      <div className="card-description">
                        Модель представляет интегральную оценку экологического
                        воздействия от экологически-активных объектов:
                        промышленные объекты, транспорт, рекреационные зоны.
                        Интегральная оценка строится на основе нормированных
                        значений загрязнения воздуха.
                      </div>
                      <div className="card-link-wrapper">
                        <Link
                          to="/models/ecology"
                          className="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Models;
