/**
 * Exclude specified fields in objects, you will get a shallow copy object.
 * 
 * @param {Object} object Source object
 * @param {String[]} fields Fields to exclude
 * @returns {Object} The new object obtained after excluding the specified field
 * 
 * @example
 * ```typescript
 * excludeFields({name: 'zc', age: 18}, ['name']); 
 * {
 *   age: 18
 * }
 * 
 * ```
 */
export default function excludeFields(object:object, fields:string[]):object {
  const set = new Set(fields);
  const tempObj:any = {};
  
  return Object.entries(object).reduce((res, [k, v]) => {
    if (!set.has(k)) {
      res[k] = v;
    }
    
    return res;
  }, tempObj);
}
