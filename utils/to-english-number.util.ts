
export function toEnglishDigits(str: string): string {
  return str
    .replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[\u200C\u200E]/g, ''); // نیم‌فاصله یا کاراکترهای نامرئی
}