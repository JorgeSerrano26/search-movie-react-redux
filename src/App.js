import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ListOfMovies from './components/ListOfMovies/';
import Start from './components/Start';
import store from './redux/store';


const App = () => {
  return <Provider store={store}>
    <div className="App">
      <Start>
        <ListOfMovies />
      </Start>
    </div>
  </Provider>
}

export default App;
