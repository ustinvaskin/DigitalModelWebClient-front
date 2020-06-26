import React from "react";
// import { Link } from 'react-router-dom'

// styles
import "./Styles/Sim.css";

// import Footer from "../../../common/footer/Footer.jsx"
import HomeMain from "./home";

class Main extends React.Component {
  render() {
    return (
      <div className="heroImage">
        <HomeMain />
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Main;
