document.addEventListener('DOMContentLoaded', function () {
  const userName = document.getElementById('userName');
  const userAge = document.getElementById('userAge');
  const userGender = document.getElementById('userGender');
  const userEmail = document.getElementById('userEmail');
  const userPhone = document.getElementById('userPhone');

  // Assume you have fetched the user details from the database
  const userDetails = {
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    email: 'john@example.com',
    phone: '+123 456 7890'
  };

  // Update the user details in the dashboard
  userName.textContent = userDetails.name;
  userAge.textContent = userDetails.age;
  userGender.textContent = userDetails.gender;
  userEmail.textContent = userDetails.email;
  userPhone.textContent = userDetails.phone;
});
