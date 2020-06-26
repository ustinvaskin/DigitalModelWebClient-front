import React from "react";
import { Link } from "react-router-dom";

class MaterialsPage extends React.Component {
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
                <Link to="/">Материалы</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-3"> Материалы</h3>
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
                  <div class=" ">
                    <div className="text-is-about">
                      <p class="card-header-title is-size-4 has-text-centered">
                        Материалы
                      </p>
                      <hr />
                      <nav class="panel is-info">
                        <p class="panel-heading">
                          1. Корпоративные стандарты НЦКР
                        </p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Умный город. Термины и определения.
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Умный город. Онтологическая модель городской среды.
                          Требования к составу и содержанию.{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Умный город. Этапы внедрения.{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Цифровая модель города. Термины и определения.{" "}
                        </a>
                      </nav>

                      <nav class="panel is-info">
                        <p class="panel-heading">2. Регламенты платформы: </p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Регламент управления составом данных платформы.{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Регламент внесения изменений в модель данных
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Регламент подключения партнеров к платформе{" "}
                        </a>
                      </nav>

                      <nav class="panel is-info">
                        <p class="panel-heading">
                          3. Методические рекомендации{" "}
                        </p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Методические рекомендации по моделированию
                          расселения населения{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Методические рекомендации по моделированию населения
                          с учетом ценностей и мотиваций для оценки качества
                          жизни в умном городе{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Методические рекомендации по оценке качества жизни
                          населения{" "}
                        </a>
                      </nav>
                      <nav class="panel is-info">
                        <p class="panel-heading">4. Инструкции </p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Инструкция интеграции модели обработки данных
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Инструкция подготовки набора данных перед загрузкой
                        </a>
                      </nav>
                      <nav class="panel is-info">
                        <p class="panel-heading">
                          5. Дополнительное профессиональное образование на базе
                          платформы{" "}
                        </p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Технологии машинного обучения и анализа городских
                          данных{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Цифровые методы в управлении развитием города
                        </a>
                      </nav>
                      <nav class="panel is-info">
                        <p class="panel-heading">6. Документация</p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Концепция умного города НЦКР.
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Концепция построения цифровой модели городской
                          территории.{" "}
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Концептуальная онтологическая модель городских
                          данных.
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Руководство пользователя платформы
                        </a>
                      </nav>
                      <nav class="panel is-info">
                        <p class="panel-heading">7. Исходники</p>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель структуры и расселения населения города
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель оценки обеспеченности населения
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель оценки озелененности улиц
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель распознавания фасадов зданий
                        </a>
                        <a class="panel-block">
                          <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                          </span>
                          - Модель конкуренции объектов массового обслуживания
                          населения
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}

                <article class="panel is-info">
                  <p class="panel-heading">Данные и Ресурсы</p>

                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
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
