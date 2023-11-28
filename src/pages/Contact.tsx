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
        <title>Contact | CheyneDapp1223 | Next Wagmi Ethers Web3 an more</title>
      </Head>
      <Header
     />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>

          <div className={styles.container}>
            <h1>Contacts and Social Links</h1>
            <div className={styles.content}>
              <p>Find us on all great socials</p>
                <p></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
