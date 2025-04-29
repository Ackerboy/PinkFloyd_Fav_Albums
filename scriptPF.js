document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const versions = button.nextElementSibling;
    versions.classList.toggle('hidden');
  });
});