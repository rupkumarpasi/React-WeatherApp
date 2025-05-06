import React, { useEffect, useState } from 'react';
import './App.css'


function App() {

const mystyle={
 display: 'flex',
  flexDirection : 'column',
  alignItems : 'center'
}
  const [weatherData, setWeatherData] = useState(null);
  const [city, setcity] = useState("Butwal"); // You can change the city name
  const weatherApi = "696d501ad8e647a89094f16a8790a32b"; // Replace with your actual API key

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => console.error("Error fetching weather:", err));
  }, [city]);
  const capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
   
  }
function onclick(){
  let searchcity = document.getElementById('searchcity').value;
setcity(capitalize(searchcity));
}
  return (
    <>
     <div className="main-weather">

  <h1 className="home">Weather App</h1>
  <input type="text" id="searchcity" placeholder='search by City name'/>
  <button id="getWeather" onClick={onclick} type="button" className="btn btn-success">Get Weather</button>
 
 <div className="citytime">
 <h1 style={{textAlign:'center'}}>{city}</h1>
 <h6 id="datename">{Date()}</h6>
 </div>
  
<img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png" alt="" />
{weatherData ? (
<div className="tempsection" style={mystyle}>
  <h6>{weatherData.main.temp}°C</h6>
  <h6>{weatherData.weather[0].description}</h6>
  <h6> Wind Speed: {weatherData.wind.speed} m/s</h6>
</div>
  ) : (
    <p>Loading weather...</p>
  )}
 </div>
    </>
  )
}

export default App
