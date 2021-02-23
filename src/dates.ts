/**
 * ## Dates
 * Convert date or date string to specified format.
 * 
 * ```typescript
 * import { dates } from '@mochen/yuumi';
 * ```
 * @packageDocumentation
 */

/**
 * Convert date or date string to specified format.
 * 
 * @param param 
 * @param formatStr 
 * 
 * @example
 * ```typescript
 * dates.format('2020-04-11T13:03:52.000Z'); 
 * // 2020-04-11 21:03:52
 * 
 * dates.format('2019-04-11T13:03:52.000Z','yy*MM(dd  HH.mm.ss.S');
 * // 19*04(11  21.03.52.0
 * ```
 */
export const format = (param: string | Date, formatStr: string = 'YYYY-MM-DD hh:mm:ss'): string => {
  let result = formatStr;
  const date = new Date(param);
  const o = {
    'M+': date.getMonth() + 1, // month
    'D+': date.getDate(), // day
    'd+': date.getDate(), // day
    'H+': date.getHours(), // hour
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // seconds
    S: date.getMilliseconds() // miliseconds
  };

  if (/([Yy]+)/.test(result)) {
    result = result.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k: keyof typeof o) => {
    if (new RegExp(`(${k})`).test(result)) {
      result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k].toString()) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  });
  return result;
};
interface DateBetweenResult{
  milliSecond: number 
  second: number 
  minute: number 
  hour: number 
  day: number 
  year: number 
  month: number 
}
/**
 * Calculate time difference.
 * 
 * @param {Date} start 
 * @param {Date} end 
 * 
 * @example
 * ```typescript
 * dates.between(new Date('2020-04-11'), new Date('2019-4-11')); 
 * {
 *   day: 365
 *   hour: 8776
 *   milliSecond: 31593600000
 *   minute: 526560
 *   month: 12 // The difference obtained here is calculated on a monthly basis, that is, 2018-12-31 => 2019-01-01 is also considered a difference of one month
 *   second: 31593600
 *   year: 1 // The difference obtained here is calculated on an annual basis, that is, 2018-12-31 => 2019-01-01 is also considered a difference of one year
 * }
 * 
 * ```
 */
export const between = (start:Date, end:Date):DateBetweenResult => {
  const milliSecond = end.getTime() - start.getTime();
  const second = Math.floor(milliSecond / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  const year = end.getFullYear() - start.getFullYear();
  const month = year * 12 + end.getMonth() - start.getMonth();

  return {
    milliSecond,
    second,
    minute,
    hour,
    day,
    year,
    month,
  };
};