import { ethers } from "ethers";
import { useState } from "react";

export default function Buy({ state }) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const [loading, setLoaing] = useState(false);

  const createNote = async (e) => {
    e.preventDefault();
    const { contract } = state;

    console.log(name, note);
    try {
      setLoaing(true);
      const transaction = await contract.leaveNote(name, note, {
        value: ethers.parseEther("0.000001"),
      });
      await transaction.wait();
      console.log(transaction);
      setLoaing(false);
    } catch (error) {
      setLoaing(false);
      console.log(error);
    }
  };
  if (loading) return <div>Loading...</div>;
  return (
    <form className="flex min-h-[50vh] justify-center items-center flex-col " onSubmit={createNote}>
      <div className="w-[50%] border h-full flex flex-col justify-center items-center shadow-md rounded-md gap-3 py-8">

     <div className="flex justify-center items-center w-full py-4 text-lg font-bold text-[#3D40A2]">

      <h1>Leave Note for me</h1>
     </div>
      <input
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
         className="w-[80%] border rounded text-gray-800 text-sm py-1 px-2 "
      />
      <input
        value={note}
        placeholder="Enter your Message"
        onChange={(e) => setNote(e.target.value)}
        type="text"
        id="note"
        className="w-[80%] border rounded text-gray-800 text-sm py-1 px-2 "
      />
      {
        
      }
      <button className="btn_create w-[80%] border rounded text-white text-sm py-1 px-2 ">Create</button>
      </div>
    </form>
  );
}
