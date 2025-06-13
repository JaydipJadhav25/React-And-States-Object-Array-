import React from 'react'
import ObjectAndState from './ObjectAndState'
import ArrayAndState from './ArrayAndState'

export default function Home() {
  return (
     <>
     <h2>React and state</h2>
     <a href="/todo">TODO APP</a>
      <div>
    <ObjectAndState/>
    <ArrayAndState/>
      </div>
     </>
  )
}
