
import './App.css';
import React, { Component} from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './pages/partials/Header';
import './Styles/HomePage.css'
import Footer from './pages/partials/footer';
import About from './pages/about';
import Addattractions from './pages/addattractions';
import Booking from './pages/booking'
import Contact from './pages/Contacts'
import AttractionsList from './pages/attractions';
// import Weather from './pages/weather';




class App extends Component {
  render() {
    return (
      <div className="App">
      
      <br/>
      <br/>
        <Router>
        <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/addattractions' component={Addattractions}/>
          <Route path='/booking' component={Booking}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/attractions' component={AttractionsList}/>
          {/* <Route path='/weather' component={Weather}/> */}
        </Router>
        <br />
        <br />
      <Footer/>  
      </div>
    )
  }
}
export default App
