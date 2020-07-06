import React from "react";
import { Link } from "react-router-dom";

class MaterialsPage extends React.Component {
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
                <Link to="/">Материалы</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-3"> Материалы</h3>
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
                  <div className=" ">
                    <div className="text-is-about">
                      <p className="card-header-title is-size-4 has-text-centered">
                        Материалы
                      </p>
                      <hr />
                      <nav className="panel is-info">
                        <p className="panel-heading">
                          1. Корпоративные стандарты НЦКР
                        </p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Умный город. Термины и определения.
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Умный город. Онтологическая модель городской среды.
                          Требования к составу и содержанию.{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Умный город. Этапы внедрения.{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Цифровая модель города. Термины и определения.{" "}
                        </a>
                      </nav>

                      <nav className="panel is-info">
                        <p className="panel-heading">2. Регламенты платформы: </p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Регламент управления составом данных платформы.{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Регламент внесения изменений в модель данных
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Регламент подключения партнеров к платформе{" "}
                        </a>
                      </nav>

                      <nav className="panel is-info">
                        <p className="panel-heading">
                          3. Методические рекомендации{" "}
                        </p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Методические рекомендации по моделированию
                          расселения населения{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Методические рекомендации по моделированию населения
                          с учетом ценностей и мотиваций для оценки качества
                          жизни в умном городе{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Методические рекомендации по оценке качества жизни
                          населения{" "}
                        </a>
                      </nav>
                      <nav className="panel is-info">
                        <p className="panel-heading">4. Инструкции </p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Инструкция интеграции модели обработки данных
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Инструкция подготовки набора данных перед загрузкой
                        </a>
                      </nav>
                      <nav className="panel is-info">
                        <p className="panel-heading">
                          5. Дополнительное профессиональное образование на базе
                          платформы{" "}
                        </p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Технологии машинного обучения и анализа городских
                          данных{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Цифровые методы в управлении развитием города
                        </a>
                      </nav>
                      <nav className="panel is-info">
                        <p className="panel-heading">6. Документация</p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Концепция умного города НЦКР.
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Концепция построения цифровой модели городской
                          территории.{" "}
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Концептуальная онтологическая модель городских
                          данных.
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Руководство пользователя платформы
                        </a>
                      </nav>
                      <nav className="panel is-info">
                        <p className="panel-heading">7. Исходники</p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель структуры и расселения населения города
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель оценки обеспеченности населения
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель оценки озелененности улиц
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель распознавания фасадов зданий
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель конкуренции объектов массового обслуживания
                          населения
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}

                <article className="panel is-info">
                  <p className="panel-heading">Данные и Ресурсы</p>

                  <a className="panel-block is-active">
                    <span className="panel-icon"></span>
                    Призентауция{" "}
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

export default MaterialsPage;
