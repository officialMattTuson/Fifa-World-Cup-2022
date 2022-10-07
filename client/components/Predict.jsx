import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import gamesArray from '../data/fixtureData'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import { useEffect } from 'react'

export default function Predictor() {
  const { code } = useParams()
  const [outcome, setOutcome] = useState('-')
  const game = gamesArray.find((game) => game.code == code)

  useEffect(()=> {
    setOutcome('-')
  },[])

  return (
    <>
    <h1 style = {{textAlign: 'center', fontFamily: 'monospace'}}>{outcome}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card sx={{ width: 650, margin: '30px' }}  onClick={() => setOutcome(game.team2)}>
          <CardActionArea>
            <CardMedia component="img" height="340" image={`${game.image2}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {game.team2}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
        <h1 style={{ position: 'absolute', bottom: '250px' }}>VS</h1>
        <Card sx={{ width: 650, margin: '30px' }} onClick={() => setOutcome(game.team1)}>
          <CardActionArea>
            <CardMedia component="img" height="340" image={`${game.image1}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {game.team1}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
        <Button
          variant="contained"
          color="secondary"
          style={{ padding: '30px', width: '70%', marginLeft: '15%', marginTop: '40px' }}
          onClick={() => setOutcome(game.team3)} 
        >
          Draw
        </Button>
      <nav className="links">
        {outcome.length>1 && 
        game.links.map((link) => {
          return (
            <a href={`/predictions/${link.code}`} key={link.code}>
              <li>{link.linkText}</li>
            </a>
          )
        })}
      </nav>
    </>
  )
}
