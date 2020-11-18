/**
 * ## Once
 * Return a function only can run noce.
 * 
 * ```typescript
 * import { once } from '@mochen/yuumi';
 * ```
 * @packageDocumentation
 */

/**
 * Return a function only can run noce.
 * 
 * @param callback 
 * @param context 
 * 
 * @example
 * ```typescript
 * const runOnce = once(()=>{
 *  console.log('1');
 * });
 * 
 * runOnce(); // output '1'
 * runOnce(); // do nothing
 * ```
 */
export default function once<T extends Function>(callback: T, context?: Object): T {
  let result: any;
  return ((...args: any[]) => {
    if (callback) {
      result = callback.apply(context || this, args);
      // eslint-disable-next-line no-param-reassign
      callback = null;
    }
    return result;
  }) as unknown as T;
}