import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddOsImage from './pages/AddOsImage';
import ListOsImages from './pages/ListOsImages';

const OsImageRouter = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/Listar`}>
        <ListOsImages />
      </Route>
      <Route path={`${match.url}/Registrar`}>
        <AddOsImage />
      </Route>
    </Switch>
  );
};

export default OsImageRouter;
