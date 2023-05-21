import axios from "axios";
const { useState, useEffect } = React;

export default function useFetch(updateInterval, url, method, headers, body){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [lastUpdated, setLastUpdated] = useState(Math.floor(Date.now() / 100));
    const [updated, setUpdated] = useState("");
    let id = undefined;

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        fetch(url, { method: method, headers, body, signal: controller.signal } )
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => {
                setLoading(false);
                setUpdated("Now");
                setLastUpdated(Math.floor(Date.now() / 1000));
            });
        
        if(typeof(updateInterval) !=='undefined'){
            const interval1 = setInterval(() => {
                if ((Math.floor(Date.now() / 1000)) - lastUpdated >= 60) {
                    setUpdated(Math.floor(((Math.floor(Date.now() / 1000)) - lastUpdated) / 60) + " minute ago");
                }
            }, 1000);

            id = setInterval(() => {
                fetch(url, { method: method, headers, body, signal: controller.signal } )
                .then((res) => res.json())
                .then(setData)
                .catch(setError)
                .finally(() => {
                    setLoading(false);
                    clearInterval(interval1);
                    setUpdated("Now");
                    setLastUpdated(Math.floor(Date.now() / 1000));
                });
            }, updateInterval * 60 * 1000)
        }

        return () => {
            controller.abort();
            if(typeof(updateInterval) !=='undefined'){
                clearInterval(id);
            }
        }
    }, [url, lastUpdated]);

    return [loading, data, error, updated];
}