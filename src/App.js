import React from 'react';
import './App.css';
import {Route, Link} from 'react-micro-router';
import Home from './Components/home';
import Search from './Components/search';
const URI = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
fetch(URI).then(res => res.json()
  );


   
  export default function App() {
   
      return (
          <div className="App">
              <Link to="/">Home</Link> {" "}
              <Link to="/search">Search</Link>
   
              <Route path="/" exact>
                  <Home/>
              </Route>
   
              <Route path="/search">
                  <Search/>
              </Route>
          </div>
      );
   
  }
