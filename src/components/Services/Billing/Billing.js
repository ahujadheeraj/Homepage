import React from 'react'
import './Billing.css'

const billing = (props) => (
    <div className = "billing bgcolor">
        <div className = "service-title">End the Complication of AWS Billing</div>
        <div className = "billing-container">
            <div className = "billing-left">

            </div>
            <div className = "billing-right">
                <div className = "billing-first">
                    <div className = "billing-head">Total Cost Dashboard</div>
                    <div className = "billing-content"> When using the AWS services cost report, 
                        you can easily see all of your costs at a glance
                        with 4 dashboard widgets.</div>


                </div>
                <div className = "billing-first">
                <div className = "billing-head">AWS Services Cost</div>
                    <div className = "billing-content"> A full breakdown of your AWS Services, 
                    sortable by: Service, Total Cost, Comparison Period Cost, Delta, and 
                    Delta %..</div>

                </div>

            </div>
        </div>

    </div>
)

export default billing