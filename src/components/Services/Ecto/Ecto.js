import React from 'react'
import '../Billing/Billing.css'

const billing = (props) => (
    <div className = "billing">
        <div className = "service-title">Find The Perfect EC2 For Any Scenario</div>
        <div className = "billing-container">
            <div className = "billing-left">
            <div className = "billing-first">
                    <div className = "billing-head">EC2 Recommendation</div>
                    <div className = "billing-content"> We analyze EC2s resource utilization
                     (ex. CPU, memory) to give recommendations for right-sizing your instances.</div>


                </div>
                <div className = "billing-first">
                <div className = "billing-head">Utilization Box-plot</div>
                    <div className = "billing-content"> Visualize utilization of 
                    AWS elements, making it easy to identify where your environment
                     is over- or under-provisioned.</div>

                </div>

            </div>
            <div className = "billing-right">


            </div>
        </div>

    </div>
)

export default billing