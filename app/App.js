import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import Instagram from './components/instagram'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            <IndexRoute component={AddressHome} />
            <Route path='twitter' component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/about(/:name)' component={About}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Home = () => <h1>Hello from Home!</h1>;
const Address = (props) => (<div>
  <br />
  <Link onlyActiveOnIndex activeStyle={{color:'#f00'}} to='/address/twitter'>Instagram Feed</Link>
  <Link onlyActiveOnIndex activeStyle={{color:'#f00'}} to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>);
const NotFound = () => <h1>404.. This page is not found!</h1>;
const AddressHome = () => <h3>Address home</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const Nav = () => (
  <div>
    <Link onlyActiveOnIndex activeStyle={{color:'#0f0'}} to='/'>Home</Link>&nbsp;
    <Link onlyActiveOnIndex activeStyle={{color:'#0f0'}} to='/address'>Address</Link>
    <Link onlyActiveOnIndex activeStyle={{color:'#0f0'}} to='/about'>About</Link>
  </div>
);
const About = (props) => (
  <div>
    <h3>Welcome to the page about {props.params.name}</h3>
  </div>
);
const Container = (props) => (<div>
  <Nav />
  {props.children}
</div>);

export default App
