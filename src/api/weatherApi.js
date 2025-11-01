import axios from "axios";
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL= "https://api.weatherapi.com/v1";

export const getCurrentWeather=async (city) => {
    const res=await axios.get(`${BASE_URL}/current.json`,{
        params:{key:API_KEY,q:city},
    })
    return res.data;
};

export const getForecastData=async (city, days = 5) => {
    const res=await axios.get(`${BASE_URL}/forecast.json`,{
        params:{key:API_KEY,q:city,days},
    });
    return res.data;
};
