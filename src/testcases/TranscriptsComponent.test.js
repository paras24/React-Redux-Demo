import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {store} from '../Store'
import Container from '../component/TranscriptComponents/Container'


// We can test component related stuff here
  describe('Container Class Component', () => {
    test('renders', () => {    
      const wrapper = shallow(<Container store = {store}/>)      
      expect(wrapper.exists()).toBe(true);
    });
  })



