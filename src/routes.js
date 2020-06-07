import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Products from './container/Products';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/:id" component={Products} />
    </Switch>
  );
}
