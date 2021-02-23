/**
 * 
 * Execute after the event is triggered for a specified time, if it is triggered again within these n seconds, then re-time
 * @param {Function} func function to debounce
 * @param {Number} wait Time threshold (millisecond)
 * @param {Boolean} immediate execute immediately
 * @returns {Function} wrap function with debounce
 * 
 * @example
 * ```typescript
 * let i = 0
 * let func = debounce(() => { i++ }, 1000, false);
 * for (let j = 0; j < 10; j++) {
 *    func()
 * }
 * setTimeout(console.log, 2000, i) // 1
 * 
 * ```
 */
export const debounce = <T extends Function>(func:T, wait = 1000, immediate = false):T => {
  let timeout:NodeJS.Timeout;

  return function (...arg:[]):void {
    const context = this;
    const args = arg;

    timeout && clearTimeout(timeout);

    if (immediate) { // 是否立即执行func
      const callNow = !timeout;

      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      callNow && func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  } as unknown as T;
};