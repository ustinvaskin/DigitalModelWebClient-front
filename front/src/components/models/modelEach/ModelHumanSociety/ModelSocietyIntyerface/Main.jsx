import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import ChartNodes from "./ChartsNode.jsx";
import "./Styles/styles.css";
import TableSocial from "./SocialGropusFromNodeChart.jsx";



function MapIs() {
      //const [data, setData] = useState([]);
      const [dataGroups, setDataGroups] = useState([]);
      const [dataGraph, setDataGraph] = useState({});
      const [selectedTerrName, setSelectedTerrName] = useState("Санкт-Петербург");
      let AllCharts = {
        "Санкт-Петербург": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 30,
              "provision": 0.5,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.5,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 50,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 20,
              "provision": 0.7,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 20,
              "provision": 0.7,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F1E15B",
              "value": 40,
              "provision": 0.4,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F47575",
              "value": 25,
              "provision": 0.5,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 20,
              "provision": 0.6,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "Адмиралтейский район": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.2,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 5,
              "provision": 0.4,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.8,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 20,
              "provision": 0.7,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 40,
              "provision": 0.5,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.3,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Адмиралтейский": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.5,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 5,
              "provision": 0.5,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.7,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 20,
              "provision": 0.6,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 40,
              "provision": 0.6,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.2,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 20,
              "provision": 0.6,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Екатерингофский": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 5,
              "provision": 0.4,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.8,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 20,
              "provision": 0.7,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F1E15B",
              "value": 40,
              "provision": 0.4,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.2,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Измайловский": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.3,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 5,
              "provision": 0.3,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.7,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 20,
              "provision": 0.8,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F1E15B",
              "value": 40,
              "provision": 0.4,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.2,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Коломна": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.2,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.2,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 5,
              "provision": 0.3,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.7,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 20,
              "provision": 0.7,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 40,
              "provision": 0.5,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.1,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Семеновский": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.3,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 5,
              "provision": 0.4,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.8,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 20,
              "provision": 0.6,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 40,
              "provision": 0.5,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.2,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Сенной": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.2,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.3,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 5,
              "provision": 0.3,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 60,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 30,
              "provision": 0.7,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 20,
              "provision": 0.6,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 40,
              "provision": 0.6,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.2,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "Василеостровский район": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 30,
              "provision": 0.5,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.5,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 45,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.9,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 15,
              "provision": 0.6,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 45,
              "provision": 0.5,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.3,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.4,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 15,
              "provision": 0.5,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "7-й муниципальный округ": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 30,
              "provision": 0.6,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.4,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F47575",
              "value": 10,
              "provision": 0.5,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.6,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 45,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.7,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F1E15B",
              "value": 45,
              "provision": 0.4,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.2,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 15,
              "provision": 0.5,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Васильевский": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 30,
              "provision": 0.5,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.4,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.5,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 45,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.9,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 15,
              "provision": 0.6,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 45,
              "provision": 0.6,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.3,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F1E15B",
              "value": 15,
              "provision": 0.4,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Гавань": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 30,
              "provision": 0.6,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.6,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 45,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 15,
              "provision": 0.6,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F47575",
              "value": 45,
              "provision": 0.5,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.3,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F1E15B",
              "value": 15,
              "provision": 0.4,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Морской": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F47575",
              "value": 30,
              "provision": 0.6,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.3,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.4,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F47575",
              "value": 8,
              "provision": 0.6,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 45,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.8,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.9,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.7,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F1E15B",
              "value": 45,
              "provision": 0.4,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.3,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.3,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F47575",
              "value": 15,
              "provision": 0.6,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        },
        "МО Остров Декабристов": {
          "nodes": [
            {
              "id": 1,
              "label": "Моложе трудоспособного возраста",
              "color": "#F1E15B",
              "value": 30,
              "provision": 0.3,
              "avg_age": 8
            },
            {
              "id": 1.1,
              "label": "Дети дошкольного возраста",
              "color": "#F1E15B",
              "value": 12,
              "provision": 0.2,
              "avg_age": 5
            },
            {
              "id": 1.2,
              "label": "Дети младшего школьного возраста",
              "color": "#F1E15B",
              "value": 10,
              "provision": 0.3,
              "avg_age": 9
            },
            {
              "id": 1.3,
              "label": "Подростки младшего возраста",
              "color": "#F1E15B",
              "value": 8,
              "provision": 0.3,
              "avg_age": 13
            },
            {
              "id": 2,
              "label": "Трудоспособного возраста",
              "color": "#61CDBB ",
              "value": 45,
              "provision": 0.8,
              "avg_age": 27
            },
            {
              "id": 2.1,
              "label": "Студенты",
              "color": "#61CDBB ",
              "value": 15,
              "provision": 0.7,
              "avg_age": 20
            },
            {
              "id": 2.2,
              "label": "Работающие горожане среднего возраста",
              "color": "#61CDBB ",
              "value": 18,
              "provision": 0.8,
              "avg_age": 34
            },
            {
              "id": 3,
              "label": "Старше трудоспособного возраста",
              "color": "#F47575",
              "value": 15,
              "provision": 0.5,
              "avg_age": 65
            },
            {
              "id": 4,
              "label": "Родители",
              "color": "#F1E15B",
              "value": 45,
              "provision": 0.4,
              "avg_age": 32
            },
            {
              "id": 4.1,
              "label": "Горожане с младенцами",
              "color": "#F1E15B",
              "value": 25,
              "provision": 0.1,
              "avg_age": 27
            },
            {
              "id": 4.2,
              "label": "Горожане с детьми до-детсадовского возраста",
              "color": "#F1E15B",
              "value": 20,
              "provision": 0.2,
              "avg_age": 29
            },
            {
              "id": 5.1,
              "label": "Владельцы собак",
              "color": "#F47575",
              "value": 20,
              "provision": 0.5,
              "avg_age": 40
            },
            {
              "id": 5.2,
              "label": "Горожане, ведущие активный образ жизни",
              "color": "#F1E15B",
              "value": 15,
              "provision": 0.3,
              "avg_age": 29
            }
          ],
          "edges": [
            {
              "from": 1,
              "to": 1.1
            },
            {
              "from": 1,
              "to": 1.2
            },
            {
              "from": 1,
              "to": 1.3
            },
            {
              "from": 1.1,
              "to": 1.2
            },
            {
              "from": 1.2,
              "to": 1.3
            },
            {
              "from": 1,
              "to": 2
            },
            {
              "from": 2,
              "to": 2.1
            },
            {
              "from": 2,
              "to": 2.2
            },
            {
              "from": 2,
              "to": 3
            },
            {
              "from": 2,
              "to": 4
            },
            {
              "from": 2.1,
              "to": 2.2
            },
            {
              "from": 4,
              "to": 4.1
            },
            {
              "from": 4,
              "to": 4.2
            },
            {
              "from": 4.1,
              "to": 4.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 4.2,
              "to": 5.2
            },
            {
              "from": 5.1,
              "to": 4.1
            },
            {
              "from": 5.1,
              "to": 4.2
            },
            {
              "from": 5.1,
              "to": 1.3
            },
            {
              "from": 5.1,
              "to": 2.1
            },
            {
              "from": 5.1,
              "to": 2.2
            },
            {
              "from": 5.1,
              "to": 3
            }
          ]
        }
      };
      let Groups = {
        "territories": [
          {
            "id": 1,
            "short_name": "СПБ",
            "full_name": "Санкт-Петербург",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.5,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 50,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 20,
                    "provision": 0.7,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.7,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.5,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.6,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 2,
            "short_name": "Адмиралтейский",
            "full_name": "Адмиралтейский район",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.2,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.4,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.8,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.7,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.3,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.4,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 3,
            "short_name": "Адмиралтейский",
            "full_name": "МО Адмиралтейский",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.5,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.5,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.7,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.6,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.6,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.2,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.6,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 4,
            "short_name": "Екатерингофский",
            "full_name": "МО Екатерингофский",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.4,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.8,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.7,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.2,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.4,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 5,
            "short_name": "Измайловский",
            "full_name": "МО Измайловский",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.3,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.3,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.3,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.7,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.8,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.2,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.5,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 6,
            "short_name": "Коломна",
            "full_name": "МО Коломна",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.3,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.2,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.2,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.3,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.7,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.7,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.1,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.5,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 7,
            "short_name": "Семеновский",
            "full_name": "МО Семеновский",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.3,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.4,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.8,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.6,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.2,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.5,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 8,
            "short_name": "Сенной",
            "full_name": "МО Сенной",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 20,
                "provision": 0.3,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 10,
                    "provision": 0.2,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 8,
                    "provision": 0.3,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 5,
                    "provision": 0.3,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 60,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 30,
                    "provision": 0.7,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 20,
                "provision": 0.6,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 40,
                "provision": 0.6,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 25,
                "provision": 0.2,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 20,
                "provision": 0.4,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 9,
            "short_name": "Василеостровский",
            "full_name": "Василеостровский район",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.5,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 45,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 15,
                    "provision": 0.9,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 15,
                "provision": 0.6,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 45,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 25,
                    "provision": 0.3,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 20,
                "provision": 0.4,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 15,
                "provision": 0.5,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 10,
            "short_name": "МО 7",
            "full_name": "7-й муниципальный округ",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.6,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.4,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.5,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.6,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 45,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 15,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 15,
                "provision": 0.7,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 45,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 25,
                    "provision": 0.2,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 20,
                "provision": 0.3,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 15,
                "provision": 0.5,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 11,
            "short_name": "Васильевский",
            "full_name": "МО Васильевский",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.4,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.5,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 45,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 15,
                    "provision": 0.9,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 15,
                "provision": 0.6,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 45,
                "provision": 0.6,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 25,
                    "provision": 0.3,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 20,
                "provision": 0.3,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 15,
                "provision": 0.4,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 12,
            "short_name": "Гавань",
            "full_name": "МО Гавань",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.6,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.6,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 45,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 15,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 15,
                "provision": 0.6,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 45,
                "provision": 0.5,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 25,
                    "provision": 0.3,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 20,
                "provision": 0.5,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 15,
                "provision": 0.4,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 13,
            "short_name": "Морской",
            "full_name": "МО Морской",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.6,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.3,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.4,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.6,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 45,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 15,
                    "provision": 0.8,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 18,
                    "provision": 0.9,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 15,
                "provision": 0.7,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 45,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 25,
                    "provision": 0.3,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.3,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 20,
                "provision": 0.5,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 15,
                "provision": 0.6,
                "avg_age": 29
              }
            ]
          },
          {
            "id": 14,
            "short_name": "Остров Декабристов",
            "full_name": "МО Остров Декабристов",
            "groups": [
              {
                "id": 1,
                "name": "Моложе трудоспособного возраста",
                "amount": 30,
                "provision": 0.3,
                "subgroup": [
                  {
                    "id": 1.1,
                    "name": "Дети дошкольного возраста",
                    "amount": 12,
                    "provision": 0.2,
                    "avg_age": 5
                  },
                  {
                    "id": 1.2,
                    "name": "Дети младшего школьного возраста",
                    "amount": 10,
                    "provision": 0.3,
                    "avg_age": 9
                  },
                  {
                    "id": 1.3,
                    "name": "Подростки младшего возраста",
                    "amount": 8,
                    "provision": 0.3,
                    "avg_age": 13
                  }
                ],
                "avg_age": 8
              },
              {
                "id": 2,
                "name": "Трудоспособного возраста",
                "amount": 45,
                "provision": 0.8,
                "subgroup": [
                  {
                    "id": 2.1,
                    "name": "Студенты",
                    "amount": 15,
                    "provision": 0.7,
                    "avg_age": 20
                  },
                  {
                    "id": 2.2,
                    "name": "Работающие горожане среднего возраста",
                    "amount": 18,
                    "provision": 0.8,
                    "avg_age": 34
                  }
                ],
                "avg_age": 27
              },
              {
                "id": 3,
                "name": "Старше трудоспособного возраста",
                "amount": 15,
                "provision": 0.5,
                "avg_age": 65
              },
              {
                "id": 4,
                "name": "Родители",
                "amount": 45,
                "provision": 0.4,
                "subgroup": [
                  {
                    "id": 4.1,
                    "name": "Горожане с младенцами",
                    "amount": 25,
                    "provision": 0.1,
                    "avg_age": 27
                  },
                  {
                    "id": 4.2,
                    "name": "Горожане с детьми до-детсадовского возраста",
                    "amount": 20,
                    "provision": 0.2,
                    "avg_age": 29
                  }
                ],
                "avg_age": 32
              },
              {
                "id": 5.1,
                "name": "Владельцы собак",
                "amount": 20,
                "provision": 0.5,
                "avg_age": 40
              },
              {
                "id": 5.2,
                "name": "Горожане, ведущие активный образ жизни",
                "amount": 15,
                "provision": 0.3,
                "avg_age": 29
              }
            ]
          }
        ]
      };

  // Getting data from API fror groups
  useEffect(() => {
    // axios.get("http://77.234.203.187:17026/api/downloads/living_model_data_groups.json").then((res) => {
    axios.get("./living_model_data_groups.json").then((res) => {
      setDataGroups(res.data.territories);
      // console.log(Groups.territories);
      // setDataGroups(Groups.territories);
      console.log(dataGroups);
    });
    // Getting data from API charts bubble nodes

    // axios.get("http://77.234.203.187:17026/api/downloads/AllCharts.json").then((res) => {
    axios.get("./AllCharts.json").then((res) => {
      setDataGraph(res.data);
      // console.log(AllCharts);
      // setDataGraph(AllCharts);
      console.log(dataGraph);
    });
  });

  let onSelectTerr = (e) => {
    console.log(e.target.value);
    setSelectedTerrName(e.target.value);
  };

    return (
      <div>
        <br />
        <br />
        <br />
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <nav
            class=" breadcrumb has-arrow-separator is-centered"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <Link to="/models">Модели</Link>
              </li>
              <li>
                <Link to="/humansosciety">Модель человеческого общества</Link>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  Лояльность населения к умному городу
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* END OF _____Breadcrumbs */}
        <div class="page-content container">
          <div class="wrapper">
            <div class="row">
              {/* Aside Left */}
              {/* Aside Left Name */}
              <div class="sidebar col-md-3 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-4 ">
                  Лояльность населения к умному городу
                </h3>
                <br />
                <select className="select-css" value={selectedTerrName} onChange={onSelectTerr}>
                  <option value="Не выбрано">Не выбрано</option>
                  {dataGroups.map((data, e) => (
                    <option
                      className="option-css"
                      class="list-item"
                      // key={data.id}
                      value={data.full_name}
                      // name={data.short_name}
                      // groups={data.groups}
                    >
                      {data.full_name}
                    </option>
                  ))}
                </select>

                <br />
                <br />
                <br />
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title is-size-6 has-text-grey-dark heading-sidebar">
                      Индекс Жизненных Траекторий
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <p className="is-size-6	">
                        Индекс умности города:
                        <span className="tag is-info tgsisiinloyalty is-size-5">
                          0,4
                        </span>
                      </p>
                      <p className="is-size-6">
                        Индекс качества жизни:{" "}
                        <span className="tag is-info tgsisiinloyalty is-size-5">
                          0,6
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="ChooseTerr-and-Index">
                  <span>
                    <label htmlFor="MOs">Самые Обеспеченные</label>
                    <input
                      type="checkbox"
                      name="MOs"
                      id="MOs"
                      value=""
                      onChange=""
                    />
                  </span>
                  <br />
                  <br />
                  <span>
                    <label htmlFor="MOs">Индекс связанности</label>
                    <input
                      className="radioInput"
                      type="range"
                      id="connected"
                      name="connected"
                      min="0"
                      max="10"
                    />
                  </span>
                </div> */}
              </div>
              {/* END OF _____Aside Left */}
              {/* Main cotent  */}
              <div class="col-md-5 col-sm-12 col-xs-12 news-content">
                {selectedTerrName === "Санкт-Петербург" && (
                  <ChartNodes data={dataGraph["Санкт-Петербург"]} />
                )}
                {selectedTerrName === "Адмиралтейский район" && (
                  <ChartNodes
                    data={dataGraph["Адмиралтейский район"]}
                  />
                )}
                {selectedTerrName === "МО Адмиралтейский" && (
                  <ChartNodes
                    data={dataGraph["МО Адмиралтейский"]}
                  />
                )}
                {selectedTerrName === "МО Екатерингофский" && (
                  <ChartNodes
                    data={dataGraph["МО Екатерингофский"]}
                  />
                )}
                {selectedTerrName === "МО Измайловский" && (
                  <ChartNodes data={dataGraph["МО Измайловский"]} />
                )}
                {selectedTerrName === "МО Коломна" && (
                  <ChartNodes data={dataGraph["МО Коломна"]} />
                )}
                {selectedTerrName === "МО Семеновский" && (
                  <ChartNodes data={dataGraph["МО Семеновский"]} />
                )}
                {selectedTerrName === "МО Сенной" && (
                  <ChartNodes data={dataGraph["МО Сенной"]} />
                )}
                {selectedTerrName === "Василеостровский район" && (
                  <ChartNodes
                    data={dataGraph["Василеостровский район"]}
                  />
                )}
                {selectedTerrName === "7-й муниципальный округ" && (
                  <ChartNodes
                    data={dataGraph["7-й муниципальный округ"]}
                  />
                )}
                {selectedTerrName === "МО Васильевский" && (
                  <ChartNodes data={dataGraph["МО Васильевский"]} />
                )}
                {selectedTerrName === "МО Гавань" && (
                  <ChartNodes data={dataGraph["МО Гавань"]} />
                )}
                {selectedTerrName === "МО Морской" && (
                  <ChartNodes data={dataGraph["МО Морской"]} />
                )}
                {selectedTerrName === "МО Остров Декабристов" && (
                  <ChartNodes
                    data={dataGraph["МО Остров Декабристов"]}
                  />
                )}
                <br />
                {/* <DailyChart /> */}
              </div>
              <div class="sidebar col-md-4 col-sm-12 col-xs-12">
                <h3 class="heading-sidebar is-size-6 has-text-grey-dark">
                  Значимость сервисов
                </h3>
                {selectedTerrName === "Санкт-Петербург" && (
                  <TableSocial terrName="Санкт-Петербург" />
                )}
                {selectedTerrName === "Адмиралтейский район" && (
                  <TableSocial terrName="Адмиралтейский район" />
                )}
                {selectedTerrName === "МО Адмиралтейский" && (
                  <TableSocial terrName="МО Адмиралтейский" />
                )}
                {selectedTerrName === "МО Екатерингофский" && (
                  <TableSocial terrName="МО Екатерингофский" />
                )}
                {selectedTerrName === "МО Измайловский" && (
                  <TableSocial terrName="МО Измайловский" />
                )}
                {selectedTerrName === "МО Коломна" && (
                  <TableSocial terrName="МО Коломна" />
                )}
                {selectedTerrName === "МО Семеновский" && (
                  <TableSocial terrName="МО Семеновский" />
                )}
                {selectedTerrName === "МО Сенной" && (
                  <TableSocial terrName="МО Сенной" />
                )}
                {selectedTerrName === "Василеостровский район" && (
                  <TableSocial terrName="Василеостровский район" />
                )}
                {selectedTerrName === "7-й муниципальный округ" && (
                  <TableSocial terrName="7-й муниципальный округ" />
                )}
                {selectedTerrName === "МО Васильевский" && (
                  <TableSocial terrName="МО Васильевский" />
                )}
                {selectedTerrName === "МО Гавань" && (
                  <TableSocial terrName="МО Гавань" />
                )}
                {selectedTerrName === "МО Морской" && (
                  <TableSocial terrName="МО Морской" />
                )}
                {selectedTerrName === "МО Остров Декабристов" && (
                  <TableSocial terrName="МО Остров Декабристов" />
                )}
                <br />
                {/* {dataGroups.map((data) => data.groups.name)} */}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MapIs;
