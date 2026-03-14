let attempts = 0;
const maxAttempts = 3;

const sort = [
    {text: `"Aloho___."`,
    answer: "mora",
    options: ["mora", "leviosa", "lumos"]}];

const Citation = sort[Math.floor(Math.random() * sort.length)];

const quoteElement = document.getElementById("quote");
const answerInput = document.getElementById("answer");
const valideBoutton = document.getElementById("valideBoutton");
const resultatDiv = document.getElementById("resultat");
const choixDiv = document.getElementById("choix");
const BoiteQCM = document.getElementById("BoiteQCM");
const BouttonQCM = document.getElementById("BouttonQCM");

quoteElement.textContent = Citation.text;

function normalize(text) {
    return text.toLowerCase().trim();}

valideBoutton.addEventListener("click", checkAnswer);
BouttonQCM.addEventListener("click", checkQCM);

function checkAnswer() {
    const userAnswer = normalize(answerInput.value);

    if (userAnswer === Citation.answer) {
        resultatDiv.innerHTML = " Bravo! Tu es un vrai sorcier!";
        disableGame();}
      else {
        attempts++;
        if (attempts < maxAttempts) {
            resultatDiv.innerHTML =
                "Mauvaise réponse. Il te reste " + (maxAttempts - attempts) + " essai(s).";
        } else {
            resultatDiv.innerHTML =
                "Tu as utilisé tes 3 essais! Choisis parmi les propositions.";
            showQCM();}}
}

function showQCM() {
    choixDiv.classList.remove("hidden");
    answerInput.disabled = true;
    valideBoutton.disabled = true;

    BoiteQCM.innerHTML = "";

    Citation.options.forEach(option => {
        BoiteQCM.innerHTML += `
            <label>
                <input type="radio" name="QCM" value="${option}">
                ${option}
            </label><br> `;});}

function checkQCM() {
  const options = document.getElementsByName("QCM");
  let selected = null;

  for (let option of options) {
      if (option.checked) {
            selected = option.value;}}

  if (!selected) {
        resultatDiv.innerHTML = "Choisis une option!";
        return;}

  if (selected === Citation.answer) {
      resultatDiv.innerHTML = "Correct!";}
    else {resultatDiv.innerHTML =
          `Faux! La réponse était "${Citation.answer}".`;}

  disableGame();}

function disableGame() {
    answerInput.disabled = true;
    valideBoutton.disabled = true;
    BouttonQCM.disabled = true;}