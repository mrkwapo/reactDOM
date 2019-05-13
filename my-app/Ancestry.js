import React, { Component } from 'react';

class Ancestry extends Component {
  render() {
    const { ancestors } = this.props;
    const ancestorList = ancestors.map(ancestor => {
      return (
        <div className='ancestor' key={ancestor.id}>
          <div>Name: {ancestor.name}</div>
          <div>Age: {ancestor.age}</div>
          <div>Birthday: {ancestor.birthday}</div>
        </div>
      );
    });
    return <div className='ancestor-list'>{ancestorList}</div>;
  }
}

export default Ancestry;
