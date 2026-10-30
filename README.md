# Landing page « IA pour PME »

Page unique, objectif unique : faire réserver l'appel diagnostic gratuit de 30 minutes.

**Stack** : [Astro 7](https://astro.build) (site 100 % statique) + Tailwind CSS 4. Les sections sont des composants React (`src/components/*.tsx`) rendus en HTML au build : aucun JS React n'arrive dans le navigateur. Le seul script côté client fait ~2 Ko (animations au scroll, suivi des clics, bouton mobile, chargement différé de Cal.com).

Lighthouse mobile mesuré en local : Performance 99, Accessibilité 100, Bonnes pratiques 100, SEO 100.

## Démarrer

Node 22.23.4 ou plus récent (Node 24 conseillé).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
npm run preview   # sert dist/ en local
npm run check     # vérification TypeScript
```

Déploiement : importer le dépôt dans Vercel, le framework Astro est détecté tout seul (aucun adaptateur nécessaire).

## À remplacer avant la mise en ligne

Tout est centralisé dans **`src/config/site.ts`** :

| Champ | Rôle |
| --- | --- |
| `name` | Nom de la marque (logo, titre, pied de page, image OG) |
| `email` | Contact affiché dans le pied de page et les mentions légales |

Puis compléter les champs entre crochets de `src/pages/mentions-legales.astro`.

### Variables d'environnement (Vercel → Settings → Environment Variables)

Voir `.env.example`.

| Variable | Effet |
| --- | --- |
| `PUBLIC_SITE_URL` | URL publique : canonical, sitemap, Open Graph |
| `PUBLIC_CAL_LINK` | Lien Cal.com au format `utilisateur/evenement`. Renseigné, le calendrier s'affiche directement dans la section `#rdv` |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Active Plausible (sans cookie, donc pas de bandeau de consentement) |

## Prise de rendez-vous (Cal.com)

Tous les boutons de la page pointent vers la section `#rdv`.

- Sans `PUBLIC_CAL_LINK` : la section affiche le bouton « Réserver mon diagnostic gratuit ».
- Avec `PUBLIC_CAL_LINK` : le calendrier Cal.com s'intègre dans la section, aux couleurs de la marque. Son script n'est chargé que lorsque le visiteur approche de la section, il ne pèse donc rien au chargement initial (`src/scripts/cal.ts`).

## Mesure

Avec Plausible activé :

- `cta_click` avec la propriété `location` (`header`, `hero`, `hero_map`, `map`, `offer`, `faq`, `mobile_sticky`, `final`) ;
- `booking_completed` quand une réservation Cal.com aboutit.

Il faut déclarer ces deux objectifs (« Custom event goals ») dans Plausible.

## Structure de la page

Construite sur les principes de Hormozi (*$100M Offers*) : une seule action possible (réserver le diagnostic), pas de menu, et un enchaînement qui monte la valeur perçue.

1. **Hero** : la douleur (« Vos équipes perdent des heures. Vous perdez des marchés. », la fin de phrase défile : marchés, clients, devis, marge), illustrée par des situations concrètes, puis le délai (30 jours).
2. **Outils** : logos des outils qu'on sait brancher (API publique ou export).
3. **Le constat** : le problème n'est pas l'IA, c'est de savoir par où commencer.
4. **La carte** : sur ordinateur, la liste des 8 pôles à gauche et le pôle choisi à droite (photo, leviers, ce qui reste humain) ; sur mobile, un accordéon. Se termine sur la méthode (un seul pôle, un socle, puis des modules) et un bouton.
5. **La différence** : ce qu'on vous vend d'habitude face à ce que fait Socle, ligne par ligne.
6. **L'offre** : les 5 étapes avec leur délai.
7. **Qui est derrière** (avec un bandeau défilant des écoles des ingénieurs : ESSEC, Institut Polytechnique de Paris, Groupe INSA), **FAQ** (lève les objections), **CTA final**.

Le vocabulaire est le même partout : on parle d'« outil » (ce qu'on construit), pas d'« automatisation ».

Le contenu de la carte se modifie dans `src/components/CompanyMap.tsx` (tableau `poles`).

