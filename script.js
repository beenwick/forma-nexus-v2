document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.dropdown-menu');
  let timeout;

  // Abre/fecha ao clicar
  toggle.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    // Fecha outros dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.style.display = 'none';
    });

    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });

  // Delay para sumir ao sair com o mouse
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    menu.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      menu.style.display = 'none';
    }, 500); // delay de 0.5s
  });
});

// Clicar fora fecha todos
document.addEventListener('click', e => {
  if (!e.target.closest('.navbar .dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});


// ✅ Código funcional para o botão "Ver detalhes"
document.querySelectorAll('.toggle-detalhes').forEach(botao => {
  const card = botao.closest('.servico-card');
  const detalhes = card.querySelector('.detalhes-servico');
  let hideTimeout;

  botao.addEventListener('click', function (e) {
    e.preventDefault();

    // Fecha outros cards abertos
    document.querySelectorAll('.detalhes-servico').forEach(outro => {
      if (outro !== detalhes) outro.style.display = 'none';
    });

    document.querySelectorAll('.toggle-detalhes').forEach(btn => {
      if (btn !== this) btn.textContent = 'Ver detalhes';
    });

    // Alterna exibição do card clicado
    if (detalhes.style.display === 'block') {
      detalhes.style.display = 'none';
      this.textContent = 'Ver detalhes';
    } else {
      detalhes.style.display = 'block';
      this.textContent = 'Ocultar detalhes';
    }
  });

  // Mantém visível se o mouse estiver sobre a caixinha
  detalhes.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  // Fecha a caixinha com 1 segundo de atraso ao sair
  detalhes.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      detalhes.style.display = 'none';
      botao.textContent = 'Ver detalhes';
    }, 1000);
  });
});
