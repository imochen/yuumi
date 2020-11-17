import { parse } from '../src/filenames';

test('a.x.c.7z', () => {
  const [name, ext] = parse('a.x.c.7z');
  expect(name).toEqual('a.x.c');
  expect(ext).toEqual('7z');
});

test('.ignore', () => {
  const [name, ext] = parse('.ignore');
  expect(name).toEqual('.ignore');
  expect(ext).toEqual('');
});

test('.ignore.txt', () => {
  const [name, ext] = parse('.ignore.txt');
  expect(name).toEqual('.ignore');
  expect(ext).toEqual('txt');
});

test('4.0.0', () => {
  const [name, ext] = parse('4.0.0');
  expect(name).toEqual('4.0.0');
  expect(ext).toEqual('');
});

test('4.0.ZIP', () => {
  const [name, ext] = parse('4.0.ZIP');
  expect(name).toEqual('4.0');
  expect(ext).toEqual('ZIP');
});

test('4.0.7XYZ', () => {
  const [name, ext] = parse('4.0.7XYZ');
  expect(name).toEqual('4.0');
  expect(ext).toEqual('7XYZ');
});

test('12334', () => {
  const [name, ext] = parse('12334');
  expect(name).toEqual('12334');
  expect(ext).toEqual('');
});