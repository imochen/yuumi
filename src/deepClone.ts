/**
 * @ignore
 * @param {any} source 
 */
function isObject(source:any) {
  return (typeof source === 'object' || typeof source === 'function') && source != null;
}
/**
 * 
 * DeepClone
 * @param {<T>} source source value
 * @param {WeakMap} hash hash table
 * @returns {<T>} deepClone object
 * @example
 * ```typescript
 * let obj = {
 *   a: 1,
 *   b: {
 *     name: 'skel'
 *   }
 * }
 * let obj2 = deepClone(obj)
 * 
 * obj2.b.name = 'animals'
 * console.log(obj.b.name)
 * // skel
 * 
 * ```
 */
export const deepClone = <T>(source:T, hash = new WeakMap()):T => {
  if (!isObject(source)) return source;

  if (hash.has(source as unknown as object)) return hash.get(source as unknown as object);

  const target = Array.isArray(source) ? [...source] : { ...source };
  hash.set(source as unknown as object, target);

  (Reflect.ownKeys(target as object) as Array<keyof T>).forEach((key) => { 
    if (isObject(source[key])) {
      (target as any)[key] = deepClone(source[key], hash);
    } else {
      (target as any)[key] = source[key];
    }
  });

  return target as T;
};