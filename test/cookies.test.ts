import {
  exsit, get, remove, set, values
} from '../src/cookies';

test('values', () => {
  set('a1', '1', { 'Max-Age': 2 });
  expect(values()).toEqual({ a1: '1' });
});

test('set and get', () => {
  set('a2', '1', { 'Max-Age': 2 });
  expect(get('a2')).toEqual('1');
});

test('set with empty options', () => {
  set('a3', '1');
  expect(get('a3')).toEqual('1');
});

test('set with empty options value', () => {
  set('a4', '1', { Path: '', 'Max-Age': 2 });
  expect(get('a4')).toEqual('1');
});

test('get empty value', () => {
  set('a5', '', { 'Max-Age': 2 });
  expect(get('a5')).toEqual('');
});

test('get not exsit', () => {
  expect(get('a6')).toEqual('');
});

test('exsit true', () => {
  set('a7', '', { 'Max-Age': 2 });
  expect(exsit('a7')).toEqual(true);
});

test('exsit', () => {
  expect(exsit('a8')).toEqual(false);
});

test('remove', () => {
  set('a9', '1', { 'Max-Age': 2 });
  remove('a9');
  expect(exsit('a9')).toEqual(false);
});