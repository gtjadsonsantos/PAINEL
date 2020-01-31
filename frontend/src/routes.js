import React from 'react';
import isAuthenticated from './Auth'
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './components/Login'
import Sessao from './components/Sessao'


    
const PrivateRoute =  ({component: Component, ...rest })=> (
    <Route {...rest} render={props => (
        isAuthenticated() == true ?(
            <Component {...props}/> 
        ):(
            <Redirect to={{pathname: '/', state:{ from: props.location }}}/>
        )
    )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/Sessao" component={Sessao} />
        </Switch>
    </BrowserRouter>
)

export default Routes