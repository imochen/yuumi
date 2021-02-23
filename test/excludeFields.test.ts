import excludeFields from '../src/excludeFields';

/**
 * @test {excludeFields} 
 */
describe('test exculdeFields', () => {
  const obj = {
    name: 'rx',
    age: 17
  };
  it('test normal object and not exculde any field.', () => {
    expect(excludeFields(obj, [])).not.toBe(obj);
    expect(excludeFields(obj, [])).toEqual(obj);
  });

  it('test normal object and normal fields', () => {
    expect(excludeFields(obj, ['name'])).toEqual({ age: 17 });
    expect(excludeFields(obj, ['name', 'age'])).toEqual({});
  });
});
