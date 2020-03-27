import React from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './Store/store';
import './App.scss';


function App() {
  return (
    <div className="App">
         <Provider store={store}>
            <Router/>
         </Provider>
    </div>
  );
}

export default App;
