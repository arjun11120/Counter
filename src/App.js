import './App.css';
import Counter from './counter'
import {useState} from 'react'

function App() {
  const [state,setState] = useState(false) 
  
  return (
    <div>
      <button onClick={()=>setState(!state)}>show or hide</button>
      {state ? <Counter/> :null}
    </div>
  )              
}
export default App;