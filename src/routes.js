import React from 'react'

import { Route, Switch } from 'react-router-dom'

// Routes
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

import Dashboard from './Pages/Dashboard/Dashboard'
import CarInformations from './Pages/CarInformations/CarInformations'

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register'  component={Register}/>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/carInformations' component={CarInformations}/>
        </Switch>
    )
}
