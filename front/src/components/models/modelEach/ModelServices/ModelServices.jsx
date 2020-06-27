import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ModelServicesDescription() {

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
                  Обеспеченность населения сервисами и функциями{" "}
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
                  Обеспеченность населения сервисами и функциями
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
                        Модель представляет оценку обеспеченности всех групп
                        населения и людей в специфических жизненных ситуациях
                        городскими сервисами, функциями и инфраструктурой.
                        Модель учитывает доступность сервисов и функций для
                        жителей каждого жилого дома, а также потребности в
                        горожан сервисах и функциях в разных жизненных ситуациях
                      </p>
                    </div>
                  </div>
                </div>
                {/* //Data and Resorses  */}
                <hr />
                <article class="panel is-info">
                  <p class="panel-heading">Данные и Ресурсы</p>
                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Ссылка на исходный код модели
                  </a>
                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Описание модели
                  </a>
                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Исходные данные
                  </a>
                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Руководство пользователя модели
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ModelServicesDescription;
