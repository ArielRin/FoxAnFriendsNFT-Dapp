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
        <title>Defi Derby | #1 Raceday AMA on BSC</title>
        <meta name="description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement.  #DefiDerby #BSC #DeFi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lastm3042" />
        <meta name="twitter:title" content="Defi Derby - #1 Raceday AMA on BSC" />
        <meta name="twitter:description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement. #DefiDerby #BSC #DeFi" />
        <meta name="twitter:image" content="https://monumental-donut-cd05a8.netlify.app/twitter.jpg" /> {/* Add the path to your image or logo */}
        <meta name="twitter:image:alt" content="Defi Derby Logo" />
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
              <br /> {/* Added line break between paragraphs */}
              <p>
              If you would like to have your favorite project be invited to one of our free amas, please reach out to our team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
