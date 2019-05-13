// import React from 'react'; //you would use this with line 3 but since we are using line 4 we use the code on line 2
import React, { Component } from 'react';
import Ancestry from './Ancestry';
import AddAncestor from './AddAncestor';

class App extends Component {
  state = {
    ancestors: [
      { name: 'Nate', age: 31, birthday: 'December 2, 1988', id: 1 },
      { name: 'Remi', age: 33, birthday: 'February 3, 1988', id: 2 },
      { name: 'Kona', age: 28, birthday: 'March 1, 1988', id: 3 }
    ]
  };
  render() {
    return (
      <div className='App'>
        <h1> My first React App!</h1>
        <p>Welcome ;)</p>
        <Ancestry ancestors={this.state.ancestors} />
        <AddAncestor />
      </div>
    );
  }
}

export default App;
