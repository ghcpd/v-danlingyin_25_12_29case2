import React from 'react';
import styles from '../styles/components/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Da Vinci Art Explorer</span>
      <div className={styles.links}>
        <a href="https://www.louvre.fr/" target="_blank" rel="noreferrer">Louvre</a>
        <a href="https://www.uffizi.it/en" target="_blank" rel="noreferrer">Uffizi</a>
        <a href="https://www.ambrosiana.it/en/" target="_blank" rel="noreferrer">Ambrosiana</a>
      </div>
    </footer>
  );
};

export default Footer;
