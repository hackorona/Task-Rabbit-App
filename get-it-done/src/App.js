import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import './App.scss';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
         <Provider store={store}>
      <Navbar/>
         </Provider>
    </div>
  );
}

export default App;
