// Jeu du pendu : données et état
const dictionnaire = ["BRAVOURE", "INTELLIGENCE", "MAGIE", "BAGUETTE", "ECOLE", "SECRET"];
let motSecret = "";
let lettresDevinees = [];
let erreurs = 0;
const erreursMax = 6;

// Initialisation du jeu (réinitialise l'état, cache le pendu, génère le clavier)
function initJeu() {
    erreurs = 0;
    lettresDevinees = [];
    motSecret = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];

    document.querySelectorAll('.partie-pendu').forEach(part => part.style.display = 'none');
    document.getElementById('btn-rejouer').style.display = "none";

    afficherMot();
    creerClavier();
}

// Affiche le mot avec les lettres devinées (affichage principal)
function afficherMot() {
    const affichage = motSecret.split('')
        .map(letter => lettresDevinees.includes(letter) ? letter : "_")
        .join(' ');
    document.getElementById('affichage-mot').innerText = affichage;

    if (!affichage.includes("_")) {
        finJeu("Félicitations ! Vous avez survécu. 🎉", "var(--success)");
    }
}

// Crée le clavier de lettres (interaction utilisateur)
function creerClavier() {
    const clavier = document.getElementById('clavier');
    clavier.innerHTML = "";
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(letter => {
        const btn = document.createElement('button');
        btn.innerText = letter;
        btn.classList.add('touche');
        btn.onclick = () => Devine(letter, btn);
        clavier.appendChild(btn);
    });
}

// bonne lettre /mauvaise lettre > effets
function Devine(letter, button) {
    button.disabled = true;
    if (motSecret.includes(letter)) {
        lettresDevinees.push(letter);
        afficherMot();
    } else {
        erreurs++;
        afficherPartiePendu();
        if (erreurs === erreursMax) {
            finJeu(`Perdu ! Le mot était : ${motSecret}`, "var(--danger)");
        }
    }
}

// Affiche une partie du pendu quand  erreurs
function afficherPartiePendu() {
    const parties = document.querySelectorAll('.partie-pendu');
    if (parties[erreurs - 1]) {
        parties[erreurs - 1].style.display = 'block';
    }
}

// désactive le clavier
function finJeu(msg, color) {
    // Affiche le bouton selon victoire/défaite
    const btn = document.getElementById('btn-rejouer');
    if (msg.includes("Félicitations")) {
        // Victoire : bouton pour avancer
        btn.innerText = "Avancer";
        btn.onclick = () => window.location.href = "etape2.html";
    } else {
        // Défaite : bouton pour rejouer
        btn.innerText = "Rejouer";
        btn.onclick = initJeu;
    }
    btn.style.display = "block";
    document.querySelectorAll('.touche').forEach(btn => btn.disabled = true);
}

// Lancement du pendu
initJeu();
