import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rutas } from './rutas/index';
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        {Rutas}
      </BrowserRouter>
    )
  }
}

export default App;
