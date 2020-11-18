/**
 * ## Cookies
 * Operation cookies in broswer.
 * 
 * ```typescript
 * import { cookies } from '@mochen/yuumi';
 * ```
 * @packageDocumentation
 */

export interface Options {
  /**
   * The maximum lifetime of the cookie as an HTTP-date timestamp.
   * 
   * If unspecified, the cookie becomes a session cookie.A session finishes when the client shuts down, and session cookies will be removed.
   */
  Expires?: Date,
  /**
   * Number of seconds until the cookie expires. 
   * A zero or negative number will expire the cookie immediately. 
   * If both Expires and Max-Age are set, Max-Age has precedence.
   */
  'Max-Age'?: number; 
  /**
   * Host to which the cookie will be sent
   * - If omitted, defaults to the host of the current document URL, not including subdomains.
   * - Contrary to earlier specifications, leading dots in domain names (.example.com) are ignored.
   * - Multiple host/domain values are not allowed, but if a domain is specified, then subdomains are always included.
   */
  Domain?: string;
  /**
   * A path that must exist in the requested URL, or the browser won't send the Cookie header.
   */
  Path?: string;
}

/**
 * Set a cookie
 * @param name 
 * @param value 
 * @param options 
 * 
 * @example
 * ```typescript
 * cookies.set("key", "value", {
 *   'Max-Age': 60,
 *   Path: '/',
 *   Domain: 'mozilla.org'
 * })
 * ```
 */
export const set = (name: string, value: string, options: Options = {}): void => {
  window.document.cookie = [`${name}=${encodeURIComponent(value)}`, ...Object.keys(options).map((key: keyof Options) => {
    if (options[key]) return `${key}=${options[key]}`;
    return '';
  })].join(';');
};

/**
 * Get a cookie value
 * @param name
 * 
 * @example
 * ```typescript
 * const value = cookies.get('u');
 * ```
 */
export const get = (name: string): string => {
  const cookies = window.document.cookie.replace(/\s/g, '').split(';');
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return '';
};

/**
 * Get all cookies
 * @param name
 * 
 * @example
 * ```typescript
 * interface CookieValues {
 *  u?: string;
 *  a?: string;
 * }
 * const cookieJSON = cookies.values<CookieValues>();
 * ```
 */

export const values = <T = Record<string, any>>(): T => {
  const cookies = window.document.cookie.replace(/\s/g, '').split(';');
  const result: Record<string, any> = {};
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    result[key] = decodeURIComponent(value);
  }
  return result as T;
};

/**
 * Check cookie exsit
 * @param name
 * 
 * @example
 * ```typescript
 * const exsits = cookies.exsit("key");
 * ```
 */
export const exsit = (name: string): boolean => {
  const cookies = window.document.cookie.replace(/\s/g, '').split(';');
  for (let i = 0; i < cookies.length; i++) {
    const [key] = cookies[i].split('=');
    if (key === name) return true;
  }
  return false;
};

/**
 * Remove a key
 * 
 * @param name
 * 
 * @example
 * ```typescript
 * cookies.remove("key")
 * ```
 */
export const remove = (name: string): void => {
  set(name, '', { 'Max-Age': -1 });
};