import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ModelPopulationDescription() {

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
                  Лояльность населения к умному городу{" "}
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
                  Лояльность населения к умному городу
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
                        Модель представляет оценку ожидаемой лояльности горожан
                        к решениям развития города с точки зрения уровня
                        обеспечения жизни горожан всех групп и жизненных
                        ситуаций. <p />
                        Модель предназначена для управления процессом внедрения
                        решений умного города и реализует концепцию умного
                        города НЦКР. В основе модели заложена
                        ценностно-ориентированная оценка качества жизни в умном
                        городе, основанная на представлении структуры ценностей
                        и мотиваций всех групп города в различных жизненных
                        ситуациях.{" "}
                      </p>
                      <p>
                        Лояльность основана на выявлении потребности социальных
                        групп в целом и на отдельных территориях в обеспечении
                        сервисами и функциями города в каждой жизненной
                        ситуации.
                      </p>
                      <p>
                        Такой подход позволяет определить обеспеченность и
                        дефицит сервисов применительно к конкретным жизненным
                        ситуациям, выявить необеспеченные группы населения, и
                        оценить потребности в сервисах умного города с точки
                        зрения текущей ситуации в городе.»{" "}
                      </p>

                      <div></div>
                    </div>
                    <div className="btn-in-model-descr">
                      <Link to="/InterfaceHumanSociety">
                        <button class="button is-outlined is-danger is-m-5 is-longer-btn-loyal">
                          Демонстрация модели лояльности населения к умному
                          городу
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
                    Описание концепции умного города НЦКР{" "}
                  </a>

                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Коэффициенты модели ценностно-ориентированной оценки
                    качества жизни в умном городе{" "}
                  </a>
                  <a class="panel-block is-active">
                    <span class="panel-icon"></span>
                    Описание модели ценностно-ориентированной оценки качества
                    жизни в умном городе{" "}
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ModelPopulationDescription;
