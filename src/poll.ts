/**
 * ## Poll
 * Repeat run function until return true.
 * 
 * ```typescript
 * import { poll } from '@mochen/yuumi';
 * ```
 * @packageDocumentation
 */
type Func = () => boolean | Promise<boolean>;

interface RunOptions {
  timeout?: number;
  interval?: number;
}

/**
 * poll with fixed time interval
 * 
 * @param func 
 * @param options 
 * 
 * @example
 * ```typescript
 * poll.run(()=>{
 *   return document.querySelector('#a') !== null;
 * }).then(()=>{
 *   // function return true
 * }).catch(()=>{
 *   // until timeout function return false
 * })
 * ```
 */
export const run = (func: Func, options: RunOptions = { timeout: 2000, interval: 100 }): Promise<void> => {
  const { timeout = 2000, interval = 100 } = options;
  const end = Date.now() + timeout;
  return new Promise((resolve, reject) => {
    async function polling() {
      const result = await func();
      if (result) {
        resolve();
        return;
      }
      if (Date.now() >= end) {
        reject();
        return;
      }
      setTimeout(polling, interval);
    }
    polling();
  });
};