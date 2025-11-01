import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favouritesSlice";

const SearchBar=()=>{
    const [city,setCity]=useState("");
    const dispatch=useDispatch();

    const handleAdd=(e)=>{
         e.preventDefault();
         if(city.trim()){
            dispatch(addFavorite(city.trim()));
            setCity("");
         }
    }

return (
    <form onSubmit={handleAdd} className="flex gap-2 justify-center p-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="border rounded-lg p-2 w-60"
      />
      <button className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};
export default SearchBar;