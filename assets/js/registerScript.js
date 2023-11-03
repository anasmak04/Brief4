const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const confimation =document.getElementById('valid-feedback-confirm');
  const inconfimation =document.getElementById('invalid-feedback-confirm');

 
  if (password !== confirmPassword) {
    
    inconfimation.style.display='block';
    confimation.style.display='none';
  } else {
    inconfimation.style.display='none';
    confimation.style.display='block';
  }
});
