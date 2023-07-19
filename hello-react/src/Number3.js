import React, { useState } from 'react';

const Number3 = () => {
  const [map, setMap] = useState({ a: 1, b: 2, c: 3 });
  return (
    <>
      <div>
        <h3>{map.a}</h3>
      </div>
      <div>
        <h3>{map.b}</h3>
      </div>
      <div>
        <h3>{map.c}</h3>
      </div>
      <div>
        <button
          onClick={() => {
            setMap({ ...map, a: map.a + 1 });
          }}
        >
          a값 변경하기
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setMap({ ...map, b: map.b + 1 });
          }}
        >
          b값 변경하기
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setMap({ ...map, c: map.c + 1 });
          }}
        >
          c값 변경하기
        </button>
      </div>
    </>
  );
};

export default Number3;
