import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchWeather} from "../features/weatherSlice"
import CityCard from "./CityCard"

const Dashboard=()=>{
    const dispatch=useDispatch()
    const favorites=useSelector((state) => state.favorites.cities);
const weatherData=useSelector((state) => state.weather.data);

useEffect(()=>{
    favorites.forEach((city)=>dispatch(fetchWeather(city)));
//refresh after 60 sec
    const interval=setInterval(() => {
      favorites.forEach((city) => dispatch(fetchWeather(city)));
    }, 60000);
 // 🧹 Clean up interval when component unmounts or favorites change
    return ()=>clearInterval(interval)
},[favorites,dispatch]);

    return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.length === 0 && <p>No favorite cities added yet.</p>}
      {favorites.map((city) => (
        <CityCard key={city} data={weatherData[city]} />
      ))}
    </div>
  );
};

export default Dashboard;