import * as queries from '../src/queries';

test('without query', () => {
  const result = queries.parse('https://a.com');
  expect(result).toEqual({});
});

test('only have ?', () => {
  const result = queries.parse('https://a.com?');
  expect(result).toEqual({});
});

test('normal query', () => {
  const result = queries.parse('https://a.com?a=1&b=2');
  expect(result).toEqual({ a: '1', b: '2' });
});

test('no value', () => {
  const result = queries.parse('https://a.com?a=1&b');
  expect(result).toEqual({ a: '1' });
});

test('empty value', () => {
  const result = queries.parse('https://a.com?a=1&b=');
  expect(result).toEqual({ a: '1', b: '' });
});

test('mutilp value', () => {
  const result = queries.parse('https://a.com?a=1&b=2&b=3&b=4');
  expect(result).toEqual({ a: '1', b: '4' });
});

test('error array value', () => {
  const result = queries.parse('https://a.com?a=1&[]=2&b[]=3&b[]=4');
  expect(result).toEqual({ a: '1', b: ['3', '4'] });
});

test('array value', () => {
  const result = queries.parse('https://a.com?a=1&b[]=2&b[]=3&b[]=4');
  expect(result).toEqual({ a: '1', b: ['2', '3', '4'] });
});

test('array value empty', () => {
  const result = queries.parse('https://a.com?a=1&b[]=');
  expect(result).toEqual({ a: '1', b: [''] });
});

test('stringify', () => {
  const result = queries.stringify({ a: 1, b: '' });
  expect(result).toEqual('a=1&b=');
});

test('stringify array', () => {
  const result = queries.stringify({ a: '1', b: ['2', '3', '4'] });
  expect(result).toEqual('a=1&b[]=2&b[]=3&b[]=4');
});

test('stringify array empty', () => {
  const result = queries.stringify({ a: '1', b: [''] });
  expect(result).toEqual('a=1&b[]=');
});