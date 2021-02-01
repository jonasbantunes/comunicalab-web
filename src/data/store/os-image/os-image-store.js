import { makeAutoObservable } from 'mobx';
import api from '../../../services/api';
import { OsImage } from './os-image';

export class OsImageStore {
  rootStore;
  osImages = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  *fetchAll() {
    try {
      const res = yield api.get('osImage');
      this.osImages = res.data.map((osImage) => {
        const newOsImage = new OsImage(this);
        newOsImage.id = String(osImage.id);
        newOsImage.name = osImage.name;
        newOsImage.builtAt = osImage.built_at;
        return newOsImage;
      });
    } catch {
      console.log('A error ocurred!');
    }
  }
}
