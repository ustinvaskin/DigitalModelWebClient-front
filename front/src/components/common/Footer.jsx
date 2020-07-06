import React from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer id="dark-footer" className="footer footer-dark">
        <hr />
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="footer-column">
                <div className="footer-header">
                  <h3 className="has-text-weight-bold is-size-5	">Данные</h3>
                </div>
                <br />
                <ul className="link-list  has-text-weight-semibold is-size-7	">
                  <li>
                    <Link to="/data">Данные</Link>
                  </li>
                  <li>
                    <Link to="/data">Скачать данные</Link>
                  </li>
                  <li>
                    <Link to="/dataShow">Оперативные данные</Link>
                  </li>
                  <li>
                    <Link to="/problemInterface">
                      Жалобы и обращения населения на портал наш Санкт-Петербург
                    </Link>
                  </li>
                  <li>
                    <Link to="/eventsInterface">Публикации в соц. сетях</Link>
                  </li>
                  <li>
                    <Link to="/dataInterface">Просмотр данных</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="footer-column">
                <div className="footer-header">
                  <h3 className="has-text-weight-bold is-size-5	">Модели</h3>
                </div>
                <br />
                <ul className="link-list  has-text-weight-semibold is-size-7	">
                  <li>
                    <Link to="/models">Модели</Link>
                  </li>
                  <li>
                    <Link to="/models/population">
                      Расселение и структура населения
                    </Link>
                  </li>

                  <li>
                    <Link to="/models/population/demonstration">
                      Интерфейс модели Населения
                    </Link>
                  </li>
                  <li>
                    <Link to="/models/population/demonstration">
                      Интерфейс модели расселения соц. групп
                    </Link>
                  </li>
                  <li>
                    <Link to="/models/human-society">
                      Лояльность населения к умному городу{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/models/human-society/demonstration">
                      Модель жизни в умном городе
                    </Link>
                  </li>
                  <li>
                    <a href="/">Общая обеспеченность групп </a>
                  </li>
                  <li>
                    <Link to="/models/ecology">Экологическое воздействие</Link>
                  </li>
                  <li>
                    <Link to="/models/transport">Транспортная доступность</Link>
                  </li>
                </ul>
                {/* <div className="footer-header">
                  <h3 className="has-text-weight-bold is-size-5	">Новости</h3>
                </div> */}
                {/* <br />
                <ul className="link-list  has-text-weight-semibold is-size-7	">
                  <li>
                    <a href="/">Новости </a>
                  </li>
                  <li>
                    <a href="/">Статьи </a>
                  </li>
                </ul> */}

                {/* <div className="footer-header">
                  <h3 className="has-text-weight-bold is-size-5	">Вопросы</h3>
                </div> */}
                {/* <br />
                <ul className="link-list  has-text-weight-semibold is-size-7	">
                  <li>
                    <a href="/">Вопросы </a>
                  </li>
                  <li>
                    <a href="/">Каталог вопросы </a>
                  </li>
                  <li>
                    <a href="/">Интерактив </a>
                  </li>
                  <li>
                    <a href="/">Рейтинг территорий </a>
                  </li>
                  <li>
                    <a href="/">Для кого твой город? </a>
                  </li>
                </ul>
                <br />
                <br /> */}
              </div>
            </div>
            <div className="column">
              {/* <div className="footer-column">
                <div className="footer-header">
                  <h3 className="has-text-weight-bold is-size-5	">Бизнес</h3>
                </div>
                <br />
                <ul className="link-list  has-text-weight-semibold is-size-7	">
                  <li>
                    <a href="/">Бизнес </a>
                  </li>
                  <li>
                    <a href="/">Организации </a>
                  </li>
                  <li>
                    <a href="/">Данные </a>
                  </li>
                  <li>
                    <a href="/">Целевые аудитории </a>
                  </li>
                </ul>
              </div> */}

              <div className="footer-column">
                <div className="footer-header">
                  <h3 className="has-text-weight-bold is-size-5	">О нас</h3>
                </div>
                <br />
                <ul className="link-list  has-text-weight-semibold is-size-7	">
                  <li>
                    <Link to="/about">О нас</Link>
                  </li>
                  <li>
                    <Link to="/materials">Материалы</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="footer-column">
                <div className="footer-logo">
                  <img
                    src="https://i.imgur.com/Gnk6rrh.png"
                    alt="логотип НЦКР"
                    className="nav__nccr-logo"
                  />
                </div>
                <div className="footer-header">
                  <nav className="level is-mobile">
                    <div className="level-left level-social">
                      <a href="/" className="level-item"></a>
                    </div>
                  </nav>
                </div>
                <div className="copyright">
                  <span className="moto light-text">
                    © 2020 ITMO&nbsp;UDI&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
