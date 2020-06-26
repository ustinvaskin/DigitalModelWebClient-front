import React from "react";
import { Link } from "react-router-dom";

class ModelEcologyDescription extends React.Component {
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
              <li>
                <Link to="/models">Модели</Link>
              </li>
              <li class="is-active">
                <a href="/" aria-current="page">
                  Экологическое воздействие{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-3">
                  Экологическое воздействие
                </h3>
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
              </div>

              {/* Main cotent  */}
              <div class="col-md-9 col-sm-12 col-xs-12 news-content">
                {/* Description */}
                <div>
                  <p class="card-header-title is-size-4">Описание Модели</p>
                  <hr />
                  <div class="card-content">
                    <div class="content">
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

                <article class="panel is-info">
                  <p class="panel-heading">Материалы</p>

                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Экологическое воздействие автотранспорта
                  </a>
                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Экологическое воздействие предприятий{" "}
                  </a>
                </article>
                <article class="panel is-info">
                  <p class="panel-heading">Данные и Ресурсы</p>

                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Описание модели экологического воздействия
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelEcologyDescription;
