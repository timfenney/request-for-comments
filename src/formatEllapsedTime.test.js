import formatEllapsedTime from './formatEllapsedTime';
import moment from 'moment';

test('it formats in days', () => {
  const end = moment().toDate();
  const start = moment(end).subtract(2, 'days');
  expect(formatEllapsedTime({start, end})).toBe('2 days ago');
});

test('it formats in minutes', () => {
  const end = moment().toDate();
  const start = moment(end).subtract(5, 'minutes');
  expect(formatEllapsedTime({start, end})).toBe('5 minutes ago');
});

test('it formats in seconds', () => {
  const end = moment().toDate();
  const start = moment(end).clone();
  expect(formatEllapsedTime({start, end})).toBe('a few seconds ago');
})