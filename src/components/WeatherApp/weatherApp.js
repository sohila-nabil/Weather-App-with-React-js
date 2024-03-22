import React,{useState,useRef} from 'react'
import './weatherApp.css'
import search_icon from "../images/search.png"
import cloud from "../images/cloud.png"
import humidity from "../images/humidity.png"
import wind from "../images/wind.png"


const WeatherApp = () => {
  const inputRef = useRef("cairo")
  const [temp, setTemp] = useState(0)
  const [speed, setSpeed] = useState(0);
  const [humidityy, setHumidityy] = useState(0);
  let api_key = "d8d9274929ac527d64aac8abf1b36f69";
  let val = inputRef.current.value
  const search = async () => {
    let val = inputRef.current.value
    if (val === "") {
      return 0;
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setTemp(data.main.temp);
      setSpeed(data.wind.speed);
      setHumidityy(data.main.humidity);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <input type="text" ref={inputRef} />
        <div className="search_icon">
          <img src={search_icon} alt="search" onClick={() => search()} />
        </div>
      </div>
      <div className="body">
        <div className="cloud">
          <img src={cloud} alt="cloud" />
        </div>
        <div className="info">
          <span className="temp">{temp}</span>
          <span className="c">C</span>
          <h4 className="city">{val}</h4>
        </div>
      </div>
      <div className="footer">
        <div className="humidityDiv">
          <div className="humImage">
            <img src={humidity} alt="hu" />
          </div>
          <div className="data">
            <h4>{humidityy}%</h4>
            <p>Humidity</p>
          </div>
        </div>

        <div className="humidityDiv">
          <div className="humImage">
            <img src={wind} alt="hu" />
          </div>
          <div className="data">
            <h4>{speed}%</h4>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp
