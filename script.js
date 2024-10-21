// Gestion du menu déroulant
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
menuIcon.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Gestion de la section MA SITUATION
const maSituationLink = document.getElementById('ma-situation-link');
const situationSection = document.getElementById('situation-section');
const backArrow = document.getElementById('back-arrow');

// Masquer le menu et afficher MA SITUATION
maSituationLink.addEventListener('click', (e) => {
  e.preventDefault(); // Empêcher le rechargement de la page
  menu.style.display = 'none'; // Masquer le menu
  situationSection.style.display = 'block'; // Afficher MA SITUATION
});

// Flèche de retour pour revenir au menu principal
backArrow.addEventListener('click', () => {
  situationSection.style.display = 'none'; // Masquer la section MA SITUATION
  menu.style.display = 'block'; // Réafficher le menu principal
});

// Fonction pour ajouter une situation
const situationList = document.getElementById('situation-list');
const addSituationBtn = document.getElementById('add-situation-btn');

function addSituation(situationName) {
  const li = document.createElement('li');
  li.textContent = situationName;
  situationList.appendChild(li);
}

// Charger les situations depuis le stockage local
function loadSituations() {
  const situations = JSON.parse(localStorage.getItem('situations')) || [];
  situations.forEach(situation => {
    addSituation(situation);
  });
}

// Événement clic sur le bouton pour ajouter une nouvelle situation
addSituationBtn.addEventListener('click', () => {
  const newSituationName = prompt('Nom de la nouvelle situation :');
  if (newSituationName) {
    addSituation(newSituationName);
    let situations = JSON.parse(localStorage.getItem('situations')) || [];
    situations.push(newSituationName);
    localStorage.setItem('situations', JSON.stringify(situations));
  }
});

// Charger les situations au chargement de la page
document.addEventListener('DOMContentLoaded', loadSituations);
