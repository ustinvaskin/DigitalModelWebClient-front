import React from "react";
import { Link, withRouter } from "react-router-dom";

// Styles

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <nav
          className="navbar navbar-default"
          id="main-navbar"
          role="navigation"
          aria-label="Primary menu"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#top-nav-collapse"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation </span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="top-nav-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/" title="Frontpage">
                    Главная
                  </a>
                </li>
                <li className="has-subnav">
                  <Link to="/data" title="Search data">
                    Данные
                  </Link>
                  <span className="subnav-toggle">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <ul className="nav navbar-nav subnav">
                    <li className="">
                      <Link to="/data" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>Скачать
                        данные
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/dataShow" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>Оперативные
                        данные
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/dataInterface" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>Просмотр
                        данных
                      </Link>
                    </li>
                    <li className="">
                      <a href="#" title="New showcase idea">
                        <span className="fa fa-long-arrow-right"></span>
                        Программные интерфейсы
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-subnav">
                  <Link to="/models" title="models">
                    Модели
                  </Link>
                  <span className="subnav-toggle">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <ul className="nav navbar-nav subnav">
                    <li className="">
                      <Link to="/population" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>
                        Расселение и структура населения
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/humansosciety" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>
                        Модель жизни в умном городе{" "}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/services" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>
                        Обеспеченность населения сервисами и функциями
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/ecology" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>
                        Экологическое воздействие
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/transport" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>
                        Транспортная доступность
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="has-subnav">
                  <a href="#" title="Analytics">
                    Вопросы
                  </a>
                  <span className="subnav-toggle">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <ul className="nav navbar-nav subnav">
                    <li className="">
                      <a href="#" title="Dashboard">
                        <span className="fa fa-long-arrow-right"></span>Католог
                        вопросов
                      </a>
                    </li>
                    <li className="">
                      <a href="#" title="Reports">
                        <span className="fa fa-long-arrow-right"></span>Интерактив
                      </a>
                    </li>
                  </ul>
                </li> */}

                {/* <li className="has-subnav">
                  <a href="#" title="News">
                    Новости
                  </a>
                  <span className="subnav-toggle">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <ul className="nav navbar-nav subnav">
                    <li className="">
                      <a href="#" title="Articles">
                        <span className="fa fa-long-arrow-right"></span>Статьи
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="has-subnav">
                  <a href="#" title="Support">
                    Партнеры и организации
                  </a>
                  <span className="subnav-toggle">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <ul className="nav navbar-nav subnav">
                    <li className="">
                      <a href="#" title="What is open data?">
                        <span className="fa fa-long-arrow-right"></span>Организации
                      </a>
                    </li>
                    <li className="">
                      <a href="#" title="How to open data?">
                        <span className="fa fa-long-arrow-right"></span>Данные
                      </a>
                    </li>
                    <li className="">
                      <a href="#" title="How to use data?">
                        <span className="fa fa-long-arrow-right"></span>Целевые
                        аудитории
                      </a>
                    </li>
                  </ul>
                </li>
 */}

                <li className="has-subnav">
                  <Link to="/about" title="Search data">
                    <span></span>О нас
                  </Link>
                  <span className="subnav-toggle">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <ul className="nav navbar-nav subnav">
                    <li className="">
                      <Link to="/about" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>О проекте
                      </Link>
                    </li>

                    <li className="">
                      <Link to="/materials" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>Материалы
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/contacts" title="Search data">
                        <span className="fa fa-long-arrow-right"></span>Контакты
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="navbar-search">
                  <div className="input-group navbar-search-form">
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary navbar-search-submit-btn"
                        type="button"
                      >
                        <span className="fa fa-search" aria-hidden="true"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      className="form-control navbar-search-input"
                      id="navbar-search-q"
                      aria-label="..."
                    />
                  </div>
                  <button
                    className="btn btn-secondary navbar-search-btn"
                    type="button"
                  >
                    <span className="fa fa-search" aria-hidden="true"></span>
                  </button>
                </li>
              </ul>
              <div className="navbar-footer">
                <button
                  type="button"
                  className="navbar-toggle-footer collapsed"
                  data-toggle="collapse"
                  data-target="#top-nav-collapse"
                  aria-expanded="false"
                >
                  <span className="fa fa-chevron-up"></span>
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
