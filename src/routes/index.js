/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
// I am import myself Route component
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  // Return all our troutes
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      {/* Se não encontrar a rota exibe o erro 404 */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
