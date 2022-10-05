import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const [outcome, setOutcome] = useState('')
  return (
    <div>
      <h1>FIFA WORLD CUP 2022 Match Predictor</h1>
      <h2>Choose Your Player:</h2>


      <button onClick={() => setOutcome('Marge')}>Magic Marge</button>
      <button onClick={() => setOutcome('Dave')}>D-D-Dave</button>
      <button onClick={() => setOutcome('Cole')}>Cool Cole</button>
      <button onClick={() => setOutcome('Freya')}>Freddie Freya</button>
      <button onClick={() => setOutcome('Matt')}>Mad Matt</button>
      <h1>{outcome}</h1>

      <Link to="/predictions/AB">
        <button type="submit">Lets Go!</button>
      </Link>
    </div>
  )
}
