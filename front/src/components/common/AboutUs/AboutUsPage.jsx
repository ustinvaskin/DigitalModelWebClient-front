import React from "react";
import { Link } from "react-router-dom";

class AboutUspPage extends React.Component {
  state = {};

  render() {
    return (
      <div>

        <div className="breadcrumbs">
          <nav
            className=" breadcrumb has-arrow-separator is-centered"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>

              <li className="is-active">
                <Link to="/">О Проекте</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-3"> О нас</h3>
                <br />
                <ul>
                  <li className="sidebar-item">
                    <Link to="/materials">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Материалы
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/contacts">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Main cotent  */}
              <div className="col-md-9 col-sm-12 col-xs-12 news-content">
                {/* Description */}
                <div>
                  <div className="">
                    <div className="">
                      <p className="card-header-title is-size-4 has-text-centered">
                        Платформа лояльности горожан к решениям умного города
                      </p>
                      <hr />
                      <div className="card-content">
                        <div className="content ">
                          <section className="section">
                            <div className="container">
                              <p className="has-text-weight-semibold">
                                Основана на ценностно-ориентированной оценки
                                качества жизни в умном городе, реализует
                                вычисление и аналитику показателей «умности»
                                города в соответствии с концепцией умного города
                                как системы управления городскими ресурсами,
                                предназначенная для реализации интеллектуального
                                подхода к внедрению современных технологий для
                                создания нового качества жизни населения.
                              </p>
                            </div>
                          </section>

                          <section className="section">
                            <div className="container">
                              <h2>Целью проекта является </h2>
                              <p>
                                предоставление правительствам городов обратной
                                связи о своевременности внедрения решений умного
                                города, а организациям оценку востребованности
                                решений умного города для оптимизации стратегий
                                и планов.
                              </p>
                            </div>
                          </section>
                          <section className="section">
                            <div className="container">
                              <h2>Возможности </h2>
                              <ul>
                                <li>
                                  Выявление причинно-следственных связей между
                                  характеристиками восприятия и процессами
                                  городской среды (- механизмы управления).
                                </li>
                                <li>
                                  Объяснимые подходы к оценке восприятия
                                  жителями городской среды на основе когнитивных
                                  технологий.
                                </li>
                                <li>
                                  Тиражируемость решения для разных
                                  социокультурных общностей и различных форм
                                  поселений.
                                </li>
                                <li>
                                  Формирование основы для проектирования, оценки
                                  и сопровождения различных сервисов умного
                                  города.
                                </li>
                                <li>
                                  Независимость от технических средств сбора
                                  данных и совместимость с городскими
                                  информационными системами.
                                </li>
                              </ul>
                            </div>
                          </section>
                          <div className="container is-fluid" id="content">
                            <section
                              data-section-id="1"
                              data-category="team"
                              data-component-id="c37c_7_02_awz"
                              className="section"
                            >
                              <div className="container has-text-centered py-4">
                                <h2 className="title" data-config-id="header">
                                  Включает компоненты:
                                </h2>

                                <div className="columns is-centered is-multiline py-5">
                                  <div className="column is-6 is-3-widescreen mb-6">
                                    <div className="level">
                                      <div className="level-item">
                                        <figure className="image is-128x128">
                                          <img
                                            className="is"
                                            src="https://i.imgur.com/A1acRV3.png"
                                            alt=""
                                            data-config-id="02_img1"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      className="subtitle is-6"
                                      data-config-id="02_job1"
                                    >
                                      Ценностную модель качества жизни в умном
                                      городе
                                    </p>
                                  </div>
                                  <div className="column is-6 is-3-widescreen mb-6">
                                    <div className="level">
                                      <div className="level-item">
                                        <figure className="image is-128x128">
                                          <img
                                            className=""
                                            src="https://i.imgur.com/ynS57OW.png"
                                            alt=""
                                            data-config-id="02_img2"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      className="subtitle is-6"
                                      data-config-id="02_job2"
                                    >
                                      Мониторинг состояния и структуры городских
                                      инфраструктур и функций
                                    </p>
                                  </div>
                                  <div className="column is-6 is-3-widescreen mb-6">
                                    <div className="level">
                                      <div className="level-item">
                                        <figure className="image is-128x128">
                                          <img
                                            className=""
                                            src="https://i.imgur.com/Ke3Ay5M.png"
                                            alt=""
                                            data-config-id="02_img3"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      className="subtitle is-6"
                                      data-config-id="02_job3"
                                    >
                                      Оценку потребности города и горожан в
                                      решениях умного города
                                    </p>
                                  </div>
                                  <div className="column is-6 is-3-widescreen mb-6">
                                    <div className="level">
                                      <div className="level-item">
                                        <figure className="image is-128x128">
                                          <img
                                            className=""
                                            src="https://i.imgur.com/N8R6Zv8.png"
                                            alt=""
                                            data-config-id="02_img4"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      className="subtitle is-6"
                                      data-config-id="02_job4"
                                    >
                                      Оценку индикаторов «умности» города и
                                      территорий
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </section>

                            <section className="section">
                              <div className="container">
                                <p className="">
                                  <span className="has-text-weight-bold">
                                    Платформа входит в комплекс решений умного
                                    города НЦКР:
                                  </span>{" "}
                                  экосистему модулей и компонентов, направленных
                                  на решение задач умного города, являющихся
                                  отчуждаемыми цифровыми объектами, но
                                  подчиняющиеся общей концепции умного города
                                  НЦКР.
                                </p>
                              </div>
                            </section>
                            <section className="section">
                              <div className="container">
                                <img
                                  src="https://i.imgur.com/lGo5mTP.png"
                                  alt=""
                                />
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}
                <header className="card-header">
                  <p className="card-header-title is-size-4">Данные и Ресурсы</p>
                </header>
                <div className="card-content">
                  <div className="columns">
                    <div className="column">
                      <span>
                        <span>Презентация</span>
                      </span>
                    </div>
                    <div className="column">
                      <button className="button btn-is-download is-rounded is-link ">
                        Скачать
                      </button>
                    </div>
                  </div>
                  <div className="content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUspPage;
