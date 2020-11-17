/**
 * ```typescript
 * import { bytes } from '@mochen/yuumi';
 * bytes.format(1020) // 1.02 KB
 * ```
 * @packageDocumentation
 */

/**
 * Format bytes to readable string
 * 
 * @param bytes
 * @param decimals 
 * @param kib
 * 
 * @example
 * ```typescript
 * bytes.format(1020) // 1.02 KB
 * bytes.format(1100, 1) // 1.1 KB
 * bytes.format(1024, 2, true) // 1Kib
 * ```
 */
export const format = (bytes: number, decimals = 2, kib = false): string => {
  if (bytes === 0) return '0 Bytes';
  const k = kib ? 1024 : 1000;
  const sizes = kib ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(decimals))} ${sizes[i]}`;
};