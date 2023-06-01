# All Elite Wrestling database
## Backend

Ce dossier sera consacré à toute la partie backend, gestion de base de données, créations des endpoints de l'API rest, il y a une architecture en MVC (Models, Views, Controllers), même si pour l'affichage il faudra surtout passer par le dossier frontend.

J’utilise l'environnement d'exécution Node.js.

### Packages et modules utilisés
- node-dev : Outil de développement qui redemarre automatiquement le serveur de de développement lors de la modification d'un fichier.

*Pour lancer le serveur de développement : `npm run dev`*

- express : Framework pour créer un serveur http, avec de nombreuses méthode permettant de gérer les requètes, les assets statiques, le format json...

- Dotenv : Module pour la gestion des variables d'environnement.

- ejs : Moteur de template pour générer les vues

- sequelize (avec pg et pg-hstore comme la base de données est en PostgreSQL) : ORM (Object Relationnal Mapping) qui permet de faire le lien entre la base de données, et les objets utilisable dans l'application.

- cors : Package qui permet d'établir la politique de CORS (Cross-Origin Resource Sharing) afin d'autoriser les accès à l'API.

- slugify : Utilitaire qui permet de modifier une chaine de caractères en un "slug" plus pratique pour les url notamment.


### Conception (évolue au fil du développement)
#### User Stories

- En tant qu'utilsateur : 
  - Je dois pouvoir accéder au roster de la compagnie.
  - Je dois pouvoir accéder aux page individuelles de chaque catcheurs.
  - Je dois pouvoir voir la liste des shows.
  - Je dois pouvoir voir la liste des combats
  - Je dois pouvoir voir l'historique de chaque championnat.

- En tant qu'admin :
  - Je dois avoir accès à une interface pour créer les shows, et automatiquement mettre à jour les statistiques.

#### Wireframes

- Page d'accueil avec un menu vers le roster des combattants, la liste des shows...
- Page "Roster" avec la liste des catcheurs.
- Page "Catcheur" pour avoir plus de détail.
- Page "List de Shows" avec la liste des shows.
- Page "Show" avec tout les combats de ce show en particulier.

#### MLD

**wrestler** (<ins>wrestler_code</ins>, name, slug)<br>

**championship** (<ins>championship_code</ins>, title, slug, maxHolder)<br>

**wrestler_has_championship** (<ins>_#wrestler_code_</ins>, <ins>_#championship_code_</ins>, start date, end date)<br>

**match** (<ins>match_code</ins>, type, stipulation, duration, winner, <ins>_#show_code_</ins>)

**wrestler_has_match** (<ins>_#wrestler_code_</ins>, <ins>_#match_code_</ins>)

**show** (<ins>show_code</ins>, number, date, <ins>_#program_code_</ins>)

**program** (<ins>program_code</ins>, name, type, slug)

