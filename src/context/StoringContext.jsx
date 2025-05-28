import { createContext, useState, useContext, useEffect } from "react";

export const StroningContext = createContext();

export const StoringContextProvider = ({ children }) => {
  const [asnwers, setAnswers] = useState([]);

  useEffect(() => {
    console.log(asnwers);
  }, [asnwers]);

  return (
    <StroningContext.Provider value={{ asnwers, setAnswers }}>
      {children}
    </StroningContext.Provider>
  );
};
