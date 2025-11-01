import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TemperatureChart = ({ forecastData }) => {
  const unit = useSelector((state) => state.settings.unit);
  if (!forecastData?.forecast?.forecastday?.[0]) return null;

  const data = forecastData.forecast.forecastday[0].hour.map((h) => ({
    time: h.time.split(" ")[1],
    temp: unit === "C" ? h.temp_c : h.temp_f,
  }));

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">
        Temperature Trend (Hourly)
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
