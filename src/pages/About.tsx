// pages/about.tsx
import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mainPagesStyles from "@/styles/MainPages.module.css";
import { useState } from "react";


export default function About() {
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] = useState(false);
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };


  return (

    <>
      <Head>
        <title>About | CheyneDapp1223 | Next Wagmi Ethers Web3 an more</title>
      </Head>
      <Header
     />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>

          <div className={styles.container}>
            <h1>About Us</h1>
            <div className={styles.content}>
              <p>Welcome to Foxs Friends Dapp, your go-to decentralized application designed with inclusivity in mind. Our platform proudly offers robust support for a wide range of wallets, ensuring accessibility for users across the crypto landscape. With a commitment to innovation, Foxs Friends Dapp takes a leap forward by incorporating multichain compatibility, allowing users to seamlessly engage with various blockchain networks. Rooted in the secure and reliable foundation of WalletConnect v3, our Dapp is built to provide a seamless and user-friendly experience. We understand the importance of adaptability, and thats why Foxs Friends Dapp is positioned as a foundational solution, ensuring a smooth ride into 2024 without any concerns for users utilizing non-supported wallets. Join us in shaping the future of decentralized applications with Foxs Friends Dapp – where accessibility, security, and innovation converge.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
