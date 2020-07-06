import React from "react";
class Basemap extends React.Component {
  onChange = (e) => {
    let bm = e.currentTarget.value;
    if (this.props.onChange) {
      this.props.onChange(bm);
    }
  };

  render() {
    return (
      <div className="basemaps-container">
        <div className="field">
          <div className="control has-icons-left">
            <div className="select">
              <select value={this.props.basemap} onChange={this.onChange}>
                <option value="osm">OSM</option>
                <option value="hot">OSM HOT</option>
                <option value="dark">DARK</option>
                <option value="cycle">CYCLE MAP</option>
              </select>
            </div>
            <div className="icon is-small is-left">
              <img
                src="https://img.icons8.com/wired/30/000000/layers.png"
                alt="control map view"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basemap;
