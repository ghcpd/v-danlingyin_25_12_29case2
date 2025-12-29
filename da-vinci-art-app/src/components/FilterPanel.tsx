import React, { useState } from 'react';
import styles from '../styles/components/FilterPanel.module.css';
import { Significance } from '../types';

export interface FilterChange {
  searchTerm?: string;
  medium?: string;
  location?: string;
  period?: string;
  significance?: Significance | '';
  yearRange?: { min?: number; max?: number };
  sortField?: 'title' | 'year';
  sortOrder?: 'asc' | 'desc';
}

interface FilterPanelProps {
  onChange: (change: FilterChange) => void;
  onSortChange: (field: 'title' | 'year', order: 'asc' | 'desc') => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onChange, onSortChange }) => {
  const [yearMin, setYearMin] = useState('');
  const [yearMax, setYearMax] = useState('');
  const [sortField, setSortField] = useState<'title' | 'year'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleYearChange = (min: string, max: string) => {
    setYearMin(min);
    setYearMax(max);
    onChange({
      yearRange: {
        min: min ? Number(min) : undefined,
        max: max ? Number(max) : undefined,
      },
    });
  };

  return (
    <div className={styles.panel}>
      <div className={styles.row}>
        <input
          placeholder="Medium"
          onChange={(e) => onChange({ medium: e.target.value })}
        />
        <input
          placeholder="Location"
          onChange={(e) => onChange({ location: e.target.value })}
        />
        <input
          placeholder="Period"
          onChange={(e) => onChange({ period: e.target.value })}
        />
        <select onChange={(e) => onChange({ significance: e.target.value as Significance | '' })}>
          <option value="">Significance</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
      <div className={styles.row}>
        <input
          placeholder="Year from"
          value={yearMin}
          onChange={(e) => handleYearChange(e.target.value, yearMax)}
          type="number"
        />
        <input
          placeholder="Year to"
          value={yearMax}
          onChange={(e) => handleYearChange(yearMin, e.target.value)}
          type="number"
        />
        <select
          value={sortField}
          onChange={(e) => {
            const nextField = e.target.value as 'title' | 'year';
            setSortField(nextField);
            onSortChange(nextField, sortOrder);
          }}
        >
          <option value="title">Sort by title</option>
          <option value="year">Sort by year</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => {
            const nextOrder = e.target.value as 'asc' | 'desc';
            setSortOrder(nextOrder);
            onSortChange(sortField, nextOrder);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={() => handleYearChange('', '')}>Clear Years</button>
        <button type="button" onClick={() => onChange({ medium: '', location: '', period: '', significance: '', yearRange: { min: undefined, max: undefined } })}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
