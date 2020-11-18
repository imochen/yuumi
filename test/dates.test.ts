import { format } from '../src/dates';

test('default', () => {
  const result = format('2020/04/11 13:03:52');
  expect(result).toEqual('2020-04-11 13:03:52');
});

test('with formatStr', () => {
  const result = format('2019/04/11 13:03:52', 'yy*MM(dd  HH.mm.ss.S');
  expect(result).toEqual('19*04(11  13.03.52.0');
});