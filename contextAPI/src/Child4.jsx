import React, { useContext, useState } from 'react'
import { data1, data2 } from './App';

export default function Child4() {
    console.log("Child4 calling......");
    const count = useContext(data1);
    const setCount = useContext(data2);

  return (
    <div>
      <h1>Child4...........{count}</h1>
      <button onClick={()=>setCount(count+11)}>Click in Child4</button>
    </div>
  )
}
