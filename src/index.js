import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';

import CreateFriend from './components/CreateFriend.jsx'
import CreatePerson from './components/CreatePerson.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'


import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/appReducer.js'

const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/create-friend' component={CreateFriend}/>
      <Route exact path='/create-person' component={CreatePerson}/>
      <Route path='/' component={Footer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);