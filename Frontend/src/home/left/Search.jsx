import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
 <div className="h-[10vh]">
     <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
          <label className="input-[1px] rounded-lg flex items-center gap-2 w-[80%]">
            <input type="text" className="grow outline-none bg-slate-600" placeholder="Search" />
          </label>
          <button>
          <IoSearch  className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
          </button>
        </div>
      </form>
    </div>
 </div>
  );
}
