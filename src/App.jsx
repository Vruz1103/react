// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Fruits from './components/fruits'
import Hello from './components/Hello'
import ConditionalComponent from './components/ConditionalComponent'
import Message from './components/Message'
import Counter from './components/Counter'
import Form from './components/Form'

function App() {
  // const [count, setCount] = useState(0)
  // const seatNumbers=[1,4,7];
  // const person={
  //   name:"Jake",
  //   message:"Hello",
  //   emoji:"😊",
  //   seatNumbers:[1,4,7],
  // }
  return (  
    <div className="App">
      <Form/> 
    {/* <Counter/> */}
    {/* <Message/> */}
    {/* <ConditionalComponent/> */}
    {/* <Fruits/> */}
    {/* <Hello person={person}/> */}
    {/* <Hello name="Vrunda" message="Hi there!" emoji="👋" seatNumbers={seatNumbers}/> */}
    {/* <Hello name="Vrunda" message="Hi there! Buddy"  emoji="👋"/> */}
    {/* Hello World! */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
