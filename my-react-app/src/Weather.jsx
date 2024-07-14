
import React, {useState} from "react";
import "./Weather.css";
import axios from 'axios';
import FormattedDate from'./FormattedDate'

export default function Weather(props){

const[weatherData, setWeatherData]=useState({ ready: false});
function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
      temperature:  response.data.main.temp,
      humidity:response.data.main.humidity,
      date:new Date(response.data.dt*1000),
      description:response.data.main.weather[0].description,
      iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=",
      wind:response.data.wind.speed,
    city:response.data.name});
    

    
    
}

if(weatherData.ready){
    return(
        <div className='Weather'>
            <form >
                <div className="row">
                <div className='col-9'>
                <input type="search"  className="form-control"placeholder='Enter a city..' autoFocus='on' />
                </div>
                
                <div className='col-3'>
                <input type="submit" value="search" className='btn btn-primary w=100'/>
                </div>
                </div>
                </form>
           
           <h1>{weatherData.city}</h1> 
           <ul>
            <li>
                <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize"> {weatherData.description}</li>
           </ul>
           <div className="row mt-3">
            <div className='col-6'>
                <div className='clearfix'>
                <img 
                src={weatherData.iconUrl}
                 alt={weatherData.description} className="float-left" />
                 
                 <div className="float-left">
                 <span className='temperature'>{Math.round(weatherData.temperature)}</span> 
                 <span className='unit'>°C</span>
                 </div>
                 </div>
            </div>
            <div className="col-6">
                <ul>
                    
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind}</li>
                </ul>
            </div>
           </div>
        </div>
            );

    
}
else{
    let apiKey="3d19633teeafa6c79049ab3o334f7b44";
    let city="New York";
    let apiUrl=`
https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}$ appid=${apiKey} &units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
    return  "Loading...";
    
    }

}
