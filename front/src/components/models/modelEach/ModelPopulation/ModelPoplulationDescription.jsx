import React from "react";
import { Link } from "react-router-dom";

class ModelPopulationDescription extends React.Component {
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
                  Модель расселения и структуры населения
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
                  {" "}
                  Модель расселения и структуры населения
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
                        Модель представляет оценку ожидаемого распределения
                        жителей по территории Санкт-Петербурга. Включает
                        возрастную структуру жителей для каждого жилого дома, а
                        также возрастную структуру ожидаемых социальных групп и
                        людей в специфических жизненных ситуациях.
                      </p>
                      <p>
                        Социальные группы включают возрастные социальные группы:
                        население моложе трудоспособного возраста,
                        трудоспособное население и старше трудоспособного
                        возраста. Специфические группы населения: беременные
                        женщины, владельцы домашних животных, велосипедисты,
                        автовладельцы. Жизненные ситуации: обращение за
                        государственными и муниципальными услугами, травма,
                        роды, свидание, заболевания.
                      </p>
                      <p>
                        Всего в модели представлено 57 социальных групп и
                        жизненных ситуаций.
                      </p>
                      <p>
                        В качестве исходных данных использованы данные
                        официальной статистики по структуре населения, данные
                        паспортов многоквартирных домов, а также открытые данные
                        OSM(ссылка).{" "}
                      </p>
                      <p>
                        Модель представляет ожидаемое распределения с учетом
                        сведений о жилых домах, в том числе вводимых в
                        эксплуатацию, и с минимальным отклонением от официальной
                        статистики.
                      </p>
                      <div></div>
                    </div>
                    <div className="btn-in-model-descr">
                      <Link to="/InterfaceModelPopulation">
                        <button class="button is-outlined is-danger is-m-5">
                          Модель населения
                        </button>
                      </Link>
                      <Link to="/InterfaceModelPopulationSocial">
                        <button class="button is-outlined is-danger  is-m-5">
                          К модели Соц ...
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <hr />
                {/* //Data and Resorses  */}

                <article class="panel is-info">
                  <p class="panel-heading">Данные и Ресурсы</p>

                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Ссылка на исходный код модели
                  </a>
                  <a
                    class="panel-block"
                    href="http://77.234.203.187:17026/api/downloads/Описние_модели_расселения_населения.pdf"
                  >
                    <span class="panel-icon"></span>
                    Описние модели расселения населения
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon"></span>
                    Исходные данные
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon"></span>
                    Руководство пользователя модели{" "}
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

export default ModelPopulationDescription;
