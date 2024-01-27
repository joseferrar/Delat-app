interface RegisterValues {
  username: string;
  email: string;
  photoURL?: string;
  password: string;
  confirmPassword?: string;
}

interface LoginValues {
  email: string;
  password: string;
}

export type {RegisterValues, LoginValues};
