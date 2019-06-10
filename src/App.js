import React from 'react';
import './App.css';
import {Route, Link} from 'react-micro-router';
import Home from './Components/home';
import Search from './Components/search';



   
  export default function App() {
   
      return (
          <div className="App">
              <h1>Welcome to our Senator's Search</h1>
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
