# Concevoir le parcours IA pour apprendre, pas seulement consulter

Recherche documentaire effectuée le 17 novembre 2026. Cette synthèse combine travaux de recherche, enquête d’expérience numérique et documentation de plateformes. Elle ne remplace pas des tests avec les Business Analysts qui utiliseront le site.

## Ce que les apprenants apprécient — et leurs difficultés

L’enquête Jisc 2024/25 recueille les réponses de 15 398 étudiants de 30 établissements britanniques. Elle fait ressortir la demande de flexibilité, de contenus accessibles et de systèmes fiables. Les problèmes de connexion et d’équipement restent des obstacles importants. Ces résultats concernent l’enseignement supérieur britannique : ils fournissent des pistes, pas une mesure directe des préférences des BA de notre organisation.

Conséquence pour le site : reprise de progression, fonctionnement mobile, absence de vidéo obligatoire et accès direct au contenu. Une interface très chargée ne répond pas au besoin de flexibilité simplement parce qu’elle propose beaucoup de fonctionnalités.

Source : [Jisc — What students really think about their digital experience](https://www.jisc.ac.uk/blog/what-students-really-think-about-their-digital-experience-in-higher-education).

## Ce qui aide à retenir et comprendre

| Constat documenté | Traduction pour notre parcours | Ce qu’il faut éviter |
|---|---|---|
| Se tester et espacer les séances sont des techniques bien étayées. | Questions de rappel et, en prochaine évolution, retours sur les notions après un délai. | Confondre lecture terminée et maîtrise durable. |
| Une structure explicite et des activités authentiques contribuent à l’efficacité des cours en ligne. | Une progression visible et des décisions qui ressemblent au travail d’un BA. | Accumuler menus, badges et activités sans objectif. |
| Segmenter un contenu multimédia en parties cohérentes contrôlées par l’apprenant peut faciliter l’apprentissage. | Séquences autonomes ; l’utilisateur décide quand continuer. | Découper artificiellement chaque phrase ou imposer un rythme automatique. |
| Les éléments superflus peuvent ajouter une charge cognitive inutile. | Décor limité ; explications complémentaires à ouvrir au besoin. | Ajouter des animations sans rôle explicatif. |
| Le ressenti de facilité ne mesure pas toujours l’apprentissage réel. | Inviter à raisonner, expliquer les corrections et vérifier plus tard. | Optimiser uniquement la satisfaction ou le nombre de clics. |

Sources :

- [Dunlosky et al., 2013 — Improving Students’ Learning With Effective Learning Techniques](https://doi.org/10.1177/1529100612453266) : revue comparant dix techniques, notamment tests de pratique et pratique distribuée. La relecture seule est moins utile de manière générale ; cela ne signifie pas qu’elle n’aide jamais.
- [Van Dorresteijn et al., publication en ligne 2024 — What Factors Contribute to Effective Online Higher Education?](https://link.springer.com/article/10.1007/s10758-024-09750-5) : synthèse de 47 revues et méta-analyses. Structure claire, activités authentiques et interaction de qualité ressortent parmi les facteurs pertinents. Les résultats ne garantissent pas l’effet d’une fonctionnalité isolée.
- [Mayer — Principles for Managing Essential Processing](https://doi.org/10.1017/9781108894333.025) et [Principles for Reducing Extraneous Processing](https://doi.org/10.1017/9781108894333.019) : segmentation, cohérence et limitation des traitements inutiles, dans le contexte de l’apprentissage multimédia.
- [Deslauriers et al., 2019 — Measuring actual learning versus feeling of learning](https://pubmed.ncbi.nlm.nih.gov/31484770/) : étude en cours de physique universitaire. L’apprentissage actif y produit de meilleurs résultats malgré un ressenti d’apprentissage inférieur. Cela justifie de distinguer expérience agréable et performance ; pas d’imposer une difficulté inutile.

Il n’existe pas ici de preuve d’une durée universellement optimale de cinq minutes, ni d’un bénéfice pédagogique propre au bleu nuit. La palette répond au souhait de l’utilisateur ; le contraste, la taille du texte et le confort réel restent à vérifier. Les catégories « visuel / auditif / kinesthésique » ne constituent pas une base solide pour affecter chaque personne à une méthode : [Pashler et al. — Learning Styles: Concepts and Evidence](https://pubmed.ncbi.nlm.nih.gov/26162104/).

## Pratiques intéressantes sur les plateformes

Il s’agit d’exemples de conception décrits par les éditeurs, pas d’un classement indépendant ni d’une preuve comparative d’efficacité.

| Plateforme | Mécanisme intéressant | Adaptation pertinente pour les BA |
|---|---|---|
| Brilliant | Concepts interactifs intégrant explications et exercices dans un parcours guidé. | Modifier une permission, une source ou un coût et observer le résultat. |
| Khan Academy | Suivi des compétences selon les réponses et pratique des acquis. | Distinguer une séquence parcourue d’une capacité vérifiée sur plusieurs cas. |
| Duolingo | Réapparition de notions dans les pratiques de révision. | Reposer plus tard les notions qui ont posé problème. |
| Codecademy | Alternance entre leçons guidées et projets d’application. | Produire une exigence, un prompt ou une matrice de contrôle exploitable. |

Références : [Brilliant — Learning Paths](https://brilliant.org/help/features/what-are-learning-paths/), [Khan Academy — Course and Unit Mastery](https://support.khanacademy.org/hc/en-us/articles/115002552631-What-are-Course-and-Unit-Mastery), [Duolingo — Spaced repetition](https://blog.duolingo.com/spaced-repetition-for-learning/), [Codecademy — Lessons and Projects](https://help.codecademy.com/hc/en-us/articles/14298560842267-How-Lessons-and-Projects-Differ-in-Codecademy-s-Learning-Environment).

## Décisions appliquées à cette version

- Trois entrées principales : Parcours, Pratiquer, Ressources. Glossaire et quiz restent accessibles depuis ces espaces.
- Accueil recentré sur une prochaine action et les six étapes. Suppression de l’orbite décorative, des filtres pour six modules, des blocs promotionnels et de la double navigation des étapes.
- Bleu nuit, surfaces sobres et accents bleu clair. Les retours de correction gardent un libellé et un symbole, sans dépendre uniquement de la couleur.
- Schéma complémentaire replié par défaut ; l’exemple métier reste visible.
- Possibilité d’expliquer son raisonnement avant de choisir. Cette note reste dans la session et n’est pas notée automatiquement.
- Les 36 décisions corrigées et six laboratoires restent disponibles. Les décisions validées représentent une progression dans les activités, pas une certification de maîtrise.

## Améliorations prioritaires, pas encore implémentées

1. Révision espacée fondée sur les erreurs et réponses précédentes. L’intervalle doit être ajustable ; aucune série quotidienne punitive n’est nécessaire.
2. Cas de transfert inédits après un délai, pour vérifier que la personne applique le concept sans reconnaître la même réponse.
3. Projet de bout en bout : cadrage du besoin, exigences, plan de test, contrôles, puis décision de pilote. Revue humaine de la qualité des livrables.
4. Aides graduées avant la correction complète. Leur intérêt doit être vérifié, notamment pour les débutants.

## Vérifier avec les utilisateurs

Commencer par un petit test qualitatif avec des BA débutants et expérimentés. Leur demander de reprendre une séquence, résoudre un cas inédit, retrouver une définition et modifier un laboratoire. Observer les hésitations et leur raisonnement ; un petit panel n’apporte pas une estimation statistique des préférences.

Recueillir séparément : facilité à trouver la prochaine action ; qualité de l’explication après erreur ; capacité à reformuler ; résultat sur un nouveau cas ; rétention quelques jours plus tard. Le temps passé et les séquences terminées sont des indicateurs d’usage, pas des preuves de compréhension.

Les freins à tester pour ce public sont des hypothèses : jargon, menus concurrents, répétitions trop faciles, correction inexpliquée, difficulté sans aide et sentiment d’être puni pour une erreur. Ne pas les présenter comme des avis déjà recueillis sur notre site.
