import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  colorTitle: {
    color: '#8A1538',
    textDecorationLine: 'underline',
    textDecorationColor: '#072A6C'
  },
  colorBase: {
    color: '#072A6C',
  
  },
  headerStyle : {
    fontFamily: 'Nunito Sans', 
    fontWeight: 'bold',
    margin: '100px', 
    fontSize: '100px',
    textAlign: 'center'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-around', 
    width: '100%'
  },
  cardStyles : { 
    width: 350,
    }
}))

export default function Home() {

    const [outcome, setOutcome] = useState('')
    const classes = useStyles()
  return (
    <div>
      <h1 className={classes.headerStyle}><span className = {classes.colorBase}>FIFA</span><span className={classes.colorTitle}>WORLD</span><span className = {classes.colorBase}>CUP</span><span className = {classes.colorTitle}>2022</span></h1>
      <h2>Who is Picking??:</h2>

      <Button variant="contained" color = "success" style = {{margin:"10px"}} onClick={() => setOutcome('Marge')}>Magic Marge</Button>
      <Button variant="contained" color = "success" style = {{margin:"10px"}} onClick={() => setOutcome('Dave')}>D-D-Dave</Button>
      <Button variant="contained" color = "success" style = {{margin:"10px"}} onClick={() => setOutcome('Cole')}>Cool Cole</Button>
      <Button variant="contained" color = "success" style = {{margin:"10px"}} onClick={() => setOutcome('Freya')}>Freddie Freya</Button>
      <Button variant="contained" color = "success" style = {{margin:"10px"}} onClick={() => setOutcome('Matt')}>Mad Matt</Button>
      <Button variant="contained" color = "error" style = {{margin:"10px"}} onClick={() => setOutcome('')}>Reset</Button>

      <h1>{outcome}</h1>

        {outcome &&
      <Link to="/predictions/AB">
       <Button variant="contained" color = "success">Let's Go</Button>
      </Link>}
    </div>
  )
}
