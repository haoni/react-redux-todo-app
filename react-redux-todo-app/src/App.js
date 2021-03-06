import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Exemplo1 from './formulario/exemplo1';
import { Alert, Button, FormControl } from 'bootstrap-4-react';


class App extends Component {
  render() {
    return (
      <div className="pos-f-t">

        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
          
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            {/* 
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
            */}
          </div> 
        </div>

        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
            <li className="nav-item"><a className="nav-link disabled" href="#">Disabled</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;