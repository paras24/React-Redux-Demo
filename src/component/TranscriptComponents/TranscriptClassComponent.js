import React, { Component } from 'react'
import PaginationTableComponent from './PaginationTableComponent'
import  Prototypes  from 'prop-types'

// Added Transcripts.css to provide some css related customizations
// Created Class Components in order to achieve required functionality
class TranscriptClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      symbolName:" "      
  }

  // Bind events related to Class Components
  this.changeHandler = this.changeHandler.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

  // Create a ref to store the textInput DOM element
  this.textInput = React.createRef();
  }

  // Set focus of input element once component is mounted
  componentDidMount() {
    this.textInput.current.focus();
  }

  changeHandler = (e) =>{
    this.setState({
        [e.target.name]:[e.target.value.trim().toUpperCase()]
    })}
  
  handleSubmit(){    
    const symbolName = this.state.symbolName
    this.props.fetchTranscripts(symbolName)    
 }

 // Created reusable PaginationTableComponent to populate transcript table anywhere in application just by passing Transcript Data
  render() {
    const transcriptArray = this.props.TranscriptsData.transcripts.Transcript;
    const symbolName = this.state.symbolName
    const transcriptHeader = this.props.TranscriptsData.transcripts.Transcript && <h3>Transcript Info</h3>
    
    return (
      <div>
        <div className ="titleContainer">
          <label className = 'title'>GeneSymbol:</label>
          <input type='text' name='symbolName' ref={this.textInput} value = {symbolName} onChange = {this.changeHandler}/>
          <button className = 'button' submit = 'submit' onClick = {this.handleSubmit}>Submit</button>
        </div>
        <div className ="container">          
          {this.props.TranscriptsData.loading ? (<h3> Loading Transcripts For {symbolName}.....</h3>):
          this.props.TranscriptsData.error ? (<h3>{this.props.TranscriptsData.error}</h3>):
          (
          <div>          
            {transcriptHeader}  
            {this.props.TranscriptsData.transcripts.Transcript && <PaginationTableComponent items={transcriptArray} />}                         
          </div>)}
        </div>
      </div>
    )
  }
}

// Added prop-types in order to declare all property type intially
TranscriptClassComponent.prototypes = {
  symbolName : Prototypes.string
}

export default TranscriptClassComponent
