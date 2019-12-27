import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './modules/Login/index';
import Home from './modules/Home/index';
import RegistrarLaboratorio from './modules/RegistrarLaboratorio/index';
import ListarLaboratorio from './modules/ListarLaboratorio/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/RegistrarLaboratorio" component={RegistrarLaboratorio} />
        <Route path="/ListarLaboratorio" component={ListarLaboratorio} />
      </Switch>
    </BrowserRouter>
  );
}
