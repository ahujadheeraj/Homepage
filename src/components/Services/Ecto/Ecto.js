import React from 'react'
import '../Billing/Billing.css'
import Logos from '../../../assets/img/logos.png'


const ecto = (props) => (
    <div className = "billing">
        <div className = "billing-container">
            <div className = "billing-left">
            <div className = "billing-first space">
                    <div style = {{
                        display: "block",
                        width: "100%",
                        marginTop: "0",
                        marginMottom: "0",
                        alignSelf: "center",
                        flex: "0 0 auto",
                        fontFamily: "Metropolis,sans-serif",
                        color: "#0d2149",
                        fontSize: "32px",
                        lineHeight: "48px",
                        textAlign: "left",
                        fontWeight:"800"
                    }}>Plays well with your stack.</div>
                    <div className = "billing-content"> Integrate with a wide range of tools
                     and bring all critical incident data into one platform. Custom scripts? Use our API.</div>
                     <button>See All Integrations</button>
                </div>

            </div>
            <div className = "billing-right">
                <img src = {Logos} alt  = "logos"/>


            </div>
        </div>

    </div>
)

export default ecto;