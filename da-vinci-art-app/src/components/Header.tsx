import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/Header.module.css';

const Header: React.FC = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/bio', label: 'Biography' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className={styles.accentDot} aria-hidden />
        Da Vinci Art History
      </div>
      <nav className={styles.nav} aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
