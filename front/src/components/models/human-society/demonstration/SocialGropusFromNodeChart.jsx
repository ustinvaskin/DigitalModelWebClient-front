import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ResponsiveHeatMap } from '@nivo/heatmap'

class SocialGroupsFromNodeChart extends React.Component {
  state = {
    dataGraph: [],
    selectedSocialId: "",
    dayPattern: {},
    DaysinDaypattern: [],
    services: [],
    provision: '',
  };

  selectedSocialId = (e) => {
    this.setState({ selectedSocialId: e.target.value });
    axios.get("./living_model_data_days.json").then((res) => {
      const dayPattern = res.data.groups.find((el) => el.id === Number(this.state.selectedSocialId));
      this.setState({ dayPattern, DaysinDaypattern: dayPattern.days });
      console.log(this.state.DaysinDaypattern)
    });
    axios.get("./AllCharts.json").then((res) => {
      const provision = res.data[this.props.terrName].nodes.find((el) => el.id === Number(this.state.selectedSocialId));
      this.setState({ provision });
    })
  };

  componentWillMount() {
    axios.get("./AllCharts.json").then((res) => {
      const dataGraph = res.data[this.props.terrName].nodes;
      this.setState({ dataGraph });
    });
  }

  render() {
    let dataChart = this.state.DaysinDaypattern.map(day => {
      let row = Object.assign({ daytype: day.daytype }, ...day.services.map(place => {
        return Object.assign({ [place.name]: place.need }, { [place.name + 'Color']: Number(place.need) })
      }));
      return row;
    });
    let keysAre = [];
    if (this.state.DaysinDaypattern.length) {
      keysAre = ((this.state.DaysinDaypattern[0].services.map(service => service.name)));
    }
    console.log(dataChart);
    console.log(keysAre);
    console.log(this.state.dataGraph)
    console.log(this.state.dayPattern.groupName)
    console.log(this.state.provision.provision)
    return (
      <div>
        <div className="ChartIsSocial">
          {this.state.dataGraph.map((data, id) => (
            <div className="container">
              <br />
              <label className="socialListLable">
                <input
                  type="radio"
                  name="socialGroups"
                  onClick={this.selectedSocialId}
                  className="list-item-table is-size-7 has-text-weight-semibold	socilagropusliislables"
                  value={data.id}
                />
                {data.label}</label>
            </div>
          ))}
          <br />
          <br />
          {this.state.selectedSocialId &&
            <div className="">
              <h2 className="is-size-5 has-text-centered" > {`Уровень обеспеченности у ${this.state.dayPattern.groupName}`}</h2>
              <div className="is-in-smart-city">
                <h2 className="tag is-primary is-size-5 has-text-weight-semibold has-text-centered">{this.state.provision.provision}</h2>
              </div>
            </div>
          }

          <div className="ResponsiveHeatMap  sidebar col-md-12 col-sm-12 col-xs-12">
            {this.state.selectedSocialId &&
              <ResponsiveHeatMap
                data={dataChart}
                keys={keysAre}
                indexBy="daytype"
                margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
                axisTop={{ orient: 'top', tickSize: 8, tickPadding: 6, tickRotation: -41, legend: '', legendOffset: 60 }}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                  orient: 'left',
                  tickSize: 3,
                  tickPadding: 5,
                  tickRotation: 30,
                  legend: 'dayly pattern ',
                  legendPosition: 'middle',
                  legendOffset: -49
                }}
                cellOpacity={1}
                cellBorderColor={{ theme: 'labels.text.fill' }}
                labelTextColor={{ theme: 'background' }}
                defs={[
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(0, 0, 0, 0.1)',
                    rotation: -45,
                    lineWidth: 4,
                    spacing: 7
                  }
                ]}
                fill={[{ id: 'lines' }]}
                animate={true}
                motionStiffness={25}
                motionDamping={18}
                cellHoverOthersOpacity={0.15}
              />
            }
          </div>
        </div>
      </div >
    )
  }
}
export default SocialGroupsFromNodeChart;
