import {FETCH_TRANSCRIPT_REQ,
        FETCH_TRANSCRIPT_SUCCESS,
         FETCH_TRANSCRIPT_ERROR}
             from './TranscriptType'
import axios from 'axios'
import {getTranscriptUrl} from './EndPoints'


// created various actions in order to facilate various transitions
export const fetchTransReq = ()=>{
return{
    type:FETCH_TRANSCRIPT_REQ
}
}

export const fetchTransSuccess = (transcripts)=>{
return{
    type:FETCH_TRANSCRIPT_SUCCESS,
    Transcripts : transcripts
}}

export const fetchTransError = (err) =>{
return {
    type: FETCH_TRANSCRIPT_ERROR,
    error: err
}}


// Created async action & dispatching various action requests
// Using axios in order to deal with various Api's call
export const fetchTranscripts = (symbol)=>{
    const symbolName = symbol
    const transcriptUrl = getTranscriptUrl(symbolName)
    return (dispatch)=>{
    dispatch(fetchTransReq())
    axios.get(transcriptUrl)
    .then(res => 
        {
            const transcripts = res.data            
            dispatch(fetchTransSuccess(transcripts))
        })
    .catch(error =>{
        const errorMessage = error.response.data.error
        dispatch(fetchTransError(errorMessage))
    })
}}