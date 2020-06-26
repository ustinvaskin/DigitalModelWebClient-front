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
        <div class="field">
          <div class="control has-icons-left">
            <div class="select">
              <select value={this.props.basemap} onChange={this.onChange}>
                <option value="osm">OSM</option>
                <option value="hot">OSM HOT</option>
                <option value="dark">DARK</option>
                <option value="cycle">CYCLE MAP</option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <img
                src="https://img.icons8.com/wired/30/000000/layers.png"
                alt="choose control view"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basemap;
