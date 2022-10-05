import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import gamesArray from '../data/fixtureData'

export default function Predictor() {
  const { code } = useParams()

  const game = gamesArray.find((game) => game.code == code)

  return (
    <>
      <div className="Container">
        <h1 className="team">{game.team1}</h1>
        <img
          src={`${game.image1}`}
        />
        <h1 className="team">{game.team2}</h1>
        <img
          src={`${game.image2}`}
        />
      </div>
      <nav className="links">
        {game.links.map((link) => {
          return (
            <Link 
              to={`/iceage/${link.code}`}
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
