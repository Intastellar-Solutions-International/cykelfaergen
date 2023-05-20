const { useState, useEffect, useRef } = React;
import "./Header.css";
export default function Header(){
    return (<>
        <header className="main-header">
            <section className="small-topHeader">
                <div class="paymentMethods">
                </div>
                <a className="trustpilot-review" href="https://dk.trustpilot.com/evaluate/cykelfaergen.info" target="_blank">Bedøm os på <img src="https://cdn.trustpilot.net/brand-assets/1.8.0/logo-black.svg" alt="Trustpilot" /></a>
                <div class="operator">
                    Booking via:
                    <img class="operator-logo" src="https://www.cykelfaergen.info/assets/logo/als-turbaade.png" title="Als Turbåde" alt="Als Turbåde" />
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
                        <li className="lang">
                            <a class="lang_chooser">Sejlplaner <i class="arrow right-arrow"></i></a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="header"></section>
            <div style={{clear: "both"}}></div>
        </header>
    </>);
}