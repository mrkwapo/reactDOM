import React, { Component } from 'react';

class Ancestry extends Component {
  render() {
    // console.log(this.props);
    const { name, age, birthday } = this.props;
    return (
      <div className='ancestor'>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Birthday: {birthday}</div>
      </div>
    );
  }
}

export default Ancestry;
