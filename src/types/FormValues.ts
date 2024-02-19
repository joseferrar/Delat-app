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

interface Items {
  item: string;
}

interface ListValues {
  id?: string;
  name: string;
  date: Date;
  items: Items[];
}

export type {RegisterValues, LoginValues, ListValues};
