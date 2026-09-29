import PropTypes from 'prop-types'
import './WelcomeScreen.css'

function WelcomeScreen({ onStartBattle }) {
  return (
    <section className="screen welcome-screen">
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="title-line">MONTHER'S</span>
          <span className="title-line">CLASS BATTLE</span>
        </h1>

        <button className="battle-button battle-button-primary" onClick={onStartBattle}>
          START THE BATTLE
        </button>
      </div>
    </section>
  )
}

WelcomeScreen.propTypes = {
  onStartBattle: PropTypes.func.isRequired,
}

export default WelcomeScreen
