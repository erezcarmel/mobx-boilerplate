import 'babel-polyfill';
import data from './data.json';

class DataResource {
  async get() {
    try {
      return Promise.resolve(data);
    } catch (e) {
      console.log('error loading data', e);
    }
  }
}

export default new DataResource();
