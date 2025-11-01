import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecastData } from "../api/weatherApi";

const CACHE_EXPIRY_MS = 60000; // 60 seconds

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { getState }) => {
    const { timestamps } = getState().weather;
    const lastFetch = timestamps[city];
    const now = Date.now();

    if (lastFetch && now - lastFetch < CACHE_EXPIRY_MS) {
      return { cached: true, city };
    }

    const data = await getCurrentWeather(city);
    return { cached: false, data };
  }
);

export const fetchForecast = createAsyncThunk("weather/fetchForecast", async (city) => {
  const data = await getForecastData(city, 5);
  return data;
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: {}, forecast: {}, timestamps: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => { state.loading = true; })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload.cached) {
          const city = action.payload.data.location.name;
          state.data[city] = action.payload.data;
          state.timestamps[city] = Date.now();
        }
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        const city = action.payload.location.name;
        state.forecast[city] = action.payload;
      });
  },
});

export default weatherSlice.reducer;
