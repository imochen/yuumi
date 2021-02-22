import once from './once';
/**
 * @ignore
 */
function* autoIncrementGenerator() {
  for (let i = 0; ; i++) {
    yield i;
  }
}
/**
 * @ignore
 * Wrap {@link autoIncrementGenerator} as a function that can only be called once 
 */
const generator = once(autoIncrementGenerator);

/**
 * Get the latest value of the self-increasing sequence
 * @returns {Number} latest value
 * 
 * @example
 * ```typescript
 * number.autoIncrement(); 
 * // 0
 * number.autoIncrement(); 
 * // 1
 * 
 * ```
 */
export function autoIncrement() {
  return generator().next().value;
}
/**
 * Determine whether the number is in the specified range.
 * @param {Number} num Source value
 * @param {Number} min Minimum
 * @param {Number} max Max（not contain）
 * @returns {Boolean} is in the range
 * 
 * @example
 * ```typescript
 * number.isInRange(3,3,5); 
 * // true
 * number.isInRange(5,3,5); 
 * // false
 * 
 * ```
 * 
 */
export function isInRange(num:number, min: number, max: number):boolean {
  return num >= min && num < max;
}
/**
 * Generate a random number
 * @param {Number} min Minimum
 * @param {Number} max Max（not contain）
 * @returns {Number} Random integer in range
 * 
 * @example
 * ```typescript
 * number.randomInt(0, 5); 
 * // 3
 * number.randomInt(0, 5); 
 * // 1
 * 
 * ```
 * 
 */
export function randomInt(min: number, max:number):number {
  return min + Math.floor(Math.random() * (max - min));
}
