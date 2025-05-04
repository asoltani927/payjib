// This utility function checks if the current environment is production.
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}