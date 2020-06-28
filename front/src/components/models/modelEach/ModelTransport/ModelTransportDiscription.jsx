import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ModelTransportDescription() {
  // To scroll up back again
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
                Транспортная обеспеченность{" "}
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
                Транспортная обеспеченность
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
                      ИДУ, Лаборатория ОТС
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
                    <a href="mailto:  volotskiy@gmail.com ">
                      {" "}
                      volotskiy@gmail.com{" "}
                    </a>
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
                      Оценка транспортной доступности территории предоставляет
                      возможность оценки доступности городских объектов и
                      территорий для различных видов транспорта от заданной
                      точки за определенное время в различное время суток.
                      Сервис также позволяет сформировать маршрут между двумя
                      точками на личном или общественном транспорте.
                    </p>
                    <p>
                      Модель транспортной доступности совместно с моделью
                      транспортной обеспеченности позволяет оценить и повысить
                      эффективность транспортной системы города.
                    </p>
                    <p>
                      Основой сервиса служит мультиагентная транспортная модель
                      Санкт- Петербургской агломерации. Модель мультимодальная,
                      то есть включает возможность перемещения агентов как на
                      личном, так и на общественном транспорте. Транспортный
                      спрос в модели задан на основе данных о расселении
                      населения, расположении мест приложения труда, учебных
                      заведений, мест досуга, социальных и других объектов, а
                      также на основе исследований о транспортном поведении
                      населения.
                    </p>
                  </div>
                </div>
              </div>
              {/* //Data and Resorses  */}
              <article class="panel is-info">
                <p class="panel-heading">Данные и Ресурсы</p>

                <a
                  class="panel-block is-active"
                  href="http://77.234.203.187:17026/api/downloads/Accessibility_REST_Описание_программы.docx"
                >
                  <span class="panel-icon"></span>
                  Описание сервиса транспортной доступности
                </a>

                <a
                  class="panel-block is-active"
                  href="http://77.234.203.187:17026/api/downloads/Accessibility_REST_Руководство_системного_программиста.docx"
                >
                  <span class="panel-icon"></span>
                  Пользовательская документация сервиса
                </a>
                <a
                  class="panel-block is-active"
                  href="http://10.32.1.61:8080/matsim-routing/api/"
                  taget="_blank"
                >
                  <span class="panel-icon"></span>
                  Доступ к программному интерфейсу сервиса
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelTransportDescription;
