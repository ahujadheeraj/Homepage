import React from 'react'
import Billing from './Billing/Billing'
import Ecto from './Ecto/Ecto';
import Reserve from './Reserved/Reserves';
import Autoscale from './Autoscale/Autoscale'
import Idle from './Idle/Idle'


const services = (props) => (
    <div className = "services">
        <Billing />
        <Ecto />


    </div>
)

export default services
