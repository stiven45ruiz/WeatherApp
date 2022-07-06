import React from 'react'
import './Day.css'

const Day = (props) => {
  console.log(props)
  return (
    <li className='day__weather'>
      <img src="https://picsum.photos/80" alt="day" />
      <h3>Humidity{props.day.humidity}</h3>
      <p>{props.day.weather[0].description}</p>
    </li>
  )
}

export {Day}