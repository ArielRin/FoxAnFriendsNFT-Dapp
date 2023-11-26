// pages/about.tsx

import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mainPagesStyles from "@/styles/MainPages.module.css";


export default function About() {
  const closeAll = () => {
     setIsNetworkSwitchHighlighted(false);
     setIsConnectHighlighted(false);
   };
  return (

    <>
      <Head>
        <title>Stake Tokens | CheyneDapp1223 | Next Wagmi Ethers Web3 an more</title>
      </Head>
      <Header
     />

           <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
             <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>

               <div className={styles.container}>
                 <h1>NFT Minting and Collections</h1>
                 <div className={styles.content}>
                   <p>Mint now</p>
                     <p></p>
                 </div>
               </div>
             </div>
           </main>
    </>
  );
}


//
// <div className={styles.container}>
// <StakingComponent
// />
