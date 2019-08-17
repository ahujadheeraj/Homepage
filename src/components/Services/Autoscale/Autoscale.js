import React from 'react'
import '../Billing/Billing.css'

const billing = (props) => (
    <div className = "billing">
        <div className = "service-title">Fine Tune Auto-Scaling-Groups</div>
        <div className = "billing-container">
            <div className = "billing-left">
            <div className = "billing-first">
                    <div className = "billing-head">Get tuning
                     suggestions to fit your risk tolerance with cost-savings for each “what-if” scenario.</div>
                    <div className = "billing-content">
                    <ul>
                        <li>
                        See historical ASG instance count with utilization.
                        </li>
                        <li>
                        Receive hourly web-hooks to trigger changes.
                        </li>
                        
                    </ul>
                    </div>
                </div>


            </div>
            <div className = "billing-right">


            </div>
        </div>

    </div>
)

export default billing