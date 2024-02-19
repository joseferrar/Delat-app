import moment from 'moment';

export const TimeFormat = (unixtime: Date) => {
  const date = moment(unixtime).format('l');
  return date;
};
