import React from 'react'

function Bottom(props) {
  return (
    <div className='flex justify-evenly relative top-96 text-center w-full bg-black-rgba rounded-lg p-3'>
      <div className="feels">
        <p className='text-2xl font-bold'>{props.feels}°C</p>
        <p className='text-2xl font'>Feels like</p>
      </div>

      <div className="windspeed">
        <p className='text-2xl  font-bold'>{props.winds} MPH</p>
        <p className='text-2xl'>Wind Speed</p>
      </div>

      <div className="humidity">
        <p className='text-2xl  font-bold'>{props.humidity}</p>
        <p className='text-2xl'>Humidity</p>
      </div>
    </div>
  )
}

export default Bottom