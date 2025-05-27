// utils/passwordStrength.js
function isPasswordStrong(password) {
  if (!password) return false;
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength >= 3; // You can decide the required level
}

module.exports = isPasswordStrong;
