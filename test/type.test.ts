import { type } from '../src/type';

/**
 * @test {type}
 */
describe('test sleep', () => {
  it('simple example', () => {
    expect(type({})).toBe('object');
    expect(type(1)).toBe('number');
    expect(type('1')).toBe('string');
    expect(type(null)).toBe('null');
    expect(type(false)).toBe('boolean');
    expect(type(() => {})).toBe('function');
    expect(type(() => {})).toBe('function');
    expect(type([])).toBe('array');
    expect(type(new Date())).toBe('date');
    expect(type(/a/g)).toBe('regexp');
    expect(type(new Error())).toBe('error');
    expect(type(undefined)).toBe('undefined');
  });
});