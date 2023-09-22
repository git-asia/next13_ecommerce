"use client";

import { useState } from "react";

export const ProductCounter = () => {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button className="px-5 border border-slate-200" onClick={decrementCounter}> - </button>
      <input readOnly value={counter} className="border border-slate-200 text-center"/>
      <button className="px-5 border border-slate-200" onClick={() => setCounter(counter + 1)}> + </button>
    </div>
  );
};


