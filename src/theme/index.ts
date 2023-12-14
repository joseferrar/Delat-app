export type Colors = {
  primary: string;
  secondary: string;
  background: string;
  danger: string;
  info: string;
  border?: string;
  text: string;
  default: string;
};

const lightColors: Colors = {
  primary: '#6C63FF',
  secondary: '#7f7f7f',
  background: '#efefef',
  danger: '#E21818',
  info: '#fff',
  border: '#fff',
  text: '#000',
  default: '#fff',
};

const darkColors = {
  primary: lightColors.primary,
  secondary: '#7f7f7f',
  background: '#000',
  danger: lightColors.danger,
  info: '#222831',
  text: '#fff',
  border: lightColors.secondary,
  default: '#fff',
};

export {lightColors, darkColors};

// '#BE3144'
