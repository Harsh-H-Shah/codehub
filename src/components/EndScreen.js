import React from 'react'
import { Link } from 'react-router-dom'

const EndScreen = ({score, setQuizState, list}) => {
  return (
    <div>
      <h1>Congratulations!</h1>
      <h1>You got {score} out of {list.length}</h1>
      <button onClick={()=>setQuizState('display')}>Restart</button>
      <a href=''>Back to quizzes</a>
    </div>
  )
}

export default EndScreen
