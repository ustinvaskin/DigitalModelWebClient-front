import React from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
class TableSocial extends React.Component {
  state = {
    dataGraph: [],
    selectedSocial: [],
  };

  selectedSocial = (e) => {
    this.setState({ selectedSocial: e.target.value });
  };

  componentDidMount() {
    axios.get("./AllCharts.json").then((res) => {
      const dataGraph = res.data[this.props.terrName].nodes;
      this.setState({ dataGraph });
    });
  }

  render() {
    console.log(this.state.selectedSocial);
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
            {this.state.dataGraph.map((data, id) => (
              <div class="container">
                <br />
                <ul>
                  <li
                    onClick={this.selectedSocial}
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
            {this.state.dataGraph.map((data, id) => (
              <div class="container">
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
}

export default TableSocial;
