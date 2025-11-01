import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const PrecipitationChart = ({ forecastData }) => {
  if (!forecastData?.forecast?.forecastday) return null;

  const data = forecastData.forecast.forecastday.map((day) => ({
    date: day.date,
    rain: day.day.totalprecip_mm,
  }));

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">
        Precipitation (Next 5 Days)
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="rain" fill="#38bdf8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrecipitationChart;
