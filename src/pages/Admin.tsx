import { useState } from "react";
import { useContractRead, useContractWrite } from 'wagmi';
import ContractABI from "@/components/ContractABI";
import mainPagesStyles from "@/styles/Nft.module.css";

const CONTRACT_ADDRESS = '0x162f5DF9FeFB4382Fb9DC9772A37E42565072f99';

export default function AdminPage() {
  const { data: contractData, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'name',
  });

  const { data: symbol, isError: symbolError, isLoading: symbolLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'symbol',
  });

  const { data: cost, isError: costError, isLoading: costLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'cost',
  });

  const { data: totalSupply, isError: totalSupplyError, isLoading: totalSupplyLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'totalSupply',
  });

  const [newCost, setNewCost] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  // Directly call useContractWrite hook inside the component
  const { write: writeContract, isError: writeError } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
  });

  const convertWeiToEther = (wei) => {
    // Placeholder for conversion function, replace with actual implementation
    return wei;
  };

  const costInEther = cost ? convertWeiToEther(cost) : null;

  const handleSetCost = async () => {
    const newCostWei = newCost; // Placeholder, convert this to wei using the appropriate function

    const { isError } = await writeContract('setCost', [newCostWei]);

    if (isError) {
      console.error("Error updating cost");
    }
  };

  const handleTogglePause = async () => {
    const { isError } = await writeContract('togglePause');

    if (isError) {
      console.error("Error toggling pause status");
    } else {
      setIsPaused(!isPaused);
    }
  };

  const displayCurrentState = () => {
    if (isPaused) {
      return <p>Paused</p>;
    } else {
      return (
        <div>
          <p>Current State: {totalSupplyLoading ? 'Loading...' : totalSupplyError ? 'Error' : totalSupply || 'N/A'}</p>
        </div>
      );
    }
  };

  return (
    <div className={`${mainPagesStyles.mainPages}`}>
      <div className={`${mainPagesStyles.wrapper}`}>
        <h1>Admin Panel</h1>
        <h2>Contract Name: {contractData?.toString() || 'N/A'}</h2>
        <p>Symbol: {symbolLoading ? 'Loading...' : symbolError ? 'Error' : symbol || 'N/A'}</p>

        <div>
          <p>Cost: {costLoading ? 'Loading...' : costError ? 'Error' : costInEther || 'N/A'} BNB </p>
          <p>Total Supply: {totalSupplyLoading ? 'Loading...' : totalSupplyError ? 'Error' : totalSupply || 'N/A'}</p>
        </div>

        {/* Set Cost */}
        <div>
          <label>Set Cost (in Ether): </label>
          <input type="text" value={newCost} onChange={(e) => setNewCost(e.target.value)} />
          <button onClick={handleSetCost}>Set Cost</button>
        </div>

        {/* Pause and Display Current State */}
        <div>
          <button onClick={handleTogglePause}>{isPaused ? 'Resume' : 'Pause'}</button>
          {displayCurrentState()}
        </div>
      </div>
    </div>
  );
}
