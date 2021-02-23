/**
 * @ignore
 */
const class2type = <any>{};
'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ').forEach((item) => {
  class2type[`[object ${item}]`] = item.toLowerCase();
});
/**
 * Type judgment.
 * 
 * @param {any} source The source value you want to judge
 * @returns {String} source type 
 * 
 * @example
 * ```typescript
 * type({})
 * // object
 * type(1)
 * // number
 * ```
 */
export const type = (source:any):string => (typeof source === 'object' || typeof source === 'function'
  ? class2type[{}.toString.call(source)] || 'object' : typeof source);