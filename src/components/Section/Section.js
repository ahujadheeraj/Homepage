import React from 'react'
import './Section.css'

const section = (props) => (
    <div className = "section">
        <div className = "section-cont">
            <h3 className = "section-head"
                >Squadcast On-Premise</h3>
            <div className = "section-content">
            You can run Squadcast in AWS, Azure, GCP or in your own environment. 
            Setup takes 30 minutes, and we'll do it for you.     
            </div>
        <button>Contact Us</button>       

        </div>
        <div className = "section-cont">
           
                <h3 className = "section-head">
                Squadcast Cloud
                </h3>
            
            <div className = "section-content">
            Our hosted solution provides a zero-friction experience to setup. 
            You can try all features for 14 days, and pay only for what you use.
            </div>
            <button>Try Now</button>       

      </div>
    </div>
)

export default section;