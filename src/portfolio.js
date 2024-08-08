import projetImage1 from '../src/assets/projet1.PNG';
import projetImage2 from '../src/assets/projet2.PNG';
import projetImage3 from '../src/assets/projet3.PNG';
import projetImage4 from '../src/assets/projet4.PNG';
import projetImage5 from '../src/assets/projet5.PNG';
import modalImage1 from '../src/assets/booki_ordi.png';
import modalImage2 from '../src/assets/sophie_ordi.png';
import modalImage3 from '../src/assets/nina_ordi.png';
import modalImage4 from '../src/assets/kasa_mac.png';
import modalImage5 from '../src/assets/monvieuxgrimoire_ordi.png';

const header = {

  homepage: 'MelissaAdt/Portfolio',
  title: 'MA.',
}

const about = {
  name: 'Mélissa',
  
}

const apropos = { 
  description: "Après avoir terminé la formation OpenClassrooms en développement web, je suis désormais spécialisée dans ce domaine. Cette formation m’a permis de maîtriser les technologies front-end. Je suis enthousiaste à l'idée d'appliquer ces compétences pour créer des projets web fonctionnels et esthétiques, tout en cherchant continuellement à apprendre et évoluer dans ce secteur dynamique.",
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/MelissaAdt',
  },
  resume: 'https://example.com'
}

const projets = [

  {
    name: 'Booki',
    description: "Page d'accueil d'une agence de voyage",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/MelissaAdt/P2',
    livePreview: 'https://melissaadt.github.io/P2/',
    image: projetImage1,
    modalImage: modalImage1,
    year: '2024',
    mission: `Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.
              - Intégration de contenu conformément à une maquette avec HTML et CSS.
              - Implémentation d'une interface responsive avec HTML et CSS.
              `,
  
  },
  {
    name: 'Sophie Bluel',
    description:
      "Page web dynamique d'une architecte d'intérieur",
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/MelissaAdt/P3',
    image: projetImage2,
    modalImage: modalImage2,
    year: '2024',
    mission:`Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.
                 - Récupération des données provenant du back-end de manière dynamique via fetch.
                  - Ajout de filtres pour séléctionner une catégorie.
                  - Formulaire d'authentification pour l'administrateur.
                  - Création d'une fenêtre modale pour ajouter ou supprimer des projets dynamiquement.`,
 
  },
  {
    name: 'Nina Carducci',
    description: "Débogage et optimisation d'un site de photographe",
    stack: ['SEO', 'Accessibilité', 'Débug'],
    sourceCode: 'https://github.com/MelissaAdt/Projet-4',
    livePreview: 'https://melissaadt.github.io/Projet-4/',
    image: projetImage3,
    modalImage: modalImage3,
    year: '2024',
    mission:`Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.
                 - Débogage du site grâce aux Chrome Devtools.
                  - Optimisation des images du site pour améliorer la performance.
                  - Optimisation du code et de sa structure pour améliorer l'accessibilité et le SEO.`,
  
  },
  {
    name: 'Kasa',
    description: 'Site de location immobilière',
    stack: ['React', 'SASS'],
    sourceCode: 'https://github.com/MelissaAdt/Projet-5',
    image: projetImage4,
    modalImage: modalImage4,
    year: '2024',
    mission: `Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.
                 - Développement du front d’un site de location d’hébergement avec React.
                  - Création de composants React et gestion des états.
                  - Développement d'une interface web avec Sass.`,
    
  },
  {
    name: 'Mon vieux grimoire',
    description: "Back-end d'un site de notation de livre",
    stack: ['MongoDB', 'Mongoose', 'Node.js', 'Express.js'],
    sourceCode: 'https://github.com/MelissaAdt/Projet-6',
    image: projetImage5,
    modalImage: modalImage5,
    year: '2024',
    mission:`Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.
                 - Mise en place d'une API REST avec Node.js et MongoDB.
                  - Implémentation d'un système d'authentification (stockage des informations utilisateurs dans la base de données, implémentation du cryptage de mot de passe, création et envoides tokens au front-end pour authentifier les requêtes avec JWT).
                  - Mise en œuvre des opérations CRUD de manière sécurisée.
                  - Gestion des différentes fonctionnalités pour la notation des livres.`,
   
  }
]

const compétences = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React dev tools',
  'SASS',
  'Notions SEO',
  'MongoDB',
  'Mongoose',
  'Node.js',
  'Express.js'
]

const contact = {
  
  email: 'melissaamdt@gmail.com',
}

export { header, about, apropos, projets, compétences, contact }
