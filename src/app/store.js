import {configureStore} from "@reduxjs/toolkit"
import weatherReducer from "../features/weatherSlice"
import favoritesReducer from "../features/favouritesSlice"
import settingsReducer from "../features/settingsSlice"

const savedUnit=localStorage.getItem("unit") || "C"; //default celcius

export const store=configureStore({
    reducer:{
        weather:weatherReducer,
        favorites:favoritesReducer,
        settings:settingsReducer,
    },
    preloadedState:{
        settings:{unit:savedUnit},
    }
})