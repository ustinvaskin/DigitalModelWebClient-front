import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
function TableSocial(props) {
  const [dataGraph, setDataGraph] = useState([]);
  const [selectedSocial, setSelectedSocial] = useState([]);
  const fooo = {
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

  let selectedSocialF = (e) => {
    setSelectedSocial(e.target.value);
    // this.setState({ selectedSocial: e.target.value });
  };

  useEffect(() => {
    //axios.get("./AllCharts.json").then((res) => {
      setDataGraph(fooo[props.terrName].nodes);
      // const dataGraph = this.state.fooo[this.props.terrName].nodes//res.data[this.props.terrName].nodes;
      // this.setState({ dataGraph });
    //});
  })

    console.log(selectedSocial);
    return (
      <Accordion>
        <AccordionItem>
          <br />
          <h3>
            <AccordionButton className="button is-info is-outlined is-in-loyal">
              Социальные группы
            </AccordionButton>
          </h3>
          <AccordionPanel>
            {dataGraph.map((data, id) => (
              <div
                    key={id} class="container">
                <br />
                <ul>
                  <li
                    onClick={selectedSocialF}
                    class="list-item-table is-size-7 has-text-weight-semibold	socilagropusliislables "
                    value={data.id}
                  >
                    {data.label}
                  </li>
                </ul>
              </div>
            ))}
          </AccordionPanel>
          <br />
        </AccordionItem>
        <AccordionItem>
          <h3>
            <AccordionButton className="button is-info is-outlined is-in-loyal">
              {" "}
              Социальные группы и их значения
            </AccordionButton>
          </h3>
          <AccordionPanel>
            {dataGraph.map((data, id) => (
              <div
                    key={id} class="container">
                <br />
                <ul>
                  <li
                    class="list-item-table is-size-7 socilagropusli	 "
                    value={data.id}
                  >
                    <span className=" socilagropus has-text-weight-semibold">
                      {data.label}
                    </span>
                    <span className=" tag socilagropus">
                      {" "}
                      {data.value}{" "}
                      <span className="has-text-weight-semibold">%</span>{" "}
                    </span>
                    <span className="socilagropus">
                      {" "}
                      <span className=" has-text-weight-semibold">
                        Обеспеченность
                      </span>{" "}
                      <span className="tag">{data.provision}</span>
                    </span>
                    <span className="socilagropus">
                      {" "}
                      <span className="has-text-weight-semibold">
                        Ср.Возраст
                      </span>{" "}
                      <span className="tag"> {data.avg_age}</span>
                    </span>
                  </li>
                  <hr />
                </ul>
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      // <div>
      //   <br />
      //   <div className="columns is-in-social-group-table-columns ">
      //     <div className="column">
      //       <span className="is-size-7 has-text-weight-bold">
      //         Социальная группа{" "}
      //       </span>
      //       {this.state.dataGraph.map((data, id) => (
      //         <li
      //           class="list-item is-in-social-group-table is-size-7 has-text-weight-semibold	 "
      //           value={data.id}
      //         >
      //           {data.label}
      //         </li>
      //       ))}
      //     </div>
      //     <div className="column">
      //       <span className="is-size-7 has-text-weight-bold">% </span>
      //       {this.state.dataGraph.map((data, id) => (
      //         <li
      //           class="list-item is-in-social-group-table is-size-7 "
      //           value={data.id}
      //         >
      //           {data.value}
      //         </li>
      //       ))}
      //     </div>
      //     <div className="column">
      //       <span className="is-size-7 has-text-weight-bold">
      //         Обеспеченность{" "}
      //       </span>
      //       {this.state.dataGraph.map((data, id) => (
      //         <li
      //           class="list-item is-in-social-group-table is-size-7 "
      //           value={data.id}
      //         >
      //           {data.provision}
      //         </li>
      //       ))}
      //     </div>
      //     <div className="column">
      //       <span className="is-size-7 has-text-weight-bold">
      //         Средний возраст{" "}
      //       </span>
      //       {this.state.dataGraph.map((data, id) => (
      //         <li
      //           class="list-item is-in-social-group-table is-size-7 "
      //           value={data.id}
      //         >
      //           {data.avg_age}
      //         </li>
      //       ))}
      //     </div>
      //   </div>
      /* <table class="table">
          <thead>
            <br />
            <tr>
              <th>Социальная группа</th>
              <th></th>
              <th>%</th>
              <th>Обеспеченность</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {this.state.dataGraph.map((data, id) => (
                <th class="list-item" value={data.id}>
                  {data.label}
                </th>
              ))}

              <td></td>
              {this.state.dataGraph.map((data, id) => (
                <td class="list-item" value={data.id}>
                  {data.value}
                </td>
              ))}
              {this.state.dataGraph.map((data, id) => (
                <td class="list-item" value={data.id}>
                  {data.value}
                </td>
              ))}
            </tr>
          </tbody>
        </table> */
      // </div>
    );
}

export default TableSocial;
