import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './botton'
import Statistic from './statistic'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give Feedback</h3>
      <div style={{marginBottom:"10px"}} >
        <Button text="good" handleClick={setGood} value={good} />
        <Button text="neutral" handleClick={setNeutral} value={neutral} />
        <Button text="bad" handleClick={setBad} value={bad} />
      </div>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)