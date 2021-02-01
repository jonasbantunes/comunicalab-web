import { createContext } from 'react';
import { OsImageStore } from './os-image/os-image-store';

export class RootStore {
  constructor() {
    this.osImageStore = new OsImageStore(this);
  }
}

export const RootStoreContext = createContext();
