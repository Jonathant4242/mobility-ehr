const password = document.querySelector('#account-password');
const passwordConfirm = document.querySelector('#account-password-confirm');
const confirmationHint = document.querySelector('#password-confirm-hint');
const defaultHint = confirmationHint.textContent.trim();

// Browser feedback only; the server must repeat validation before saving.
function validatePasswordConfirmation() {
  const mismatch =
    passwordConfirm.value !== '' && passwordConfirm.value !== password.value;
  const message = mismatch ? 'Passwords must match.' : '';

  passwordConfirm.setCustomValidity(message);
  passwordConfirm.setAttribute('aria-invalid', String(mismatch));
  confirmationHint.textContent = message || defaultHint;
}

password.addEventListener('input', validatePasswordConfirmation);
passwordConfirm.addEventListener('input', validatePasswordConfirmation);
