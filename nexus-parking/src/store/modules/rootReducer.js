import { combineReducers } from 'redux'

import modal from './Modal/Reducer'
import information from './Information/Reducer'

export default combineReducers({
    modal,
    information
})