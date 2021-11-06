import { combineReducers } from 'redux'
import transcriptReducer from './Transcript/TranscriptReducer'

// Added Root Reducer in order to add more reducers in future
// We can combine all reducers here
const rootReducers = combineReducers({   
    Transcripts : transcriptReducer
})

export default rootReducers