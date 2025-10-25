let total = 0;
let current = 1;
const totalQuestions = 5;

function nextQuestion(points){
  total += points;

  // Esconde a pergunta atual
  document.getElementById(`q${current}`).style.display = "none";
  current++;

  if(current > totalQuestions){
    showResult();
  } else {
    // Mostra a próxima pergunta
    document.getElementById(`q${current}`).style.display = "block";
  }
}

function showResult(){
  document.getElementById("result").style.display = "block";

  let resultText = "";
  let planLink = "";

  if(total <= 5){
    resultText = "Nível Iniciante 🏓";
    planLink = "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/#pacotes-iniciante";
  } else if(total <= 10){
    resultText = "Nível Intermediário 🧠";
    planLink = "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---intermedirio";
  } else{
    resultText = "Nível Avançado 🚀";
    planLink = "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---avanado";
  }

  document.getElementById("resultText").innerText = resultText;
  document.getElementById("planButton").href = planLink;
}
