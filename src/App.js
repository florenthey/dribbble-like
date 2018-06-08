import React, { Component } from 'react'
import './style/App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Shots from './component/Shots'


class App extends Component {


  render() {

    return (
      
      <div className="App">
        <Header />
        <Shots />
        <Footer />
      </div>
    );
  }
}

export default App;
