import React from 'react'
import './Day.css'

const Day = (props) => {
  const milisecounds = props.day.dt * 1000
  const date = new Date(milisecounds)
  const humanDateFarmat = date.toDateString()
  return (
    <li className='day__weather'>
      <h3>{humanDateFarmat}</h3>
      <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt="day" />
      <p>Humidity <span>{props.day.humidity}%</span></p>
      <p>{props.day.weather[0].description}</p>
    </li>
  )
}

export {Day}