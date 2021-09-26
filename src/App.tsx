import React, { useState } from 'react'

import Stage from './components/Stage'
import Panel from './components/Panel'
import './App.less'
function App() {
  const [score, setScore] = React.useState(0)
  const [level, setLevel] = React.useState(1)

  return (
    <div className="snake-wrapper">
      <Stage setScore={setScore} setLevel={setLevel} score={score} level={level}/>
      <Panel score={score} level={level}/>
    </div>
  )
}

export default App
