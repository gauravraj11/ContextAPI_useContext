import React from 'react'
import Child3 from './Child3'

export default function Child2() {
    console.log("Child2 calling......");
  return (
    <div>
        <h1>Child2....</h1>
        <Child3  />
    </div>
  )
}