import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import gamesArray from '../data/fixtureData'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'

export default function Predictor() {
  const { code } = useParams()

  const game = gamesArray.find((game) => game.code == code)

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Card sx={{ width: 450, margin: '30px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`${game.image2}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {game.team2}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <h1 style = {{position: 'absolute', top: '150px'}}>VS</h1>
              <Card sx={{ width: 450, margin: '30px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`${game.image1}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {game.team1}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              <nav className="links">
        {game.links.map((link) => {
          return (
            <Link 
              to={`/predictions/${link.code}`}
              key={(link.code)}
            >
              <li>{link.linkText}</li>
            </Link>
          )
        })}
      </nav> 
    </>
  )
}
