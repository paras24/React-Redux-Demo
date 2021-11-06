import {createStore} from 'redux'
import rootReducers from './redux/rootReducer'
import { applyMiddleware } from 'redux'
import {logger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Added redux-logger for logging purpose, we can check logging inside browser console
// Added redux-thunk for using creating Async Actions
// Added redux-devtools-extension for easily debuging of State change and Action calls inside browser developer tools

export const store = createStore(
    rootReducers,
     composeWithDevTools(applyMiddleware(logger,thunk))
     )
