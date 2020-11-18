/**
 * ## Queries
 * Parse url query to JSON object or stringify JSON object to url query.
 * 
 * ```javascript
 * import { queries } from '@mochen/yuumi';
 * ```
 * @packageDocumentation
 */

/**
 * @ignore
 */
const REGEXP = {
  SPLIT: /([^?&=]+)=([^&#]*)/g,
  ARRAY_KEY: /\[\]$/,
};

/**
 * Parse url query to JSON object.
 *
 * @param query
 *
 * @example
 * ```typescript
 * interface Query {
 *  u?: string;
 *  x?: string;
 * }
 * const parsedQuery = queries.parse<Query>("u=123");
 * ```
 */
export const parse = <T = Record<string, any>>(query: string): T => {
  const result: Record<string, any> = {};
  query.replace(REGEXP.SPLIT, (m: string, k: string, v: string) => {
    if (REGEXP.ARRAY_KEY.test(k)) {
      const key = k.replace(REGEXP.ARRAY_KEY, '');
      if (!key) return m;
      result[key] = (result[key] || []).concat(decodeURIComponent(v));
    } else {
      result[k] = decodeURIComponent(v);
    }
    return m;
  });
  return result as T;
};

/**
 * Stringify JSON object to url query.
 *
 * @param query JSON object
 *
 * @example
 * ```typescript
 * queries.stringify({
 *   a: '1',
 *   b: '2',
 * });
 * // a=1&b=2
 * ```
 */
export const stringify = (query: Record<string, any>): string => (
  Object.keys(query).reduce((acc: string[], cur: string) => {
    const v = query[cur];
    if (Array.isArray(v)) {
      v.forEach((item) => {
        acc.push(`${cur}[]=${encodeURIComponent(item)}`);
      });
    } else {
      acc.push(`${cur}=${encodeURIComponent(v)}`);
    }
    return acc;
  }, []).join('&')
);