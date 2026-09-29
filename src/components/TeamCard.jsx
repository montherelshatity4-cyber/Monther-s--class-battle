import PropTypes from 'prop-types'
import './TeamCard.css'

function TeamCard({ team, onNameChange }) {
  const colorBackgroundMap = {
    red: 'team-color-red',
    blue: 'team-color-blue',
    green: 'team-color-green',
    yellow: 'team-color-yellow',
  }

  return (
    <div className="team-card">
      <div className={`team-color ${colorBackgroundMap[team.color]}`} />
      <h3 className="team-label">{team.colorName} TEAM</h3>
      <input
        type="text"
        className="team-input"
        placeholder="Enter team name"
        value={team.name}
        onChange={(event) => onNameChange(event.target.value)}
        maxLength={50}
      />
    </div>
  )
}

TeamCard.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    colorName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onNameChange: PropTypes.func.isRequired,
}

export default TeamCard
