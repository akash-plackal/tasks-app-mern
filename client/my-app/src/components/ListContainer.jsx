import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import { BiRadioCircle } from "react-icons/bi";

const ListContainer = ({ section }) => {
  const arr = useContext(Globalcontext);

  const filteredArr = arr.filter((item) => item.section === section);

  return (
    <div className="">
      {filteredArr.map((item, ind) => (
        <div key={ind} className="border-2 border-t-0 h-auto flex">
          <div className="bg-gray-50 w-20 border-r-2 text-3xl flex items-center justify-center text-yellow-400">
            <BiRadioCircle />
          </div>
          <div className="p-8 flex items-center">
            <div className=" w-56 max-h-28 font-roboto line-clamp-4">
              <p className="text-xs text-stone-500">{item.topic}</p>
              <h3 className="text-lg font-medium">{item.text}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListContainer;
