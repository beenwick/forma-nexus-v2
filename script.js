document.querySelectorAll('.navbar .dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;

    // Fecha outros dropdowns abertos
    document.querySelectorAll('.navbar .dropdown-menu').forEach(menu => {
      if (menu !== dropdown) {
        menu.style.display = 'none';
      }
    });

    // Alterna visibilidade do dropdown clicado
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
});

// Fecha dropdown se clicar fora do menu
document.addEventListener('click', function(e) {
  if (!e.target.closest('.navbar .dropdown')) {
    document.querySelectorAll('.navbar .dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
