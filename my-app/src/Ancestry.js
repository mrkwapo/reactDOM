import React from 'react';

const Ancestry = ({ ancestors }) => {
  //   const ancestorList = ancestors.map(ancestor => {
  //     if (ancestor.age > 30) {
  //       return (
  //         <div className='ancestor' key={ancestor.id}>
  //           <div>Name: {ancestor.name}</div>
  //           <div>Age: {ancestor.age}</div>
  //           <div>Birthday: {ancestor.birthday}</div>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });

  return (
    <div className='ancestor-list'>
      {ancestors.map(ancestor => {
        return ancestor.age > 30 ? (
          <div className='ancestor' key={ancestor.id}>
            <div>Name: {ancestor.name}</div>
            <div>Age: {ancestor.age}</div>
            <div>Birthday: {ancestor.birthday}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ancestry;
