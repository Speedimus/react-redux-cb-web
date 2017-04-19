import { combineReducers } from 'redux'
import spaces from './reducerChanges'
import spaceForm from './reducerChangeForm'

const reducers = combineReducers(
    {
        spaces: spaces,
        spaceForm: spaceForm
    }
);

export default reducers
