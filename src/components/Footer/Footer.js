const { useState, useEffect, useRef } = React;
import "./Footer.css";
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (<>
        <footer className="footer">
            &copy; {currentYear} Foreningen Cykelfærgen´s Venner. All rights reserved.
        </footer>
    </>);
}