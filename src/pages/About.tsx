// pages/about.tsx
import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mainPagesStyles from "@/styles/MainPages.module.css";
import { useState } from "react";

export default function About() {
  const closeAll = () => {};

  return (
    <>
      <Head>
        <title>About | DeFi Derby | Lastman Team </title>
      </Head>
      <Header />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>
          <div className={styles.container}>
            <h1> DeFi Derby Updates </h1>
            <div className={styles.content}>
              <p>
                We are excited to announce a groundbreaking shift in the dynamics of our beloved Defi Derby races. While we continue to host our regular Defi Derby events with additional racehorses purchased from our Defi Derby Dapp, we are introducing enter-to-win races. Winners will not only enjoy their share of the prize pot but also have the chance to receive exclusive NFT giveaways funded directly from the race takings. All proceeds from these races will be reinvested into the entrants, reducing our weekly costs for giveaways.
              </p>
              <br /> {/* Added line break between paragraphs */}
              <p>
                This is just the beginning, and we are dedicated to providing regular updates and enhancements to our Defi Derby Dapp. Join us in shaping the future of decentralized applications with Defi Derby – where accessibility, security, and innovation converge.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
