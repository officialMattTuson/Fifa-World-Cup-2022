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
  subHeaderStyle : {
    fontFamily: 'Nunito Sans', 
    fontWeight: 'bold',
    margin: '60px', 
    fontSize: '60px',
    textAlign: 'center'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-around', 
    width: '100%'
  },
  buttons : {
    textAlign: 'center'
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
      <h2 className={classes.subHeaderStyle}>Who is Picking??</h2>

      <div className={classes.buttons}>
        <Button variant="contained" color = "success" style = {{margin:"10px", padding: '20px'}} onClick={() => setOutcome('Marge')}>Magic Marge</Button>
        <Button variant="contained" color = "success" style = {{margin:"10px", padding: '20px'}} onClick={() => setOutcome('Dave')}>D-D-Dave</Button>
        <Button variant="contained" color = "success" style = {{margin:"10px", padding: '20px'}} onClick={() => setOutcome('Cole')}>Cool Cole</Button>
        <Button variant="contained" color = "success" style = {{margin:"10px", padding: '20px'}} onClick={() => setOutcome('Freya')}>Freddie Freya</Button>
        <Button variant="contained" color = "success" style = {{margin:"10px", padding: '20px'}} onClick={() => setOutcome('Matt')}>Mad Matt</Button>
        <Button variant="contained" color = "error" style = {{margin:"10px", padding: '20px'}} onClick={() => setOutcome('')}>Reset</Button>
        <br></br>
        <h1>{outcome}</h1>

        {outcome &&
      <Link to="/predictions/AB">
       <Button variant="contained" style = {{margin:"10px", padding: '20px'}} color = "success">Let's Go</Button>
      </Link>}
        </div>
    </div>
  )
}
