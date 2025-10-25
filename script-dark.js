let currentQuestion = 1;
let totalScore = 0;
const totalQuestions = 5;

function nextQuestion(score) {
  totalScore += score;

  // Esconde a pergunta atual
  document.getElementById(`q${currentQuestion}`).style.display = "none";
  
  // Vai pra próxima pergunta
  currentQuestion++;

  // Se ainda há perguntas, mostra a próxima
  if (currentQuestion <= totalQuestions) {
    document.getElementById(`q${currentQuestion}`).style.display = "block";
  } else {
    showResult();
  }
}

function showResult() {
  const resultDiv = document.getElementById("result");
  const resultText = document.getElementById("resultText");
  const planButton = document.getElementById("planButton");

  resultDiv.style.display = "block";

  // Define o texto do resultado
  if (totalScore <= 6) {
    resultText.textContent = "🏓 Iniciante — Você está começando! Ideal para aprender fundamentos básicos.";
    planButton.href = "https://example.com/plano-iniciante";
  } else if (totalScore <= 11) {
    resultText.textContent = "⚡ Intermediário — Você já tem boas noções e pode refinar sua técnica.";
    planButton.href = "https://example.com/plano-intermediario";
  } else {
    resultText.textContent = "🔥 Avançado — Seu nível é alto! Você pode se desafiar com treinos de competição.";
    planButton.href = "https://example.com/plano-avancado";
  }
}
