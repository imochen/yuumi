import { deepClone } from '../src/deepClone';
/**
 * @test {deepClone} 
 */
describe('test deepClone', () => {
  it('test deepClone primitive value.', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('1')).toBe('1');
    expect(deepClone(false)).toBe(false);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });
  it('test deepClone object.', () => {
    const obj = {
      a: 1,
      b: {
        name: 'skel'
      }
    };
    const obj2 = deepClone(obj);
    obj2.b.name = 'animals';
    expect(obj2.b.name).not.toEqual(obj.b.name);
    expect(obj2.b.name).toBe('animals');
    expect(obj.b.name).toBe('skel');
  });
  it('test deepClone array.', () => {
    const arr = [[1], 2, 3];
    const arr2 = deepClone(arr);
    (arr[0] as number[]).push(4);

    expect(arr).not.toEqual(arr2);
    expect(arr).toEqual([[1, 4], 2, 3]);
    expect(arr2).toEqual([[1], 2, 3]);
  });
});
