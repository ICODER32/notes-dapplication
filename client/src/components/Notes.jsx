import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Notes({ state }) {
  const [notes, setNotes] = useState([]);
  const [showDetailsPopup, setshowDetailsPopup] = useState(false)
  const { contract } = state;

  const getNotes = async () => {
    let notes = await contract.getNotes();
    const Notes = [];
    for (const key in notes) {
      Notes.push(notes[key]);
    }
    setNotes(Notes);
    console.log(Notes);
  };
  useEffect(() => {
    if (contract.target) getNotes();
  }, [contract]);

   // Function to handle opening/closing the popup
   const togglePopup = (index) => {
    if (showDetailsPopup === index) {
      // If the clicked card is already open, close it
      setshowDetailsPopup(null);
    } else {
      // Otherwise, open the clicked card
      setshowDetailsPopup(index);
    }
  };

  return (
    <div>
      <div className="flex gap-4 flex-wrap justify-center items-center my-28">
        {notes.length === 0 ? (
          <h1>No Notes Found</h1>
        ) : (
          <>
            {notes.map((note, index) => (
              <div
                key={index}
                className=" w-[30%] min-h-[200px]  rounded-md card relative p-4"
              >
                <p className="text-white text-sm font-medium line-clamp-6">
                  {notes[index][1]}
                </p>
                <div className="absolute bottom-3 left-2 ">
                  <p className="w-[32px] h-[32px] rounded-full cursor-pointer select-none relative text-white text-sm font-medium border-2 border-white flex justify-center items-center bg-[#B8A0F0]"
                  onClick={()=>togglePopup(index)}>
                    {notes[index][0].slice(0, 1)}
                  </p>
                  {
                    showDetailsPopup  === index  &&    <div className="absolute  bg-white z-[9999] border rounded-md top-9 shadow-md flex items-start flex-col gap-2 min-w-[250px] px-3 py-2">
                    <div>
                      <span className="text-gray-800 text-sm font-medium">
                        Name:
                      </span>
                      <span className="text-xs text-gray-600 font-medium ">
                      {notes[index][0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-800 text-sm font-medium">
                        Account:
                      </span>
                      <span className="text-xs text-gray-600 font-medium ">
                        {notes[index][3]}
                      </span>
                    </div>
                  </div>
                  }
               
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
