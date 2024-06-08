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

// perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaConteiner = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:940px)").matches;
  if(media){
  galeriaConteiner.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// animação
if(window.SimpleAnime){
new SimpleAnime();
}