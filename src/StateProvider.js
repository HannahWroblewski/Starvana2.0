import React, { createContext, useContext, useReducer } from "react";

// preps data layer
export const StateContext = createContext();

// wraps the app and provides data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children};
    </StateContext.Provider>
);

// pull info from data layer
export const useStateValue = () => useContext(StateContext);