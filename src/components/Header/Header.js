const { useState, useEffect, useRef } = React;
const Link = window.ReactRouterDOM.Link;
import { local } from "../../localization/local";

import "./Header.css";

/* localStorage.setItem("region", "da"); */

const region = (localStorage.getItem("region")===null) ? "da" : localStorage.getItem("region");

export default function Header(){

    return (<>
        <header className="main-header">
            <section className="small-topHeader">
                <div className="paymentMethods">
                </div>
                <a className="trustpilot-review" href="https://dk.trustpilot.com/evaluate/cykelfaergen.info" target="_blank">Bedøm os på <img src="https://cdn.trustpilot.net/brand-assets/1.8.0/logo-black.svg" alt="Trustpilot" /></a>
                <div className="operator">
                    Booking via:
                    <img className="operator-logo" src="https://www.cykelfaergen.info/assets/logo/als-turbaade.png" title="Als Turbåde" alt="Als Turbåde" />
                </div>
            </section>
            <section className="header">
                <section className="logo_container">
                    <a>
                        <img src="https://www.cykelfaergen.info/assets/logo/logo.svg" width="88px" height="88px" alt="Cykelfærgen´s Logo" />
                    </a>
                </section>
                <nav className="navigation">
                    <ul>
                        {
                            Object.keys(local[region].navigation).map((key, index) => {
                                return <li key={index}><Link className="" to={local[region].navigation[key].link}>{local[region].navigation[key].name}</Link></li>
                            })
                        }
                    </ul>
                </nav>
            </section>
            <section className="header"></section>
            <div style={{clear: "both"}}></div>
        </header>
    </>);
}