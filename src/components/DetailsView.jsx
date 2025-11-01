import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast } from "../features/weatherSlice";
import TemperatureChart from "../charts/TemperatureChart";
import PrecipitationChart from "../charts/PrecipitationChart";
import WindChart from "../charts/WindChart";

const DetailsView = ({ city, onClose }) => {
  const dispatch = useDispatch();
  const forecast = useSelector((state) => state.weather.forecast[city]);

  useEffect(() => {
    if (!forecast) dispatch(fetchForecast(city));
  }, [city, dispatch]);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{city}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">
            ✕
          </button>
        </div>

        {forecast ? (
          <>
            {/* Forecast icons row */}
            <div className="flex justify-around mb-6">
              {forecast.forecast.forecastday.map((day) => (
                <div key={day.date} className="flex flex-col items-center">
                  <p className="text-sm">{day.date}</p>
                  <img
                    src={`https:${day.day.condition.icon}`}
                    alt={day.day.condition.text}
                    className="w-10 h-10"
                  />
                  <p className="text-xs">{day.day.condition.text}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <TemperatureChart forecastData={forecast} />
              <PrecipitationChart forecastData={forecast} />
              <WindChart forecastData={forecast} />
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">Loading forecast...</p>
        )}
      </div>
    </div>
  );
};

export default DetailsView;
