import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

// Jquery
// import $ from 'jquery'

// Styles
import "bulma";

//Navbar

import Navbar from "./components/common/navbar";
import Footer from "./components/common/Footer";
// Main
import Main from "./components/homepage/mainHome";
import Models from "./components/models/modelsAll/models";
import DataShow from "./components/Data/Data-Show/DataShow";
import Data from "./components/Data/Data";
import DataShowInerface from "./components/Data/Data-Show/DataWatch/DataWatchInterface/DataShowInterface";

// Data
import ProblemInterface from "./components/Data/Data-Show/ProblemsInterface/ProblemsInterface";
import EventsInterface from "./components/Data/Data-Show/EventsInterface/EventsInterface";

// Models Each
// Mpdel Import
import ModelPopulationDescription from "./components/models/modelEach/ModelPopulation/ModelPoplulationDescription";
import ModelEcologyDescription from "./components/models/modelEach/ModelEcology/ModelEcologyDescription";
import ModelTransportDescription from "./components/models/modelEach/ModelTransport/ModelTransportDiscription";
import ModelHumanSocietyDescription from "./components/models/modelEach/ModelHumanSociety/ModelHumanSocietyDiscription";
import ModelServicesDescription from "./components/models/modelEach/ModelServices/ModelServices";

// About
import AboutUs from "./components/common/AboutUs/AboutUsPage";
// Materials
import Materials from "./components/common/Materials/MaterialsPage";
// Conacts
import Contacts from "./components/common/Contacts/ContactsPage";
// Model Population Interface
import InterfaceModelPopulation from "./components/models/modelEach/ModelPopulation/ModelPopulation-Interface/Model-Population-Interface";
import InterfaceModelPopulationSocial from "./components/models/modelEach/ModelPopulationSocial/ModelPopulationSocial-Interface/Model-Population-Interface";
import InterfaceHumanSociety from "./components/models/modelEach/ModelHumanSociety/ModelSocietyIntyerface/Model-Human-Sosiety-Interface";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          {/* //Common  */}
          <Route path="/about" component={AboutUs} />
          <Route path="/materials" component={Materials} />
          <Route path="/contacts" component={Contacts} />
          {/* Data  */}
          <Route path="/dataShow" component={DataShow} />
          <Route path="/dataInterface" component={DataShowInerface} />
          <Route path="/data" component={Data} />
          <Route path="/problemInterface" component={ProblemInterface} />
          <Route path="/eventsInterface" component={EventsInterface} />
          {/* Models */}
          <Route path="/models" component={Models} />
          {/* Models Each  */}
          <Route path="/population" component={ModelPopulationDescription} />
          <Route path="/services" component={ModelServicesDescription} />
          <Route path="/ecology" component={ModelEcologyDescription} />
          <Route path="/transport" component={ModelTransportDescription} />
          <Route
            path="/InterfaceModelPopulation"
            component={InterfaceModelPopulation}
          />
          <Route
            path="/InterfaceModelPopulationSocial"
            component={InterfaceModelPopulationSocial}
          />
          <Route
            path="/humansosciety"
            component={ModelHumanSocietyDescription}
          />
          {/* ModelHumanSociety Interface */}
          <Route
            path="/InterfaceHumanSociety"
            component={InterfaceHumanSociety}
          />
          {/* Home */}
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
