import { createContext, useState } from 'react'
import './App.css'
import Child1 from './Child1'

const data1 = createContext();
const data2 = createContext();

function App() {

  const [count, setCount] = useState(10);
  var name = "Gaurav Raj"
  console.log("App calling......");
  

  return (
    <>
      <data1.Provider value={count}>
        <data2.Provider value={setCount}>
          <Child1 />
        </data2.Provider>
      </data1.Provider>

    </>
  )
}

export default App
export { data1, data2 }
