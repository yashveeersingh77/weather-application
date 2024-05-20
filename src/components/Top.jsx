import React from 'react'

function Top(props) {
  return (
    <>
        <div className='location'>
            <p className='text-2xl'>{props.name}</p>
        </div>

        <div className="temp">
        <h1 className='text-8xl font-bold'>{props.temp}°C</h1>
        </div>

        <div className="description relative self-end transform -rotate-90"> {/*self end used to fix the white screen errors*/}
            <p className='text-2xl'>{props.desc}</p>
        </div>
    </>
  )
}

export default Top