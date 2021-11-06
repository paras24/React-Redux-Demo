import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {fetchTransSuccess,
          fetchTransReq,
           fetchTransError,
              fetchTranscripts} from '../redux/Transcript/TranscriptAction'
import {store} from '../Store'
import {getTranscritUrl} from '../redux/Transcript/EndPoints'

describe('fetchTransSuccess', () => {
    test('Dispatches the correct action and payload', () => {
      store.dispatch(fetchTransSuccess('BRAF'));
      expect(store.dispatch(fetchTransSuccess('BRAF'))).toMatchSnapshot();
    });
})

describe('fetchTransReq', () => {
  test('Dispatches the correct action and payload', () => {
    store.dispatch(fetchTransReq());
    expect(store.dispatch(fetchTransReq())).toMatchSnapshot();
  });
})

describe('fetchTransError', () => {
  test('Dispatches the correct action and payload', () => {
    store.dispatch(fetchTransError('Something Went Wrong'));
    expect(store.dispatch(fetchTransError('Something Went Wrong'))).toMatchSnapshot();
  });
})


describe('fetchTranscriptsWithSymbol', () => {
it('works with async actions', async () => {
    const data = await fetchTranscripts('BRAF');
    expect(data.length > 0);
  });
})


describe('fetchTranscriptsWithoutSymbol', () => {
  it('works with async actions', async () => {
      const data = await fetchTranscripts(' ');
      expect(data.length == 0);
    });
  })


describe('Get Transcripts', () => {
    it('Verify transcript URL', async () => {
      const symbolName = 'BRAF'
      const result = getTranscritUrl(symbolName)  
      expect(result.endsWith(`/${symbolName}.json?;expand=1`))
     });
  })
  
