import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";

function Data() {
  let downloadEmployeeData = () => {
    fetch("http://sportpetergof.ru/attachments/article/1750/409.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          console.log(response);
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "smth.pdf";
          a.click();
        });
        //window.location.href = response.url;
      }
    );
  };
    let breadcrumbs = ["Главная", "Скачать данные"];
    return (
      <div>
        <Breadcrumb breadcrumbs={breadcrumbs}/>
        <div className="page-content container">
          <div className="wrapper">
            <div className="row">
              <div className="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 className="heading-sidebar is-size-3">
                  {breadcrumbs[breadcrumbs.length - 1]}
                </h3>
                <ul>
                  <li className="sidebar-item ">
                    <a>Последнее обновление: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>
                      <span className=" is-info has-text-weight-normal	">
                        {" "}
                        Данные: дата Модель: дата
                      </span>
                    </a>
                  </li>
                </ul>

                <ul>
                  <li className="sidebar-item ">
                    <a>Правообладатель: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>
                      <span className="tag is-info">ИТМО</span>
                      <span className="tag is-info">НЦКР</span>{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>Разработчик: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>
                      <span className=" is-info has-text-weight-normal	">
                        {" "}
                        ИДУ, Лаборатория ЦТУГ
                      </span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <a>Как связаться: </a>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item ">
                    <span className="is-size-7 has-text-weight-normal	">
                      <a href="mailto:  mityagin@itmo.ru"> mityagin@itmo.ru</a>
                    </span>
                  </li>
                </ul>
                <br />
                <h3 className="heading-sidebar is-size-3">Ссылки</h3>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/dataShow">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Оперативные данные
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="sidebar-item">
                    <Link to="/dataInterface">
                      <span className="sidebar-icon-wrapper">
                        <span className="fa fa-long-arrow-right"></span>
                      </span>
                      Просмотр данных
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Main cotent  */}
              <div className="primary border-left col-md-9 col-sm-12 col-xs-12">
                <ul className="dataset-list unstyled">
                  <li className="dataset-item">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a className="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul className="dataset-resources unstyled">
                          <a download href="http://sportpetergof.ru/attachments/article/1750/409.pdf"><button onClick={downloadEmployeeData}>
                            Download
                          </button></a>

                          <a href="#">
                            <button className="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="dataset-item">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a className="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul className="dataset-resources unstyled">
                          {/* <Link
                            to="/files/gas_stations.geojson"
                            target="_blank"
                            download="gas_stations.geojson"
                          >
                            Download
                          </Link> */}
                          <a href="/files/gas_stations.geojson" download>Download</a>

                          <a href="#">
                            <button className="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="dataset-item">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a className="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul className="dataset-resources unstyled">
                          <a href="#">
                            <button className="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="dataset-item">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a className="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul className="dataset-resources unstyled">
                          <a href="#">
                            <button className="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="dataset-item">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 dataset-content">
                        <a className="dataset-heading" href="#">
                          <h3>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </h3>
                        </a>

                        <div>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                        </div>

                        <ul className="dataset-resources unstyled">
                          <a href="#">
                            <button className="button is-danger is-outlined">
                              Скачать
                            </button>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Data;
