type LightColors = {
  primary: string;
  secondary: string;
  background: string;
  border: string;
  text: string;
  default: string;
};

const lightColors: LightColors = {
  primary: '#6C63FF',
  secondary: '#7f7f7f',
  background: '#efefef',
  border: '#303030',
  text: '#000',
  default: '#fff',
};

const darkColors = {
  primary: lightColors.primary,
  secondary: '#7f7f7f',
  background: '#101010',
  border: '#b0b0b0',
  text: '#fff',
  default: '#fff',
};

export {lightColors, darkColors};
