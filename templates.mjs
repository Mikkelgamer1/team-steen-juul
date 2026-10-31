// Al HTML til sitet. Tekster rettes her; tal, heste og resultater kommer fra data/travinfo.json.

export const SITE = {
  // ← Bekræft domænet før lancering (kan også sættes med miljøvariablen SITE_URL). På Vercel bruges projektets adresse.
  url: (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL) || 'https://www.teamsteenjuul.dk').replace(/\/$/, ''),
  navn: 'Team Steen Juul',
  person: 'Steen Juul',
  fornavn: 'Steen',
  licens: 3106,
  telefon: '+45 40 33 45 16', // står på Facebook-siden og i licensregistret
  gade: 'Mannerupvej 8',
  sted: 'Osted',
  postnr: '4320',
  by: 'Lejre',
  facebook: 'https://www.facebook.com/teamsteenjuul', // opslag vises som kort, når FB_SIDE/FB_TOKEN er sat i GitHub
  instagram: '',
  travinfo: 'https://travinfo.dk/licenseholder-tabs/3106',
  wikipedia: 'https://da.wikipedia.org/wiki/Steen_Juul',
  thof: 'https://www.thof.dk/1970-til-1990/steen-juul',
  hjemmebane: 'https://www.travbanen.dk/',
  kort: 'https://www.google.com/maps/search/?api=1&query=Mannerupvej+8%2C+4320+Lejre',
};

// Ingen kendte sponsorer endnu. Tilføj { navn, url, logo, b, h, tekst } for at vise dem.
const PARTNERE = [];

// Dansk Trav Derby: [år, hest, rolle, note, foto]. Kilder: da.wikipedia.org (Steen Juul; Dansk Trav Derby), thof.dk, Team Juuls Facebook-side.
const DERBY = [
  [1983, 'For Ever Vixi', 'Kusk og træner', 'Kom i træning seks dage før løbet'],
  [1987, 'Konsonant', 'Kusk og træner'],
  [1990, 'New Quick', 'Kusk og træner'],
  [1993, 'Rudolf Le Ann', 'Kusk og træner'],
  [1994, 'Skalflex', 'Kusk', 'Træner: Leo S. Larsen'],
  [1997, 'Atom Tess', 'Kusk', 'Træner: Peter Rasmussen'],
  [2007, 'Leviti', 'Kusk og træner'],
  [2017, 'Bvlgari Peak', 'Kusk og træner'],
  [2018, 'Chock Nock', 'Træner', 'Björn Goop i sulkyen'],
  [2020, 'Extreme', 'Kusk og træner', '', 'extreme'],
  [2021, 'Festival of Speed', 'Kusk og træner', 'Nr. 10 som kusk – staldkammeraten Frodo Cash blev toer'],
];

// Karrieren i seks nedslag. Kilde: Travsportens Hall of Fame (thof.dk) og da.wikipedia.org.
const KARRIERE = [
  ['1968', 'Debut med sejr', 'Lidt over en uge efter sin 18-års fødselsdag kører Steen Juul sit første løb – den 31. august 1968 med Karat. Det bliver til sejr i første forsøg.'],
  ['1974', 'Egen stald', 'Som 24-årig bliver han selvstændig træner den 1. december 1974. To år senere tager han championatet i Skive fra banens syvdobbelte champion.'],
  ['1980', 'Landschampion', 'For første gang landschampion – med en ny sejrsrekord for en sæson: 216 sejre.'],
  ['1983', 'Til Charlottenlund', 'Flytter til Lunden den 15. januar 1983. Samme år sætter Dilli Hanover verdensrekord for hopper på 1000-meterbane, 1.13,5 – og For Ever Vixi giver den første derbysejr.'],
  ['2002', 'Legendary Lover K', 'Copenhagen Cup og den hidtil eneste dansktrænede samlede sejr i den europæiske Grand Circuit. Sæsonen giver 5.143.947 kr.'],
  ['2021', 'Derby nr. 10', 'Festival of Speed giver derbysejr nummer ti som kusk – og dermed tangerer Steen Juul N. J. Kosters rekord.'],
];

// Billeder: navn → [forhold, bredder…]. Kilder står i billedteksterne og i bunden.
const BILLEDER = {
  'festival': [1.529, 800, 1170],
  'extreme': [0.999, 600, 900, 1170],
  'solvalla': [1.289, 800, 1400, 2200],
  'graes': [1.499, 800, 1400, 2048],
  'nat-6': [1.515, 600, 850],
  'sort': [1.499, 700, 1024],
  'buket': [1.429, 700, 1170],
  'aarhus': [1.494, 700, 1170],
  'gorm': [1.414, 700, 1131],
  'daekken': [1.000, 720],
  'nike-high': [1.200, 700, 1200],
  'loeb-4': [1.515, 600, 850],
  'loeb-6': [1.515, 600, 850],
  'tribune': [1.515, 600, 850],
};
// Hestekort: hest-id → [billede, billedtekst fra Facebook-opslaget]
const HESTEKORT = {
  658123: ['nike-high', 'Den nye Team Lunden-hest i stalden. Den forrige, Bali, blev nr. 2 i Dansk Trav Derby. Kilde: Team Juul på Facebook'],
};

const BANER = { Sk: 'Skive', 'Ål': 'Aalborg', 'År': 'Aarhus', Od: 'Odense', Ch: 'Charlottenlund', Bi: 'Billund', Bh: 'Bornholm', Ny: 'Nykøbing F.', Bs: 'Skovbo', Kl: 'Klampenborg', 'Åb': 'Åby', 'Jæ': 'Jägersro', Ax: 'Axevalla' };
// Banernes omtrentlige placering [længdegrad, breddegrad] til det skematiske Danmarkskort (svenske baner og Bornholm vises ikke). Os = adressen i Osted.
const BANE_POS = { Sk: [9.06, 56.56], 'Ål': [9.87, 57.05], 'År': [10.2, 56.14], Od: [10.36, 55.4], Ch: [12.58, 55.75], Bi: [9.12, 55.73], Ny: [11.87, 54.77], Bs: [12.03, 55.46], Kl: [12.59, 55.77], Os: [11.93, 55.56] };
const HJEM = 'Ch';
const SVENSKE = ['Åb', 'Jæ', 'Ax'];
const NAV = [['om-steen/', 'Om Steen'], ['stalden/', 'Stalden'], ['heste/', 'Heste'], ['resultater/', 'Resultater']];

// ---------- små hjælpere ----------

