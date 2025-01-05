import React from 'react'
import { useState } from 'react'

const App = () => {
  let teams = ["MT","GT","CSK","RCB","SRH","LSG","PK","KKR"]

  const [team, setteam] = useState(null)
  const selectTeam = ()=>{
    setteam(teams[Math.floor(Math.random()*teams.length)])
    console.log(team);
    
  }
  return (
    <div className='main'>
      <h2>Get IPL Winner of 2025</h2>
      <button onClick={selectTeam}>click here</button>
      <h1>{team}</h1>
      
    </div>
  )
}

export default App
