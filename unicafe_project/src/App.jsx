import { use, useState } from 'react'

const Average = ({points, totalReviews}) => {
  const averageReviews= points / totalReviews
  return <p>Our avridge {averageReviews}</p>
}

const PositivePercent = ({positiveReviews, totalReviews}) => {
  const percent = (positiveReviews / totalReviews) * 100
  return <p>Positive reviews {percent}%</p>
}

const Statistics = ({good, neutral, bad, totalReviews, points, positiveReviews}) => {
  if (good == 0 && bad == 0 && neutral == 0) {
    return <div>
      <p>
        NO STATISTICS AVAILABLE
      </p>
    </div>
  }
  else {
    return <div>
          <h3>OUR STATS:</h3>
      <table>
        <tr>good {good}</tr>
        <tr>neutral {neutral}</tr>
        <tr>bad {bad}</tr>
        <tr>All reviews {totalReviews}</tr>
        <tr><Average points={points} totalReviews={totalReviews}></Average></tr>
        <tr><PositivePercent positiveReviews={positiveReviews} totalReviews={totalReviews}></PositivePercent></tr>
      </table>
  </div>
  }
}

const Button = ({text, value}) => {
  return <button onClick={value}>{text}</button>
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
      <Button value={handleGoodClick} text={'GOOD'}/>
      <Button value={handleNeutralClick} text={'NEUTRAL'}/>
      <Button value={handleBadClick} text={'BAD'}/>
      
      <Statistics good={good} bad={bad} neutral={neutral} totalReviews={totalReviews} points={points} positiveReviews={positiveReviews}/>
    </div>
  )
}

export default App