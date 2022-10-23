import React from "react";
import { createContext, useState } from "react";

const FavouriteRecipiecontext = createContext();

export function FavouriteRecipieProvider({ children }) {
  const [items, setItems] = useState([]);

  const addRecipieFavourites = (newrecipie) => {
    setItems((previousstate) => [...previousstate, newrecipie]);
  };

  return (
    <FavouriteRecipiecontext.Provider value={{ items, addRecipieFavourites }}>
      {children}
    </FavouriteRecipiecontext.Provider>
  );
}

export default FavouriteRecipiecontext;
