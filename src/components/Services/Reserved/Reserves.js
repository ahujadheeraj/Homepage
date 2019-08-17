import React from 'react'
import '../Billing/Billing.css'

const billing = (props) => (
    <div className = "billing bgcolor">
        <div className = "service-title">Plan Reserved Instances</div>
        <div className = "billing-container">
            <div className = "billing-left">
            
            </div>
            <div className = "billing-right">
            <div className = "billing-first">
                    <div className = "billing-head">We analyze your usage on an hourly basis so you won’t overbuy reservations.</div>
                    <div className = "billing-content"> 
                    <ul>
                        <li>
                        Get recommendation for RI purchases.
                        </li>
                        <li>
                        Visualize historic usage data, with filters, groups and tags.
                        </li>
                        <li>
                        Hourly usage data used to avoid costly overbuying mistakes. Learn More
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default billing