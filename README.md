# 🦊 FoxDesk

> Un espace personnel de gestion et d'organisation avec une interface sombre, violette et légèrement néon.

FoxDesk est un projet personnel visant à créer une interface centralisée permettant de gérer et organiser différents éléments du quotidien depuis un seul espace.

L'objectif est de construire progressivement une application moderne, agréable à utiliser et suffisamment flexible pour évoluer vers un véritable outil d'administration personnel.

---

## ✨ Aperçu

FoxDesk est pensé autour d'un **Dashboard central** permettant d'avoir rapidement une vue d'ensemble de son espace.

L'interface est organisée autour de plusieurs fonctionnalités :

* 📊 Dashboard
* ✓ Tâches
* ◆ Projets
* ◇ Calendrier
* 📝 Notes
* ⚙️ Administration
* 🔧 Paramètres

Le Dashboard affiche notamment :

* Le nombre de tâches
* Le nombre de projets
* Le nombre d'événements
* Le nombre de notes
* Les dernières activités effectuées
* Les modifications récentes

---

## 🎨 Identité visuelle

FoxDesk utilise une identité graphique basée sur :

* 🌑 Un thème sombre
* 💜 Des teintes violettes profondes
* ✨ Des effets néon subtils
* 🦊 Une identité inspirée du renard
* 🧊 Des interfaces avec des bordures discrètes
* 📦 Des cartes légèrement contrastées
* 🎯 Une interface claire et minimaliste

### Palette principale

| Élément          | Couleur   |
| ---------------- | --------- |
| Background       | `#08050D` |
| Sidebar          | `#0C0813` |
| Surface          | `#110B1B` |
| Surface claire   | `#160E22` |
| Bordure          | `#29183B` |
| Violet principal | `#8B5CF6` |
| Violet clair     | `#A855F7` |
| Violet néon      | `#C084FC` |
| Texte principal  | `#F5F0FF` |
| Texte secondaire | `#AAA0B8` |
| Texte discret    | `#71667D` |

---

## 📁 Structure du projet

Le projet est actuellement organisé de manière simple afin de pouvoir évoluer progressivement.

```text
FoxDesk/
│
├── src/
│   │
│   ├── index.html
│   │
│   ├── css/
│   │   └── main.css
│   │
│   └── js/
│
└── README.md
```

### `src/index.html`

Point d'entrée actuel de l'interface.

Il contient la structure HTML du Dashboard :

* Sidebar
* Navigation
* Header
* Profil
* Statistiques
* Activité récente

### `src/css/main.css`

Contient actuellement l'ensemble du système visuel :

* Reset CSS
* Variables
* Sidebar
* Navigation
* Dashboard
* Cartes statistiques
* Activités récentes
* Profil
* Responsive design
* Effets visuels

### `src/js/`

Le dossier est prévu pour accueillir progressivement la logique JavaScript du projet.

---

## 🖥️ Dashboard

Le Dashboard constitue actuellement le cœur de l'interface.

Il est composé de trois grandes zones.

### Sidebar

La sidebar permet d'accéder aux différentes fonctionnalités :

```text
FOXDESK

ESPACE

◈ Dashboard
✓ Tâches
◆ Projets
◇ Calendrier
▤ Notes

SYSTÈME

⌘ Administration
⚙ Paramètres
```

Elle contient également un indicateur permettant d'afficher l'état général du système.

---

### Profil

Le profil utilisateur est situé dans le coin supérieur droit.

Il affiche actuellement :

* Nom de l'utilisateur
* Niveau d'accès
* Avatar
* Menu utilisateur

---

### Statistiques

Le Dashboard affiche actuellement plusieurs statistiques générales :

```text
┌──────────────┐
│ ✓            │
│ 12           │
│ Tâches       │
└──────────────┘

┌──────────────┐
│ ◆            │
│ 4            │
│ Projets      │
└──────────────┘

┌──────────────┐
│ ◇            │
│ 8            │
│ Événements   │
└──────────────┘

┌──────────────┐
│ ▤            │
│ 23           │
│ Notes        │
└──────────────┘
```

Ces données sont actuellement statiques et serviront de base lorsque le système de données sera implémenté.

---

## 🕐 Activité récente

La partie inférieure du Dashboard présente les dernières actions effectuées dans l'espace.

Exemples :

