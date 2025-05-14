export function summarizeText(text: string, wordLimit: number = 30): string {
  // Remove extra whitespace and split by spaces
  const words = text.trim().split(/\s+/);
  // Take only up to the word limit
  const summaryWords = words.slice(0, wordLimit);
  // Join them back into a string
  return summaryWords.join(' ') + (words.length > wordLimit ? '...' : '');
}
