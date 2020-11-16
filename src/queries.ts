/**
 * ```typescript
 * import { queries } from '@mochen/yuumi';
 * // parse
 * const queryObject = queries.parse('a=1&b=2');
 * // stringify
 * const queryString = queries.stringify({a: '1', b: '2'});
 * ```
 * @packageDocumentation
 */

export type ParsedQuery = Record<string, any>;

/**
 * @ignore
 */
const REGEXP = {
  SPLIT: /([^?&=]+)=([^&#]*)/g,
  ARRAY_KEY: /\[\]$/,
}

/**
 * Parse url query to JSON object
 * 
 * @param query The query string
 * 
 * @example
 * ```javascript
 * queries.parse("a=1&b=2");
 * // {
 * //   a: '1',
 * //   b: '2'
 * // }
 * ```
 */
export const parse = (query: string): ParsedQuery => {
  const result: ParsedQuery = {};
  query.replace(REGEXP.SPLIT, (m: string, k: string, v: string) => {
    if (REGEXP.ARRAY_KEY.test(k)) {
      const key = k.replace(REGEXP.ARRAY_KEY, '');
      if (!key) return m;
      result[key] = (result[key] || []).concat(decodeURIComponent(v))
    } else {
      result[k] = decodeURIComponent(v);
    }
    return m;
  });
  return result;
}

/**
 * Stringify JSON object to url query
 * 
 * @param query JSON object
 * 
 * @example
 * ```javascript
 * queries.stringify({
 *   a: '1',
 *   b: '2',
 * });
 * // a=1&b=2
 * ```
 */
export const stringify = (query: ParsedQuery): string => {
  return Object.keys(query).reduce((acc: string[], cur: string) => {
    const v = query[cur];
    if (Array.isArray(v)) {
      v.forEach(item => {
        acc.push(`${cur}[]=${encodeURIComponent(item)}`);
      });
    } else {
      acc.push(`${cur}=${encodeURIComponent(v)}`);
    }
    return acc;
  }, []).join('&');
}