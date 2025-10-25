let total = 0;
let current = 1;
const totalQuestions = 5;

function nextQuestion(points){
  total += points;

  // Esconde a pergunta atual
  const currentQuestion = document.getElementById(`q${current}`);
  currentQuestion.classList.remove("active");

  current++;

  if(current > totalQuestions){
    showResult();
  } else {
    // Mostra a próxima pergunta
    const nextQ = document.getElementById(`q${current}`);
    nextQ.classList.add("active");
  }
}

function showResult(){
  document.getElementById("result").style.display = "block";

  let resultText = "";
  let planLink = "";

  if(total <= 5){
    resultText = "Nível Iniciante 🏓";
    planLink = "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---iniciante---dark";
  } else if(total <= 10){
    resultText = "Nível Intermediário 🧠";
    planLink = "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---intermedirio---dark";
  } else{
    resultText = "Nível Avançado 🚀";
    planLink = "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---avanado---dark";
  }

  document.getElementById("resultText").innerText = resultText;
  document.getElementById("planButton").href = planLink;
}
