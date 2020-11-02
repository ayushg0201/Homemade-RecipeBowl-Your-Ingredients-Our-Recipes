import React , {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import { FooterContainer } from './containers/footer';
import Section1 from "./components/about/section-1";
import Features from "./components/about/features";
import Info from "./components/about/info";
import Team from "./components/about/team";
import "./about.css"
import JsonData from './data/data.json';

// function App() {
  //   return (
    //     <div>
    //       <Login />
    //     </div>
    //   );
    // }

function DashBoard(){
  const [data, setData] = useState({landingPageData : JsonData});

    return (
      <div>
        <Router>
          <div >
            <Navbar/>
          </div>

          <div>
            <Section1/>
          </div>

          <div>
            <Features/>
          </div>

          <div>
            <Info/>
          </div>

          <div>
            <Team/>
          </div>

          <div>
            <FooterContainer/>
          </div>
        </Router>
      </div>
    );
}

export default DashBoard;
