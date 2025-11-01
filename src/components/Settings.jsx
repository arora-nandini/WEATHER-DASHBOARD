import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../features/settingsSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.settings.unit);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  return (
    <div className="p-4 text-center">
      <button
        onClick={() => dispatch(toggleUnit())}
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 font-medium"
      >
        Switch to {unit === "C" ? "°F" : "°C"}
      </button>
    </div>
  );
};

export default Settings;
