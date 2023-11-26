// components/Header.tsx
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css"; // Adjust the path based on your project structure

interface HeaderProps {
  isConnectHighlighted: boolean;
  isNetworkSwitchHighlighted: boolean;
}

const Header: React.FC<HeaderProps> = ({ isConnectHighlighted, isNetworkSwitchHighlighted }) => {
  const [networkSwitchHighlighted, setNetworkSwitchHighlighted] = useState<boolean>(false);
  const [connectHighlighted, setConnectHighlighted] = useState<boolean>(false);

  const closeAll = () => {
    setNetworkSwitchHighlighted(false);
    setConnectHighlighted(false);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.backdrop}
        style={{
          opacity: connectHighlighted || networkSwitchHighlighted ? 1 : 0,
        }}
      />
      <Link href="/" passHref> {/* Wrap the logo container with Link */}
              <div className={styles.logoContainer} onClick={closeAll}>
                <Image
                  src="/roundedLogo.png"
                  alt="CheyneDapp Logo"
                  height={48}
                  width={48}
                />
                <Image
                  src="/logofox2.gif"
                  alt="CheyneDapp Logo"
                  height={40}
                  width={290}
                />
              </div>
            </Link>


      <div className={`${styles.buttons} ${styles.rightButtons}`}>

        <div onClick={closeAll}>
          {/* Use standard JSX syntax for custom elements */}
          <w3m-button />
        </div>
      </div>

      <div className={styles.buttons}>
        <div onClick={closeAll}>
          <Link href="/About" passHref>
            <div className={styles.navLink}>About</div>
          </Link>
        </div>
        <div onClick={closeAll}>
          <Link href="/NFT" passHref>
            <div className={styles.navLink}>NFTs</div>
          </Link>
        </div>
        <div onClick={closeAll}>
          <Link href="/Tokens" passHref>
            <div className={styles.navLink}>Tokens</div>
          </Link>
        </div>
        <div onClick={closeAll}>
          <Link href="/Staking" passHref>
            <div className={styles.navLink}>Staking</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
