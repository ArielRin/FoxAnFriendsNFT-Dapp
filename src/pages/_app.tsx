import "@/styles/globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig, useContractRead, useContractWrite } from "wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
	arbitrum,
	avalanche,
	bsc,
	fantom,
	gnosis,
	mainnet,
	optimism,
	polygon,
} from "wagmi/chains";

const chains = [
	bsc
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
	<meta name="description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement.  #DefiDerby #BSC #DeFi" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.ico" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lastm3042" />
	<meta name="twitter:title" content="Defi Derby - #1 Raceday AMA on BSC" />
	<meta name="twitter:description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement. #DefiDerby #BSC #DeFi" />
	<meta name="twitter:image" content="https://monumental-donut-cd05a8.netlify.app/twitter.jpg" /> {/* Add the path to your image or logo */}
	<meta name="twitter:image:alt" content="Defi Derby Logo" />

};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }: AppProps) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(true);
	}, []);
	return (
		<>
			{ready ? (
				<WagmiConfig config={wagmiConfig}>
					<Component {...pageProps} />
				</WagmiConfig>
			) : null}
		</>
	);
}
