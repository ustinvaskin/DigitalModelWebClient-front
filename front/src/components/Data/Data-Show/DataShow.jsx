import React from "react";
import { Link } from "react-router-dom";

//Styles

class DataShow extends React.Component {
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
            class="breadcrumb has-arrow-separator is-centered"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#" aria-current="page">
                  Данные
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  Оперативные данные
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-2">Оперативные данные</h3>

                <ul></ul>
                <ul></ul>
                <ul></ul>
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
                        Жалобы и обращения населения на портал Наш
                        Санкт-Петербург
                      </h4>

                      <div class="card-description">
                        Данные по жалобам и обращениям горожан на портал Наш
                        Санкт-Петербург.{" "}
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/problemInterface"
                          class="btn btn-transparent card-link"
                        >
                          К Жалобам{" "}
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
                        Публикации в социальных сетях
                      </h4>

                      <div class="card-description">
                        Данные по событиям, выявленным на основе анализа
                        гео-позиционированных постов пользователей социальных
                        сетей.{" "}
                      </div>
                      <div class="card-link-wrapper">
                        <Link
                          to="/eventsInterface"
                          class="btn btn-transparent card-link"
                        >
                          К Публикациям{" "}
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
}

export default DataShow;
