import moment from 'moment';

export function formatDate(date) {
  return moment(new Date(date)).format("YYYY/MM/DD");
}
