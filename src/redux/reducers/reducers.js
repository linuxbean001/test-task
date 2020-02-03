import { combineReducers } from 'redux'
import loginReducer from './loginReducer';


const reducers = combineReducers({
    dataFile:loginReducer
})

export default reducers;