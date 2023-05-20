import axios from "axios";
/* const axios = require('axios/dist/node/axios.cjs'); */
export default async function getLocation(setLocation){
    const url = "https://ipapi.co/json";
    axios.get(url)
    .then(function (response) {
        setLocation(response.data.country.toLowerCase());
    });

}