* Modification d'une tâche
* Modification d'un projet
* Création d'une note
* Ajout d'un événement
* Terminaison d'une tâche

À terme, cette section devra être alimentée automatiquement par les différentes fonctionnalités de FoxDesk.

---

## 📱 Responsive

L'interface possède déjà une première adaptation aux différentes tailles d'écran.

Sur les écrans plus petits :

* La sidebar devient compacte
* Les éléments textuels de navigation peuvent être masqués
* Les statistiques passent progressivement sur plusieurs lignes
* Le profil est simplifié
* Le contenu s'adapte à la largeur disponible

Le responsive design sera amélioré au fur et à mesure du développement.

---

## 🛠️ Technologies

Le projet commence volontairement avec des technologies simples :

* **HTML5**
* **CSS3**
* **JavaScript** — prévu pour les fonctionnalités interactives

Aucun framework frontend n'est actuellement nécessaire.

L'objectif est d'abord de construire une base solide avec les technologies fondamentales du Web.

---

## 🚧 État du projet

### Interface

* [x] Structure générale du Dashboard
* [x] Sidebar
* [x] Navigation
* [x] Profil utilisateur
* [x] Statistiques
* [x] Activité récente
* [x] Thème sombre
* [x] Identité violette / néon
* [x] Première version responsive

### Fonctionnalités

* [ ] Gestion des tâches
* [ ] Gestion des projets
* [ ] Calendrier
* [ ] Gestion des notes
* [ ] Notifications
* [ ] Recherche
* [ ] Filtres
* [ ] Administration
* [ ] Paramètres utilisateur
* [ ] Sauvegarde des données
* [ ] Authentification
* [ ] Backend

---

## 🗺️ Roadmap

### Phase 1 — Interface

> Construire une interface cohérente et agréable.

* [x] Dashboard
* [ ] Page Tâches
* [ ] Page Projets
* [ ] Page Calendrier
* [ ] Page Notes
* [ ] Page Administration
* [ ] Page Paramètres

### Phase 2 — Interactions

> Rendre l'interface interactive.

* [ ] Navigation entre les pages
* [ ] Menus
* [ ] Modales
* [ ] Notifications
* [ ] Recherche
* [ ] Filtres
* [ ] Animations

### Phase 3 — Gestion des données

> Remplacer les données statiques par de véritables données.

* [ ] Création
* [ ] Modification
* [ ] Suppression
* [ ] Sauvegarde
* [ ] Historique
* [ ] Activité récente dynamique

### Phase 4 — Backend

> Ajouter une véritable infrastructure à l'application.

* [ ] API
* [ ] Base de données
* [ ] Authentification
* [ ] Gestion des utilisateurs
* [ ] Permissions
* [ ] Administration

---

## 🔐 Administration

FoxDesk est également pensé pour pouvoir évoluer vers un système d'administration.

L'administration pourra éventuellement permettre de gérer :

* Utilisateurs
* Permissions
* Données
* Activité
* Paramètres système
* Journaux
* Configuration de l'application

Cette partie sera développée séparément afin de ne pas surcharger l'interface principale.

---

## 🎯 Objectif du projet

FoxDesk n'a pas pour objectif d'être simplement une démonstration d'interface.

Le projet sert également de terrain d'expérimentation pour développer des compétences en :

* HTML
* CSS
* JavaScript
* Architecture frontend
* Gestion des données
* UX/UI
* Backend
* Bases de données
* Authentification
* Administration système

L'objectif final est d'obtenir une application personnelle complète, évolutive et maintenable.

---

## 📌 Principes de développement

Quelques principes guideront le développement de FoxDesk :

### Simplicité

Éviter d'ajouter de la complexité sans raison.

### Modularité

Chaque fonctionnalité doit pouvoir évoluer indépendamment.

### Lisibilité

Le code doit rester compréhensible et maintenable.

### Cohérence

Les différentes pages doivent utiliser le même système visuel.

### Progressivité

Les fonctionnalités seront ajoutées progressivement plutôt que de construire toute l'application en une seule fois.

---

## 🦊 Vision

FoxDesk doit progressivement devenir un **centre de contrôle personnel** permettant de regrouper organisation, productivité et administration dans une seule interface.

Le projet évoluera au fur et à mesure de sa construction.

> **Organiser. Construire. Contrôler.**

---

## 📄 Licence

Projet personnel.

La licence et les conditions d'utilisation pourront être définies ultérieurement.
