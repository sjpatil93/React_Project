import { useState } from 'react'


function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if(counter<=20)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    if(counter> 0 && counter<=20){
    setCounter(counter - 1)}
  }
  
  return (
    <>
      <h1>hello</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App