let R = ''; // sti tilbage til roden fra den side, der bygges
let V = ''; // versionsmærke til css/js
let KORT;   // Danmarks omrids og projektionstal fra data/danmark.json

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nf = (n) => Number(n).toLocaleString('da-DK');
const kr = (n) => `${nf(n)}&nbsp;kr.`;
const d = (iso) => new Date(`${String(iso).slice(0, 10)}T12:00:00Z`);
const langDato = (iso) => new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d(iso));
const kortDato = (iso) => new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d(iso));
const ugedag = (iso) => new Intl.DateTimeFormat('da-DK', { weekday: 'long', timeZone: 'UTC' }).format(d(iso));
const dkListe = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} og ${a.at(-1)}`);
// API'et giver kun en kode. Ukendte koder er udenlandske baner (alle danske står i BANER), så de vises som Udlandet.
const bane = (kode) => BANER[kode] ?? 'Udlandet';
const tlfLink = SITE.telefon.replace(/\s/g, '');

/** "16,0a" → "1.16,0a". Tomt, hvis der ikke er en tid (fx galop uden tid). */
export const tid = (t) => (/^\d\d,\d/.test(t ?? '') ? `1.${t}` : '');

/** Hurtigste tid i en rekordstreng som "18,7k 14,3m *12,2am" → "1.12,2am". */
export const bedsteRekord = (mark) => {
  const tider = String(mark ?? '').replace(/\*/g, '').split(/\s+/).filter((x) => /^\d\d,\d/.test(x));
  tider.sort((a, b) => parseFloat(a.replace(',', '.')) - parseFloat(b.replace(',', '.')));
  return tider.length ? `1.${tider[0]}` : '';
};

/** Placering som den vises: 1, 2, 3 … "–" for uplaceret, "disk." for diskvalificeret. */
export const plac = (p) => (/^[1-9]\d*$/.test(p) ? p : p === 'd' ? 'disk.' : '–');

const pil = '<svg class="pil" viewBox="0 0 22 10" width="22" height="10" aria-hidden="true"><path d="M0 5h20M16 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
const ud = '<svg class="ud" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true"><path d="M1 9 9 1M3 1h6v6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const nyFane = '<span class="sr"> (åbner i ny fane)</span>';
const ekstern = (href, tekst, cls = 'link') => `<a class="${cls}" href="${href}" target="_blank" rel="noopener">${tekst} ${ud}${nyFane}</a>`;
const knap = (href, tekst, cls = '') => `<a class="knap ${cls}" href="${R}${href}">${tekst} ${pil}</a>`;
const link = (href, tekst, cls = '') => `<a class="link ${cls}" href="${R}${href}">${tekst} ${pil}</a>`;

const billede = (navn, alt, { sizes = '100vw', lazy = true, cls = '' } = {}) => {
  const [forhold, ...bredder] = BILLEDER[navn];
  const max = bredder.at(-1);
  return `<img${cls ? ` class="${cls}"` : ''} src="${R}assets/img/${navn}-${bredder[0]}.webp" srcset="${bredder.map((w) => `${R}assets/img/${navn}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}" width="${max}" height="${Math.round(max / forhold)}" alt="${esc(alt)}"${lazy ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}>`;
};
const etiket = (tekst, attr = '') => `<p class="etiket"${attr}>${tekst}</p>`;

/**
 * Tekst, der tændes ord for ord, mens man ruller. *Ord mellem stjerner* fremhæves.
 * Skærmlæsere får hele sætningen i ét stykke.
 */
const ordvis = (tekst) => {
  let fremhaev = false;
  const ord = tekst.split(' ');
  return `<span class="sr">${tekst.replace(/\*/g, '')}</span><span class="ordvis" aria-hidden="true" style="--antal:${ord.length}">${ord.map((w, n) => {
    if (w.startsWith('*')) fremhaev = true;
    const html = `<span style="--n:${n}"${fremhaev ? ' class="em"' : ''}>${w.replace(/\*/g, '')}</span>`;
    if (/\*[.,]?$/.test(w)) fremhaev = false;
    return html;
  }).join(' ')}</span>`;
};

// ---------- afledte tal ----------

function afled(data, idag) {
  const heste = [...data.heste].sort((a, b) => b.praemier - a.praemier || a.navn.localeCompare(b.navn, 'da'));
  const navne = new Map(heste.map((h) => [h.id, h.navn]));
  const medNavn = (r) => ({ ...r, hest: navne.get(r.hestId) ?? r.hest });
  const saeson = data.traenerStatistik.find((s) => s.sejre > 0) ?? data.traenerStatistik.find((s) => s.starter > 0) ?? data.traenerStatistik[0];
  const kusk = data.kuskStatistik.find((s) => s.aar === saeson.aar) ?? data.kuskStatistik[0];
  const iAar = data.resultater.filter((r) => r.dato.startsWith(String(saeson.aar)));
  const prNavn = {};
  for (const r of iAar) (prNavn[bane(r.bane)] ??= { kode: r.bane, navn: bane(r.bane), antal: 0 }).antal++;
  const banetal = Object.values(prNavn).sort((a, b) => b.antal - a.antal);
  return {
    heste,
    saeson,
    kusk,
    opdateret: langDato(data.opdateret),
    seneste: data.resultater.slice(0, 10).map(medNavn),
    kommende: data.kommende.filter((k) => k.dato >= idag).map(medNavn),
    banetal,
    banerIAar: [...banetal.filter((b) => b.navn !== 'Udlandet').map((b) => b.navn), ...(prNavn.Udlandet ? ['udenlandske baner'] : [])],
    svenske: banetal.filter((b) => SVENSKE.includes(b.kode)).map((b) => b.navn),
    hjemmestarter: prNavn[bane(HJEM)]?.antal ?? 0,
    loebsheste: heste.filter((h) => h.starter > 0),
    ungheste: heste.filter((h) => h.alder <= 2),
    ustartede: heste.filter((h) => !h.starter),
    fb: (data.facebook ?? []).slice(0, 5),
    kortheste: heste.filter((h) => HESTEKORT[h.id]),
  };
}

// ---------- fælles dele ----------

// Holdets mærke: løbsfarverne rød og grøn som et skråt delt felt + navnet.
const maerke = (cls = '') => `<span class="maerke ${cls}"><i class="maerke__farver" aria-hidden="true"></i><span class="maerke__ord"><small>Team</small>Steen Juul</span></span>`;

const top = (sti) => `
<header class="top">
  <div class="top__inner wrap">
    <a class="top__logo" href="${R || './'}" aria-label="${SITE.navn} – til forsiden">${maerke()}</a>
    <nav class="top__nav" aria-label="Primær navigation">
      ${NAV.map(([href, navn]) => `<a href="${R}${href}"${sti.startsWith(href) ? ' aria-current="page"' : ''}>${navn}</a>`).join('\n      ')}
    </nav>
    <a class="top__tlf" href="tel:${tlfLink}"><span class="sr">Ring til ${SITE.navn}: </span>${SITE.telefon}</a>
    <a class="knap knap--lille top__cta" href="${R}kontakt/"${sti.startsWith('kontakt/') ? ' aria-current="page"' : ''}>Kontakt</a>
    <button class="burger" type="button" aria-haspopup="dialog" aria-controls="menu" commandfor="menu" command="show-modal"><span>Menu</span><i aria-hidden="true"></i></button>
  </div>
</header>
<dialog class="menu" id="menu" aria-label="Menu">
  <div class="menu__top wrap">
    ${maerke()}
    <button class="burger burger--luk" type="button" data-luk commandfor="menu" command="close"><span>Luk</span><i aria-hidden="true"></i></button>
  </div>
  <nav class="menu__nav wrap" aria-label="Menu">
    <ul>
      ${[['', 'Forside'], ...NAV, ['kontakt/', 'Kontakt']].map(([href, navn], i) => `<li style="--i:${i}"><a href="${R}${href || (R ? '' : './')}"${(href ? sti.startsWith(href) : sti === '') ? ' aria-current="page"' : ''}><span>0${i + 1}</span>${navn}</a></li>`).join('\n      ')}
    </ul>
  </nav>
  <div class="menu__bund wrap">
    <a href="tel:${tlfLink}">${SITE.telefon}</a>
    <a href="${SITE.facebook}" target="_blank" rel="noopener">Team Juul på Facebook${nyFane}</a>
  </div>
</dialog>`;

const kontaktbaand = () => `
<section class="cta">
  <div class="wrap">
    ${etiket('Kontakt', ' data-vis')}
    <h2 data-vis style="--i:1">En hest til Team Juul?</h2>
    <a class="cta__tlf" href="tel:${tlfLink}" data-vis style="--i:2"><span class="sr">Ring til ${SITE.navn}: </span>${SITE.telefon}</a>
    <div class="cta__bund" data-vis style="--i:3">
      <p>Ring eller send en sms om træning, tilkøring af en unghest eller en plads i stalden. Man kan også skrive til holdet på Facebook.</p>
      <p class="valg"><a class="knap knap--lys" href="sms:${tlfLink}">Send en sms ${pil}</a> ${link('kontakt/', 'Alle kontaktoplysninger', 'link--lys')}</p>
    </div>
  </div>
