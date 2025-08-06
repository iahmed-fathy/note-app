export default function isContainsArabic(text) {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
}
