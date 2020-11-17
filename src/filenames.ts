/**
 * ```typescript
 * import { filenames } from '@mochen/yuumi';
 * filenames.parse('a.ZIP'); // ['a', 'ZIP']
 * ```
 * @packageDocumentation
 */

/**
 * Split filename to name and extions.
 * 
 * @param filename 
 * 
 * @example
 * ```typescript
 * filenames.parse('c.7z') // ['c', '7z']
 * filenames.parse('.ignore') // ['.ignore', '']
 * filenames.parse('abc'); // ['abc', '']
 * filenames.parse('1.0.1'); // ['1.0.1', '']
 * filenames.parse('a.ZIP'); // ['a', 'ZIP']
 * ```
 */
export const parse = (filename: string): [string, string] => {
  const matches = filename.split('.');
  if (matches.length === 1) return [filename, ''];
  if (matches.length === 2 && matches[0] === '') return [filename, ''];
  const ext = matches.pop();
  if (/([a-z]|\d[a-z]+)/i.test(ext)) return [matches.join('.'), ext];
  return [filename, ''];
};