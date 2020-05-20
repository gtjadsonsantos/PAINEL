import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom'

import history from './global/history'
import Login from './components/Login'
import Section from './components/Sections/section'
import Administration from './components/Administration/index2'
import isAuthenticated from './global/Auth'

const PrivateRoute =  ({component: Component, ...rest })=> (
    <Route {...rest} render={props => (
        isAuthenticated()?(
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