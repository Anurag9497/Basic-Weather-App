import React, {useState} from 'react';
import './App.css';
import CityInput from '../CityInput';
import CityWeather from '../CityWeather';

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState("");

  const fetchCityWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6639f695e3fec3d48b82d60b01794e8e`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      if(data.cod!=="404")
        setCityWeather(data);
      else
        alert("Invalid City Name");
    })
  };
  return (
    <>
      <h2 id="myheading" className="display-4 text-center">Weather App</h2><br/>
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/><br/>
      <CityWeather cityWeather={cityWeather}/>
    </>
  );
}

export default App;
