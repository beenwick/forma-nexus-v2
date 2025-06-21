
// --------- “Ver detalhes” DOS SERVIÇOS ---------
document.querySelectorAll('.toggle-detalhes').forEach(btn => {
  const card     = btn.closest('.servico-card');
  const detalhes = card.querySelector('.detalhes-servico');

  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.detalhes-servico')
      .forEach(d => d.classList.remove('mostrar'));
    document.querySelectorAll('.toggle-detalhes')
      .forEach(b => b.textContent = 'Ver detalhes');

    if (!detalhes.classList.contains('mostrar')) {
      detalhes.classList.add('mostrar');
      btn.textContent = 'Ocultar detalhes';
    }
  });
});
