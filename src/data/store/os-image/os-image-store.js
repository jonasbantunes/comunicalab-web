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

  *createOne(osImage) {
    const osImageDto = {
      name: osImage.name,
      built_at: osImage.builtAt,
    };
    const res = yield api.post('osImage', osImageDto);

    const newOsImage = new OsImage(this);
    newOsImage.id = res.data.id;
    newOsImage.name = res.data.name;
    newOsImage.builtAt = res.data.built_at;
    this.osImages.push(newOsImage);
  }

  *fetchAll() {
    const res = yield api.get('osImage');
    this.osImages = res.data.map((osImage) => {
      const newOsImage = new OsImage(this);
      newOsImage.id = String(osImage.id);
      newOsImage.name = osImage.name;
      newOsImage.builtAt = osImage.built_at;
      return newOsImage;
    });
  }

  *fetchOne(id) {
    const res = yield api.get(`osImage/${id}`);
    const osImage = new OsImage(this);
    osImage.id = String(res.data.id);
    osImage.name = res.data.name;
    osImage.builtAt = res.data.builtAt;

    const foundIndex = this.osImages.findIndex(
      (image) => image.id === osImage.id
    );
    if (foundIndex !== -1) {
      this.osImages[foundIndex] = osImage;
    } else {
      this.osImages.push(osImage);
    }
  }

  removeOne(osImage) {
    this.osImages.splice(this.osImages.indexOf(osImage), 1);
  }

  selectOsImage(id) {
    return this.osImages.find((image) => image.id === id) ?? null;
  }
}
