import { useState } from 'react'
import './App.css'

import {Route , Routes} from "react-router-dom"

import TodoApp from './TodoApp';
import Home from "./Home"
function App() {
  const [count, setCount] = useState(0); // tthis is immutable
 



  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todo' element={<TodoApp/>}/>
    </Routes>
       
    </>
  )
}

export default App
