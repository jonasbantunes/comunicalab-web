import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddOsImage from './pages/add/AddOsImage';
import ListOsImages from './pages/list/ListOsImages';

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
