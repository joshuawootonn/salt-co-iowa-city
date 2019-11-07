import { format, parse } from 'date-fns';

export const formatDate = (date?: string) => {
  if (!date) {
    return 'Present';
  }
  return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMM / yyyy');
};
