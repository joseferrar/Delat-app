import {useState} from 'react';
import {darkColors, lightColors} from '../theme';

const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (): void => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const colors = theme === 'dark' ? darkColors : lightColors;

  return {colors, currentTheme: theme, toggleTheme};
};

export default useTheme;
