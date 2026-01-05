# Simulateur de Système de Réservation de Salles

##  Présentation du projet

Ce projet est un **simulateur de système de réservation de salles** développé en **JavaScript pur (Vanilla JS)**. 
Il modélise une problématique classique rencontrée en entreprise : la gestion d’un stock de ressources partagées (salles, équipements, créneaux) 
avec prévention des conflits de réservation.

L’objectif est de démontrer une **logique métier simple mais réaliste**, implémentée avec rigueur, lisibilité et évolutivité — des critères clés 
recherchés par les recruteurs techniques.

---

## Objectifs professionnels

* Illustrer la gestion d’un état applicatif côté client
* Implémenter des règles métiers (unicité de réservation)
* Montrer une approche structurée et maintenable en JavaScript
* Servir de base à des systèmes plus complexes (agenda, ERP, SaaS)

---

##  Structure du projet

```text
SIMULATEUR-RESERVATION-SALLES/
│
├── index.html   # Interface utilisateur (UI)
├── app.js       # Logique métier et gestion des réservations
└── README.md    # Documentation du projet
```

---

##  Description fonctionnelle

L’application permet à un utilisateur de :

* Sélectionner une salle parmi une liste déroulante
* Réserver la salle sélectionnée
* Visualiser instantanément les salles déjà réservées

### Règle métier principale

* **Une salle ne peut être réservée qu’une seule fois**

Toute tentative de réservation d’une salle déjà réservée est bloquée et signalée à l’utilisateur.

---

##  Détails techniques

### 1. Gestion de l’état

Les réservations sont stockées dans un tableau JavaScript :

```js
const reservations = [];
```

Ce tableau joue le rôle d’un **état applicatif local**, concept fondamental dans les frameworks modernes (React, Vue, Angular).

---

### 2. Fonction `book()`

Responsabilités :

* Récupérer la salle sélectionnée
* Vérifier si elle est déjà réservée
* Appliquer la règle métier d’unicité
* Mettre à jour l’état et déclencher le rendu

Cette fonction simule le comportement d’un **service métier** côté client.

---

### 3. Fonction `render()`

Responsabilités :

* Synchroniser l’interface avec l’état interne
* Nettoyer le DOM avant réaffichage
* Générer dynamiquement la liste des réservations

Cette approche garantit une **UI cohérente et déterministe**.

---

##  Installation et exécution

Aucune dépendance externe n’est requise.

### Étapes :

1. Cloner le dépôt

bash
git clone https://github.com/votre-utilisateur/simulateur-reservation-salles.git
```

2. Ouvrir `index.html` dans un navigateur moderne

3. Tester différentes réservations

---

##  Scénarios de test

| Action utilisateur         | Résultat attendu         |
| -------------------------- | ------------------------ |
| Réserver Salle A           | Salle ajoutée à la liste |
| Réserver Salle A à nouveau | Message d’erreur         |
| Réserver Salle B           | Salle ajoutée à la liste |

---

##  Bonnes pratiques mises en œuvre

* Logique métier centralisée
* Séparation claire UI / logique
* Code lisible et explicite
* État contrôlé et prévisible
* Aucune dépendance inutile

---

##  Axes d’amélioration (niveau entreprise)

Ce projet peut évoluer vers :

* Gestion de dates et créneaux horaires
* Persistance des données (LocalStorage, API REST)
* Système multi-utilisateurs
* Interface stylisée (CSS / framework UI)
* Validation avancée et gestion des erreurs
* Architecture MVC ou composantisée

---

## Valeur pour un recruteur

Ce projet démontre :

* Une bonne compréhension des fondamentaux JavaScript
* Une capacité à modéliser une règle métier simple
* Une approche structurée et professionnelle
* Une base saine pour des systèmes plus complexes

Il est particulièrement pertinent pour des postes **Frontend**, **Fullstack Junior / Intermédiaire**, ou des stages techniques.

---

##  Licence

Projet libre à usage pédagogique et démonstratif.

---

**Auteur :** Développeur JavaScript
**Technologies :** HTML5, JavaScript (ES6)
**Niveau :** Professionnel / Recruteur
