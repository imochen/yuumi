import { autoIncrement, isInRange, randomInt } from '../src/number';
/**
 * @test {autoIncrement}
 */
describe('test autoIncrement', () => {
  it('simple example', () => {
    let i = 0;
    expect(autoIncrement()).toBe(i++);
    expect(autoIncrement()).toBe(i++);
    expect(autoIncrement()).toBe(i++);
    expect(autoIncrement()).toBe(i++);
  });
});
/**
 * @test {isInRange}
 */
describe('test isInRange', () => {
  it('test normal situation', () => {
    expect(isInRange(1, 0, 2)).toBeTruthy();
    expect(isInRange(3, 0, 2)).toBeFalsy();
  });
});

/**
 * @test {randomInt}
 */
describe('test randomInt', () => {
  it('test for normal sepecify min and max', () => {
    Array(100)
      .fill(0)
      .forEach((_v, i) => {
        const num = randomInt(0, i);
        expect(num).toBeLessThanOrEqual(i);
        expect(num).toBeGreaterThanOrEqual(0);
      });
  });
});