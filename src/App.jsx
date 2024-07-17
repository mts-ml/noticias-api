import React from 'react';
import { Header } from './components/Header/Header';
import { Articles } from './components/Articles/Articles';

import './css/styles.css'


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Articles />        
      </>
    )
  }

}

export default App;
