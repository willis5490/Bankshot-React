import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";

//create browser history
import History from './Pages/History/History.js'

//components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

// pages
import NotFound from './Pages/NotFound/NotFound.js'
import Home from './Pages/Home/Home.js'

import TheBand from './Pages/TheBand/TheBand.js'
import Contact from './Pages/Contact/Contact.js'
import ImagePage from './Pages/ImagePage/ImagePage.js'
import VideoPage from './Pages/VideosPage/VideosPage.js'



class App extends Component {
  render() {
    return (
      <div className="App">
         
      <Router  history={History}>
         <div className="App">
        <Header></Header>
          
            <Switch>
              <Route exact path="/" render={props =><Home/>} />                 
              <Route exact path="/About" render={props =><TheBand/>} /> 
              <Route exact path="/Contact" render={props =><Contact/>} /> 
              <Route exact path="/Images" render={props =><ImagePage/>} />   
              <Route exact path="/Videos" render={props =><VideoPage/>} />               
              <Route render={props =><NotFound/>}/>
              
            </Switch>
          
        <Footer></Footer>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
