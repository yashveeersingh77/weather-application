import { useState } from 'react'
import axios from 'axios'
import Top from './components/Top'
import Bottom from './components/Bottom'


function App() {

  const[data,setData] = useState({});
  const[location,setLocation] = useState('');
 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a673655d5f4fcd991f88ac843387713e`

  const getLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((Response)=>{
        setData(Response.data)
        console.log(Response.data)
      })
      setLocation('')
    }
   
  }

  function kelvinToCelsius(kelvin) {
   var temperature = kelvin - 273.15;
   return Math.round(temperature *100)/100;
  }


  //variables
  let name=data.name;
  let tempKelvin=data.main ? data.main.temp : null;
  let tempCelcius = kelvinToCelsius(tempKelvin);
  let description = data.weather ? data.weather[0].main : null;
  let getFeelsLike = data.main ? data.main.feels_like :null;
  let feelsLike = kelvinToCelsius(getFeelsLike);
  let windSpeed = data.wind ? data.wind.speed : null;
  let humidity = data.main ? data.main.humidity : null;
 




  return (
    <div className='max-w-3xl h-5/6 m-auto pl-4 pr-4 relative top-10 flex flex-col'>
      <input className='text-base py-3 px-6 rounded-3xl border w-80 text-center mx-36 lg:mx-48 bg-gray-500 placeholder:text-white' type="text" 
        placeholder='Enter Location'
        value={location}
        onKeyDown={getLocation}
        onChange={(Event)=>{setLocation(Event.target.value)}}
      />  
     <Top
     name={name}
     temp={tempCelcius}
     desc = {description}
      />
     <Bottom
     feels={feelsLike}
     winds={windSpeed}
     humidity={humidity}
      />
    </div>
  )
}

export default App
