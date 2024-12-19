import React from "react";

function Chatuser() {
  return (
    <>
      <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-slate-700 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl"> sahil raj</h1>
          <span className="text-sm">online</span>
        </div>
      </div>
    </>
  );
}

export default Chatuser;
