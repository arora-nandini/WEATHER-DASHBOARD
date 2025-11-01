import React from "react";
import Dashboard from "./components/Dashboard"
import Settings from "./components/Settings"
import SearchBar from "./components/SearchBar";

function App(){
  return(
    <div className="min-h-screen bg-gray-100 text-center">
            <h1 className="text-3xl font-bold p-4">🌤 Weather Analytics Dashboard</h1>
<Settings/>
<SearchBar/>
<Dashboard/>
    </div>
  )
}
export default App;