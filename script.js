{
  const modal = document.getElementById("minha-modal"); // Modal
  const abre = document.getElementById("abrir-modal"); // Botão de abrir
  const fecha = document.getElementsByClassName("fechar-modal")[0]; // Botão de fechar

  // Mostra a modal ao clicar no botão de abrir
  abre.onclick = function () { 
    modal.style.display = "block";
  };

  // Para de mostrar a modal ao clicar no botão de fechar
  fecha.onclick = function () {
    modal.style.display = "none";
  };

  // Função que muda o tema de acordo com o evento de mudança de seleção de botão radio, com base no value='' do name='tema'
  function mudarTema(event) {
    const temaAtual = event.target.value;
    document.documentElement.setAttribute("data-theme", temaAtual);

    // Salva o tema no localStorage
    localStorage.setItem("tema", temaAtual);
  }

  // Adiciona o evento de mudança de seleção de botão radio para cada botão de tema
  const botoesTema = document.querySelectorAll('input[name="tema"]');
  botoesTema.forEach((botao) => {
    botao.addEventListener("change", mudarTema);
  });

  // Recupera o tema salvo no localStorage
  let temaSalvo = localStorage.getItem("tema");

  // Se o tema salvo não for nulo, aplica o tema salvo
  if (temaSalvo === "dark") { // Se o tema salvo for escuro, marca o botão de tema escuro
    document.querySelector('input[name="tema"][value="dark"]').checked = true;
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (temaSalvo === "light") { // Se o tema salvo for claro, marca o botão de tema claro
    document.querySelector('input[name="tema"][value="light"]').checked = true;
    document.documentElement.setAttribute("data-theme", "light");
  } else { // Se não houver tema salvo, marca o botão de tema padrão por padrão
    document.querySelector('input[name="tema"][value="light-dark"]').checked = true;
    document.documentElement.setAttribute("data-theme", "light-dark");
  }
}