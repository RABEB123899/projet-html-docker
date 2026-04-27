// INSCRIPTION
function validerFormulaire() {
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var email = document.getElementById("email");
var pseudo = document.getElementById("pseudo");
var motdepasse = document.getElementById("motdepasse");
var confirmation = document.getElementById("confirmation");
var telephone = document.getElementById("telephone");
var conditions = document.getElementById("conditions");
var message = "";

  // Vérifications

// Nom
if (nom.value == "") {
  message = message + "- Le nom est obligatoire.\n";
}

// Prénom
if (prenom.value == "") {
  message = message + "- Le prénom est obligatoire.\n";
}

// Email
if (email.value == "") {
  message = message + "- L'email est obligatoire.\n";
} else if (email.value.indexOf("@") == -1) {
  message = message + "- L'email doit contenir le caractère @.\n";
}

// Pseudo
if (pseudo.value == "") {
  message = message + "- Le nom d'utilisateur est obligatoire.\n";
}

// Mot de passe
if (motdepasse.value.length < 6) {
  message = message + "- Le mot de passe doit contenir au moins 6 caractères.\n";
}

// Confirmation mot de passe
if (motdepasse.value != confirmation.value) {
  message = message + "- Les mots de passe ne correspondent pas.\n";
}

// Téléphone
if (telephone.value != "" && telephone.value.length != 8) {
  message = message + "- Le numéro de téléphone doit contenir 8 chiffres.\n";
}

// Conditions générales
if (!conditions.checked) {
  message = message + "- Vous devez accepter les conditions générales.\n";
}

// Affichage des erreurs
if (message != "") {
  alert("Veuillez corriger les erreurs suivantes :\n\n" + message);
  return false;
}


  //CONFIRMATION D'INSCRIPTION

  var recap =
    "Confirmez-vous votre inscription avec les informations suivantes ?\n\n" +
    "Nom : " + nom.value + "\n" +
    "Prénom : " + prenom.value + "\n" +
    "Email : " + email.value + "\n" +
    "Téléphone : " + telephone.value + "\n" +
    "Nom d'utilisateur : " + pseudo.value;

  var ok = confirm(recap);

  if (!ok) {
    return false;
  }

  alert(" Inscription enregistrée avec succès !");
  return true;
}









/* 2) PAGE PRODUITS & COMMANDES  */

var total = 0;
var q1t = 0, q2t = 0, q3t = 0, q4t = 0, q5t = 0, q6t = 0;

function commander1() {
  var q = parseInt(document.getElementById("q1").value);
  if (isNaN(q) || q <= 0 || q > 20) {
    alert("Quantité invalide pour les macarons framboise (1 à 20).");
    return;
  }
  q1t = q1t + q;
  total = total + q * 4;  // 4 DT
  document.getElementById("q1cmd").innerHTML = q1t;
  document.getElementById("total").innerHTML = total;
}

function commander2() {
  var q = parseInt(document.getElementById("q2").value);
  if (isNaN(q) || q <= 0 || q > 20) {
    alert("Quantité invalide pour les macarons pistache (1 à 20).");
    return;
  }
  q2t = q2t + q;
  total = total + q * 4;
  document.getElementById("q2cmd").innerHTML = q2t;
  document.getElementById("total").innerHTML = total;
}

function commander3() {
  var q = parseInt(document.getElementById("q3").value);
  if (isNaN(q) || q <= 0 || q > 20) {
    alert("Quantité invalide pour les macarons chocolat (1 à 20).");
    return;
  }
  q3t = q3t + q;
  total = total + q * 5;
  document.getElementById("q3cmd").innerHTML = q3t;
  document.getElementById("total").innerHTML = total;
}

function commander4() {
  var q = parseInt(document.getElementById("q4").value);
  if (isNaN(q) || q <= 0 || q > 20) {
    alert("Quantité invalide pour les macarons vanille (1 à 20).");
    return;
  }
  q4t = q4t + q;
  total = total + q * 3;
  document.getElementById("q4cmd").innerHTML = q4t;
  document.getElementById("total").innerHTML = total;
}

function commander5() {
  var q = parseInt(document.getElementById("q5").value);
  if (isNaN(q) || q <= 0 || q > 20) {
    alert("Quantité invalide pour les macarons café (1 à 20).");
    return;
  }
  q5t = q5t + q;
  total = total + q * 4;
  document.getElementById("q5cmd").innerHTML = q5t;
  document.getElementById("total").innerHTML = total;
}

function commander6() {
  var q = parseInt(document.getElementById("q6").value);
  if (isNaN(q) || q <= 0 || q > 20) {
    alert("Quantité invalide pour les macarons citron (1 à 20).");
    return;
  }
  q6t = q6t + q;
  total = total + q * 3;
  document.getElementById("q6cmd").innerHTML = q6t;
  document.getElementById("total").innerHTML = total;
}

function reinitialiserCommande() {
  total = 0;
  q1t = q2t = q3t = q4t = q5t = q6t = 0;

  if (document.getElementById("q1")) document.getElementById("q1").value = 0;
  if (document.getElementById("q2")) document.getElementById("q2").value = 0;
  if (document.getElementById("q3")) document.getElementById("q3").value = 0;
  if (document.getElementById("q4")) document.getElementById("q4").value = 0;
  if (document.getElementById("q5")) document.getElementById("q5").value = 0;
  if (document.getElementById("q6")) document.getElementById("q6").value = 0;

  if (document.getElementById("q1cmd")) document.getElementById("q1cmd").innerHTML = "0";
  if (document.getElementById("q2cmd")) document.getElementById("q2cmd").innerHTML = "0";
  if (document.getElementById("q3cmd")) document.getElementById("q3cmd").innerHTML = "0";
  if (document.getElementById("q4cmd")) document.getElementById("q4cmd").innerHTML = "0";
  if (document.getElementById("q5cmd")) document.getElementById("q5cmd").innerHTML = "0";
  if (document.getElementById("q6cmd")) document.getElementById("q6cmd").innerHTML = "0";

  if (document.getElementById("total")) document.getElementById("total").innerHTML = "0";
}