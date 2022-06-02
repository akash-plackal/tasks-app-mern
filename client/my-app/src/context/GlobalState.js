import { createContext, useEffect , useState } from "react";




export const Globalcontext = createContext();

export const GlobalProvider = ({ children }) => {

  const [data, setData ] = useState([])

  useEffect(() => {
      const getData = async () => {
          const res = await fetch('http://localhost:3001/getTasks')
          const json = await res.json()
          return await setData(json)
      }

      getData()
  }, [])

  return (
    <Globalcontext.Provider value={data}>
      {children}
    </Globalcontext.Provider>
  );
};


// const initialState = [
  //   {
  //     topic: "Design",
  //     text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
  //     priority: "important",
  //     completed: true,
  //     section: "work",
  //   },
  //   {
  //     topic: "Health",
  //     text: "Go to the gym",
  //     priority: "important",
  //     completed: false,
  //     section: "work",
  //   },
  //   {
  //     topic: "Company",
  //     text: "Project approve report",
  //     priority: "important",
  //     completed: false,
  //     section: "work",
  //   },
  //   {
  //     topic: "Design",
  //     text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
  //     priority: "important",
  //     completed: true,
  //     section: "work",
  //   },
  //   {
  //     topic: "Design",
  //     text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
  //     priority: "important",
  //     completed: true,
  //     section: "work",
  //   },
  //   {
  //     topic: "Design",
  //     text: "Combing the whole design process , Combing the whole design process Combing the whole design process",
  //     priority: "important",
  //     completed: true,
  //     section: "work",
  //   },
  // ];