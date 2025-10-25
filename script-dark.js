const quizData = [
  {
    question: "Com que frequência você pratica tênis de mesa?",
    options: [
      { text: "Nunca joguei antes", points: 1 },
      { text: "Jogo de vez em quando", points: 2 },
      { text: "Treino regularmente", points: 3 }
    ]
  },
  {
    question: "Como você avaliaria seu controle de bola?",
    options: [
      { text: "Tenho dificuldade em manter a bola na mesa", points: 1 },
      { text: "Consigo trocar algumas bolas", points: 2 },
      { text: "Tenho ótimo controle e variação", points: 3 }
    ]
  },
  {
    question: "Você conhece as regras oficiais do esporte?",
    options: [
      { text: "Não conheço", points: 1 },
      { text: "Conheço um pouco", points: 2 },
      { text: "Sim, completamente", points: 3 }
    ]
  }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const current = quizData[currentQuestion];
  quiz.innerHTML = `
    <div class="question">${current.question}</div>
    <div class="options">
      ${current.options
        .map(
          (opt, i) =>
            `<button class="option-btn" data-points="${opt.points}">${opt.text}</button>`
        )
        .join("")}
    </div>
  `;
  nextBtn.classList.add("hidden");

  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      score += parseInt(e.target.dataset.points);
      document.querySelectorAll(".option-btn").forEach((b) => (b.disabled = true));
      nextBtn.classList.remove("hidden");
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quiz.innerHTML = "";
  nextBtn.classList.add("hidden");

  let level = "";
  let redirectUrl = "";

  if (score <= 3) {
    level = "Iniciante";
    redirectUrl =
      "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---iniciante---dark";
  } else if (score <= 6) {
    level = "Intermediário";
    redirectUrl =
      "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---intermedirio---dark";
  } else {
    level = "Avançado";
    redirectUrl =
      "https://vestuarioaxel.my.canva.site/spinzonetenisdemesa/pacotes---avanado---dark";
  }

  quiz.innerHTML = `
    <h2>Seu nível é: ${level} 🏓</h2>
    <p>Confira o plano ideal para você clicando abaixo:</p>
    <a href="${redirectUrl}" target="_blank">
      <button id="plan-btn">Ver meu plano</button>
    </a>
  `;
}

loadQuestion();
