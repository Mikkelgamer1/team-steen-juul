# Team Steen Juul – hjemmeside

Statisk site for Team Steen Juul og travtræner Steen Juul (licens 3106). Rulleeffekterne styres af en lille funktion i `assets/js/site.js`, der giver hvert `[data-p]` en værdi `--p` fra 0 til 1; uden JavaScript eller med reduceret bevægelse vises en rolig udgave. Ingen afhængigheder – kræver kun Node 20+.

```
node build.mjs            byg til dist/ med de gemte data
node build.mjs --hent     hent friske data fra Dansk Hestevæddeløb først
node build.mjs --serve    byg og vis på http://localhost:4173 (PORT=… for en anden port)
node build.mjs --test     selvtjek
```

## Det opdaterer sig selv

- **Heste i træning, resultater, kommende starter og statistik** hentes fra Dansk Hestevæddeløbs åbne data (samme kilde som travinfo.dk) og gemmes i `data/travinfo.json`.
- **Store sejre** (mindst 100.000 kr. i førstepræmie) findes automatisk for både stalden og kusken (`SITE.kusk`), og løbets navn hentes fra løbsdagens resultater. De vises under sæsonen, hos kusken og på resultatsiden – og vinder stalden Dansk Trav Derby, kommer sejren selv med på derbybanen.
- **Kuskens tal og fødselsår**, **år som træner** (fra 1. december 1974) og **antal derbysejre** regnes ud ved hver opbygning.
- Skrevet ind i hånden (ingen datakilde): næsten 8.000 sejre, 35 championater på Charlottenlund, Facebook-anbefalingerne (`SITE.anbefalinger`) og historien.
- `.github/workflows/opdater.yml` henter data hver morgen og ved hvert push til `main` og gemmer dem i repoet – så bygger Vercel en ny udgave. Fejler hentningen, bygges der videre med de gemte data.
- På Vercel bygges sitet med `vercel.json` og får projektets adresse automatisk. En `vercel.app`- eller `github.io`-adresse holdes ude af søgemaskinerne.

## Facebook-opslag på forsiden

De 5 seneste opslag fra staldens Facebook-**side** kan vises som kort på forsiden. De hentes ved den daglige opdatering via Meta's Graph API, og billederne gemmes på sitet selv – ingen indlejring, ingen cookies og intet klik.

Opsætning (én gang, af en administrator af Facebook-siden):

1. developers.facebook.com → **Mine apps** → **Opret app** (type: Virksomhed).
2. **Graph API Explorer**: vælg appen og siden, giv tilladelserne `pages_show_list` og `pages_read_engagement`, hent et **sideadgangstoken** og forlæng det i **Access Token Debugger**.
3. Find sidens id (`me?fields=id,name` med sidetokenet).
4. GitHub-repoet → **Settings → Secrets and variables → Actions**: secret `FB_TOKEN` = sidetokenet, variable `FB_SIDE` = sidens id.
5. Kør workflowet "Opdater data" én gang.

Sæt også sidens adresse i `SITE.facebook` (og Instagram i `SITE.instagram`), så "Følg stalden" og links vises.

## Ret indhold

Alt indhold står i `templates.mjs`: kontaktoplysninger i `SITE` øverst. Design i `assets/css/site.css` (farverne øverst: sort, papir, rød og grøn – fra løbsfarverne rød/grøn). Skrift: Big Shoulders Display, Schibsted Grotesk og Playfair Display (alle SIL Open Font License).

## Kilder

Kilderne står her og ikke på siderne. Billedkreditter står ved billederne og i bunden af siden.

| Oplysning | Kilde |
| --- | --- |
| Træningsliste, resultater, kommende starter, statistik, adresse og telefon | Dansk Hestevæddeløb (licens 3106), opdateres dagligt. Telefonen står også på Facebook-siden |
| Tallene på forsiden: næsten 8.000 sejre, 10 derbysejre som kusk, 35 championater på Charlottenlund | Sjællandske Medier (1. december 2024), Travsportens Hall of Fame (thof.dk), da.wikipedia.org og Charlottenlund Travbanes løbsprogram (5. januar 2025) |
| Historien på Om Steen og karrierens seks nedslag | Travsportens Hall of Fame (thof.dk – Steen Juul og Lilli Hanover), travet.dk (22. august 2023), Sjællandske Medier (1. december 2024), da.wikipedia.org (Steen Juul; Dansk Trav Derby), Team Juul på Facebook og Dansk Hestevæddeløb |
| Championater som kusk | da.wikipedia.org (til og med 2023), Charlottenlund Travbanes løbsprogram 5. januar 2025 (Årets kusk 2024), thof.dk (Halmstad 2004) |
| Derbysejrene | da.wikipedia.org (Steen Juul; Dansk Trav Derby), thof.dk og Team Juuls Facebook-side |
| Rex The Great-rekorden (1.09,7a over 1600 m) | Team Juuls egen formulering på Facebook (står som citat) |
| Patrick Larsens tal og store sejre | Dansk Hestevæddeløb (licens 526155), opdateres dagligt |
| Patricks år i Norge 2019–2025, hjemkomsten i januar 2026 og citatet om ansvar og initiativ | travet.dk: /patrick-skal-forsvare-sin-titel-i-nm/, /stor-succes-for-patrick-larsen/, /v75-sejr-til-patrick-larsen/, /patrick-larsen-champ-paa-bjerke-biri-og-harstad/, /patrick-larsen-hentede-110-000-skr/, /spaendende-fredag-for-patrick/, /patrick-larsen-runder-750-000/ |
| »Det nye dream team i dansk travsport.« | travservice.dk, 19. april 2026 |
| Nike High og Bali (nr. 2 i Dansk Trav Derby) | Team Juul på Facebook |
| Facebook-anbefalingerne (94 %, 27 anmeldelser) | Team Juuls Facebook-side, aflæst oktober 2026 |
| Firmanavn og CVR i bunden (Steen Juul Nielsen, CVR 50627217) | CVR-registret (datacvr.virk.dk), tjekket 16. november 2026 – samme adresse som stalden, startdato 1. december 1974 |
