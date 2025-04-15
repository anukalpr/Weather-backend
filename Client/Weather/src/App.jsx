import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {

  return (
    <>
        <SearchBar/>
        {/* <WeatherCard/> */}
    </>
  )
}

export default App
