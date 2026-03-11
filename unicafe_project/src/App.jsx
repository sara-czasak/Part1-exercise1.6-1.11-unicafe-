import { use, useState } from 'react'

const Average = ({points, totalReviews}) => {
  const averageReviews= points / totalReviews
  return <p>Our avridge: {averageReviews}</p>
}

const PositivePercent = ({positiveReviews, totalReviews}) => {
  const percent = (positiveReviews / totalReviews) * 100
  return <p>Positive reviews: {percent}%</p>
}

const Statistics = ({good, neutral, bad, totalReviews, points, positiveReviews}) => {
  return <div>
    <p>OUR STATS:</p>
      <ul>
        <li>GOOD: {good}</li>
        <li>NEUTRAL: {neutral}</li>
        <li>BAD: {bad}</li>
      </ul>
      <p>All reviews: {totalReviews}</p>
      <Average points={points} totalReviews={totalReviews}></Average>
      <PositivePercent positiveReviews={positiveReviews} totalReviews={totalReviews}></PositivePercent>
  </div>
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [points, setPoints] = useState(0)

  const [totalReviews, setTotalReviews] = useState(0)

  const [positiveReviews, setPositiveReviews] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedPoints = points + 1
    setPoints(updatedPoints)
    const newTotalReviews = totalReviews + 1
    setTotalReviews(newTotalReviews)
    const newPositiveReviews = positiveReviews + 1
    setPositiveReviews(newPositiveReviews)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const newTotalReviews = totalReviews + 1
    setTotalReviews(newTotalReviews)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedPoints = points - 1
    setPoints(updatedPoints)
    const newTotalReviews = totalReviews + 1
    setTotalReviews(newTotalReviews)
  }

  return (
    <div>
      <h1>Please let us know how we're doing!</h1>
      <button onClick={handleGoodClick}>GOOD</button>
      <button onClick={handleNeutralClick}>NEUTRAL</button>
      <button onClick={handleBadClick}>BAD</button>
      <Statistics good={good} bad={bad} neutral={neutral} totalReviews={totalReviews} points={points} positiveReviews={positiveReviews}/>
    </div>
  )
}

export default App