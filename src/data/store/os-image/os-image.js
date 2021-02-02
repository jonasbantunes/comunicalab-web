import { makeAutoObservable } from 'mobx';
import api from '../../../services/api';

export class OsImage {
  id;
  name;
  builtAt;
  store;

  constructor(store) {
    makeAutoObservable(this);
    this.store = store;
  }

  get asJson() {
    return {
      id: this.id,
      name: this.name,
      builtAt: this.builtAt,
    };
  }

  *remove() {
    yield api.delete(`osImage/${this.id}`);
    this.store.removeOne(this);
  }

  *update() {
    const osImageDto = {
      name: this.name,
      built_at: this.builtAt,
    };
    yield api.patch(`osImage/${this.id}`, osImageDto);
  }
}
