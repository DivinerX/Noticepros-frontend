export class DataStore {

  static set(key: string, value: any) {

    if (!key) {
      return;
    }

    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string) {

    if (!key) {
      return;
    }

    let val = sessionStorage.getItem(key);

    if (!val) {
      return val;
    }

    return JSON.parse(val);
  }

  static clear(key: string) {

    if (!key) {
      return;
    }

    sessionStorage.removeItem(key);
  }

  static clearAll() {
    sessionStorage.clear();
  }
}