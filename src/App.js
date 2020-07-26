import React from 'react';
import Main from './components/main';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';

import './App.scss';

const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
