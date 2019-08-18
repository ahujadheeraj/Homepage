import React from 'react'
import './Billing.css'
import Feature from '../../../assets/img/feature.svg'

const billing = (props) => (
    <div className = "billing bgcolor">
        <div className = "service-title">Join us in putting the response back
            into incident management.</div>
        <div className = "billing-container">
            <div className = "billing-left">
                <img src  = {Feature} alt  = "feature" />

            </div>
            <div className = "billing-right">
                <div className = "billing-first">
                    <div className = "billing-head">Best-in-class Incident Routing</div>
                    <div className = "billing-content"> Everything you need and more for routing
                     alerts with minimal noise. Contextual Alert Suppression, On-call schedules, 
                     DND modes, Scheduled Maintenance - you name it, we have it. Just ask our customers
                    who switched from the status quo. It really is Mac vs PC all over again.</div>


                </div>
                <div className = "billing-first">
                <div className = "billing-head">Built from the ground up for SREs</div>
                    <div className = "billing-content"> Incident management tooling that works for you,
                     not against you, as you practice SRE. Create a blameless culture by reducing the 
                     need for physical war rooms, centralize SLO dashboards, unify internal and external
                      SLIs with our DEX SDKs, and automate knowledge base creation and incident response
                    with Squadcast Actions.</div>

                </div>
                <div className = "billing-first">
                <div className = "billing-head">Complete Operational Transparency</div>
                    <div className = "billing-content">No more back and forth to verify facts during a 
                    rapidly evolving critical incident. Our realtime offering, which comes with free 
                    unlimited read-only stakeholders, ensures your entire org is one page when it matters
                     the most. Bidirectional Slack sync ensures complete transparency while scoping incident
                      conversations to well-defined virtual war rooms.</div>

                </div>
                <div className = "billing-first">
                <div className = "billing-head">AI-native Product Design</div>
                    <div className = "billing-content"> From breakthrough search that offers groundbreaking
                     discoverability for the incident management process, to actionable insights that use AI
                      to give you superpowers. We spent a decade learning how to do AI the right way so that
                       our customers like you would feel we underpromised and over-delivered. Not the other 
                       way around.</div>

                </div>

            </div>
        </div>

    </div>
)

export default billing