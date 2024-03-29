import React from 'react'
import { Hour } from '../Hours'
import '../ListDays/ListDays.css'

const ListHours = (props) => {
  return (
    <div className='content__days'>
      <p className='days__text'>En the next few hours</p>

      <section className='days__scroll'>
        <ul className='list__days'>
          {props.hours.map((day, id) => 
          <Hour
          key={id}
          day={day}
          />)}
        </ul>
      </section>
    </div>
  )
}

export {ListHours}