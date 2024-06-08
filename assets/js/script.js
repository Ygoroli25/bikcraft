// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativar itens do orçamentos
const paramentos = new URLSearchParams(location.search);

function ativarProduto(paramento) {
  const elemento = document.getElementById(paramento);
  if (elemento) {
    elemento.checked = true;
  }
}

paramentos.forEach(ativarProduto);
