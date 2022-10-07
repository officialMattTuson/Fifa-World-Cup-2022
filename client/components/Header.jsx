import React from 'react'
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
      margin: '50px', 
      fontSize: '100px',
      textAlign: 'center'
    }
}))

export default function Header() {

    const classes = useStyles()
  return (
    <div>
       <h1 className={classes.headerStyle}><span className = {classes.colorBase}>FIFA</span><span className={classes.colorTitle}>WORLD</span><span className = {classes.colorBase}>CUP</span><span className = {classes.colorTitle}>2022</span></h1>
    </div>
  )
}
