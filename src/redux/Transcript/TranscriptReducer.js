import {FETCH_TRANSCRIPT_REQ,FETCH_TRANSCRIPT_SUCCESS,FETCH_TRANSCRIPT_ERROR} from './TranscriptType'

const intialState = {
    loading:false,
    transcripts:{},
    error:''
}

const transcriptReducer = (state = intialState , action)=>{
   switch(action.type){
       case FETCH_TRANSCRIPT_REQ : return{
           ...state,
           loading :true
       }
       case FETCH_TRANSCRIPT_SUCCESS : return{
           loading :false,
           transcripts : action.Transcripts,
           error : ''
       }
       case FETCH_TRANSCRIPT_ERROR : return {
           loading : false,
           transcripts : {},
           error : action.error
       }
       default : return state
   }
}


export default transcriptReducer