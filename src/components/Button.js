import React from 'react';

export function Button({ btnLabel, style, onClick }) {
  return (
    <div>
      <button onClick={onClick} style={style}>
        {btnLabel}
      </button>
    </div>
  );
}
