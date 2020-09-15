import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

// Routes
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

import Dashboard from './Pages/Dashboard/Dashboard'
import CarInformations from './Pages/CarInformations/CarInformations'
import Administrator from './Pages/Administrator/Administrator'

function Routes(props){
    console.log(props.Id[1])
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register'  component={Register}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/carInformations' component={CarInformations}/>
            <Route path='/:id/adm' component={Administrator}>
                { props.Id[1] == null ? <Redirect to='/dashboard'/> : null }
            </Route>
        </Switch>
    )
}

const mapStateToProps = state => ({
    Id: state.id
});

export default connect(mapStateToProps)(Routes)
