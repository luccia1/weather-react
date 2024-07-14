import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css'
import Weather from './Weather';

function App() {


  return (
    <>
    <div className='app'>
      <div className='container'>
        < Weather />
    
    <footer>
      This projects was coded by <a href="#" targe="_blank">Lucy</a> and is {""} <a href="https://github.com/luccia1/weather-react target=-blank"> open-sourced on Github</a>
    </footer>
    </div>
    </div>
    </>
  )
}

export default App
