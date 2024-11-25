import React from 'react'
import { data1,data2 } from './App'
import Child4 from './Child4'

export default function Child3() {
    console.log("Child3 calling......");
  return (
    <div>
    
    <data1.Consumer>
     {
        (count)=>{
            return(
                <data2.Consumer>
                    {
                        (setCount)=>{
                            return(
                                <>
                                <h1>Child3.........{count}</h1>
                                <button onClick={()=>setCount(count+5)}>Click in Child3</button>
                                </>
                            )
                        }
                    }
                </data2.Consumer>
            )
        }
     }

    </data1.Consumer>
    <Child4/>
    </div>
  )
}
