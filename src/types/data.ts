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
      {id: 21, text: 'Bad'},
      {id: 22, text: 'Ass'},
    ],
  },
  {
    id: 2,
    title: 'Master',
    image: '',
    desc: [
      {id: 23, text: 'JD'},
      {id: 24, text: 'KD'},
    ],
  },
];
