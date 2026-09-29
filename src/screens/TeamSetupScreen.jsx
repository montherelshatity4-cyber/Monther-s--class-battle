import PropTypes from 'prop-types'
import './TeamSetupScreen.css'
import TeamCard from '../components/TeamCard'

function TeamSetupScreen({ teams, onTeamNameChange, onLetsBattle }) {
  return (
    <section className="screen team-setup-screen">
      <div className="setup-content">
        <h2 className="setup-title">CHOOSE YOUR TEAMS</h2>

        <div className="teams-grid">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              onNameChange={(newName) => onTeamNameChange(team.id, newName)}
            />
          ))}
        </div>

        <button className="battle-button battle-button-secondary" onClick={onLetsBattle}>
          LET'S BATTLE
        </button>
      </div>
    </section>
  )
}

TeamSetupScreen.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      colorName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onTeamNameChange: PropTypes.func.isRequired,
  onLetsBattle: PropTypes.func.isRequired,
}

export default TeamSetupScreen
