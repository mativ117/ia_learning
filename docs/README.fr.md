# AI Learning Path

Site pédagogique statique en français, basé sur la présentation de training IA fournie (édition octobre 2026). Identité indépendante, sans marque d’entreprise. Le support détaillé reste en anglais.

## Démarrer

`npm run dev` puis ouvrir http://localhost:3000. Python 3 suffit ; aucune installation de dépendances n’est requise. Ne pas ouvrir directement index.html : les modules JavaScript et le chargement JSON nécessitent HTTP.

## Publier sur GitHub Pages

1. Placer le contenu de ce dossier à la racine d’un dépôt GitHub, sur la branche `main`.
2. Dans Settings → Pages → Build and deployment, choisir **GitHub Actions**.
3. Pousser un commit, ou lancer manuellement le workflow **Deploy GitHub Pages**.

Les chemins relatifs fonctionnent également sous `https://utilisateur.github.io/nom-du-depot/`. Dépôt cible : https://github.com/mativ117/ia_learning.

## Modifier le parcours

- `data/curriculum.js` : six étapes, 18 leçons initiales françaises, exercices, pistes de correction, 18 questions de quiz avec explications et glossaire. Chaque question contient `[énoncé, réponses, indexCorrect, explication]` ; l’index commence à zéro. Les identifiants d’étapes doivent rester stables pour préserver la progression.
- `data/source.json` : fiches originales extraites du PowerPoint avec tableaux et liens. Les sections de navigation vides et les références à la marque exclue ont été retirées. Aucun fichier PowerPoint ni média de marque n’est publié.
- `style.css` : identité visuelle, couleurs, mise en page et responsive.
- `app.js` : interactions, recherche, quiz, cartes mémoire, progression et notes.

Chaque push sur `main` republie le site. Les informations commerciales, certifications, produits et calendriers légaux du document source sont datés : les vérifier auprès des sources officielles avant mise à jour. Les synthèses françaises sont des adaptations pédagogiques ; elles ne sont pas une traduction intégrale de chaque slide.

## Données & apprentissage

La progression compte les 36 décisions validées dans le parcours guidé ; les quiz conservent le dernier score séparément. Les notes, scores et leçons terminées restent dans le localStorage du navigateur, sans serveur ni compte. Export/import JSON depuis la Bibliothèque. Pas de synchronisation entre appareils sans export/import. Les polices Google Fonts nécessitent Internet ; une police système est utilisée en remplacement.

## Vérifier

`npm test` vérifie la structure du curriculum, les réponses, les fiches sources et les fichiers requis pour Pages.


## Couverture du support

Les 121 diapositives non vides (1–121 ; la 122 est vide) sont disponibles dans Bibliothèque → Tout le support. L’extraction conserve le texte, 67 tableaux et les liens externes ; les illustrations et la disposition graphique du PowerPoint ne sont pas reproduites. Les 36 séquences sont des adaptations pédagogiques en français, le détail original reste en anglais. La recherche globale couvre aussi le texte et les tableaux du support.

## Assistant de questions : options futures

Le site actuel ne contient pas de chatbot ni d’appel API payant. Sa recherche retrouve les connaissances ; elle ne génère pas de réponses.

Un assistant peut être ajouté de deux façons :

- **Cours uniquement** : recherche dans le corpus du site, transmission des extraits pertinents à un modèle, citations et abstention si le cours ne contient pas la réponse.
- **Approfondissement** : même base, avec compléments du modèle clairement identifiés. Une API de modèle ne donne pas automatiquement accès au Web ; une recherche externe doit être ajoutée explicitement si nécessaire.

Dans les deux cas, une API distante est généralement facturée à l’usage, indépendamment d’un abonnement ChatGPT. Le coût dépend du modèle, de la taille des extraits et des réponses, du volume de questions et des éventuels outils de recherche. Aucun prix fixe n’est promis ici.

Architecture conseillée : GitHub Pages pour l’interface + une fonction serveur (par exemple Cloudflare Worker ou Vercel Function) pour la clé API. Prévoir plafonds de consommation, limites par utilisateur, validation des entrées et protection contre les abus. Ne jamais publier la clé dans JavaScript, le dépôt ou un champ de configuration public. L’envoi du corpus à un fournisseur doit respecter les droits sur les contenus et les règles applicables.

Aucune clé, souscription ni ressource payante n’est créée par ce dépôt.


## Refonte pédagogique web

Le parcours principal se déroule sur une page dédiée, avec un itinéraire de six séquences par étape :

1. **Comprendre** : une explication en français, un exemple BA et un repère visuel à explorer.
2. **Décider** : une situation métier, trois propositions et une explication spécifique pour chaque choix. Une erreur ne bloque pas l’apprentissage : l’utilisateur peut revoir son raisonnement. La validation d’une décision correcte enregistre la séquence.
3. **Expérimenter** : accès au laboratoire de l’étape, également disponible depuis le menu Laboratoires.

Les six laboratoires :

- RAG : fraîcheur des documents, droits, contexte et conséquences sur la réponse.
- Prompt : construction d’une consigne et observation des garde-fous manquants, avec copie du texte.
- Choix de solution : règles, prédiction, prompt, RAG, workflow ou agent selon le besoin et les prérequis.
- Exigences : construction de quatre comportements testables et visualisation du plan de test correspondant.
- Sécurité : scénarios d’injection, de fuite ou d’action sensible avec barrières explicites.
- Valeur : calcul réactif du temps net et de sa valorisation, en tenant compte de la revue, de l’adoption et du fonctionnement.

Les laboratoires sont des simulations déterministes avec des exemples fictifs : ils ne génèrent pas de réponse IA, ne valident pas une conformité réelle et ne facturent rien. Les paramètres sont réinitialisés en changeant de laboratoire. Ils illustrent des relations de cause à effet ; les exercices libres permettent d’appliquer ces idées à son projet.

`data/experience.js` ajoute 18 séquences aux 18 initiales et définit les 36 décisions avec leurs corrections, ainsi que les repères visuels. `learning.js` gère le parcours guidé ; `labs.js` gère les simulations. Les fiches originales sont une référence secondaire dans la Bibliothèque. Les tableaux du PowerPoint ne sont plus le mode principal d’apprentissage. Les illustrations originales du PowerPoint ne sont pas reproduites.

Les durées affichées par étape sont les estimations du parcours de formation complet du support, incluant les ressources et travaux proposés ; elles ne représentent pas la durée de lecture des séquences du site. Les quiz de trois questions par étape restent disponibles séparément.

Vérifications de cette refonte : six tests de contenu et calcul, contrôle de chacune des 36 décisions dans Chromium, erreurs et corrections, persistance, interactions de chaque laboratoire et absence de débordement à 390 px. Les tests navigateur ont été exécutés dans l’environnement de travail ; Playwright n’est pas requis pour utiliser le site.

## Interface simplifiée et bleu nuit

La navigation principale contient trois entrées : Parcours, Pratiquer et Ressources. Le glossaire et les quiz sont accessibles depuis Ressources ; les quiz sont aussi accessibles depuis Pratiquer. Le thème `theme.css` surcharge les styles de structure ; le workflow Pages inclut ce fichier.

L’accueil met en avant la prochaine étape et les six modules. Les schémas complémentaires sont repliables et une zone de raisonnement facultative précède les choix. Cette zone est conservée uniquement pendant la session du module, sans évaluation automatique. Les notes d’exercice existantes restent sauvegardables.

La recherche, ses limites et les décisions pédagogiques sont documentées dans [la synthèse de recherche](RECHERCHE-APPRENTISSAGE.md). La révision espacée est recommandée mais n’est pas encore implémentée.
