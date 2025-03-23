import { formatDistanceToNow, format } from 'date-fns';

export const formatDateToNow = date => {
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatDateAndHours = date => {
  return format(date, 'Pp');
};
