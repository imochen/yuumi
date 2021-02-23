/**
 * 
 * make the function can only be executed once within a specified time
 * @param {Function} func function to throttle
 * @param {Number} wait Time threshold (millisecond)
 * @param {object} options - execute options
 * @param {boolean} options.immediate - execute immediately
 * @param {boolean} options.end - execute last call
 * @returns {Function} wrap function with throttle
 * 
 * @example
 * ```typescript
 * let i = 0
 * let func = throttle(() => { i++ }, 1000);
 * func()
 * // 1
 * sleep(200) 
 * func()
 * // 1
 * sleep(800)
 * func()
 * // 2
 * sleep(500)
 * func()
 * 1 second after
 * // 3
 * 
 * ```
 */
export const throttle = <T extends Function>(func:T, wait:number, {
  immediate = true,
  end = true
}):T => {
  let timeout:NodeJS.Timeout|null;
  let previous = 0;

  return function (...args:any[]) {
    const now = +new Date();
    const remain = wait - (now - previous);

    if (remain < 0) {
      if (previous === 0 && !immediate) {
        previous = now;
        return;
      }

      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      func.call(this, args);
    } else if (!timeout && end) {
      timeout = setTimeout(() => {
        func.call(this, args);
        timeout = null;
      }, wait);
    }
  } as unknown as T;
};