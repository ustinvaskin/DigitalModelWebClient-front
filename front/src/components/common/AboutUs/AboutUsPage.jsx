import React from "react";
import { Link } from "react-router-dom";

class AboutUspPage extends React.Component {
  state = {};

  // To scroll up back again
  componentDidMount() {
    {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="breadcrumbs">
          <nav
            class=" breadcrumb has-arrow-separator is-centered"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>

              <li class="is-active">
                <Link to="/">О Проекте</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-3"> О нас</h3>
                <br />
                <ul>
                  <li class="sidebar-item">
                    <Link to="/materials">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Материалы
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/contacts">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Main cotent  */}
              <div class="col-md-9 col-sm-12 col-xs-12 news-content">
                {/* Description */}
                <div>
                  <div class="">
                    <div className="">
                      <p class="card-header-title is-size-4 has-text-centered">
                        Платформа лояльности горожан к решениям умного города
                      </p>
                      <hr />
                      <div class="card-content">
                        <div class="content ">
                          <section class="section">
                            <div class="container">
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

                          <section class="section">
                            <div class="container">
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
                          <section class="section">
                            <div class="container">
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
                          <div class="container is-fluid" id="content">
                            <section
                              data-section-id="1"
                              data-category="team"
                              data-component-id="c37c_7_02_awz"
                              class="section"
                            >
                              <div class="container has-text-centered py-4">
                                <h2 class="title" data-config-id="header">
                                  Включает компоненты:
                                </h2>

                                <div class="columns is-centered is-multiline py-5">
                                  <div class="column is-6 is-3-widescreen mb-6">
                                    <div class="level">
                                      <div class="level-item">
                                        <figure class="image is-128x128">
                                          <img
                                            class="is"
                                            src="https://i.imgur.com/A1acRV3.png"
                                            alt=""
                                            data-config-id="02_img1"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      class="subtitle is-6"
                                      data-config-id="02_job1"
                                    >
                                      Ценностную модель качества жизни в умном
                                      городе
                                    </p>
                                  </div>
                                  <div class="column is-6 is-3-widescreen mb-6">
                                    <div class="level">
                                      <div class="level-item">
                                        <figure class="image is-128x128">
                                          <img
                                            class=""
                                            src="https://i.imgur.com/ynS57OW.png"
                                            alt=""
                                            data-config-id="02_img2"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      class="subtitle is-6"
                                      data-config-id="02_job2"
                                    >
                                      Мониторинг состояния и структуры городских
                                      инфраструктур и функций
                                    </p>
                                  </div>
                                  <div class="column is-6 is-3-widescreen mb-6">
                                    <div class="level">
                                      <div class="level-item">
                                        <figure class="image is-128x128">
                                          <img
                                            class=""
                                            src="https://i.imgur.com/Ke3Ay5M.png"
                                            alt=""
                                            data-config-id="02_img3"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      class="subtitle is-6"
                                      data-config-id="02_job3"
                                    >
                                      Оценку потребности города и горожан в
                                      решениях умного города
                                    </p>
                                  </div>
                                  <div class="column is-6 is-3-widescreen mb-6">
                                    <div class="level">
                                      <div class="level-item">
                                        <figure class="image is-128x128">
                                          <img
                                            class=""
                                            src="https://i.imgur.com/N8R6Zv8.png"
                                            alt=""
                                            data-config-id="02_img4"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <p
                                      class="subtitle is-6"
                                      data-config-id="02_job4"
                                    >
                                      Оценку индикаторов «умности» города и
                                      территорий
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </section>

                            <section class="section">
                              <div class="container">
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
                            <section class="section">
                              <div class="container">
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

                <div className="text-is-about">
                  <p class="card-header-title is-size-4 has-text-centered">
                    Материалы
                  </p>
                  <hr />
                  <nav class="panel is-info">
                    <p class="panel-heading">Данные и ресурсы</p>
                    <a
                      class="panel-block"
                      href="http://77.234.203.187:17026/api/downloads/1_Концепция_Умного_города_НЦКР_25_06_2020.pdf"
                    >
                      <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                      </span>
                      Концепция Умного города
                    </a>
                    <a
                      class="panel-block"
                      href="http://77.234.203.187:17026/api/downloads/НЦКР_25_06_КРУГ_Комлекс_решений.pdf"
                    >
                      <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                      </span>
                      Комлекс решений
                    </a>
                    <a
                      class="panel-block"
                      href="http://77.234.203.187:17026/api/downloads/НЦКР_25_06_КРУГ_Платформа_лояльности.pdf"
                    >
                      <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                      </span>
                      Платформа лояльности
                    </a>
                    <a
                      class="panel-block"
                      href="http://77.234.203.187:17026/api/downloads/Умный_город_НЦКР.pdf"
                    >
                      <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                      </span>
                      Умный город
                    </a>
                  </nav>
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
