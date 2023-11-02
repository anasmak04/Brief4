const form = document.getElementById('register-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validation du formulaire
  if (fullname === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Veuillez remplir tous les champs');
  } else if (password !== confirmPassword) {
    alert('Les mots de passe ne correspondent pas');
  } else {
    alert('Formulaire soumis avec succès');
    form.reset();
  }
});
