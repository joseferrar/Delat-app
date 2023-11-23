import {useState} from 'react';
import {Colors, darkColors, lightColors} from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = async (): Promise<void> => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    await AsyncStorage.setItem('theme', nextTheme);
  };

  const getTheme = async (): Promise<any> => {
    const store = await AsyncStorage.getItem('theme');
    return store;
  };

  getTheme().then((res: string) => {
    setTheme(res);
  });

  const colors: Colors = theme === 'dark' ? darkColors : lightColors;

  return {colors, currentTheme: theme, toggleTheme};
};

export default useTheme;
