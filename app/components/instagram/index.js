import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './store';
  
class Instagram extends Component {
  componentWillMount() {
    store.init();
  }

  render() {
    return (
      <div>{ store.name }</div>
    )
  }
}

export default observer(Instagram);
