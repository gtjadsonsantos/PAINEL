import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom'

import history from './history'
import Login from './components/Login'
import Section from './components/Section'
import Administration from './components/Administration'

const PrivateRoute =  ({component: Component, ...rest })=> (
    <Route {...rest} render={props => (
            sessionStorage.getItem('status') ?(
            <Component {...props}/> 
        ):(
            <Redirect to={{pathname: '/', state:{ from: props.location }}}/>
        )
    )}
    />
)

const Routes = () => (
    <Router history={history} >
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/view" component={Section} />
            <PrivateRoute exact path="/admin" component={Administration} />
        </Switch>
    </Router>
)

export default Routes