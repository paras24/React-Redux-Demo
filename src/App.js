import './App.css';
import {Provider} from 'react-redux'
import {store} from './Store'
import TranscriptFunctionalComponent from './component/TranscriptComponents/TranscriptFunctionalComponent';
import ErrorBoundary from './component/TranscriptComponents/ErrorBoundary';
import Container from './component/TranscriptComponents/Container';


// Added Two Components : Class--> TranscriptClassComponent & Functional --> TranscriptFunctionalComponent
// We can use any of the Components to get Transcript list by providing Gene Symbol by uncommenting any.
// Created Error Boundary component for catching errors of Class Component

/* Created Container.js for separating all redux states and dispatch functions for index page of every module in the application.
  It is helpful in achieving Separation of Concern and everytime we need to add any new state or dispatch function, it can be done here instead of adding everything on the index page.
  This is the only place where we would make any changes in order to connect our component with redux state and dispatcher.
*/

function App() {
  return (
    <Provider store = {store}>
       <div className="App">
         <ErrorBoundary>           
             <Container/>
         </ErrorBoundary>
         {/* <TranscriptFunctionalComponent/> */}
       </div>
    </Provider>
  );
}

export default App;
