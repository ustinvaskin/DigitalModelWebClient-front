import React from "react";
import { Link, withRouter } from "react-router-dom";

// Styles

class Navbar extends React.Component {
  render() {
    return (
      <div class="nav-wrapper">
        <nav
          class="navbar navbar-default"
          id="main-navbar"
          role="navigation"
          aria-label="Primary menu"
        >
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#top-nav-collapse"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation </span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div class="collapse navbar-collapse" id="top-nav-collapse">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="/" title="Frontpage">
                    Главная
                  </a>
                </li>
                <li class="has-subnav">
                  <Link to="/data" title="Search data">
                    Данные
                  </Link>
                  <span class="subnav-toggle">
                    <i class="fa fa-chevron-down"></i>
                  </span>
                  <ul class="nav navbar-nav subnav">
                    <li class="">
                      <Link to="/data" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>Скачать
                        данные
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/dataShow" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>Оперативные
                        данные
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/dataInterface" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>Просмотр
                        данных
                      </Link>
                    </li>
                    <li class="">
                      <a href="#" title="New showcase idea">
                        <span class="fa fa-long-arrow-right"></span>
                        Программные интерфейсы
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="has-subnav">
                  <Link to="/models" title="models">
                    Модели
                  </Link>
                  <span class="subnav-toggle">
                    <i class="fa fa-chevron-down"></i>
                  </span>
                  <ul class="nav navbar-nav subnav">
                    <li class="">
                      <Link to="/population" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>
                        Расселение и структура населения
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/humansosciety" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>
                        Модель жизни в умном городе{" "}
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/services" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>
                        Обеспеченность населения сервисами и функциями
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/ecology" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>
                        Экологическое воздействие
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/transport" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>
                        Транспортная доступность
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li class="has-subnav">
                  <a href="#" title="Analytics">
                    Вопросы
                  </a>
                  <span class="subnav-toggle">
                    <i class="fa fa-chevron-down"></i>
                  </span>
                  <ul class="nav navbar-nav subnav">
                    <li class="">
                      <a href="#" title="Dashboard">
                        <span class="fa fa-long-arrow-right"></span>Католог
                        вопросов
                      </a>
                    </li>
                    <li class="">
                      <a href="#" title="Reports">
                        <span class="fa fa-long-arrow-right"></span>Интерактив
                      </a>
                    </li>
                  </ul>
                </li> */}

                {/* <li class="has-subnav">
                  <a href="#" title="News">
                    Новости
                  </a>
                  <span class="subnav-toggle">
                    <i class="fa fa-chevron-down"></i>
                  </span>
                  <ul class="nav navbar-nav subnav">
                    <li class="">
                      <a href="#" title="Articles">
                        <span class="fa fa-long-arrow-right"></span>Статьи
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="has-subnav">
                  <a href="#" title="Support">
                    Партнеры и организации
                  </a>
                  <span class="subnav-toggle">
                    <i class="fa fa-chevron-down"></i>
                  </span>
                  <ul class="nav navbar-nav subnav">
                    <li class="">
                      <a href="#" title="What is open data?">
                        <span class="fa fa-long-arrow-right"></span>Организации
                      </a>
                    </li>
                    <li class="">
                      <a href="#" title="How to open data?">
                        <span class="fa fa-long-arrow-right"></span>Данные
                      </a>
                    </li>
                    <li class="">
                      <a href="#" title="How to use data?">
                        <span class="fa fa-long-arrow-right"></span>Целевые
                        аудитории
                      </a>
                    </li>
                  </ul>
                </li>
 */}

                <li class="has-subnav">
                  <Link to="/about" title="Search data">
                    <span></span>О нас
                  </Link>
                  <span class="subnav-toggle">
                    <i class="fa fa-chevron-down"></i>
                  </span>
                  <ul class="nav navbar-nav subnav">
                    <li class="">
                      <Link to="/about" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>О проекте
                      </Link>
                    </li>

                    <li class="">
                      <Link to="/materials" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>Материалы
                      </Link>
                    </li>
                    <li class="">
                      <Link to="/contacts" title="Search data">
                        <span class="fa fa-long-arrow-right"></span>Контакты
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="navbar-search">
                  <div class="input-group navbar-search-form">
                    <span class="input-group-btn">
                      <button
                        class="btn btn-secondary navbar-search-submit-btn"
                        type="button"
                      >
                        <span class="fa fa-search" aria-hidden="true"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      class="form-control navbar-search-input"
                      id="navbar-search-q"
                      aria-label="..."
                    />
                  </div>
                  <button
                    class="btn btn-secondary navbar-search-btn"
                    type="button"
                  >
                    <span class="fa fa-search" aria-hidden="true"></span>
                  </button>
                </li>
              </ul>
              <div class="navbar-footer">
                <button
                  type="button"
                  class="navbar-toggle-footer collapsed"
                  data-toggle="collapse"
                  data-target="#top-nav-collapse"
                  aria-expanded="false"
                >
                  <span class="fa fa-chevron-up"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