## Photos

Toutes les photos vont dans **`src/assets/photos/`** : `hero.jpg`, `team.jpg` et une par pôle de la carte (`pole-vente.jpg`, etc.). La liste complète et les formats conseillés sont dans `src/assets/photos/README.md`.

Astro les convertit en AVIF à plusieurs tailles au build. Une photo absente ne casse rien : la section garde son visuel par défaut (fond sombre pour le hero, carte graphique pour les pôles, texte centré pour l'équipe).

## Logos des outils

SVG dans `public/logos/`, issus des jeux d'icônes open source [Iconify Logos](https://github.com/gilbarbara/logos), [VS Code Icons](https://github.com/vscode-icons/vscode-icons) et [Simple Icons](https://simpleicons.org), plus la marque Qonto tirée de son paquet npm officiel `@qonto/login-button`.

Chaque outil du bandeau a une API publique, avec trois nuances :

- **Sage** : les versions cloud ont une API REST ; Sage 50 et Sage 100 France (installés en local) n'en ont pas d'officielle. On s'y branche par le SDK « Objets Métiers », la base SQL ou un connecteur tiers (Chift, Apideck).
- **WhatsApp** : l'API est celle de la WhatsApp Business Platform (Cloud API de Meta, facturée au message), pas l'application gratuite WhatsApp Business.
- **Excel** : l'API Microsoft Graph ne lit que les fichiers .xlsx stockés sur OneDrive Entreprise ou SharePoint, pas les fichiers sur un poste.

Make et n8n ont été retirés : ce sont des outils d'automatisation, pas des logiciels métier du client, et la page explique justement qu'on ne bricole pas des enchaînements fragiles.

Le bandeau n'affiche que des logos. Pennylane n'a pas de logo dans ces sources, il n'apparaît donc pas : pour l'ajouter, déposer `public/logos/pennylane.svg` et ajouter `{ name: "Pennylane", logo: "pennylane" }` dans `src/content/tools.ts`.

Les logos restent la propriété de leurs marques ; ils illustrent ici la compatibilité.

Logos des écoles : `public/logos/schools/` (PNG transparents de 160 px de haut). La liste et la hauteur affichée de chaque logo se règlent dans `src/components/Team.tsx`.

## Structure

```
src/
  config/site.ts          tout ce qui se configure
  content/tools.ts        outils du bandeau
  components/             une section = un composant
  layouts/Base.astro      <head>, SEO, polices, scripts
  pages/index.astro       la landing page (+ FAQ en données structurées)
  pages/mentions-legales.astro
  pages/og.png.ts         image Open Graph 1200×630 générée au build
  scripts/                le seul JS envoyé au navigateur
  styles/global.css       design tokens + animations
public/logos/             logos des outils
```

## Direction artistique

Inspirée de Qonto : sobre, pour que la page ait l'air pensée plutôt que générée.

- **Polices** : Familjen Grotesk pour les titres (préchargée), Inter pour le texte, auto-hébergées depuis Fontsource.
- **Couleurs** : papier chaud en fond de page (`--color-paper`), panneaux sable et argile (`--color-sand`, `--color-clay`), brun très foncé pour les blocs sombres (`--color-dark`). Le rouge de la marque reste un détail (le point du logo).
- **Titres en deux tons** : la seconde moitié en gris, avec `<span className="tone">`.
- **Boutons** rectangulaires (coins de 8 px) : noirs sur fond clair, blancs ou en contour sur fond sombre.
- **Grain** : un grain léger sur toute la page (fond du `body`), plus marqué sur les panneaux avec la classe `grain` (`grain-dark` sur fond sombre).
- **Sur fond sombre**, ajouter la classe `on-dark` à la section pour que les textes gris restent lisibles.
- **En-tête** sombre au-dessus du hero, clair ensuite.

## Ton

Le texte décrit des situations concrètes (« un devis recopié trois fois ») plutôt que des promesses générales, parle comme on parlerait à un dirigeant au téléphone, et évite les slogans. Un même libellé pour toutes les actions : « Réserver un audit gratuit ».
