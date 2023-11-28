// // components/StakingComponent.tsx
// import { useState } from 'react';
// import wagmi from 'wagmi';
//
// interface StakingComponentProps {
//   contractAddress: string;
//   userAddress: string;
// }
//
// const StakingComponent: React.FC<StakingComponentProps> = ({ contractAddress, userAddress }) => {
//   const [amount, setAmount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);
//
//   const handleDeposit = async () => {
//     try {
//       setLoading(true);
//       // Use Wagmi to interact with the deposit function in your smart contract
//       // Replace 'YourDepositFunction' with the actual deposit function name in your ABI
//       await wagmi.writeContract(contractAddress, 'YourDepositFunction', [amount], userAddress);
//       // You may want to update the staking information after a successful deposit
//       // For example, fetching the updated staking balance
//     } catch (error) {
//       console.error('Deposit error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   const handleWithdraw = async () => {
//     try {
//       setLoading(true);
//       // Use Wagmi to interact with the withdraw function in your smart contract
//       // Replace 'YourWithdrawFunction' with the actual withdraw function name in your ABI
//       await wagmi.writeContract(contractAddress, 'YourWithdrawFunction', [amount], userAddress);
//       // You may want to update the staking information after a successful withdraw
//       // For example, fetching the updated staking balance
//     } catch (error) {
//       console.error('Withdraw error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   const handleClaim = async () => {
//     try {
//       setLoading(true);
//       // Use Wagmi to interact with the claim function in your smart contract
//       // Replace 'YourClaimFunction' with the actual claim function name in your ABI
//       await wagmi.writeContract(contractAddress, 'YourClaimFunction', [], userAddress);
//       // You may want to update the staking information after a successful claim
//       // For example, fetching the updated staking balance
//     } catch (error) {
//       console.error('Claim error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <div>
//       <h2>Staking Component</h2>
//       <div>
//         <label>
//           Amount:
//           <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
//         </label>
//       </div>
//       <div>
//         <button onClick={handleDeposit} disabled={loading}>
//           Deposit
//         </button>
//         <button onClick={handleWithdraw} disabled={loading}>
//           Withdraw
//         </button>
//         <button onClick={handleClaim} disabled={loading}>
//           Claim
//         </button>
//       </div>
//     </div>
//   );
// };
//
// export default StakingComponent;
