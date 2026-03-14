document.getElementById("Boutton").addEventListener("click", calculerResultat);

function calculerResultat() {
  const form = document.getElementById("quizForm");
  const resultatDiv = document.getElementById("resultat");

  const formData = new FormData(form);
  const scores = {
        Gryffondor: 0,
        Serdaigle: 0,
        Poufsouffle: 0,
        Serpentard: 0
    };

  for (let valeur of formData.values()) {
        scores[valeur]++;
    }

  let maxMaison = null;
  let maxScore = 0;

  for (let maison in scores) {
      if (scores[maison] > maxScore) {
            maxScore = scores[maison];
            maxMaison = maison;
        }
    }

  if (formData.get("q1") && formData.get("q2") && formData.get("q3") && formData.get("q4") && formData.get("q5")) {

 let lien = "";

  if (maxMaison === "Gryffondor") {
        lien = "indexG.html";}
  else if (maxMaison === "Serdaigle") {
        lien = "indexR.html";}
  else if (maxMaison === "Poufsouffle") {
        lien = "indexP.html";} 
  else if (maxMaison === "Serpentard") {
        lien = "indexS.html";}

  resultatDiv.innerHTML =
 "Tu appartiens à la maison: " + maxMaison + "!<br>" + "<a href='" + lien + "'>Continue dans la salle commune!</a>";

} else {
 resultatDiv.textContent = "Réponds à toutes les questions premièrement !";
}
}
