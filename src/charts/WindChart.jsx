import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const WindChart = ({ forecastData }) => {
  if (!forecastData?.forecast?.forecastday?.[0]) return null;

  const data = forecastData.forecast.forecastday[0].hour.map((h) => ({
    time: h.time.split(" ")[1],
    speed: h.wind_kph,
    dir: h.wind_dir,
  }));

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Wind Speed (Hourly)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => [
              `${value} kph (${props.payload.dir})`,
              "Wind",
            ]}
          />
          <Legend />
          <Line type="monotone" dataKey="speed" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WindChart;
