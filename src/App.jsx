import { useState } from 'react'
import WelcomeScreen from './screens/WelcomeScreen'
import TeamSetupScreen from './screens/TeamSetupScreen'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome')

  const [teams, setTeams] = useState([
    { id: 'red', color: 'red', colorName: 'RED', name: '' },
    { id: 'blue', color: 'blue', colorName: 'BLUE', name: '' },
    { id: 'green', color: 'green', colorName: 'GREEN', name: '' },
    { id: 'yellow', color: 'yellow', colorName: 'YELLOW', name: '' },
  ])

  const handleStartBattle = () => {
    setCurrentScreen('teamSetup')
  }

  const handleTeamNameChange = (teamId, newName) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, name: newName } : team,
      ),
    )
  }

  const handleLetsBattle = () => {
    console.log('Battle teams ready:', teams)
  }

  return (
    <div className="app-shell">
      {currentScreen === 'welcome' && <WelcomeScreen onStartBattle={handleStartBattle} />}
      {currentScreen === 'teamSetup' && (
        <TeamSetupScreen
          teams={teams}
          onTeamNameChange={handleTeamNameChange}
          onLetsBattle={handleLetsBattle}
        />
      )}
    </div>
  )
}

export default App
