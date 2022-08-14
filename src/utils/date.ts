import moment, { Moment } from 'moment';

const isSelectedDateValid = (date: Moment) => {
  const current = moment();
  return date.diff(current) >= 0;
};

export default isSelectedDateValid;
