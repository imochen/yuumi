import { format } from '../src/bytes';

test('normal', () => {
  expect(format(1010)).toEqual('1.01 KB');
});

test('bytes=0', () => {
  expect(format(0)).toEqual('0 Bytes');
});

test('decimals=1', () => {
  expect(format(1111, 1)).toEqual('1.1 KB');
});

test('kib=true', () => {
  expect(format(1024, 1, true)).toEqual('1 KiB');
});