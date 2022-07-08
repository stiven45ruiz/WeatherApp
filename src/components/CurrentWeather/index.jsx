import './CurrentWeather.css'


const CurrentWeather = (props) => {

  console.log(props)
  return (
    <section className='currentWeather'>
      <article className='currentWeather__details'>
        <h2>{Math.round(props.weather.temp)}<span>C</span></h2>
        <h3>{props.weatherMore.city.name}</h3>
        <ul className="currentWeater__stats">
          <li>
            <span>Wind</span>
            <span>{(props.weather.wind_speed * 3.6).toFixed(2)}Km/h</span>
          </li>
          <li>
            <span>Humidity</span>
            <span>{props.weather.humidity}%</span>
          </li>
        </ul>
        
      </article>
      <article className='currentWeather__more'>
        <picture className='currentWeather__img'>
          <img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="weather" />
        </picture>
        <div className="currentWeather__actual">
          {props.weather.weather.map((type)=> <h3 key={type.id}>{type.description}</h3>)}
        </div>
      </article>
    </section>
  )
}

export {CurrentWeather}