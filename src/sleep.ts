/**
 * Sleep the process for a while
 * 
 * @param {Number} time sleep time
 * @returns {Promise} a sleep promise that will resolve by specified time
 * 
 * @example
 * ```typescript
 * (async () => {
 *    console.log('start')
 *    await sleep(3000)
 *    console.log('end') 
 *    // start
 *    // 3 second after
 *    // end
 * })
 * ```
 */

export const sleep = (time:number):Promise<void> => new Promise((resolve) => setTimeout(resolve, time));