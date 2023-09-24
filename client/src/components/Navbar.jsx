import React, { useState } from "react";

export default function Navbar({ account }) {
  const [showAccountPopup, setshowAccountPopup] = useState(false);

  return (
    <div className="h-[10vh] bg-white shadow-lg sticky top-0 z-[9999] flex justify-between text-black items-center px-4">
      <div className="text-base font-bold ">Ibtisam Anwar</div>
      <div className="relative">
        <span
          className="bg-[#B8A0F0] border-2 border-[#230074] w-[32px] select-none h-[32px] text-xs font-bold rounded-full flex justify-center items-center text-white cursor-pointer"
          onClick={() => setshowAccountPopup(!showAccountPopup)}
        >
          ME
        </span>
        {showAccountPopup && (
          <span className="absolute right-0 bg-white z-[9999] border rounded-md top-9 shadow-md flex items-center gap-2 min-w-[250px] px-3 py-2">
            <span className="text-gray-800 text-sm font-medium">
              Connected Account:
            </span>
            <span className="text-xs text-gray-600 font-medium truncate w-[80px]">
              {account}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
// Connected account : {account[0].slice(0, 10)}...
