import React from 'react'

function CurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
  
    return (
      <div>
        <p>{formattedDate}</p>
      </div>
    );
  }

export default CurrentDate
