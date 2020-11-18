import once from '../src/once';

test('run once', () => {
  let flag = true;
  const onceFunc = once(() => {
    flag = !flag;
    return flag;
  });
  expect(onceFunc()).toEqual(false);
  expect(onceFunc()).toEqual(false);
});

test('with params', () => {
  const onceFunc = once((p1: number, p2: number) => p1 + p2);
  expect(onceFunc(1, 2)).toEqual(3);
});

test('with context', () => {
  const onceFunc = once(function fn(p2: number): number {
    return this.p1 + p2;
  }, { p1: 1 });
  expect(onceFunc(2)).toEqual(3);
});