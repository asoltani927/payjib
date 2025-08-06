const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
const englishDigits = '0123456789';
const digitPattern = `[${englishDigits}${persianDigits}]`;

export const phoneRegex = /^09[0-9]{9}$/;
export const nationalIDRegex = new RegExp(`^${digitPattern}{10}$`);
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

export const ValidationsRegexs = {
    phoneRegex,
    nationalIDRegex,
    passwordRegex
}

export default ValidationsRegexs;