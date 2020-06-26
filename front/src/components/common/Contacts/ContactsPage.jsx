import React from "react";
import { Link } from "react-router-dom";

class Con extends React.Component {
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

              <li class="">
                <Link to="/about">О проекте</Link>
              </li>

              <li class="is-active">
                <Link to="/">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-3"> Контакты</h3>
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
                  <div class="container is-fluid" id="content">
                    <section
                      data-section-id="1"
                      data-category="contacts"
                      data-component-id="c37c_10_01_awz"
                      class="section"
                    >
                      <div class="container py-4">
                        <h2
                          class="title has-text-centered mb-6"
                          data-config-id="header"
                        >
                          Контакты
                        </h2>
                        <div class="columns">
                          <div class="column is-6">
                            <p
                              class="subtitle is-size-6"
                              data-config-id="description"
                            >
                              <span className="has-text-weight-semibold	">
                                Национальный центр когнитивных разработок
                              </span>{" "}
                              — центр компетенции Национальной технологической
                              инициативы (НТИ) по сквозной технологии
                              «Технологии машинного обучения и когнитивные
                              технологии», созданный в 2018 году на базе
                              Университета ИТМО.
                            </p>
                            <div>
                              <div class="media">
                                <div class="media-left">
                                  {/* <figure class="image is-24x24">
                                    <img
                                      src="placeholder/icons/map-marker.svg"
                                      alt=""
                                      data-config-id="01_icon1"
                                    />
                                  </figure> */}
                                </div>
                                <div class="media-content">
                                  <div class="content">
                                    <a
                                      href="https://actcognitive.org"
                                      target="_blank"
                                    >
                                      {" "}
                                      https://actcognitive.org
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="media">
                                <div class="media-left">
                                  {/* <figure class="image is-24x24">
                                    <img
                                      src="placeholder/icons/phone.svg"
                                      alt=""
                                      data-config-id="01_icon2"
                                    />
                                  </figure> */}
                                </div>
                                <div class="media-content">
                                  <div class="content">
                                    <p data-config-id="01_text2">
                                      Российская Федерация, 199034, г.
                                      Санкт-Петербург, Биржевая линия, д. 14,
                                      лит. А
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="columns">
                              <div className="column">
                                <img
                                  src="https://i.imgur.com/Gnk6rrh.png"
                                  alt=""
                                />
                              </div>
                              <div className="column">
                                <img
                                  className="udi-logo"
                                  src="https://idu.itmo.ru/images/727ca4da77132cffbd36351bdcd55d1f.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div class="column is-5 is-offset-1">
                            <p
                              class="subtitle is-size-6"
                              data-config-id="description"
                            >
                              <span className="has-text-weight-semibold	">
                                Институт дизайна и урбанистики (IDU)
                              </span>{" "}
                              — образовательное и проектно-исследовательское
                              подразделение Университета ИТМО, нацеленное на
                              развитие междисциплинарных компетенций и научного
                              подхода для решения комплексных городских задач с
                              применением информационных технологий на базе
                              принципов устойчивости и социальной
                              ориентированности.
                            </p>
                            <div>
                              <div class="media">
                                <div class="media-left">
                                  {/* <figure class="image is-24x24">
                                    <img
                                      src="placeholder/icons/map-marker.svg"
                                      alt=""
                                      data-config-id="01_icon1"
                                    />
                                  </figure> */}
                                </div>
                                <div class="media-content">
                                  <div class="content">
                                    <p data-config-id="01_text1">
                                      <a
                                        href="  https://idu.itmo.ru"
                                        target="_blank"
                                      >
                                        {" "}
                                        https://idu.itmo.ru
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="media">
                                <div class="media-left">
                                  {/* <figure class="image is-24x24">
                                    <img
                                      src="placeholder/icons/phone.svg"
                                      alt=""
                                      data-config-id="01_icon2"
                                    />
                                  </figure> */}
                                </div>
                                <div class="media-content">
                                  <div class="content">
                                    <p data-config-id="01_text2">
                                      Российская Федерация, 199034, г.
                                      Санкт-Петербург, Биржевая линия, д. 14,
                                      лит. А{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="media">
                                <div class="media-left">
                                  {/* <figure class="image is-24x24">
                                    <img
                                      src="placeholder/icons/envelope.svg"
                                      alt=""
                                      data-config-id="01_icon3"
                                    />
                                  </figure> */}
                                </div>
                                <div class="media-content">
                                  <div class="content">
                                    <p data-config-id="01_text3">
                                      <a href="mityagin@itmo.ru">
                                        {" "}
                                        mityagin@itmo.ru
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* //Data and Resorses  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Con;
