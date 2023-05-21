import "./Timetable.css";
import { local } from "../../localization/local";
import { LocationContext } from "../../App";
import useFetch from "../../classes/Fetch";
const { useState, useEffect, useRef, useContext } = React;

export default function Timetable(...props){
    const { lang } = useContext(LocationContext);
    const url = "https://apis.cykelfaergen.info/timetable/api.php";
    const headers = {

    };
    const [loading, data, error, updated] = useFetch(30, url, "POST", headers, JSON.stringify({
        ferry: 1
    }));

    /* if(!loading) console.log(data); */

    return (
        <>
            <article className="timetable">
                {
                    (loading) ? "loading..." : 
                        <>
                            <h2>{data.routeName}</h2>
                            <p>{data.ferryName}</p>
                            <div>
                                {
                                    Object.keys(data.harbor).map((key, index) => {
                                        console.log(data.harbor, key);
                                    })
                                }
                            </div>
                        </>
                }
            </article> 
        </>
    )
}

/* <p>{data.harbor["departure"].name}</p>
                                                <p>{data.harbor["departure"].times}</p> */