const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
const englishDigits = '0123456789';
const digitPattern = `[${englishDigits}${persianDigits}]`;

export const phoneRegex = /^09[0-9]{9}$/;
export const nationalIDRegex = new RegExp(`^${digitPattern}{10}$`);

export const ValidationsRegexs = {
    phoneRegex,
    nationalIDRegex
}

export default ValidationsRegexs;