import React from 'react'
import './Reliability.css'
import Principle1 from '../../assets/img/principle-1.svg'
import Principle2 from '../../assets/img/principle-2.svg'
import Principle3 from '../../assets/img/principle-3.svg'


const reliability = (props) => (

    <div className = "reliability">
            <h1 className = "reliability-heading">The End-to-End Reliability Orchestration Engine. Batteries Included.</h1>
            <div className = "reliability-container">

        <div className = "reliability-cont">
            <img src = {Principle1} alt = "Principle"  />
            <h3 className = "reliability-head">Maximize Service Reliability</h3>
            <div className = "reliability-content">
            Data-driven approach to answering the what, how and why of service reliability data
            </div>
      </div>
      <div className = "reliability-cont">
      <img src = {Principle2} alt = "Principle"  />

            <h3 className = "reliability-head">Accelerate Innovation Velocity</h3>
            <div className = "reliability-content">
            Pedal to the metal with new releases. Or not. Use data to guide your decisions.
            </div>
      </div>
      <div className = "reliability-cont">
      <img src = {Principle3} alt = "Principle"  />

            <h3 className = "reliability-head">Deliver Outstanding CX</h3>
            <div className = "reliability-content">
            Measure and improve every touchpoint that impacts customer experiences
            </div>
      </div>
      </div>
    </div>
)

export default reliability;