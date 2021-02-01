import { makeAutoObservable } from 'mobx';

export class OsImage {
  id;
  name;
  builtAt;
  store;

  constructor(store) {
    makeAutoObservable(this);
    this.store = store;
  }
}
