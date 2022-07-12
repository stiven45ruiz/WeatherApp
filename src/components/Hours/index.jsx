import React from 'react'

const Hour = (props) => {
  const milisecounds = props.day.dt * 1000
  const date = new Date(milisecounds)
  const humanDateFarmat = date.toLocaleDateString('en-us', {month:"short", day:"numeric", hour:"2-digit" ,minute:"2-digit"})

  return (
    <li className='day__weather'>
      <h3>{humanDateFarmat}</h3>
      <img src={`https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt="day" />
      <h4>{props.day.temp.toFixed(1)}°</h4>
      <p>Humidity <span>{props.day.humidity}%</span></p>
      <p>{props.day.weather[0].description}</p>
    </li>
  )
}

export {Hour}