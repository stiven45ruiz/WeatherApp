import React from 'react'
import { Day } from '../Day'

import './ListDays.css'

const ListDays = (props) => {
  return (
    
    <div>
      <p className='days__text'>Prediction of the next days</p>

      <section className='days__scroll'>
      <ul className='list__days'>
        {props.days.map((day, id) => 
        <Day 
        key={id}
        day={day}
        />)}
      </ul>
    </section>
    </div>
  )
}

export {ListDays}