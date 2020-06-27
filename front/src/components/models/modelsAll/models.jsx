import React, {useEffect } from "react";
import { Link } from "react-router-dom";

//Styles

function Models() {

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
            class="breadcrumb has-arrow-separator is-centered"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  Модели
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-2">Модели</h3>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/population">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Расселение и структура населения
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/humansosciety">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Лояльность населения к умному городу
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item">
                    <Link to="#">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Обеспеченность населения сервисами и функциями
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/ecology">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Экологическое воздействие
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li class="sidebar-item">
                    <Link to="/transport">
                      <span class="sidebar-icon-wrapper">
                        <span class="fa fa-long-arrow-right"></span>
                      </span>
                      Транспортная доступность{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-md-9 col-sm-12 col-xs-12 news-content">
                <div class="cards cards--3">
                  <div class="card--image">
                    <img
                      src="https://img.gazeta.ru/files3/602/11700602/Depositphotos_73113069_xl-2015-pic4_zoom-1500x1500-63885.jpg"
                      alt="Население"
                    />
                    <div class="card-content card-content-slide-up">
                      <h4 class="card-title is-size-5 has-text-weight-medium ">
                        Расселение и структура населения
                      </h4>

                      <div class="card-description">
                        Модель представляет оценку ожидаемого распределения
                        жителей по территории Санкт-Петербурга. Включает
                        возрастную структуру жителей для каждого жилого дома, а
                        также возрастную структуру ожидаемых социальных групп и
                        людей в специфических жизненных ситуациях.{" "}
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/population"
                          class="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card--image">
                    <img
                      src="https://s0.rbk.ru/v6_top_pics/media/img/7/58/755817103264587.jpeg"
                      alt="Обеспеченность"
                    />
                    <div class="card-content card-content-slide-up">
                      <h4 class="card-title is-size-5 has-text-weight-medium">
                        Обеспеченность населения сервисами и функциями
                      </h4>

                      <div class="card-description">
                        Модель представляет оценку обеспеченности всех групп
                        населения и людей в специфических жизненных ситуациях
                        городскими сервисами, функциями и инфраструктурой.
                        Модель учитывает доступность сервисов и функций для
                        жителей каждого жилого дома, а также потребности в
                        горожан сервисах и функциях в разных жизненных
                        ситуациях.{" "}
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/population"
                          class="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card--image">
                    <img src="https://i.imgur.com/Mc0TOh2.jpg" alt="Общество" />
                    <div class="card-content card-content-slide-up">
                      <h4 class="card-title is-size-5 has-text-weight-medium">
                        Лояльность населения к умному городу
                      </h4>

                      <div class="card-description">
                        Модель представляет оценку ожидаемой лояльности горожан
                        к решениям развития города с точки зрения уровня
                        обеспечения жизни горожан всех групп и жизненных
                        ситуаций. Модель основана на восстановлении структуры
                        жизненных ситуаций для населения и паттернов ежедневной
                        активности для каждой группы населения. Лояльность
                        основана на выявлении потребности социальных групп в
                        целом и на отдельных территориях в обеспечении сервисами
                        и функциями города в каждой жизненной ситуации.
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/humansosciety"
                          class="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card--image">
                    <img
                      src="https://kudago.com/media/images/list/e5/fd/e5fd858dc2641e46e9bf5f8613ff3ed4.jpg"
                      alt="Транспорт"
                    />
                    <div class="card-content card-content-slide-up">
                      <h4 class="card-title is-size-5 has-text-weight-medium">
                        Транспортная доступность
                      </h4>

                      <div class="card-description">
                        Модель оценки транспортной доступности территорий
                        города, основанная на агентной модели транспорта и
                        модели транспортного спроса. Модель обеспечивает
                        построение полигона транспортной доступности для города
                        на личном и на общественном транспорте за заданное
                        время.
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/transport"
                          class="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card--image">
                    <img
                      src="https://kuda-spb.ru/uploads/614b5818d0347984cbf3f739ecca320f.png"
                      alt="Экология"
                    />
                    <div class="card-content card-content-slide-up">
                      <h4 class="card-title is-size-5 has-text-weight-medium">
                        Экологическое воздействие
                      </h4>
                      <div class="card-description">
                        Модель представляет интегральную оценку экологического
                        воздействия от экологически-активных объектов:
                        промышленные объекты, транспорт, рекреационные зоны.
                        Интегральная оценка строится на основе нормированных
                        значений загрязнения воздуха.
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/ecology"
                          class="btn btn-transparent card-link"
                        >
                          К модели{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Models;
