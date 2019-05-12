// import React from 'react'; //you would use this with line 3 but since we are using line 4 we use the code on line 2
import React, { Component } from 'react';
import Ancestry from './Ancestry';

// function App() { //this is the same as line 4 and 5
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> My first React App!</h1>
        <p>Welcome ;)</p>
        <Ancestry />
      </div>
    );
  }
}

export default App;
