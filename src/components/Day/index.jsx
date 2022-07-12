import React from 'react'
import './Day.css'

const Day = (props) => {
  const milisecounds = props.day.dt * 1000
  const date = new Date(milisecounds)
  const humanDateFarmat = date.toLocaleDateString('en-us', {month:"short", day:"2-digit", weekday:"long"})
  
  return (
    <li className='day__weather'>
      <h3>{humanDateFarmat}</h3>
      <img src={`https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt="day" />
      <h4>Min {Math.round(props.day.temp.min)}° - Max {Math.round(props.day.temp.max)}°</h4>

      <p>Humidity <span>{props.day.humidity}%</span></p>
      <p>{props.day.weather[0].description}</p>
    </li>
  )
}

export {Day}