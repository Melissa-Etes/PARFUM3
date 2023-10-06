const prada = document.getElementById('prada');
const chanel = document.getElementById("chanel");
const milion = document.getElementById("milion");
const mulberry = document.getElementById("mulberry");


 



document.addEventListener("DOMContentLoaded", () => {
  const botõesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");
  const listaDeCompras = document.getElementById("lista-de-compras");
  const totalSpan = document.getElementById("total");
  let total = 0;

  botõesAdicionar.forEach((botão) => {
    botão.addEventListener("click", () => {
      const nome = botão.getAttribute("data-nome");
      const preco = parseFloat(botão.getAttribute("data-preco"));

      const item = document.createElement("li");
      item.innerHTML = `${nome} - $${preco.toFixed(2)}`;
      listaDeCompras.appendChild(item);

      total += preco;
      totalSpan.textContent = total.toFixed(2);
    });
  });
});

