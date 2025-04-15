import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh,faDroplet,faWind,faCloud,faGaugeHigh,faSun,faMoon,faClock,faEye} from '@fortawesome/free-solid-svg-icons';
import './weather.css';
const WeatherCard=({weather})=>{
    return(
        < div className='weather-data'>
            <div className="weather-card">
                <div className='weather-city-temp'>
                    <h1>{weather.city}</h1>
                    <p className='weather-temperature'>{weather.temperature?.toFixed(0)}<sup>o</sup></p>   
                </div>
                <div>
                    <img src={`https://openweathermap.org/img/w/${weather.icon}.png`} alt=""  className='weather-icon'/>   
                </div>
            </div>
            
            <div className='weather-card-beside'>
                <div className='weather-card-beside-boxes'>
                    <div>
                        <div className='weather-details'><p>Condition <FontAwesomeIcon icon={faCloud}/> {weather.condition}</p> </div>
                        <div className='weather-details'><p>Humidity <FontAwesomeIcon icon={faDroplet} />  {weather.humidity}%</p></div>
                    </div>
                    <div>
                        <div className='weather-details'><p>Wind Speed <FontAwesomeIcon icon={faWind} /> {weather.windSpeed?.toFixed(0)} mph</p>   </div>
                        <div className='weather-details'><p>Air pressure<FontAwesomeIcon icon={faGaugeHigh} />{weather.Pressure} hpa</p></div>  
                    </div>                  
                    <div>
                        <div className='weather-details'><p>Feels like <FontAwesomeIcon icon={faTemperatureHigh}/>{weather.temperature?.toFixed(0)}<sup>o</sup>C</p> </div>      
                        <div className='weather-details'><p>Sun rise <FontAwesomeIcon icon={faSun} />{weather.sunRise}</p></div>  
                    </div>
                </div>
                <div className='weather-card-beside-boxes'>
                    <div>
                        <div className='weather-details'><p>Sun set <FontAwesomeIcon icon={faMoon}/> {weather.sunSet}</p> </div>
                    </div>
                    <div>
                        <div className='weather-details'><p>Current Time <FontAwesomeIcon icon={faClock} /> {weather.currTime}</p></div>
                    </div>                  
                    <div>
                        <div className='weather-details'><p>Visibility <FontAwesomeIcon icon={faEye}/> <br />{weather.visibility} km</p> </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard;