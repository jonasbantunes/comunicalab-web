import { createContext } from 'react';
import { LaboratoryStore } from './laboratory/laboratory-store';
import { OsImageStore } from './os-image/os-image-store';

export class RootStore {
  constructor() {
    this.osImageStore = new OsImageStore(this);
    this.laboratoryStore = new LaboratoryStore(this);
  }
}

export const RootStoreContext = createContext();
