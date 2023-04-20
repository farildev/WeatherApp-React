import React, {useState} from "react";
import "./assets/styles/app.css"
import axios from "axios";
import { WiHumidity ,WiStrongWind } from "react-icons/wi";
import {RiTempColdLine} from "react-icons/ri"
import Loading from "./components/Loading";

function App() {

const [data , setData] = useState({});
const [location , setLocation] = useState('');  
const [loading , setLoading] = useState(false);

const key = `24083ecca407a115d248ab958204ab91`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

const searchLocation = (e) => {
  if(e.key === "Enter"){
    setLoading(true)
    axios.get(API_URL)
    .then((res) => {
      setData(res.data)
      setLoading(false)
    })
    setLocation('');
  }
}
  return (
    <div className="App">
      {
        loading ? <Loading /> : false
      }
      <div className="form__control container">
        <input value={location} onChange={e => setLocation(e.target.value)} onKeyPress = {searchLocation} type="text" placeholder="Enter the city name"/>
      </div>
      <div className="center__content container">
        <div className="content">
          <div className="content__name">
            <h1>{data.name}</h1>
          </div>
          <div className="content__temp">
            {data.main ? <span>{data.main.temp.toFixed()}°C</span> : false}
          </div>
          {
            data.weather ? <div className="content__weather">
            <span className="title">{data.weather[0].main} -</span> 
            <span className="description">{data.weather[0].description}</span>
          </div> : false
          }
          <div className="content__footer">
            <div className="bottom content__max">
              <h5>Max Temp</h5>
                {data.main ? <span>{data.main.temp_max.toFixed()}°C</span> : false}
            </div>
            <div className="bottom content__min">
              <h5>Min Temp</h5>
            {data.main ? <span>{data.main.temp_min.toFixed()}°C</span> : false}
            </div>
            <div className="bottom content__pressure">
              <h5>Pressure</h5>
            {data.main ? <span>{data.main.pressure} kPa</span> : false}
            </div>
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
            {data.main ? <p className="numeral-info">{data.main.feels_like.toFixed()} °C</p> : false}
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
