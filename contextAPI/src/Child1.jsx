import React from 'react'
import Child2 from './Child2'

export default function Child1() {
    console.log("Child1 calling......");
  return (
    <div>
      <h1>Child1</h1>
      <Child2 />
    </div>
  )
}