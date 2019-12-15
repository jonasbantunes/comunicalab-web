import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './modules/Login/index';
import Laboratorio from './modules/Laboratorio/index';
import Home from './modules/Home/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Laboratorio" component={Laboratorio} />
      </Switch>
    </BrowserRouter>
  );
}