</section>`;

const partnere = () => (PARTNERE.length ? `
<section class="sek sek--smal sek--kant">
  <div class="wrap partnere">
    <div>
      ${etiket('Sponsorer', ' data-vis')}
      <h2 data-vis style="--i:1">Med i ryggen.</h2>
    </div>
    <ul class="partnere__liste">${PARTNERE.map((p, i) => {
      const indhold = `<img src="${R}assets/img/${p.logo}" width="${p.b}" height="${p.h}" alt="${esc(p.navn)}" loading="lazy"><span>${esc(p.tekst)}${p.url ? ` ${ud}` : ''}</span>`;
      return `
      <li data-vis style="--i:${i + 1}">${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">${indhold}${nyFane}</a>` : `<div>${indhold}</div>`}</li>`;
    }).join('')}
    </ul>
  </div>
</section>` : '');

const bund = (o) => `
<footer class="bund">
  <div class="wrap bund__gitter">
    <div class="bund__brand">
      ${maerke('maerke--stor')}
      <p>Travtræner og kusk med Charlottenlund Trav som hjemmebane. Optaget i Travsportens Hall of Fame.</p>
    </div>
    <nav aria-label="Sider">
      <h2>Sider</h2>
      <ul>
        ${[...NAV, ['kontakt/', 'Kontakt']].map(([href, navn]) => `<li><a href="${R}${href}">${navn}</a></li>`).join('')}
      </ul>
    </nav>
    <div>
      <h2>Kontakt</h2>
      <ul>
        <li><a href="tel:${tlfLink}">${SITE.telefon}</a></li>
        <li><address>${SITE.navn}<br>${SITE.gade}, ${SITE.sted}<br>${SITE.postnr} ${SITE.by}</address></li>
      </ul>
    </div>
    <div>
      <h2>Følg med</h2>
      <ul>
        <li>${ekstern(SITE.facebook, 'Facebook', '')}</li>
        <li>${ekstern(SITE.travinfo, 'Travinfo', '')}</li>
        <li>${ekstern(SITE.thof, 'Hall of Fame', '')}</li>
        <li>${ekstern(SITE.hjemmebane, 'Charlottenlund Trav', '')}</li>
      </ul>
    </div>
  </div>
  <div class="wrap bund__linje">
    <p>Resultater og statistik: Dansk Hestevæddeløb · opdateret ${o.opdateret}</p>
    <p>Billeder: Team Juuls Facebook-side – fotografer bl.a. Burt Seeger, Kjeld Mikkelsen og Gormfoto. Solvalla-fotoet: Lars Jakobsson/Kanal 75, <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0${nyFane}</a></p>
    <p>© ${new Date().getFullYear()} ${SITE.navn}</p>
  </div>
  <p class="bund__ord" aria-hidden="true">Steen Juul</p>
</footer>`;

const organisation = () => ({
  '@type': ['SportsOrganization', 'LocalBusiness'],
  '@id': `${SITE.url}/#stald`,
  name: SITE.navn,
  alternateName: 'Team Juul',
  description: 'Travstald med Steen Juul som træner og kusk og Charlottenlund Trav som hjemmebane: træning af løbsheste og tilkøring af ungheste.',
  url: `${SITE.url}/`,
  telephone: tlfLink,
  image: `${SITE.url}/assets/img/og.jpg`,
  logo: `${SITE.url}/assets/img/ikon-512.png`,
  sport: 'Travsport',
  address: { '@type': 'PostalAddress', streetAddress: `${SITE.gade}, ${SITE.sted}`, postalCode: SITE.postnr, addressLocality: SITE.by, addressCountry: 'DK' },
  founder: { '@id': `${SITE.url}/#person` },
  sameAs: [SITE.facebook, SITE.travinfo].filter(Boolean),
});
const person = () => ({
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.person,
  birthDate: '1950-08-20',
  jobTitle: 'Travtræner og kusk',
  description: 'Dansk travtræner og kusk med næsten 8.000 sejre, ti sejre i Dansk Trav Derby som kusk og en plads i Travsportens Hall of Fame.',
  url: `${SITE.url}/om-steen/`,
  image: `${SITE.url}/assets/img/solvalla-1400.webp`,
  worksFor: { '@id': `${SITE.url}/#stald` },
  knowsAbout: ['Travsport', 'Træning af travheste', 'Dansk Trav Derby'],
  award: ['Travsportens Hall of Fame', 'Dansk Trav Derby – 10 sejre som kusk', 'Copenhagen Cup 2002', 'Landschampion 1980'],
  sameAs: [SITE.wikipedia, SITE.thof, SITE.travinfo],
});

function layout({ sti, titel, beskrivelse, indhold, o, klasse = '', noindex = false }) {
  const kanonisk = `${SITE.url}/${sti}`;
  const sideNavn = [...NAV, ['kontakt/', 'Kontakt']].find(([href]) => href === sti)?.[1];
  const graf = [
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.navn, inLanguage: 'da-DK', publisher: { '@id': `${SITE.url}/#stald` } },
    organisation(),
    person(),
    ...(sideNavn ? [{ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Forside', item: `${SITE.url}/` }, { '@type': 'ListItem', position: 2, name: sideNavn, item: kanonisk }] }] : []),
    ...(sti === 'om-steen/' ? [{ '@type': 'ProfilePage', '@id': `${kanonisk}#side`, url: kanonisk, name: titel, mainEntity: { '@id': `${SITE.url}/#person` }, inLanguage: 'da-DK' }] : []),
  ];
  return `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titel)}</title>
<meta name="description" content="${esc(beskrivelse)}">
${noindex ? '<meta name="robots" content="noindex">' : '<link rel="canonical" href="' + kanonisk + '">'}
<meta name="theme-color" content="#0d0d0c">
<meta property="og:type" content="${sti === 'om-steen/' ? 'profile' : 'website'}">
<meta property="og:locale" content="da_DK">
<meta property="og:site_name" content="${SITE.navn}">
<meta property="og:title" content="${esc(titel)}">
<meta property="og:description" content="${esc(beskrivelse)}">
<meta property="og:url" content="${kanonisk}">
<meta property="og:image" content="${SITE.url}/assets/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Team Steen Juul – travtræner og kusk, Charlottenlund">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="48x48" href="${R}assets/img/ikon-48.png">
<link rel="apple-touch-icon" href="${R}assets/img/ikon-180.png">
<link rel="preload" href="${R}assets/fonts/shoulders.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${R}assets/fonts/schibsted.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${R}assets/css/site.css?v=${V}">
<script>(function(h){h.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('fx');setTimeout(function(){window.__klar||h.classList.remove('js','fx')},2500)})(document.documentElement)</script>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graf }).replace(/</g, '\\u003c')}</script>
</head>
<body class="${klasse}">
<a class="skip" href="#indhold">Spring til indhold</a>
<div class="fremdrift" aria-hidden="true"></div>
${top(sti)}
<main id="indhold">
${indhold}
</main>
${bund(o)}
<script src="${R}assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

// Sidehoved på undersider: kæmpe titel og tekst, derunder et bredt billede, der glider langsommere end siden.
const sidehoved = ({ sti, h1, tekst, foto, alt = '', pos = '50% 50%', chips = [], kredit = '' }) => `
<section class="sidehoved">
  <div class="wrap">
    <nav class="sti" aria-label="Brødkrumme"><a href="${R}">Forside</a><span aria-hidden="true">/</span><span aria-current="page">${sti}</span></nav>
    <h1 class="sidehoved__titel">${h1}</h1>
    <div class="sidehoved__bund">
      <p class="indled">${tekst}</p>
      ${chips.length ? `<ul class="chips">${chips.map(([tal, tekst]) => `<li><b>${tal}</b>${tekst}</li>`).join('')}</ul>` : ''}
    </div>
  </div>
  <figure class="sidehoved__foto parallax" data-p style="--pos:${pos}">${billede(foto, alt, { sizes: '100vw', lazy: false })}${kredit ? `<figcaption>${kredit}</figcaption>` : ''}</figure>
</section>`;

/**
 * Skematisk Danmarkskort. `punkter` er [{ kode, navn, antal? }]: med antal tegnes en boble med tallet i,
 * uden antal en lille prik. Hjemmebanen får en ring, og der tegnes linjer derfra til de andre baner.
 */
function danmarkskort(punkter, beskrivelse) {
  const { bredde, hoejde, lon0, lat1, kx, ky, sti } = KORT;
  const max = Math.max(1, ...punkter.map((p) => p.antal ?? 0));
  const vist = punkter.filter((p) => BANE_POS[p.kode]).map((p) => {
    const [lon, lat] = BANE_POS[p.kode];
    const r = p.antal ? +(8 + 6 * Math.sqrt(p.antal / max)).toFixed(1) : 7;
    return { ...p, x: +((lon - lon0) * kx).toFixed(1), y: +((lat1 - lat) * ky).toFixed(1), r, ydre: p.kode === HJEM ? r + (p.antal ? 4 : 6) : r };
  });
  const hjem = vist.find((p) => p.kode === HJEM);
  const ruter = hjem ? vist.filter((p) => p !== hjem) : [];

  // Navnet sættes dér, hvor det bedst holder sig inden for kortet og fri af ruter og andre baner.
  const navn = (p) => {
    const w = p.navn.length * 6.4, m = p.ydre + 6;
    const steder = [['start', p.x + m, p.y + 3.7], ['middle', p.x, p.y + m + 9], ['end', p.x - m, p.y + 3.7], ['end', Math.min(p.x + p.ydre, bredde - 4), p.y + m + 9], ['middle', p.x, p.y - m - 2]];
    const straf = ([anker, x, y]) => { // 100 for at stikke ud over kortet, 10 for at ramme en rute eller en anden bane
      const x0 = (anker === 'start' ? x : anker === 'end' ? x - w : x - w / 2) - 3, x1 = x0 + w + 6, y0 = y - 12, y1 = y + 4;
      const inde = (px, py, luft = 0) => px > x0 - luft && px < x1 + luft && py > y0 - luft && py < y1 + luft;
      const udenfor = x0 < 0 || x1 > bredde || y0 < 0 || y1 > hoejde;
      const rammer = vist.some((q) => q !== p && inde(q.x, q.y, q.ydre))
        || ruter.some((q) => { for (let t = 0; t <= 1; t += 0.02) if (inde(hjem.x + (q.x - hjem.x) * t, hjem.y + (q.y - hjem.y) * t)) return true; return false; });
      return (udenfor ? 100 : 0) + (rammer ? 10 : 0);
    };
    // Hjemmebanen helst til venstre, uden for viften af ruter. Ved lige straf vinder det første sted på listen.
    const [anker, x, y] = (p === hjem ? [steder[2], ...steder] : steder).map((sted, i) => [straf(sted) + i / 100, sted]).sort((a, b) => a[0] - b[0])[0][1];
    return `<text class="kort__navn" x="${+x.toFixed(1)}" y="${+y.toFixed(1)}" text-anchor="${anker}">${esc(p.navn)}</text>`;
  };

  return `<svg class="kort__svg" viewBox="0 0 ${bredde} ${hoejde}" role="img" aria-label="${esc(beskrivelse)}">
        <path class="kort__land" d="${sti}"/>${ruter.map((p, i) => `
        <path class="kort__rute" pathLength="1" d="M${hjem.x},${hjem.y}L${p.x},${p.y}" style="--n:${i}"/>`).join('')}${vist.map((p, i) => `
        <g class="kort__bane" style="--n:${i}">${p === hjem ? `<circle class="kort__ring" cx="${p.x}" cy="${p.y}" r="${p.ydre}"/>` : ''}<circle class="kort__prik" cx="${p.x}" cy="${p.y}" r="${p.r}"/>${p.antal ? `<text class="kort__tal" x="${p.x}" y="${+(p.y + 3.3).toFixed(1)}" text-anchor="middle">${p.antal}</text>` : ''}${navn(p)}</g>`).join('')}
      </svg>`;
}

// ---------- genbrugte blokke ----------

const plKlasse = (p) => (p === '1' ? ' pl--1' : /^[23]$/.test(p) ? ' pl--23' : p === 'd' ? ' pl--tekst' : '');

const resultatRaekke = (r) => `
      <li class="res__r">
        <span class="pl${plKlasse(r.placering)}"><span class="sr">Placering: </span>${plac(r.placering)}</span>
        <span class="res__hest">${esc(r.hest)}</span>
        <span class="res__info"><time datetime="${r.dato}">${kortDato(r.dato)}</time> · ${esc(bane(r.bane))} · ${r.loeb}. løb · ${nf(r.distance)}&nbsp;m</span>
        <span class="res__tid">${tid(r.tid) || '<span aria-hidden="true">–</span><span class="sr">ingen tid</span>'}</span>
        <span class="res__kr">${r.praemie ? kr(r.praemie) : '<span aria-hidden="true">–</span><span class="sr">ingen præmie</span>'}</span>
      </li>`;
const resultatliste = (liste) => `<ol class="res">${liste.map(resultatRaekke).join('')}
    </ol>`;

const kommendeListe = (liste) => `<ul class="kom">${liste.map((k) => `
      <li>
        <time datetime="${k.dato}"><b>${new Date(`${k.dato}T12:00:00Z`).getUTCDate()}</b>${kortDato(k.dato).replace(/^\d+\.\s*/, '')}</time>
        <span class="kom__hest">${esc(k.hest)}</span>
        <span class="kom__bane">${ugedag(k.dato)} · ${esc(bane(k.bane))} · ${k.loeb}. løb${k.kusk ? ` · ${esc(k.kusk)}` : ''}</span>
      </li>`).join('')}
    </ul>`;
const ingenStarter = () => `<p class="tom">Ingen af staldens heste er startmeldt lige nu. Nye startlister kommer på ${ekstern(SITE.travinfo, 'Travinfo')}.</p>`;

const omHest = (h) => `${h.alder}-årig ${esc(h.koen.toLowerCase())}`;
const afstamning = (h) => (h.far ? `e. ${esc(h.far)} – ${esc(h.mor)}` : '');
const sejre = (h) => Number(h.placeringer.split('-')[0]) || 0;

// Hestekort med foto: de heste, der er præsenteret på Facebook.
const hestekort = (heste) => `<ul class="hestekort">${heste.map((h, i) => `
      <li data-vis style="--i:${i}">
        <a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">
          <figure>${billede(HESTEKORT[h.id][0], `${h.navn}, ${omHest(h)}`, { sizes: '(min-width: 901px) 50vw, 92vw' })}</figure>
          <div class="hestekort__tekst">
            <p class="hestekort__over">${h.starter ? 'Staldens profil' : 'Ny i stalden'}</p>
            <h3>${esc(h.navn)}</h3>
            <p>${omHest(h)} · ${afstamning(h)}</p>
            ${h.starter ? `<dl>
              <div><dt>Starter</dt><dd>${h.starter}</dd></div>
              <div><dt>Sejre</dt><dd>${sejre(h)}</dd></div>
              <div><dt>Indkørt</dt><dd>${kr(h.praemier)}</dd></div>
              <div><dt>Rekord</dt><dd>${bedsteRekord(h.rekord) || '–'}</dd></div>
            </dl>` : ''}
            <small>${esc(HESTEKORT[h.id][1])}</small>
          </div>
          ${nyFane}
        </a>
      </li>`).join('')}
    </ul>`;

// Kompakte kort for de øvrige startede heste.
const profilkort = (h, i) => `
      <a class="profil" href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener" data-vis style="--i:${i % 3}">
        <h3>${esc(h.navn)}</h3>
        <p>${omHest(h)}${afstamning(h) ? `<br>${afstamning(h)}` : ''}</p>
        <dl>
          <div><dt>Starter</dt><dd>${h.starter}</dd></div>
          <div><dt>1-2-3</dt><dd>${esc(h.placeringer)}</dd></div>
          <div><dt>Indkørt</dt><dd>${kr(h.praemier)}</dd></div>
        </dl>
        <span class="profil__ud">Travinfo ${ud}${nyFane}</span>
      </a>`;

// Hesterække til den fulde træningsliste.
const hesteraekke = (h, i) => `
      <li class="hest" data-vis style="--i:${i % 6}">
        <div class="hest__navn">
          <h3><a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">${esc(h.navn)}${nyFane}</a></h3>
          <p>${omHest(h)}${afstamning(h) ? ` · ${afstamning(h)}` : ''}</p>
        </div>
        ${h.starter ? `<dl class="hest__tal">
          <div><dt>Starter</dt><dd>${h.starter} <small>${esc(h.placeringer)}</small></dd></div>
          <div><dt>Indkørt</dt><dd>${kr(h.praemier)}</dd></div>
          <div><dt>Rekord</dt><dd>${bedsteRekord(h.rekord) || '–'}</dd></div>
        </dl>` : '<p class="hest__tal hest__tal--tom">Ustartet</p>'}
      </li>`;
const hestegruppe = (titel, heste) => (heste.length ? `
    <div class="gruppe">
      <h2 class="gruppe__titel" data-vis>${titel} <span>${heste.length}</span></h2>
      <ul class="hesteliste">${heste.map(hesteraekke).join('')}
      </ul>
    </div>` : '');

// To bånd i løbsfarverne, der krydser hinanden og glider hver sin vej, når man ruller.
const MERITTER = ['Næsten 8.000 sejre', '10 derbysejre som kusk', 'Travsportens Hall of Fame', 'Landschampion første gang i 1980', '25 sejre i De Jydske Grand Prix’er', 'Grand Circuit-vinder 2002'];
const baandListe = (punkter, skjult) => `<ul${skjult ? ' aria-hidden="true"' : ''}>${punkter.map((m) => `<li>${m}</li>`).join('')}</ul>`;
const baand = () => `
<section class="baand" data-p aria-label="Meritter">
  <div class="baand__linje baand__linje--roed"><div class="baand__flyt"><div class="baand__spor">${baandListe(MERITTER)}${baandListe(MERITTER, true)}</div></div></div>
  <div class="baand__linje baand__linje--groen" aria-hidden="true"><div class="baand__flyt"><div class="baand__spor">${[0, 1].map(() => baandListe(DERBY.map(([aar, hest]) => `<b>${aar}</b> ${hest}`), true)).join('')}</div></div></div>
</section>`;

// Derbysejrene på en vandret bane, der kører forbi, mens man ruller lodret.
const derby = () => `
<section class="derby" data-p="fast" style="--antal:${DERBY.length}">
  <div class="derby__ramme">
    <div class="wrap derby__hoved">
      <div>
        ${etiket('Dansk Trav Derby')}
        <h2>Elleve gange Derby.</h2>
      </div>
      <p>Ti sejre som kusk og ni som træner – fra For Ever Vixi i 1983 til Festival of Speed i 2021. Med ti sejre som kusk tangerer Steen Juul N. J. Kosters rekord.</p>
      <div class="derby__bar" aria-hidden="true"><i></i></div>
    </div>
    <ol class="derby__spor">${DERBY.map(([aar, hest, rolle, note, foto], i) => `
      <li class="derby__kort${foto ? ' derby__kort--foto' : ''}" style="--i:${i}">
        ${foto ? billede(foto, `${hest} og Steen Juul med vinderbuketten`, { sizes: '360px' }) : ''}
        <span class="derby__aar">${aar}</span>
        <div class="derby__tekst">
          <h3>${hest}</h3>
          <p>${rolle}${note ? `<br><span>${note}</span>` : ''}</p>
        </div>
      </li>`).join('')}
    </ol>
  </div>
</section>`;

// Karrieren som kort, der lægger sig oven på hinanden.
const karriere = () => `
<section class="sek karriere">
  <div class="wrap karriere__gitter">
    <div class="karriere__fast">
      ${etiket('Karrieren')}
      <h2>Et liv i sulkyen.</h2>
      <p class="indled">Fra staldmand i Skive til rekordholder på Charlottenlund – seks nedslag i en karriere, der begyndte i 1968.</p>
      <p class="valg">${link('om-steen/', 'Hele historien')}</p>
    </div>
    <ol class="stak">${KARRIERE.map(([aar, titel, tekst], i) => `
      <li class="stak__kort" style="--i:${i}">
        <span class="stak__aar">${aar}</span>
        <div>
          <h3>${titel}</h3>
          <p>${tekst}</p>
        </div>
      </li>`).join('')}
    </ol>
  </div>
</section>`;

const ydelser = (o) => `
    <ul class="ydelser">
      <li data-vis>
        <span class="ydelser__nr" aria-hidden="true">01</span>
        <h3>Træning af løbsheste</h3>
        <p>${o.heste.length} heste står på træningslisten. I ${o.saeson.aar} har staldens heste været til start i ${dkListe(o.banerIAar)}.</p>
      </li>
      <li data-vis style="--i:1">
        <span class="ydelser__nr" aria-hidden="true">02</span>
        <h3>Tilkøring af ungheste</h3>
        <p>${o.ungheste.length > 1 ? `Lige nu står ${o.ungheste.length} åringer og 2-årige på træningslisten og bygges op mod deres første starter.` : 'Ungheste køres til og bygges op mod deres første starter.'}</p>
      </li>
      <li data-vis style="--i:2">
        <span class="ydelser__nr" aria-hidden="true">03</span>
        <h3>Erfaring i sulkyen</h3>
        <p>${SITE.fornavn} har kørt løb siden 1968 og kører selv staldens heste – i ${o.kusk.aar} ${o.kusk.starter} starter og ${o.kusk.sejre} sejre som kusk.</p>
      </li>
    </ul>`;

// Billedgitteret: stor og bred = 2×2 felter, hoej = 1×2. Fjerde felt (valgfrit) styrer beskæringen. Hvert billede glider lidt i sin ramme.
const FOTOS = [
  ['graes', 'Travhest i fuld fart med kusken i rødt og grønt · Foto: Kjeld Mikkelsen', 'stor'],
  ['buket', 'Steen Juul med buketten efter en sejr', 'hoej', '30% 50%'],
  ['daekken', 'Steen Juul smiler i sulkyen efter en sejr', 'hoej', '62% 50%'],
  ['nat-6', 'Aftenløb under lysene · Foto: Burt Seeger', 'bred'],
  ['aarhus', 'Hest nummer 2 foran tribunen', 'bred'],
  ['sort', 'Sort travhest i trav foran tribunen', 'stor'],
  ['gorm', 'Mørk travhest i løb · Foto: Gormfoto', 'hoej', '44% 50%'],
  ['tribune', 'Hest nummer 4 i trav foran tribunen · Foto: Burt Seeger', 'hoej', '40% 50%'],
];
const galleri = (n = FOTOS.length) => `<ul class="galleri">${FOTOS.slice(0, n).map(([navn, alt, form, pos], i) => `
      <li class="galleri__${form}" data-p style="--i:${i % 4}${pos ? `; --pos:${pos}` : ''}">${billede(navn, alt, { sizes: form === 'stor' || form === 'bred' ? '(min-width: 901px) 50vw, 92vw' : '(min-width: 901px) 25vw, 46vw' })}</li>`).join('')}
    </ul>`;

const banebjaelker = (banetal) => {
  const max = Math.max(1, ...banetal.map((b) => b.antal));
  return `<ul class="baner">${banetal.map((b) => `
        <li style="--w:${Math.round((b.antal / max) * 100)}%"><span>${esc(b.navn)}</span><b>${b.antal}</b></li>`).join('')}
      </ul>`;
};

const kortfigur = (o) => `<figure class="kort" data-vis style="--i:2">
      ${danmarkskort(o.banetal, `Danmarkskort med staldens starter pr. bane i ${o.saeson.aar}: ${o.banetal.map((b) => `${b.navn} ${b.antal}`).join(', ')}.`)}
      <figcaption>Staldens starter pr. dansk bane i ${o.saeson.aar}. Ringen markerer hjemmebanen.</figcaption>
    </figure>`;

const statTabel = (titel, raekker) => `
      <div class="tabelboks" role="region" aria-label="${titel}" tabindex="0">
        <table class="tabel">
          <caption>${titel}</caption>
          <thead><tr><th scope="col">År</th><th scope="col">Starter</th><th scope="col">1.–2.–3.</th><th scope="col">Sejrs&shy;procent</th><th scope="col">Præmiesum</th></tr></thead>
          <tbody>${raekker.filter((s) => s.starter > 0).map((s) => `
            <tr><th scope="row">${s.aar}</th><td>${s.starter}</td><td>${s.sejre}–${s.toer}–${s.treer}</td><td>${s.procent}&nbsp;%</td><td>${kr(s.praemier)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>`;

const formkurve = (liste) => `<ol class="form" aria-label="Placeringer i de seneste ${liste.length} starter, nyeste først">${liste.map((r) => `<li class="pl${plKlasse(r.placering)}"><span class="sr">${esc(r.hest)}: </span>${plac(r.placering)}</li>`).join('')}</ol>`;

/** Lang tekst forkortes ved et ordskifte. */
const kortTekst = (s, max = 240) => (s.length <= max ? s : `${s.slice(0, s.lastIndexOf(' ', max))}…`);

// De seneste Facebook-opslag (hentet af build.mjs) som kort. Vises kun, når der er opslag.
const fbKort = (liste) => `
    <ul class="fbkort" aria-label="Seneste opslag fra Facebook">${liste.map((p, i) => `
      <li data-vis style="--i:${i}">
        <a href="${esc(p.link)}" target="_blank" rel="noopener">
          ${p.billede ? `<img src="${R}assets/fb/${p.billede}" alt="" loading="lazy" decoding="async">` : ''}
          <time datetime="${p.dato}">${langDato(p.dato)}</time>
          ${p.tekst ? `<p>${esc(kortTekst(p.tekst))}</p>` : ''}
          <span class="fbkort__mere">Se opslaget på Facebook ${ud}</span>${nyFane}
        </a>
      </li>`).join('')}
    </ul>`;

const foelg = (fb = []) => (SITE.facebook || fb.length ? `
<section class="sek sek--flade">
  <div class="wrap foelg">
    <div>
      ${etiket('Følg med', ' data-vis')}
      <h2 data-vis style="--i:1">Løbsdagene, før de sker.</h2>
      <p data-vis style="--i:2">På Facebook gennemgår Team Juul staldens starter før hver løbsdag – hest for hest – og fortæller, hvordan det gik${fb.length ? '. Her er de seneste opslag' : ''}.</p>
      <p class="valg" data-vis style="--i:3">${ekstern(SITE.facebook, 'Team Juul på Facebook', 'knap')}</p>
    </div>
    <div>
      ${!fb.length ? `<div class="fb" data-fb="${SITE.facebook}">
        <button class="knap knap--kant" type="button">Vis de seneste opslag ${pil}</button>
        <p class="fb__note">Opslagene hentes fra Facebook og sætter cookies derfra.</p>
      </div>` : ''}
    </div>
  </div>
  ${fb.length ? `<div class="wrap">${fbKort(fb)}</div>` : ''}
</section>` : '');

// ---------- sider ----------

const forside = (o) => `
<section class="hero" data-p="fast">
  <div class="hero__ramme">
    <figure class="hero__foto">${billede('festival', 'Festival of Speed med laurbærkrans og Steen Juul, der smiler', { sizes: '100vw', lazy: false })}<figcaption>Festival of Speed – derbyvinder 2021 · Foto: Kjeld Mikkelsen</figcaption></figure>
    <div class="hero__slor" aria-hidden="true"></div>
    <div class="hero__indhold wrap">
      <p class="hero__meta"><span>Travtræner og kusk</span><span>Charlottenlund Trav</span><span>Hall of Fame</span></p>
      <h1 class="hero__navn"><span class="sr">Team Steen Juul – Steen Juul, travtræner og kusk på Charlottenlund</span><span class="hero__ord hero__ord--1" aria-hidden="true"><span>Team</span></span><span class="hero__ord hero__ord--2" aria-hidden="true"><span>Juul</span></span></h1>
      <div class="hero__bund">
        <p class="hero__indled">Næsten 8.000 sejre, ti derbysejre som kusk og en plads i Travsportens Hall of Fame. I dag ${o.heste.length} heste i træning med Charlottenlund som hjemmebane.</p>
        <p class="valg">${knap('kontakt/', 'Kontakt stalden', 'knap--lys')} ${knap('heste/', 'Se hestene', 'knap--kant')}</p>
      </div>
    </div>
    <span class="hero__rul" aria-hidden="true">Rul</span>
  </div>
</section>
${baand()}

<section class="sek udsagn">
  <div class="wrap">
    ${etiket('Legenden')}
    <p class="udsagn__tekst" data-p>${ordvis('Fra en sejr med Karat i 1968 til *næsten 8.000 sejre,* *ti derbysejre* som kusk og en plads i travsportens *Hall of Fame.*')}</p>
    <ul class="rekorder">
      <li data-vis><small class="rekorder__over">Næsten</small><b data-tael="8000">8.000</b><span>sejre i karrieren</span><small>»tæt på 8000 sejre« – Sjællandske, dec. 2024</small></li>
      <li data-vis style="--i:1"><b data-tael="10">10</b><span>derbysejre som kusk</span><small>tangerer N. J. Kosters rekord</small></li>
      <li data-vis style="--i:2"><b data-tael="25">25</b><span>sejre i De Jydske Grand Prix’er</span><small>fra Camrose 1978 til Daytona 2019</small></li>
      <li data-vis style="--i:3"><b data-tael="35">35</b><span>championater på Charlottenlund</span><small>fra 1985 til 2024</small></li>
    </ul>
    <p class="note">Kilder: Sjællandske Medier (1. december 2024), Travsportens Hall of Fame (thof.dk), da.wikipedia.org og Charlottenlund Travbanes løbsprogram (5. januar 2025).</p>
  </div>
</section>
${derby()}
${karriere()}

<section class="sek citat-sek">
  <div class="wrap citat">
    <figure class="citat__foto parallax" data-p>${billede('extreme', 'Steen Juul og derbyvinderen Extreme med buketten efter en sejr', { sizes: '(min-width: 901px) 46vw, 92vw' })}</figure>
    <div class="citat__tekst">
      <blockquote data-vis>
        <p>»Steen Juul vil vinde – hver gang.«</p>
        <footer>Travsportens Hall of Fame om Steen Juul</footer>
      </blockquote>
      <p class="citat__note" data-vis style="--i:1">Billedet: Extreme og Steen efter sejren i Rex The Great – ifølge Team Juul i den hurtigste tid nogensinde på en dansk væddeløbsbane, 1.09,7a over 1600 meter. Extreme vandt Dansk Trav Derby i 2020.</p>
    </div>
  </div>
</section>

<section class="sek sek--papir">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket(`Sæson ${o.saeson.aar}`, ' data-vis')}
        <h2 data-vis style="--i:1">Sæsonen i tal.</h2>
      </div>
      <p data-vis style="--i:2">Officielle tal fra Dansk Hestevæddeløb, opdateret ${o.opdateret}.</p>
    </div>
    <div class="tal">
      <div class="tal__felt tal__felt--stor" data-vis><b data-tael="${o.saeson.sejre}">${o.saeson.sejre}</b><span>sejre som træner</span><small>på ${o.saeson.starter} starter i ${o.saeson.aar}</small></div>
      <div class="tal__felt" data-vis style="--i:1"><b><span data-tael="${o.saeson.procent}">${o.saeson.procent}</span><small>%</small></b><span>sejrsprocent</span></div>
      <div class="tal__felt" data-vis style="--i:2"><b><span data-tael="${o.saeson.praemier}">${nf(o.saeson.praemier)}</span><small>kr.</small></b><span>indkørt som træner</span></div>
      <div class="tal__felt tal__felt--groen" data-vis style="--i:3"><b data-tael="${o.heste.length}">${o.heste.length}</b><span>heste i træning – ${o.ustartede.length} unge på vej</span></div>
      <div class="tal__felt tal__felt--moerk" data-vis style="--i:4"><b data-tael="${o.kusk.sejre}">${o.kusk.sejre}</b><span>sejre som kusk på ${o.kusk.starter} starter</span></div>
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Hestene', ' data-vis')}
        <h2 data-vis style="--i:1">I stalden lige nu.</h2>
      </div>
      <p data-vis style="--i:2">${o.heste.length} heste på træningslisten – ${o.loebsheste.length} har været til start, og ${o.ustartede.length} unge heste er på vej. Her er de mest vindende.</p>
    </div>
    ${o.kortheste.length ? hestekort(o.kortheste) : ''}
    <div class="profiler">${o.loebsheste.filter((h) => !HESTEKORT[h.id]).slice(0, 5).map(profilkort).join('')}${o.ustartede.length ? `
      <a class="profil profil--vej" href="${R}heste/" data-vis style="--i:2">
        <h3>${o.ustartede.length} på vej</h3>
        <p>Unge heste, der endnu ikke har været til start:</p>
        <p class="profil__navne">${o.ustartede.map((h) => esc(h.navn)).join(' · ')}</p>
        <span class="profil__ud">Hele træningslisten ${pil}</span>
      </a>` : ''}
    </div>
    <p class="midt" data-vis>${knap('heste/', `Hele træningslisten (${o.heste.length})`, 'knap--lys')}</p>
  </div>
</section>

<section class="bredbillede parallax" data-p>
  ${billede('graes', 'Travhest i fuld fart med kusken i rødt og grønt', { sizes: '100vw' })}
  <div class="bredbillede__tekst wrap">
    <p class="bredbillede__stor" data-vis>Siden 1968.</p>
    <p data-vis style="--i:1">Første løb: 31. august 1968 med Karat – sejr i første forsøg. Foto: Kjeld Mikkelsen</p>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Fra banen', ' data-vis')}
        <h2 data-vis style="--i:1">Løbsdage.</h2>
      </div>
      <p data-vis style="--i:2">Billeder fra Team Juuls Facebook-side.</p>
    </div>
    ${galleri(5)}
  </div>
</section>

<section class="sek sek--papir">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Resultater', ' data-vis')}
        <h2 data-vis style="--i:1">Seneste starter.</h2>
      </div>
      <p data-vis style="--i:2">Staldens egne heste. Opdateret ${o.opdateret}.</p>
    </div>
    <div class="resgitter">
      <div class="panel" data-vis>
        ${resultatliste(o.seneste.slice(0, 6))}
        <p class="valg">${link('resultater/', 'Alle resultater og statistik')}</p>
      </div>
      <div class="panel panel--moerk" data-vis style="--i:1">
        <h3 class="mini">Kommende starter</h3>
        ${o.kommende.length ? kommendeListe(o.kommende.slice(0, 5)) : ingenStarter()}
        <h3 class="mini mini--luft">Formkurve</h3>
        ${formkurve(o.seneste)}
      </div>
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap duo">
    <div>
      ${etiket('Banerne', ' data-vis')}
      <h2 data-vis style="--i:1">Hjemme på Lunden.</h2>
      <p class="indled" data-vis style="--i:2">Charlottenlund har været hjemmebane siden 1983${o.hjemmestarter ? ` – ${o.hjemmestarter} af sæsonens starter er kørt her` : ''}.${o.svenske.length ? ` Stalden har også været til start i Sverige på ${dkListe(o.svenske)}.` : ''}</p>
      <div data-vis style="--i:3">${banebjaelker(o.banetal)}</div>
    </div>
    ${kortfigur(o)}
  </div>
</section>
${partnere()}
${foelg(o.fb)}
${kontaktbaand()}`;

// Championater som kusk: [antal, bane, år]. Kilder: da.wikipedia.org (til og med 2023), Charlottenlunds løbsprogram 5.1.2025 (Årets kusk 2024), thof.dk (Halmstad 2004).
const CHAMPIONATER = [['35', 'Charlottenlund', '1985–2024'], ['8', 'Landschampion', '1980–84, 1994, 1999, 2017'], ['7', 'Skive', '1976–82'], ['5', 'Odense', '1993, 1999, 2016, 2017, 2021'], ['4', 'Skovbo', '1984, 1989, 2000, 2001'], ['2', 'Billund', '1981, 1982'], ['1', 'Nykøbing F.', '2010'], ['1', 'Halmstad', '2004']];

const omSteen = (o, data) => `
${sidehoved({
  sti: 'Om Steen',
  h1: 'Steen Juul',
  tekst: `Født i ${data.traener.foedt}. Kørte sit første løb i 1968, blev træner i 1974 og har haft Charlottenlund som hjemmebane siden 1983. Optaget i Travsportens Hall of Fame.`,
  foto: 'solvalla',
  alt: 'Steen Juul i sulkyen bag Takethem på Solvalla i maj 2016',
  pos: '50% 40%',
  chips: [['1968', 'debut'], ['10', 'derbysejre som kusk'], [esc(data.traener.licens), 'licens']],
  kredit: 'Takethem og Steen Juul på Solvalla, maj 2016 · Foto: Lars Jakobsson/Kanal 75 · <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0<span class="sr"> (åbner i ny fane)</span></a>',
})}

<section class="sek">
  <div class="wrap artikel">
    <aside class="fakta" data-vis>
      <dl>
        <div><dt>Født</dt><dd>20. august 1950</dd></div>
        <div><dt>Første løb</dt><dd>31. august 1968 – Karat</dd></div>
        <div><dt>Træner siden</dt><dd>1. december 1974</dd></div>
        <div><dt>Licens</dt><dd>${esc(data.traener.licens)} – professionel træner og kusk</dd></div>
        <div><dt>Hjemmebane</dt><dd>${esc(data.traener.hjemmebane)} – siden 1983</dd></div>
        <div><dt>Løbsfarver</dt><dd>Rød og grøn</dd></div>
        <div><dt>Dansk Trav Derby</dt><dd>10 sejre som kusk, 9 som træner</dd></div>
        <div><dt>Heste i træning</dt><dd>${o.heste.length}</dd></div>
      </dl>
    </aside>
    <div class="prosa">
      ${etiket('Historien', ' data-vis')}
      <h2 data-vis>Skive-drengen.</h2>
      <p class="indled" data-vis>${SITE.person} er født den 20. august 1950 og lærte faget hos Victor Borregård i Skive og senere hos Jørgen Hill og svigerfaren Børge Simonsen i Aarhus.</p>
      <p data-vis>Debuten kom den 31. august 1968 med Karat – og blev til sejr i første forsøg. Derefter lod succesen vente på sig: de fire første sæsoner gav tre sejre på 115 starter. I 1972–74 blev det til 30.</p>
      <p data-vis>Den 1. december 1974 blev han som 24-årig selvstændig træner. I 1976 tog han championatet i Skive fra banens syvdobbelte champion Karsten Andersen, og året efter slog han Tarok i Skovbo Eliteløb med Pondus Hanover – til odds 26. I 1980 blev han landschampion for første gang med en ny sæsonrekord på 216 sejre.</p>
      <h2 data-vis>Lunden.</h2>
      <p data-vis>Den 15. januar 1983 flyttede Steen Juul til Charlottenlund. Samme år vandt Dilli Hanover i 1.13,5 – dansk rekord og verdensrekord for hopper på 1000-meterbane, en rekord der holdt i 16 år. Og samme år kom den første derbysejr med For Ever Vixi, som han havde fået i træning blot seks dage før løbet.</p>
      <p data-vis>I 1985 fulgte det første Kriterium med Join Løjbjerg og det første af 35 championater på Charlottenlund til og med 2024.</p>
      <h2 data-vis>Ude i Europa.</h2>
      <p data-vis>Det største år ude kom i 2002. Legendary Lover K vandt Copenhagen Cup, Elite Rennen i Gelsenkirchen, Momarken Grand Prix og Kymi Grand Prix og blev den hidtil eneste dansktrænede samlede vinder af den europæiske Grand Circuit – med 5.143.947 kr. indkørt på sæsonen. Året efter blev parret nr. 7 i Prix d’Amérique.</p>
      <p data-vis>Senere har stjerner som Classic Grand Cru, In Cap’N Gown, Korvet Klintholm og Neo Holmsminde haft usædvanligt lange karrierer i stalden.</p>
      <blockquote data-vis><p>»Steen Juul vil vinde – hver gang.«</p><cite>Travsportens Hall of Fame (thof.dk)</cite></blockquote>
      <h2 data-vis>Rekorden.</h2>
      <p data-vis>I Dansk Trav Derby har Steen Juul ti sejre som kusk – fra For Ever Vixi i 1983 til Festival of Speed i 2021 – og tangerer dermed N. J. Kosters rekord. Som træner har han vundet løbet ni gange, blandt andet i 2018, da Björn Goop kørte Chock Nock.</p>
      <p data-vis>De Jydske Grand Prix’er for 2- til 4-årige har givet 25 sejre, fra Camrose i 1978 til Daytona i 2019. Sejrstallet som kusk var officielt opgjort til 7.602 pr. 1. april 2020, og ved 50-års jubilæet som træner i december 2024 var han ifølge Sjællandske tæt på 8.000 sejre.</p>
      <p data-vis>I dag har ${SITE.navn} ${o.heste.length} heste på træningslisten, og i ${o.saeson.aar} er det indtil videre blevet til ${o.saeson.sejre} sejre på ${o.saeson.starter} starter som træner.</p>
      <p class="valg" data-vis>${ekstern(SITE.travinfo, 'Profilen på Travinfo')} ${ekstern(SITE.thof, 'Hall of Fame-artiklen')}</p>
      <p class="note" data-vis>Kilder: Travsportens Hall of Fame (thof.dk), Sjællandske Medier (1. december 2024), da.wikipedia.org (Steen Juul; Dansk Trav Derby), Team Juul på Facebook og Dansk Hestevæddeløb.</p>
    </div>
  </div>
</section>

<section class="sek sek--roed">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Dansk Trav Derby', ' data-vis')}
        <h2 data-vis style="--i:1">Alle derbysejrene.</h2>
      </div>
      <p data-vis style="--i:2">Dansk Trav Derby køres hvert år sidste søndag i august på Charlottenlund – og er Danmarks største travløb.</p>
    </div>
    <ol class="derbyliste">${DERBY.map(([aar, hest, rolle, note], i) => `
      <li data-vis style="--i:${i % 4}"><span class="derbyliste__aar">${aar}</span><b>${hest}</b><span>${rolle}${note ? ` · ${note}` : ''}</span></li>`).join('')}
    </ol>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Championater', ' data-vis')}
        <h2 data-vis style="--i:1">Flest sejre på banen.</h2>
      </div>
      <p data-vis style="--i:2">Den kusk, der vinder flest løb på en bane i løbet af et år, bliver banens champion. Kilder: da.wikipedia.org (til og med 2023), Charlottenlund Travbanes løbsprogram (Årets kusk 2024) og Travsportens Hall of Fame.</p>
    </div>
    <ul class="champ">${CHAMPIONATER.map(([tal, sted, aar], i) => `
      <li data-vis style="--i:${i % 4}"><b data-tael="${tal}">${tal}</b><span>${sted}</span><small>${aar}</small></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sek sek--papir">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Statistik', ' data-vis')}
        <h2 data-vis style="--i:1">Sæson for sæson.</h2>
      </div>
      <p data-vis style="--i:2">Officielle tal fra Dansk Hestevæddeløb, opdateret ${o.opdateret}.</p>
    </div>
    <div class="tabeller" data-vis>
      ${statTabel('Som træner', data.traenerStatistik)}
      ${statTabel('Som kusk', data.kuskStatistik)}
    </div>
  </div>
</section>
${partnere()}
${kontaktbaand()}`;

const stalden = (o) => `
${sidehoved({
  sti: 'Stalden',
  h1: 'Stalden',
  tekst: `${SITE.navn} har adresse på ${SITE.gade.replace(/ \d+$/, '')} i ${SITE.sted} ved ${SITE.by} og Charlottenlund Trav som hjemmebane – med ${o.heste.length} heste på træningslisten.`,
  foto: 'gorm',
  alt: 'Mørk travhest i løb',
  pos: '50% 50%',
  chips: [[o.heste.length, 'heste i træning'], [o.ungheste.length, 'åringer og 2-årige'], [o.banetal.length, `baner i ${o.saeson.aar}`]],
  kredit: 'Foto: Gormfoto',
})}

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Det tilbyder stalden', ' data-vis')}
        <h2 data-vis style="--i:1">Træning og tilkøring.</h2>
      </div>
      <p data-vis style="--i:2">Kontakt stalden for pris og en snak om din hest.</p>
    </div>
    ${ydelser(o)}
  </div>
</section>

<section class="sek sek--flade">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Fra banen', ' data-vis')}
        <h2 data-vis style="--i:1">Løbsdage.</h2>
      </div>
      <p data-vis style="--i:2">Billeder fra Team Juuls Facebook-side.</p>
    </div>
    ${galleri()}
  </div>
</section>

<section class="sek">
  <div class="wrap duo">
    <div>
      ${etiket('Hjemmebanen', ' data-vis')}
      <h2 data-vis style="--i:1">Charlottenlund Trav.</h2>
      <p class="indled" data-vis style="--i:2">Nordens ældste travbane, grundlagt i 1891 – og banen, hvor Dansk Trav Derby køres hvert år. Steen Juul har haft Lunden som base siden den 15. januar 1983${o.hjemmestarter ? `, og i ${o.saeson.aar} er ${o.hjemmestarter} af staldens starter kørt her` : ''}.</p>
      <div data-vis style="--i:3">${banebjaelker(o.banetal)}</div>
      <p class="valg" data-vis style="--i:4">${ekstern(SITE.hjemmebane, 'travbanen.dk')}</p>
    </div>
    ${kortfigur(o)}
  </div>
</section>

<section class="sek sek--top0">
  <div class="wrap">
    <div class="adresse" data-vis>
      <div>
        ${etiket('Adresse')}
        <address class="adresse__stor">${SITE.navn}<br>${SITE.gade}, ${SITE.sted}<br>${SITE.postnr} ${SITE.by}</address>
      </div>
      <p>${ekstern(SITE.kort, 'Åbn i Google Maps', 'knap')}</p>
    </div>
  </div>
</section>
${partnere()}
${kontaktbaand()}`;

const heste = (o) => `
${sidehoved({
  sti: 'Heste',
  h1: 'Heste i træning',
  tekst: 'Træningslisten kommer direkte fra Dansk Hestevæddeløb og følger automatisk med, når heste kommer til eller rejser videre.',
  foto: 'sort',
  alt: 'Sort travhest i trav foran tribunen',
  pos: '50% 50%',
  chips: [[o.loebsheste.length, 'startede'], [o.ustartede.length, 'på vej'], [o.ungheste.length, 'åringer og 2-årige']],
})}

${o.kortheste.length ? `
<section class="sek sek--smal">
  <div class="wrap">
    ${hestekort(o.kortheste)}
  </div>
</section>` : ''}

<section class="sek sek--papir">
  <div class="wrap">
    ${hestegruppe('Løbsheste', o.heste.filter((h) => h.alder >= 3))}
    ${hestegruppe('2-årige', o.heste.filter((h) => h.alder === 2))}
    ${hestegruppe('Åringer', o.heste.filter((h) => h.alder <= 1))}
    <p class="note" data-vis>Starter, placeringer (1.–2.–3.), præmiesum og rekord er livstal. Rekorden er hestens hurtigste kilometertid; a = autostart, k/m/l = kort, mellem og lang distance. Klik på en hest for at se den på Travinfo. Kilde: Dansk Hestevæddeløb, opdateret ${o.opdateret}.</p>
  </div>
</section>
${kontaktbaand()}`;

const resultater = (o, data) => `
${sidehoved({
  sti: 'Resultater',
  h1: 'Resultater',
  tekst: `Staldens seneste starter, kommende løb og sæsonens tal. Data kommer fra Dansk Hestevæddeløb og er senest opdateret ${o.opdateret}.`,
  foto: 'aarhus',
  alt: 'Hest nummer 2 foran tribunen',
  pos: '50% 55%',
  chips: [[o.saeson.sejre, `sejre i ${o.saeson.aar}`], [`${o.saeson.procent} %`, 'sejrsprocent'], [o.kusk.sejre, 'sejre som kusk']],
})}

<section class="sek">
  <div class="wrap">
    ${etiket(`Sæson ${o.saeson.aar} som træner`, ' data-vis')}
    <dl class="kpi" data-vis>
      <div><dt>Starter</dt><dd>${o.saeson.starter}</dd></div>
      <div><dt>Sejre</dt><dd>${o.saeson.sejre}</dd></div>
      <div><dt>2.-pladser</dt><dd>${o.saeson.toer}</dd></div>
      <div><dt>3.-pladser</dt><dd>${o.saeson.treer}</dd></div>
      <div><dt>Sejrsprocent</dt><dd>${o.saeson.procent}<small>%</small></dd></div>
      <div><dt>Indkørt</dt><dd>${nf(o.saeson.praemier)}<small>kr.</small></dd></div>
    </dl>
    <div class="formboks" data-vis style="--i:1">
      <h3 class="mini">Formkurve – de seneste ${o.seneste.length} starter</h3>
      ${formkurve(o.seneste)}
    </div>
  </div>
</section>

<section class="sek sek--papir">
  <div class="wrap resgitter">
    <div class="panel" data-vis>
      <h2 class="mini">De seneste ${o.seneste.length} starter</h2>
      ${resultatliste(o.seneste)}
      <p class="note">Tider er kilometertider. a = autostart, g = galop undervejs. – = uplaceret, disk. = diskvalificeret.</p>
    </div>
    <div class="panel panel--moerk" data-vis style="--i:1">
      <h2 class="mini">Kommende starter</h2>
      ${o.kommende.length ? kommendeListe(o.kommende) : ingenStarter()}
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Statistik', ' data-vis')}
        <h2 data-vis style="--i:1">Sæson for sæson.</h2>
      </div>
      <p data-vis style="--i:2">Alle resultater og detaljer findes hos Dansk Hestevæddeløb. ${ekstern(SITE.travinfo, 'Åbn Travinfo')}</p>
    </div>
    <div class="tabeller" data-vis>
      ${statTabel('Som træner', data.traenerStatistik)}
      ${statTabel('Som kusk', data.kuskStatistik)}
    </div>
  </div>
</section>
${kontaktbaand()}`;

const kontakt = () => `
${sidehoved({
  sti: 'Kontakt',
  h1: 'Kontakt',
  tekst: 'Har du en hest, der skal i træning, eller en unghest, der skal køres til? Ring, send en sms eller skriv til holdet på Facebook.',
  foto: 'buket',
  alt: 'Steen Juul med buketten efter en sejr',
  pos: '40% 45%',
})}

<section class="sek">
  <div class="wrap kontakt">
    <div class="kontakt__felt kontakt__felt--tlf" data-vis>
      <h2 class="mini">Telefon</h2>
      <p class="kontakt__stor"><a href="tel:${tlfLink}">${SITE.telefon}</a></p>
      <p class="valg"><a class="knap knap--lys" href="tel:${tlfLink}">Ring op ${pil}</a> <a class="link link--lys" href="sms:${tlfLink}">Send en sms ${pil}</a></p>
    </div>
    <div class="kontakt__felt" data-vis style="--i:1">
      <h2 class="mini">Facebook</h2>
      <p class="kontakt__stor kontakt__stor--mail"><a href="${SITE.facebook}" target="_blank" rel="noopener">facebook.com/teamsteenjuul${nyFane}</a></p>
      <p class="valg">${ekstern(SITE.facebook, 'Skriv til Team Juul', 'knap')}</p>
    </div>
    <div class="kontakt__felt kontakt__felt--kort" data-vis style="--i:2">
      <div>
        <h2 class="mini">Adresse</h2>
        <address class="kontakt__adr">${SITE.navn}<br>${SITE.gade}, ${SITE.sted}<br>${SITE.postnr} ${SITE.by}</address>
        <p class="valg">${ekstern(SITE.kort, 'Find vej')}</p>
      </div>
      <div class="kort kort--mini">${danmarkskort([{ kode: 'Os', navn: 'Osted' }], 'Danmarkskort, hvor Osted ved Lejre er markeret')}</div>
    </div>
  </div>
</section>
${foelg()}`;

const ikkeFundet = () => `
${sidehoved({
  sti: 'Fejl 404',
  h1: 'Siden findes ikke',
  tekst: `Adressen er forkert, eller siden er flyttet. <a class="link" href="${R}">Til forsiden ${pil}</a>`,
  foto: 'nat-6',
  alt: 'Aftenløb under lysene',
  pos: '50% 50%',
})}`;

/** Alle sider som [{ sti, html }]. `idag` er YYYY-MM-DD, `v` et versionsmærke til css/js. */
export function sider(data, { v, idag, kort }) {
  V = v;
  KORT = kort;
  const o = afled(data, idag);
  const side = (sti, def) => {
    R = sti === '404.html' ? new URL(SITE.url + '/').pathname : sti ? '../' : '';
    return { sti: sti.endsWith('.html') ? sti : `${sti}index.html`, url: sti, html: layout({ sti, o, ...def() }) };
  };
  return [
    side('', () => ({
      titel: `Steen Juul – travtræner og kusk på Charlottenlund | ${SITE.navn}`,
      beskrivelse: `${SITE.navn}: Hall of Fame-træneren med næsten 8.000 sejre og ti derbysejre som kusk. ${o.heste.length} heste i træning med Charlottenlund Trav som hjemmebane.`,
      klasse: 'forside',
      indhold: forside(o),
    })),
    side('om-steen/', () => ({
      titel: `Om Steen Juul – 10 derbysejre og Hall of Fame | ${SITE.navn}`,
      beskrivelse: `Steen Juul, født 1950: første løb i 1968, træner siden 1974, ti sejre i Dansk Trav Derby som kusk, Grand Circuit-vinder med Legendary Lover K og optaget i Travsportens Hall of Fame.`,
      indhold: omSteen(o, data),
    })),
    side('stalden/', () => ({
      titel: `Stalden – træning og tilkøring af travheste | ${SITE.navn}`,
      beskrivelse: `${SITE.navn} træner ${o.heste.length} travheste med Charlottenlund Trav som hjemmebane. Træning af løbsheste og tilkøring af ungheste. ${SITE.gade}, ${SITE.sted}, ${SITE.postnr} ${SITE.by}.`,
      indhold: stalden(o),
    })),
    side('heste/', () => ({
      titel: `Heste i træning hos Steen Juul | ${SITE.navn}`,
      beskrivelse: `Se de ${o.heste.length} travheste, der lige nu er i træning hos ${SITE.person} – med afstamning, starter, præmiesum og rekord.`,
      indhold: heste(o),
    })),
    side('resultater/', () => ({
      titel: `Resultater og statistik | ${SITE.navn}`,
      beskrivelse: `Seneste resultater, kommende starter og sæsonstatistik for travtræner ${SITE.person}: ${o.saeson.sejre} sejre på ${o.saeson.starter} starter i ${o.saeson.aar}.`,
      indhold: resultater(o, data),
    })),
    side('kontakt/', () => ({
      titel: `Kontakt Team Steen Juul – travtræner, Charlottenlund`,
      beskrivelse: `Kontakt ${SITE.navn} på telefon ${SITE.telefon} eller via Facebook. Adresse: ${SITE.gade}, ${SITE.sted}, ${SITE.postnr} ${SITE.by}.`,
      indhold: kontakt(),
    })),
    side('404.html', () => ({
      titel: `Siden findes ikke | ${SITE.navn}`,
      beskrivelse: `Siden findes ikke. Gå til forsiden for ${SITE.navn} – travtræner ${SITE.person}.`,
      noindex: true,
      indhold: ikkeFundet(),
    })),
  ];
}
