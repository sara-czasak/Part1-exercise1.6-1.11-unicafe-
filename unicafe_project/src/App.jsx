import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>Please let us know how we're doing!</h1>
      <button onClick={handleGoodClick}>GOOD</button>
      <button onClick={handleNeutralClick}>NEUTRAL</button>
      <button onClick={handleBadClick}>BAD</button>
      <p>OUR STATS:</p>
      <ul>
        <li>GOOD: {good}</li>
        <li>NEUTRAL: {neutral}</li>
        <li>BAD: {bad}</li>
      </ul>
    </div>
  )
}

export default App