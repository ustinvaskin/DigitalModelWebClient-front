import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

// Styles
import "bulma";

//Navbar
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
// Main
import Main from "./components/index/mainHome";
import Models from "./components/models/Index";
import DataShow from "./components/data/Data-Show/DataShow";
import Data from "./components/data/Data";
import DataShowInterface from "./components/data/Data-Show/DataWatch/DataWatchInterface/DataShowInterface";

// Data
import ProblemInterface from "./components/data/Data-Show/ProblemsInterface/ProblemsInterface";
import EventsInterface from "./components/data/Data-Show/EventsInterface/EventsInterface";

// Models Each
// Model Import
import ModelsRouter from "./components/models/Router";

// About
import AboutUs from "./components/common/AboutUs/AboutUsPage";
// Materials
import Materials from "./components/common/Materials/MaterialsPage";
// Contacts
import Contacts from "./components/common/Contacts/ContactsPage";
function App() {
  const [dataGroups, setDataGroups] = useState([]);
  const [dataGraph, setDataGraph] = useState({});
  // console.error('STOP');
    useEffect(() => {
      Promise.allSettled([
        axios.get(`${process.env.REACT_APP_MAIN_API}/api/groups`),//.then(({data}) => {
          // setDataGroups(data.territories);
        //}),
        // Getting data from API charts bubble nodes
        axios.get(`${process.env.REACT_APP_MAIN_API}/api/charts`)//.then(({data}) => {
          // setDataGraph(data);
        //})
        
      ]).then(([groups, graph]) => {
        // console.log(groups.value.data.territories);
        // setDataGroups(groups.value.data.territories);
        // setDataGraph(graph.value.data);
      });
    }, []);
    // debugger;
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Main} />
          {/* Data  */}
          <Route path="/data" component={Data} />
          {/* Models */}
          <Route path="/models" component={ModelsRouter}>
          </Route>
          {/* Common */}
          <Route path="/about" component={AboutUs} />
          <Route path="/materials" component={Materials} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/dataShow" component={DataShow} />
          <Route path="/dataInterface" component={DataShowInterface} />
          <Route path="/problemInterface" component={ProblemInterface} />
          <Route path="/eventsInterface" component={EventsInterface} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
}
export default App;