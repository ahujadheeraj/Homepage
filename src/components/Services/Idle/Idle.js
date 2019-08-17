import React from 'react'
import '../Billing/Billing.css'

const billing = (props) => (
    <div className = "billing bgcolor">
        <div className = "service-title">Uncover Idle Resources</div>
        <div className = "billing-container">
            <div className = "billing-left">
            
            </div>
            <div className = "billing-right">
            <div className = "billing-first">
                    <div className = "billing-head">Find unused AWS resources that are costing you money.</div>
                    <div className = "billing-content"> 
                    <ul>
                        <li>
                        See EBS volumes attached to a stopped EC2
                        </li>
                        <li>
                        See EBS volumes not attached to an EC2
                        </li>
                        <li>
                        Receive an emailed report.
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default billing