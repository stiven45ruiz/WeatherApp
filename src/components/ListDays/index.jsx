import React from 'react'
import { Day } from '../Day'

import './ListDays.css'

const ListDays = (props) => {
  console.log(props.days)
  return (
    <div className='days__scroll'>
      <ul className='list__days'>
        {props.days.map((day, id) => 
        <Day 
        key={id}
        day={day}
        />)}
      </ul>
    </div>
  )
}

export {ListDays}