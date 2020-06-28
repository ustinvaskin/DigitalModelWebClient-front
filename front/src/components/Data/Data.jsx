import React from "react";
import { Link } from "react-router-dom";

class Data extends React.Component {
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
                <a href="/" aria-current="page">
                  Скачать данные
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-3">Скачать данные</h3>
                <ul>
                  <li class="sidebar-item ">
                    <a>Последнее обновление: </a>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item ">
                    <a>
                      <span class=" is-info has-text-weight-normal	">
                        {" "}
                        Данные: дата Модель: дата
                      </span>
                    </a>
                  </li>
                </ul>

                <ul>
                  <li class="sidebar-item ">
                    <a>Правообладатель: </a>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item ">
                    <a>
                      <span class="tag is-info">ИТМО</span>
                      <span class="tag is-info">НЦКР</span>{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item ">
                    <a>Разработчик: </a>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item ">
                    <a>
                      <span class=" is-info has-text-weight-normal	">
                        {" "}
                        ИДУ, Лаборатория ЦТУГ
                      </span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item ">
                    <a>Как связаться: </a>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item ">
                    <span className="is-size-7 has-text-weight-normal	">
                      <a href="mailto:  mityagin@itmo.ru"> mityagin@itmo.ru</a>
                    </span>
                  </li>
                </ul>
                <br />
                <h3 class="heading-sidebar is-size-3">Ссылки</h3>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/dataShow">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Оперативные данные
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/dataInterface">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Просмотр данных
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Main cotent  */}
              <div class="primary border-left col-md-9 col-sm-12 col-xs-12">
                <ul class="dataset-list unstyled">
                  <li class="dataset-item">
                    <div class="row">
                      <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a class="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul class="dataset-resources unstyled">
                          <a href="#">
                            <button class="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="dataset-item">
                    <div class="row">
                      <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a class="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul class="dataset-resources unstyled">
                          <a href="#">
                            <button class="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="dataset-item">
                    <div class="row">
                      <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a class="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul class="dataset-resources unstyled">
                          <a href="#">
                            <button class="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="dataset-item">
                    <div class="row">
                      <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a class="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul class="dataset-resources unstyled">
                          <a href="#">
                            <button class="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="dataset-item">
                    <div class="row">
                      <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a class="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul class="dataset-resources unstyled">
                          <a href="#">
                            <button class="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
