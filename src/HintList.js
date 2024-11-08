import React from 'react';

function HintList({ hints }) {
  return (
    <div>
      <h2>İpuçları</h2>
      <ul>
        {hints.map((hint, index) => (
          <li key={index}>{hint}</li>
        ))}
      </ul>
    </div>
  );
}

export default HintList;
