
import React, {useState} from "react";
import "./Weather.css";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from './WeatherIcon'


export default function Weather(props){
const[city, setCity]=useState(props.defaultCity);
const[weatherData, setWeatherData]=useState({ready: false});
function handleResponse(response){
    console.log(response.data);
    setWeatherData({
     ready:true,
      temperature:  response.data.main.temp,
      humidity:response.data.main.humidity,
      date:new Date(response.data.dt*1000),
      description:response.data.main.weather[0].description,
      icon:response.data.weather[0].icon,
      wind:response.data.wind.speed,
    city:response.data.name});
    

    
    
}
function search(){
    let apiKey="3d19633teeafa6c79049ab3o334f7b44";
    let city="New York";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?
    q=${city}$ appid=${apiKey} &units=metric`;

    axios.get(apiUrl).then(handleResponse);

}


function handleSubmit(event){
    event.preventDefault();
    search();
}
function handeCityChange(event){
    setCity(event.target.value);
}

if(weatherData.ready){
    return(
        <div className='Weather'>
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className='col-9'>
                <input type="search"  className="form-control"placeholder='Enter a city..' autoFocus='on' />
                </div>
                
                <div className='col-3'>
                <input type="submit" value="search" className='btn btn-primary w=100' onChange={handeCityChange}/>
                </div>
                </div>
                </form>
                <WeatherInfo data={weatherData}/>
         
        </div>
            );

    
}
else{
   
    search();
    return  "Loading...";
    
    }

}
