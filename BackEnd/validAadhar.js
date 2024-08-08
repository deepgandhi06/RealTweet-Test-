export function isValid_Aadhaar_Number(aadhaar_number) {
  // Regex to check valid Aadhaar number
  const regex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;

  // Return false if aadhaar_number is null or does not match the regex
  return aadhaar_number != null && regex.test(aadhaar_number);
}
