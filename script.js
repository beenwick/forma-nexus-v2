// --------- “Ver detalhes” DOS SERVIÇOS ---------
document.querySelectorAll('.toggle-detalhes').forEach(btn => {
  const card = btn.closest('.servico-card');
  const detalhes = card?.querySelector('.detalhes-servico');

  if (!card || !detalhes) return; // se não encontrar, ignora

  btn.addEventListener('click', e => {
    e.preventDefault();

    // Fecha todos os balões abertos
    document.querySelectorAll('.detalhes-servico.mostrar').forEach(el => {
      el.classList.remove('mostrar');
    });

    // Reseta todos os botões para 'Ver detalhes'
    document.querySelectorAll('.toggle-detalhes').forEach(b => {
      b.textContent = 'Ver detalhes';
    });

    // Abre o atual se ainda não estiver visível
    if (!detalhes.classList.contains('mostrar')) {
      detalhes.classList.add('mostrar');
      btn.textContent = 'Ocultar detalhes';
    }
  });
});


// --------- ESCONDER MENU AO ROLAR ---------
let ultimoScroll = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollAtual = window.scrollY;

  if (scrollAtual > ultimoScroll && scrollAtual > 100) {
    navbar.classList.add("oculto");
  } else {
    navbar.classList.remove("oculto");
  }

  ultimoScroll = scrollAtual;
});
