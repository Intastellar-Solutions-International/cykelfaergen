const { useState, useEffect, useRef, useContext } = React;
const NavLink = window.ReactRouterDOM.NavLink;
import { LocationContext } from "../../App";
import { local } from "../../localization/local";

import "./Header.css";

/* localStorage.setItem("region", "da"); */

const region = (localStorage.getItem("region")===null) ? "da" : localStorage.getItem("region");


export default function Header(){
    const [location, setLocation] = useContext(LocationContext);
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
                    <NavLink to="/">
                        <img src="https://www.cykelfaergen.info/assets/logo/logo.svg" width="88px" height="88px" alt="Cykelfærgen´s Logo" />
                    </NavLink>
                </section>
                <nav className="navigation">
                {
                    Object.keys(local[location].navigation).map((key, index) => {
                        return <NavLink to={local[location].navigation[key].link} style={({ isActive }) => ({ 
                                    color: isActive ? 'greenyellow' : 'blue' })}>
                                    {local[location].navigation[key].name}
                                </NavLink>
                    })
                }
                </nav>
            </section>
            <section className="header"></section>
            <div style={{clear: "both"}}></div>
        </header>
    </>);
}