import { format } from 'date-fns';

export const dateToString = (date?: number) => {
  if (!date) return;
  return format(date, 'yyyy年M月d日 HH時mm分');
};
