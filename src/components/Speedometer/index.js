// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />

        <h2>Speed is {count}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <button onClick={this.onIncrement}>Accelerate</button>
        <button onClick={this.onDecrement}>Apply Brake</button>
      </div>
    )
  }
}

export default Speedometer
