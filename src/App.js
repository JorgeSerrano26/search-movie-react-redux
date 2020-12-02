import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ListOfMovies from './components/ListOfMovies/';
import store from './redux/store';

const App = () => {
  return <Provider store={store}>
    <div className="App">
      <ListOfMovies />
    </div>
  </Provider>
}

export default App;
