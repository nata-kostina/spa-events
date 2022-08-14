/* eslint-disable no-debugger */
import { LSItem } from '../types/types';

/* eslint-disable no-empty */
class LocalStorage {
  static getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === 'null') return null;
    if (item === 'undefined') return undefined;

    try {
      return JSON.parse(item);
    } catch {}

    return item;
  }

  static setItem(item : LSItem) {
    if (item.value) {
      let storedValues = LocalStorage.getItem(item.key);
      if (storedValues && storedValues.length !== 0) {
        storedValues = [...storedValues, item.value];
        localStorage.setItem(item.key, JSON.stringify(storedValues));
      } else {
        localStorage.setItem(item.key, JSON.stringify([item.value]));
      }
    }
  }
}

export default LocalStorage;
