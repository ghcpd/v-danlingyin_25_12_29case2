import { useState } from 'react';

export const useSearch = (initialValue = '') => {
  const [query, setQuery] = useState<string>(initialValue);
  const clear = () => setQuery('');
  return { query, setQuery, clear };
};
