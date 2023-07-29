function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!name.trim()) {
      alert('Please enter your name.');
      return false;
  }

  if (!email.trim()) {
      alert('Please enter your email.');
      return false;
  }

  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  if (!password.trim()) {
      alert('Please enter a password.');
      return false;
  }

  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
  }

  return true;
}

function isValidEmail(email) {
  // A simple email validation pattern, you can use a more comprehensive one if needed.
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
