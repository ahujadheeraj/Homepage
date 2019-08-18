import React from 'react'
import './Accelerated.css'
import Cisco from '../../assets/img/cisco.png'
import Oracle from '../../assets/img/oracle.png'
import Nvidia from '../../assets/img/nvidia.png'
import Mongo from '../../assets/img/mongo.png'
import Lightspeed from '../../assets/img/lightspeed.jpg'


const acclerated = (props) => (
    <div className = "accelerated">
        <h1 style = {{fontSize:"37px",fontWeight:"800",padding:"0px",margin:"0"}}>Accelerated by</h1>
        <div className = "line">
        <div className = "company">
            <img src = {Cisco} alt = "Cisco" width="90px" />
            <img src = {Oracle} alt = "Oracle" width="160px"/>
            <img src = {Nvidia} alt = "Nvidia" width="180px" />
            <img src = {Mongo} alt = "Mongo" width="180px" />
            <img src = {Lightspeed} alt = "Lightspeed" width="80px" />
        </div>
        </div>
    </div>
)

export default acclerated;
