import {connect} from 'react-redux'
import TranscriptClassComponent from './TranscriptClassComponent'
import { fetchTranscripts } from '../../redux/Transcript/TranscriptAction'


function mapDispatchToProps (dispatch) {
  return {
    fetchTranscripts: (symbol) => dispatch(fetchTranscripts(symbol))
}}

function mapStateToProps (state) {
  const {
    Transcripts
  } = state

  return {
    TranscriptsData:Transcripts
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(TranscriptClassComponent)
