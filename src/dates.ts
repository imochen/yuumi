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