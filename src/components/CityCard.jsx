import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../features/favouritesSlice";
import DetailsView from "./DetailsView";

const CityCard = ({ data }) => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.settings.unit);
  const [showDetails, setShowDetails] = useState(false);

  if (!data) return null;
  const { location, current } = data;

  const temperature = unit === "C" ? current.temp_c : current.temp_f;
  const symbol = unit === "C" ? "°C" : "°F";
  const iconUrl = `https:${current.condition.icon}`;

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition"
      >
        <h2 className="text-xl font-semibold mb-1">{location.name}</h2>
        <div className="flex flex-col items-center">
          <img src={iconUrl} alt={current.condition.text} className="w-16 h-16 object-contain" />
          <p className="text-gray-600 text-sm mt-1">{current.condition.text}</p>
        </div>
        <p className="text-2xl font-bold mt-3">
          {temperature} {symbol}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFavorite(location.name));
          }}
          className="text-red-600 mt-2 text-sm"
        >
          Remove
        </button>
      </div>

      {showDetails && (
        <DetailsView city={location.name} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default CityCard;
