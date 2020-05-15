import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom'

import history from './global/history'
import Login from './components/Login'
import Section_1 from './components/Sections/section_1'
import Section_2 from './components/Sections/section_2'
import Section_3 from './components/Sections/section_3'
import Section_4 from './components/Sections/section_4'
import Section_5 from './components/Sections/section_5'
import Administration from './components/Administration'
import isAuthenticated from './global/Auth'

const PrivateRoute =  ({component: Component, ...rest })=> (
    <Route {...rest} render={props => (
            isAuthenticated() ?(
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
            <Route exact path="/view-1" component={Section_1} />
            <Route exact path="/view-2" component={Section_2} />
            <Route exact path="/view-3" component={Section_3} />
            <Route exact path="/view-4" component={Section_4} />
            <Route exact path="/view-5" component={Section_5} />
            <PrivateRoute exact path="/admin" component={Administration} />
        </Switch>
    </Router>
)

export default Routes