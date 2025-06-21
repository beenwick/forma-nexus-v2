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

// Expansão de detalhes dos serviços com hover
document.querySelectorAll('.toggle-detalhes').forEach(botao => {
  const card = botao.closest('.servico-card');
  const detalhes = card.querySelector('.detalhes-servico');
  let hideTimeout;

  botao.addEventListener('click', function (e) {
    e.preventDefault();

    // Fecha outros cards
    document.querySelectorAll('.detalhes-servico').forEach(outro => {
      if (outro !== detalhes) outro.style.display = 'none';
    });
    document.querySelectorAll('.toggle-detalhes').forEach(btn => {
      if (btn !== this) btn.textContent = 'Ver detalhes';
    });

    if (detalhes.style.display === 'block') {
      detalhes.style.display = 'none';
      this.textContent = 'Ver detalhes';
    } else {
      detalhes.style.display = 'block';
      this.textContent = 'Ocultar detalhes';
    }
  });

  detalhes.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  detalhes.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      detalhes.style.display = 'none';
      botao.textContent = 'Ver detalhes';
    }, 1000);
  });
});