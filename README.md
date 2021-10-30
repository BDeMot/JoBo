# JoBo / canSpo - en cours de développement


## Ce projet :
JoBo est un projet de `PWA` de gestion des candidatures dans le cadre d'une recherche d'emploi.

canSpo est une de ses fonctionnalités. En cours de développement, canSpo déjà permet une gestion basique des candidatures spontanées.


### Lancer le projet

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Stack technique
canSpo est une PWA bâtie avec `Nuxt` en mode SSR et `Vuetify`.

La Base de Donnée est stockée côté client, dans l'`IndexedDB`. Cela permet d'y stocker des données sous forme d'Objet, et d'anticiper le déploiement prochain de l'API qui communiquera avec `MongoDB`.

## A terme
canSpo devra permettre la gestion des emails liés aux candidatures spontanées.

canSpo devra permettre l'export au format JSON de sa BDD.
