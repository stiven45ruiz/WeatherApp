import React from 'react'
import './Loading.css'

const LoadingSkeleton = () => {
  return (
    <picture className='loading__container'>
      <img src="https://cdn.dribbble.com/users/1003944/screenshots/6941095/1.1.gif" alt="loaging" />
    </picture>
  )
}

export {LoadingSkeleton}
