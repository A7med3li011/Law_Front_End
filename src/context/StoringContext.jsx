import { createContext, useState, useContext, useEffect } from "react";

export const StoringContext = createContext();

export const StoringContextProvider = ({ children }) => {
  const [asnwers, setAnswers] = useState([]);
  const [updatedAsnwers, setupdatedAsnwers] = useState([]);

  useEffect(() => {
    console.log(updatedAsnwers);
  }, [asnwers, updatedAsnwers]);

  return (
    <StoringContext.Provider
      value={{ asnwers, setAnswers, updatedAsnwers, setupdatedAsnwers }}
    >
      {children}
    </StoringContext.Provider>
  );
};
