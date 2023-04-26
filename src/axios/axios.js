import axios from "axios";

const base_Url = "https://bounce-countries.onrender.com";

async function findCountry (nameCountry){
    console.log(nameCountry);
    const promise = await axios.get(`${base_Url}/countries/${nameCountry}`);
    return promise;
}

export { findCountry };