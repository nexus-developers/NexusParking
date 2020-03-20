import React from 'react'

import { Switch, Route } from 'react-router-dom'

// Routes
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register'  component={Register}/>
        </Switch>
    )
}