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
| `nextSlot` | Prochain créneau affiché dans le hero |
| `commitmentThreshold` | Seuil de l'engagement (« au moins [5 heures] par semaine ») |

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

- `cta_click` avec la propriété `location` (`header`, `hero`, `use_cases`, `offer`, `mobile_sticky`, `final`) ;
- `booking_completed` quand une réservation Cal.com aboutit.

Il faut déclarer ces deux objectifs (« Custom event goals ») dans Plausible.

## Structure de la page

Construite sur les principes de Hormozi (*$100M Offers*) : une seule action possible (réserver le diagnostic), pas de menu, et un enchaînement qui monte la valeur perçue.

1. **Hero** : le résultat promis, le délai (30 jours), l'effort nul (« vous ne touchez pas une ligne de code »), la rareté (3 diagnostics par mois).
2. **Outils** : logos des outils connectés, pour montrer que rien ne change dans le quotidien.
3. **Problème**, puis **ce qu'on installe** : la douleur, puis le résultat concret.
4. **Comparaison** : ce qu'on vous vend d'habitude face à ce qu'on fait.
5. **L'offre** : les 5 étapes avec leur délai, les bonus et la garantie dans le même bloc.
6. **Qui est derrière**, **FAQ** (lève les objections), **CTA final**.

## Photo du hero

Sans photo, le hero est un fond sombre uni. Pour mettre une photo : déposer **`src/assets/hero.jpg`** (horizontale, 2400 px de large minimum). Astro génère automatiquement 5 tailles en AVIF et la précharge. Le voile sombre est conservé pour la lisibilité.

## Logos des outils

SVG dans `public/logos/`, issus des jeux d'icônes open source [Iconify Logos](https://github.com/gilbarbara/logos), [VS Code Icons](https://github.com/vscode-icons/vscode-icons) et [Simple Icons](https://simpleicons.org), plus la marque Qonto tirée de son paquet npm officiel `@qonto/login-button`.

Le bandeau n'affiche que des logos. Pennylane n'a pas de logo dans ces sources, il n'apparaît donc pas : pour l'ajouter, déposer `public/logos/pennylane.svg` et ajouter `{ name: "Pennylane", logo: "pennylane" }` dans `src/content/tools.ts`.

Les logos restent la propriété de leurs marques ; ils illustrent ici la compatibilité.

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

Polices : Bricolage Grotesque (titres, avec l'axe de taille optique) et Inter (texte), auto-hébergées depuis les paquets Fontsource. Seule la police des titres est préchargée.
