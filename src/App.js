import React, {useState} from "react";
import "./assets/styles/app.css"
import axios from "axios";
import { WiHumidity ,WiStrongWind } from "react-icons/wi";
import {RiTempColdLine} from "react-icons/ri"
import { TbTemperatureCelsius } from "react-icons/tb";

function App() {

const [data , setData] = useState({});
const [location , setLocation] = useState('');  

const key = `24083ecca407a115d248ab958204ab91`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

const searchLocation = (e) => {
  if(e.key === "Enter"){
    axios.get(API_URL)
    .then((res) => {
      setData(res.data)
      console.log(res.data)
    })
    setLocation('');
  }
}
  return (
    <div className="App">
      <div className="form__control container">
        <input value={location} onChange={e => setLocation(e.target.value)} onKeyPress = {searchLocation} type="text" placeholder="Enter the city name"/>
      </div>
      <div className="center__content container">
        <div className="content">
        <div className="content__icon">
            {data.weather ? <img src={data.weather[0].icon} alt={data.name} /> : false}
          </div>
          <div className="city__name">
            <h1>{data.name}</h1>
          </div>
          <div className="city__temp">
            {data.main ? <span>{data.main.temp.toFixed()} C</span> : false}
          </div>
          <div className="city__weather">
            {data.weather ? <span>{data.weather.main}</span> : false}
          </div>
        </div>
      </div>
      <div className="bottom__content container">
        <div className="info-box">
          <WiHumidity color="white" fontSize={30} />
          {data.main ? <p className="numeral-info">{data.main.humidity}%</p> : false}
        </div>
        <div className="info-box">
            <RiTempColdLine color="white" fontSize={24}/>
            {data.main ? <p className="numeral-info">{data.main.feels_like.toFixed()} <TbTemperatureCelsius fontSize={20}/></p> : false}
        </div>
        <div className="info-box">
            <WiStrongWind color="white" size={30} />
            {data.wind ? <p className="numeral-info">{data.wind.speed.toFixed()} m/s</p> : false}
        </div>
      </div>
    </div>
  );
}

export default App;
