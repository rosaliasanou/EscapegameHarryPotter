// Bouton "Non" qui fuit (interaction utilisateur)
const btnNon = document.getElementById('btn-non');

// Déplace le bouton à une position aléatoire (animation)
function fuiteBouton() {
    const maxX = window.innerWidth - btnNon.offsetWidth;
    const maxY = window.innerHeight - btnNon.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNon.style.left = randomX + 'px';
    btnNon.style.top = randomY + 'px';
}

// Événements du bouton
btnNon.addEventListener('mouseenter', fuiteBouton);

btnNon.addEventListener('click', () => {
    alert("Par la barbe de Merlin ! Vous avez réussi à l'attraper !");
});