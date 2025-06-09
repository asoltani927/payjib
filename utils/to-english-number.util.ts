
export const toEnglishDigits = (str) => {
  if (!str) return "";
  if (typeof str !== "string") str = str.toString();
  return str.replace(/[۰-۹]/g, (w) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(w)));
};
