import './CurrentWeather.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faMoon, faSun, faWind } from '@fortawesome/free-solid-svg-icons'

const CurrentWeather = (props) => {
  console.log(props.weather, "currentWeacher")

  
  //Convercion de .dt UTC a formato humano
  const ConvertNewDate = (dt)=>{
    const milisecounds = dt * 1000;
    const date = new Date(milisecounds);
    return date;
  }

  const dateToday = ConvertNewDate(props.weather.dt);
  const humanDateFarmatToday = dateToday
  .toLocaleDateString('en-us', {weekday:"long", day:"numeric", month:"long", year:"numeric"});

  //Convercion de .sunrise y .sunset UTC a formato humano
  let sunriseDate = ConvertNewDate(props.weather.sunrise);
  let sunsetDate = ConvertNewDate(props.weather.sunset);

  const humanDateFarmatHours = (dtWithMilisecounds) =>{
    return dtWithMilisecounds.toLocaleTimeString('en-us', {hour:"2-digit", minute:"2-digit"});
  }

  sunriseDate = humanDateFarmatHours(sunriseDate)
  sunsetDate = humanDateFarmatHours(sunsetDate)
  

  return (
    <section className='currentweather'>
      
      <article className='currentweather__details'>
        <h2>{Math.round(props.weather.temp)}<span>C</span></h2>
        <h3>{props.weatherMore.city.name}</h3>
        <h4>{humanDateFarmatToday}</h4>
      </article>
      

      <article className='currentweather__more'>
        <picture className='currentweather__img'>
          <img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="weather" />
        </picture>
        <div className="currentweather__actual">
          {props.weather.weather.map((type)=> <h3 key={type.id}>{type.description}</h3>)}
        </div>
        <ul className="currentweater__stats">
          <li>
            <span className='stats__wind'>
              <FontAwesomeIcon icon={faWind}/>
            </span>
            <span> {(props.weather.wind_speed * 3.6).toFixed(2)}Km/h</span>
          </li>
          <li>
            <span className='stats__humidity'>
              <FontAwesomeIcon icon={faDroplet} />
            </span>
            <span> {props.weather.humidity}%</span>
          </li>
        </ul>

        <ul className="currentweater__stats">
          <li>
            <span className='stats__sunrise'>
              <FontAwesomeIcon icon={faSun} /> 
            </span>
            <span> {sunriseDate}</span>
          </li>
          <li>
            <span className='stats__sunset'>
              <FontAwesomeIcon icon={faMoon} />
            </span>
            <span> {sunsetDate}</span>
          </li>
        </ul>
        
      </article>
    </section>
  )
}

export {CurrentWeather}