import axios from "axios";
import { useEffect, useState } from "react";
import './searchBar.css';
import WeatherCard from './WeatherCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar=()=>{
    const [city,setCity]=useState("Sasaram");
    const [weather,setWeather]=useState(null);
    const [error,setError]=useState("");
    const fetchWeather= async()=>{
        setError("");
        if(!city){
            setError("Empty city");
            setWeather(null);
            return;
        }
        try{
            const response=await axios.get(`http://localhost:3000/weather?city=${city}`);
            setWeather(response.data);
        }
        catch(err){
            setError("invalid input");
            setWeather(null);
        }
    }
    useEffect(() => {
        fetchWeather(); 
    }, []);
    return(
        <>
            <div className="class-for-input">
                {/* <h2>Weather Application</h2> */}
                <div style={{height:"45px"}}><input className="input-for-city" type="text" value={city} placeholder="Enter city.." onChange={(e)=>setCity(e.target.value)} />
                <button className="button-for-search-city" onClick={fetchWeather}><FontAwesomeIcon icon={faSearch} /></button></div>
                {error && <p style={{color:"red"}}>{error}</p>}
            </div>
               {weather && <WeatherCard weather={weather} />}
        </>
    )
}
export default SearchBar;