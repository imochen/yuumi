export type ParsedQuery = Record<string, any>;

const REGEXP = {
  SPLIT: /([^?&=]+)=([^&#]*)/g,
  ARRAY_KEY: /\[\]$/,
}

const parse = (query: string): ParsedQuery => {
  const result: ParsedQuery = {};
  query.replace(REGEXP.SPLIT, (m: string, k: string, v: string) => {
    if (REGEXP.ARRAY_KEY.test(k)) {
      const key = k.replace(REGEXP.ARRAY_KEY, '');
      if (!key) return m;
      result[key] = (result[key] || []).concat(decodeURIComponent(v))
    } else {
      result[k] = decodeURIComponent(v);
    }
    return m;
  });
  return result;
}

const stringify = (query: ParsedQuery): string => {
  return Object.keys(query).reduce((acc: string[], cur: string) => {
    const v = query[cur];
    if (Array.isArray(v)) {
      v.forEach(item => {
        acc.push(`${cur}[]=${encodeURIComponent(item)}`);
      });
    } else {
      acc.push(`${cur}=${encodeURIComponent(v)}`);
    }
    return acc;
  }, []).join('&');
}

export default {
  parse,
  stringify,
}