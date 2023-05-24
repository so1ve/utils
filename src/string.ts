export function ensurePrefix(prefix: string, str: string) {
  if (!str.startsWith(prefix)) {
    return prefix + str;
  }

  return str;
}

export function ensureSuffix(suffix: string, str: string) {
  if (!str.endsWith(suffix)) {
    return str + suffix;
  }

  return str;
}
