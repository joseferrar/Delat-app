export type Colors = {
  primary: string;
  secondary: string;
  background: string;
  danger: string;
  info: string;
  border?: string;
  text: string;
  warning: string;
  success: string;
  default: string;
};

const lightColors: Colors = {
  primary: '#6C63FF',
  secondary: '#7f7f7f',
  background: '#efefef',
  warning: '#FFD700',
  danger: '#E21818',
  info: '#fff',
  border: '#fff',
  success: '#65B741',
  text: '#000',
  default: '#fff',
};

const darkColors = {
  primary: lightColors.primary,
  secondary: '#7f7f7f',
  background: '#000',
  danger: lightColors.danger,
  info: '#222831',
  warning: '#FFD700',
  text: '#fff',
  border: lightColors.secondary,
  success: '#65B741',
  default: '#fff',
};

export {lightColors, darkColors};

// '#BE3144'
