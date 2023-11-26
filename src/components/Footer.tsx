// Footer.tsx
import React from 'react';
import styles from '../styles/Home.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
        Made by Degen Haus Devs 2023
      </a>
    </footer>
  );
};

export default Footer;
