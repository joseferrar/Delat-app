interface descObject {
  id: number;
  text: string;
}

interface TestDate {
  id: number;
  title: string;
  image: any;
  desc: descObject[];
}

export const testData: TestDate[] = [
  {
    id: 1,
    title: 'Leo',
    image: '',
    desc: [
      {id: 21, text: 'Vijay'},
      {id: 22, text: 'Lokesh'},
      {id: 23, text: 'Arjun'},
    ],
  },
  {
    id: 2,
    title: 'Call of duty',
    image: '',
    desc: [
      {id: 24, text: 'cold war'},
      {id: 25, text: 'ww2'},
    ],
  },
];
