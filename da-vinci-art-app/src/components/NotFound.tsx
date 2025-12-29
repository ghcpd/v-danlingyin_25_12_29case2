import React from 'react';
import styles from '../styles/components/NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className={`card-surface ${styles.wrapper}`}>
      <h1 className="section-title">Page Not Found</h1>
      <p>We could not find what you were looking for.</p>
      <Link to="/">Return home</Link>
    </div>
  );
};

export default NotFound;
