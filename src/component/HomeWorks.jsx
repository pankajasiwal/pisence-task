import React from 'react';

export default function HomeWorks({ data }) {
  return (
    <>
      <h4>{data[0]}</h4>
      <div className='subjects'>
        {data[1].map((subject) => (
          <p key={subject} className='subject'>
            {subject}
          </p>
        ))}
        {/* <p className='subject'>Hindi</p>
        <p className='subject'>Math</p>
        <p className='subject'>Science</p> */}
      </div>
    </>
  );
}
