import { combineReducers } from 'redux'

import modal from './Modal/Reducer'
import information from './Information/Reducer'
import payment from './Payment/Reducer'
import reports from './Reports/Reducer'
import administrador from './Administrador/Reducer'
import id from './Id/Reducer'

export default combineReducers({
    modal,
    information,
    payment,
    reports,
    administrador,
    id
})