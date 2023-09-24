import { useState, useEffect } from "react";
import abi from "./contract/contract.json";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import NotesSection from "./components/NotesSection";

function App() {
  const [state, setState] = useState({
    provider: "",
    signer: "",
    contract: "",
  });
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("Not connected");

  const init = async () => {
    try {
      const contractAddress = process.env.REACT_APP_WALLET_ADDRESS;
      const ABI = abi.abi;
      const ethereum = window.ethereum;
      if (!ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      window.ethereum.on("accountsChanged", (accounts) => {
        window.location.reload();
      });
      setAccount(account);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ABI, signer);
      setState({ provider, signer, contract });
      setConnected(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <Navbar account={account} />
      <Hero />
      <NotesSection />
      <Buy state={state} />
      <Notes state={state} />
    </div>
  );
}

export default App;
