import React from 'react';
import {Employee} from './Employee/Employee';
import {Home} from './Home';
import {Register} from './Auth/Register';
import {Login} from './Auth/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import {history} from '../helpers';
import Navigation from './Navigation';
import {NotFound} from './NotFound';

const NavRoute = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
      <div>
        <Navigation/>
        <Component {...props}/>
      </div>
    )}/>
  )

export const App = () => {

    return (
        <Router history={history}>
            <Switch>
                
                <NavRoute exact path="/" component={Home}/>
                <NavRoute path="/register" component={Register}/>
                <NavRoute path="/login" component={Login}/>
                <NavRoute path="/employee" component={Employee}/>
                <Route component={NotFound} />

            </Switch>
        </Router>
    )
}