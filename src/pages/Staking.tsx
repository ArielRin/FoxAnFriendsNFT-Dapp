// pages/about.tsx
import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mainPagesStyles from "@/styles/MainPages.module.css";

import { useState } from "react";

export default function Contact() {

  const closeAll = () => {
  };


  return (

    <>
      <Head>
        <title>Defi Derby | #1 Raceday AMA on BSC</title>
        <meta name="description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement.  #DefiDerby #BSC #DeFi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lastm3042" />
        <meta name="twitter:title" content="Defi Derby - #1 Raceday AMA on BSC" />
        <meta name="twitter:description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement. #DefiDerby #BSC #DeFi" />
        <meta name="twitter:image" content="https://monumental-donut-cd05a8.netlify.app/twitter.png" /> {/* Add the path to your image or logo */}
        <meta name="twitter:image:alt" content="Defi Derby Logo" />
      </Head>
      <Header
     />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>

          <div className={styles.container}>
            <h1>Stake NFTs and Tokens</h1>
            <div className={styles.content}>
              <p></p>
                <p></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
