import React, { Component } from 'react';

import Carousel from './components/Carousel/Carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel testProp={1} />
      </div>
    );
  }
}

export default App;
