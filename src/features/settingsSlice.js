import { createSlice } from "@reduxjs/toolkit";

const settingsSlice=createSlice({
    name:"settings",
    initialState:{ unit: "C" },
    reducers:{
        toggleUnit:(state)=>{
            state.unit=state.unit === "C" ? "F" : "C";
        }
    }
});
export const {toggleUnit}=settingsSlice.actions;
export default settingsSlice.reducer;