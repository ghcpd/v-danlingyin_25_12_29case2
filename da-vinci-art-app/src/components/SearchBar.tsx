import React from 'react';
import styles from '../styles/components/SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Search artworks...'}
        aria-label="Search artworks"
      />
    </div>
  );
};

export default SearchBar;
