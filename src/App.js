import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import ShopContainer from './components/ShopContainer';
import store './redux/store';


class App extends Component{
  render() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShopContainer />
      </div>
    </Provider>
  );
 }
}
export default App;
