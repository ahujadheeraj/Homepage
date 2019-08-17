import React from 'react'
import './Metric.css'
import Quotes from '../../assets/img/quotes.svg'

const metric = (props) => (
    <div className = "metric">
        <div className = "metric-left">
            <h1 style = {{fontFamily: "Metropolis,sans-serif",
                color: "#0d2149",
                fontSize: "32px",
                fontWeight:"900",
                lineHeight: "0px"}}
                >700,000+</h1>
            <p style = {{color: "rgba(13,33,73,.6)",fontSize:"28px"}}>critical incidents processed</p>
            <div className = "metric-left-content">
            Tools that helps your team get better with every incident
            </div>
        </div>

        <div className = "metric-right">
            
                <img src = {Quotes} alt = "66"/>
            <div className = "metric-right-content">
                Squadcast applies innovative product design to enable true transparency
                and minimize friction in the incident response process. It really is time
                for SREs to have the right tool set that supports them in their mission.
            </div>
            <h4 style = {{fontSize:"18px" ,marginLeft:"27%"}}>Sethu Vinaitheerthan</h4>
            <p style = {{fontSize:"16px",marginLeft:"27%",lineHeight:"0px"}}>Director of Engineering at Zenefits</p>
        </div>        
    </div>
)

export default metric;