import React from "react";
import { Link } from "react-router-dom";

class Con extends React.Component {
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

              <li className="">
                <Link to="/about">О проекте</Link>
              </li>

              <li className="is-active">
                <Link to="/">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-3"> Контакты</h3>
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
                  <div className="container is-fluid" id="content">
                    <section
                      data-section-id="1"
                      data-category="contacts"
                      data-component-id="c37c_10_01_awz"
                      className="section"
                    >
                      <div className="container py-4">
                        <h2
                          className="title has-text-centered mb-6"
                          data-config-id="header"
                        >
                          Контакты
                        </h2>
                        <div className="columns">
                          <div className="column is-6">
                            <p
                              className="subtitle is-size-6"
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
                              <div className="media">
                                <div className="media-left">
                                  {/* <figure className="image is-24x24">
                                    <img
                                      src="placeholder/icons/map-marker.svg"
                                      alt=""
                                      data-config-id="01_icon1"
                                    />
                                  </figure> */}
                                </div>
                                <div className="media-content">
                                  <div className="content">
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
                              <div className="media">
                                <div className="media-left">
                                  {/* <figure className="image is-24x24">
                                    <img
                                      src="placeholder/icons/phone.svg"
                                      alt=""
                                      data-config-id="01_icon2"
                                    />
                                  </figure> */}
                                </div>
                                <div className="media-content">
                                  <div className="content">
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

                          <div className="column is-5 is-offset-1">
                            <p
                              className="subtitle is-size-6"
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
                              <div className="media">
                                <div className="media-left">
                                  {/* <figure className="image is-24x24">
                                    <img
                                      src="placeholder/icons/map-marker.svg"
                                      alt=""
                                      data-config-id="01_icon1"
                                    />
                                  </figure> */}
                                </div>
                                <div className="media-content">
                                  <div className="content">
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
                              <div className="media">
                                <div className="media-left">
                                  {/* <figure className="image is-24x24">
                                    <img
                                      src="placeholder/icons/phone.svg"
                                      alt=""
                                      data-config-id="01_icon2"
                                    />
                                  </figure> */}
                                </div>
                                <div className="media-content">
                                  <div className="content">
                                    <p data-config-id="01_text2">
                                      Российская Федерация, 199034, г.
                                      Санкт-Петербург, Биржевая линия, д. 14,
                                      лит. А{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="media">
                                <div className="media-left">
                                  {/* <figure className="image is-24x24">
                                    <img
                                      src="placeholder/icons/envelope.svg"
                                      alt=""
                                      data-config-id="01_icon3"
                                    />
                                  </figure> */}
                                </div>
                                <div className="media-content">
                                  <div className="content">
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
