import { combineReducers } from 'redux'

import modal from './Modal/Reducer'
import information from './Information/Reducer'
import payment from './Payment/Reducer'

export default combineReducers({
    modal,
    information,
    payment
})