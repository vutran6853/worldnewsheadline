import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Lifestyle from './components/category/lifestyle/Lifestyle';
import Opinion from './components/category/opinion/Opinion';
import Politics from './components/category/politics/Politics';
import TV from './components/category/t.v/T.V';
import US from './components/category/u.s/U.S';
import World from './components/category/world/World';
import TopHeadline from './components/category/topHeadline/topHeadline';

export default (
    <Switch>
      <Route exact path='/' component={ Dashboard } ></Route>
      <Route path='/lifestyle' component={ Lifestyle }></Route>
      <Route path='/opinion' component={ Opinion }></Route>
      <Route path='/politics' component={ Politics }></Route>
      <Route path='/tv' component={ TV }></Route>
      <Route path='/us' component={ US }></Route>
      <Route path='/world' component={ World }></Route>
      <Route path='/topHeadline' component={ TopHeadline }></Route>
    </Switch>
)