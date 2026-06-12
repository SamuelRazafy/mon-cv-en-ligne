// 1. Dictionnaire des textes bilingues
const translations = {
    fr: {
        "subtitle": "Consultant Technico-Fonctionnel SAP",
        "title-contact": "Contact",
        "title-skills": "Compétences",
        "title-languages": "Langues",
        "lang-fr": "Français (Courant)",
        "lang-en": "Anglais (Technique / Documentation)",
        "lang-mg": "Malagasy (Maternelle)",
        "title-profile": "Profil Professionnel",
        "profile-desc-1": "Ingénieur de formation avec une reconversion réussie vers le développement d'applications numériques, je cumule deux ans d'expérience en tant que consultant technico-fonctionnel SAP chez SAPERP Solution Madagascar. Mon expertise couvre le développement technico-fonctionnel SAP, notamment sur le back-end SAP, OData, Fiori et SAPUI5.",
        "profile-desc-2": "Curieux, rigoureux et polyvalent, je suis à l'aise dans des environnements SAP complexes et modernes (SAP BTP, SAP NetWeaver) et maîtrise plusieurs langages et frameworks.",
        "btn-more": "En savoir plus",
        "btn-less": "Voir moins",
        "title-experience": "Expériences Professionnelles",
        "job1-title": "Consultant Technico-Fonctionnel SAP",
        "job1-date": "2023 - Aujourd'hui",
        "job1-task1": "Développement et maintenance d'applications SAP en ABAP (Enhancement, BAPI, IDoc, SAP Workflow).",
        "job1-task2": "Création de services OData pour les applications Fiori.",
        "job1-task3": "Intégration de solutions SAPUI5 dans SAP NetWeaver et SAP BTP.",
        "job1-task4": "Collaboration avec les équipes fonctionnelles pour la rédaction des spécifications techniques.",
        "job2-title": "Responsable / Animateur - Centre de Loisir",
        "job2-task1": "Encadrement des activités éducatives et sportives.",
        "job2-task2": "Gestion d'équipe et animation de projets socioculturels.",
        "job2-task3": "Développement de compétences transverses : organisation, communication, esprit d'équipe.",
        "title-education": "Formation",
        "edu1-title": "Concepteur Développeur d'Applications Numériques",
        "edu1-details": "Programmation web et mobile (React, Angular, Node.js), Bases de données (MySQL, PostgreSQL).",
        "edu2-title": "Diplôme d'Ingénieur des Mines",
        "title-skills": "Compétences",
        "skill-lang": "Langages :",
        "skill-frame": "Frameworks :",
        "skill-db": "Bases de données :",
        "skill-tools": "Outils :",
        "skill-env": "Environnements :"
    },
    en: {
        "subtitle": "SAP Techno-Functional Consultant",
        "title-contact": "Contact Information",
        "title-skills": "Core Skills",
        "title-languages": "Languages",
        "lang-fr": "French (Fluent)",
        "lang-en": "English (Technical / SAP Documentation)",
        "lang-mg": "Malagasy (Native)",
        "title-profile": "Professional Profile",
        "profile-desc-1": "An engineer by training with a successful transition into digital application development, I have two years of experience as an SAP Techno-Functional Consultant at SAPERP Solution Madagascar. My expertise covers SAP techno-functional development, specifically focusing on SAP back-end, OData, Fiori, and SAPUI5.",
        "profile-desc-2": "Curious, rigorous, and versatile, I am highly comfortable working within complex and modern SAP environments (SAP BTP, SAP NetWeaver) and proficient across multiple languages and frameworks.",
        "btn-more": "Read more",
        "btn-less": "Read less",
        "title-experience": "Professional Experience",
        "job1-title": "SAP Techno-Functional Consultant",
        "job1-date": "2023 - Present",
        "job1-task1": "Development and maintenance of SAP applications using ABAP (Enhancements, BAPIs, IDocs, SAP Workflow).",
        "job1-task2": "Creation of OData services for Fiori applications.",
        "job1-task3": "Integration of SAPUI5 solutions within SAP NetWeaver and SAP BTP.",
        "job1-task4": "Collaboration with functional teams to draft technical specifications.",
        "job2-title": "Manager / Animator - Leisure Center",
        "job2-task1": "Supervision of educational and sports activities.",
        "job2-task2": "Team management and coordination of socio-cultural projects.",
        "job2-task3": "Development of soft skills: organization, communication, teamwork.",
        "title-education": "Education",
        "edu1-title": "Digital Application Developer & Designer",
        "edu1-details": "Web and mobile programming (React, Angular, Node.js), Relational databases (MySQL, PostgreSQL).",
        "edu2-title": "Master's Degree in Mining Engineering",
        "title-skills": "Core Skills",
        "skill-lang": "Languages:",
        "skill-frame": "Frameworks:",
        "skill-db": "Databases:",
        "skill-tools": "Tools:",
        "skill-env": "Environments:"
    }
};

let currentLang = 'fr'; // Langue par défaut

// 2. Fonction de traduction
function translatePage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Gérer l'état du bouton "En savoir plus" selon la langue active
    const toggleBtn = document.getElementById('toggle-profile-btn');
    const moreText = document.getElementById('more-profile-text');
    if (moreText.classList.contains('visible')) {
        toggleBtn.textContent = translations[lang]['btn-less'];
    } else {
        toggleBtn.textContent = translations[lang]['btn-more'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 3. Détection automatique de la langue du navigateur
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
        translatePage('en');
        document.getElementById('btn-fr').classList.remove('active');
        document.getElementById('btn-en').classList.add('active');
    } else {
        translatePage('fr');
    }

    // 4. Gestion de l'affichage dynamique du profil ("En savoir plus")
    const toggleBtn = document.getElementById('toggle-profile-btn');
    const moreText = document.getElementById('more-profile-text');

    toggleBtn.addEventListener('click', () => {
        if (moreText.classList.contains('hidden')) {
            moreText.classList.remove('hidden');
            moreText.classList.add('visible');
            toggleBtn.textContent = translations[currentLang]['btn-less'];
        } else {
            moreText.classList.remove('visible');
            moreText.classList.add('hidden');
            toggleBtn.textContent = translations[currentLang]['btn-more'];
        }
    });

    // 5. Événements sur les boutons de changement de langue manuel
    document.getElementById('btn-fr').addEventListener('click', function() {
        translatePage('fr');
        this.classList.add('active');
        document.getElementById('btn-en').classList.remove('active');
    });

    document.getElementById('btn-en').addEventListener('click', function() {
        translatePage('en');
        this.classList.add('active');
        document.getElementById('btn-fr').classList.remove('active');
    });
});