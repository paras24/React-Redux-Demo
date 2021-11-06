import React, {useEffect, useState, useRef } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchTranscripts } from '../../redux/Transcript/TranscriptAction'
import PaginationTableComponent from './PaginationTableComponent'
import '../../Transcripts.css'

// Created Functional Components using various Hooks in order to achieve required functionality
function TranscriptFunctionalComponent(){

  const [symbolName,setSymbolName] = useState(" ")  // useState hook to create local state for symbolName
  const TranscriptsData = useSelector(state => state.Transcripts); // In Order to get redux state for transcripts 
  const dispatch = useDispatch(); // In order to get dispatcher for required Actions
  const textInput = useRef(null); // Create a ref to store the textInput DOM element

  const transcriptArray = TranscriptsData.transcripts.Transcript;
  const transcriptHeader = TranscriptsData.transcripts.Transcript && <h3>Transcript Info</h3>

  // It will behave like and componentDidMount Class component with empty Dependency Array
  // In order to set focus of input element once component is mounted

  useEffect(()=>{ 
    textInput.current.focus()
  },[])
   
  const handleSubmit=()=>{        
      dispatch(fetchTranscripts(symbolName))       
   }

  return(   
    <div>
        <div className ="titleContainer">
          <label className = 'title'>GeneSymbol:</label>          
            <input type='text' name='symbolName' ref = {textInput} value = {symbolName} onChange = {(e)=>{setSymbolName(e.target.value.trim().toUpperCase())}}/>          
            <button className = 'button' submit = 'submit' onClick = {handleSubmit}>Submit</button>
        </div>
        <div className="container">
          {TranscriptsData.loading ? (<h3> Loading Transcripts for {symbolName}.....</h3>):
          TranscriptsData.error ? (<h3>{TranscriptsData.error}</h3>):
          (
          <div>
            {transcriptHeader}
            {TranscriptsData.transcripts.Transcript && <PaginationTableComponent items={transcriptArray} />}
          </div>)}
        </div>
      </div>
  ) 
}

export default TranscriptFunctionalComponent