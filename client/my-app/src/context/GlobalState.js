import { createContext } from "react";

const initialState = [
  {
    topic: "Design",
    text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
    priority: "important",
    completed: true,
    section: "work",
  },
  {
    topic: "Health",
    text: "Go to the gym",
    priority: "important",
    completed: false,
    section: "work",
  },
  {
    topic: "Company",
    text: "Project approve report",
    priority: "important",
    completed: false,
    section: "work",
  },
  {
    topic: "Design",
    text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
    priority: "important",
    completed: true,
    section: "work",
  },
  {
    topic: "Design",
    text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
    priority: "important",
    completed: true,
    section: "work",
  },
  {
    topic: "Design",
    text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
    priority: "important",
    completed: true,
    section: "work",
  },
];

export const Globalcontext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <Globalcontext.Provider value={initialState}>
      {children}
    </Globalcontext.Provider>
  );
};
