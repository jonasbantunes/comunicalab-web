import React from 'react';

import Routes from './routes';
import './App.css';
import { RootStore, RootStoreContext } from './data/store/root-store';

const App = () => (
  <RootStoreContext.Provider value={new RootStore()}>
    <Routes />
  </RootStoreContext.Provider>
);

export default App;
