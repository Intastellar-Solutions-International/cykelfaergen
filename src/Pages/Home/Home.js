import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Timetable from "../../components/Timetable/Timetable";
const { useState, useEffect, useRef } = React;
export default function Home(){
    return (<>
        <Banner />
        <Timetable />
    </>)
}