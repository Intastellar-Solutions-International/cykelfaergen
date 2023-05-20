const { useState, useEffect, useRef } = React;
import "./Footer.css";
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (<>
        <footer>
            &copy; {currentYear} Parkinpeace. All rights reserved.
        </footer>
    </>);
}