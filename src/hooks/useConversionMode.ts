import { useState } from 'react';

export type ConversionMode = 'to-markdown' | 'to-word';

export const useConversionMode = () => {
  const [mode, setMode] = useState<ConversionMode>('to-markdown');

  const toggleMode = () => {
    setMode(prev => prev === 'to-markdown' ? 'to-word' : 'to-markdown');
  };

  return { mode, toggleMode };
};
