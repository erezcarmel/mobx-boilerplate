import { observable } from 'mobx';

class Model {
  @observable fname;
  @observable lname;
  
  constructor({
    fname = '',
    lname = ''
  } = {}) {
    this.fname = fname;
    this.lname = lname;
  }
}

export default Model;
