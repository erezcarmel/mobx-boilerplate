import { observable, action, computed } from 'mobx';
import Model from '../../resources/data-resource/model';
import resource from '../../resources/data-resource';
import 'babel-polyfill';

class InstagramStore {
  @observable data = new Model();
  
  @action async init() {
    const data = await resource.get();
    this.data = new Model(data);
  }
  
  @computed get name() {
    return this.data.fname + ' ' + this.data.lname;
  }
}

export default new InstagramStore();
