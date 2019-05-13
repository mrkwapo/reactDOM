import React from 'react';

const Ancestry = ({ ancestors }) => {
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
};

export default Ancestry;
