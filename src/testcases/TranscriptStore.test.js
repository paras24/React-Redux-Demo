import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {store} from '../Store'

// We can test complete state of store related to particular transcript module
const intialState = {
    loading:false,
    transcripts:{},
    error:''
}

describe('Default store state', () => {
    it('Test Store State', () => {
      const result = store.getState()       
      expect(result.Transcripts).toEqual(intialState)
    });
  })



