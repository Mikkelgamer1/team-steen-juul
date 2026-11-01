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
  // Staldens kusk – hans tal hentes hver dag fra Dansk Hestevæddeløb (licensregistret: født 2003, jockey hos Steen Juul).
  kusk: { navn: 'Patrick Larsen', licens: 526155, foedt: 2003 },
  // Anbefalinger på Facebook-siden (aflæst oktober 2026) – ret tallene, når de ændrer sig, eller sæt til null.
  anbefalinger: { procent: 94, antal: 27, aflaest: 'oktober 2026' },
  kort: 'https://www.google.com/maps/search/?api=1&query=Mannerupvej+8%2C+4320+Lejre',
};

// Ingen kendte sponsorer endnu. Tilføj { navn, url, logo, b, h, tekst } for at vise dem.
const PARTNERE = [];

// Dansk Trav Derby: [år, hest, rolle, note, foto]. Kilder: da.wikipedia.org (Steen Juul; Dansk Trav Derby), thof.dk, Team Juuls Facebook-side.
const DERBY = [
  [1983, 'For Ever Vixi', 'Kusk og træner', 'Kom i træning seks dage før løbet'],
  [1987, 'Konsonant', 'Kusk og træner', 'Opdrætteren var kun 13 år'],
  [1990, 'New Quick', 'Kusk og træner', 'Senere avlschampion i 2001 og 2002'],
  [1993, 'Rudolf Le Ann', 'Kusk og træner'],
  [1994, 'Skalflex', 'Kusk', 'Træner: Leo S. Larsen'],
  [1997, 'Atom Tess', 'Kusk', 'Træner: Peter Rasmussen'],
  [2007, 'Leviti', 'Kusk og træner'],
  [2017, 'Bvlgari Peak', 'Kusk og træner'],
  [2018, 'Chock Nock', 'Træner', 'Björn Goop i sulkyen'],
  [2020, 'Extreme', 'Kusk og træner'],
  [2021, 'Festival of Speed', 'Kusk og træner', 'Nr. 10 som kusk – staldkammeraten Frodo Cash blev toer'],
];
// Billeder til derbykortene: år → [billede, alt, kredit, beskæring]. 2017, 2018 og 2020 er fra Team Juuls Facebook-collage
// "Derbyvinder 17, 18 & 20". 1983 er fra travet.dk (22.8.2023) og 1987 fra travsportshistorie.dk (18.8.2025), begge foto Burt Seeger. 1993, 1994, 1997 og 2007 er fra travsportshistorie.dk (Dansk Trav Derby 1990-99 og 2000-2009, Kenn Erik Bech) uden fotografnavn. 1990 er fra Hall of Fame (thof.dk, Lilli Hanover), foto Burt Seeger. Vindere uden billede får en tegnet laurbærkrans.
const DERBYFOTO = {
  1983: ['derby-1983', 'For Ever Vixi med laurbærkrans og Charlottenlund Travbanes dækken efter derbysejren i 1983', 'Foto: Burt Seeger', '88% 50%'],
  1987: ['derby-1987', 'Konsonant med sin 13-årige opdrætter, Camilla Rasmussen, der krammer derbypokalen i 1987', 'Foto: Burt Seeger', '50% 32%'],
  1990: ['derby-1990', 'New Quick i trav med startnummer 2, sort-hvidt arkivbillede', 'Foto: Burt Seeger', '6% 50%'],
  1993: ['derby-1993', 'Rudolf Le Ann i fuld fart med Steen Juul i sulkyen', 'Kilde: travsportshistorie.dk', '28% 50%'],
  1994: ['derby-1994', 'Skalflex med startnummer 5, sort-hvidt arkivbillede', 'Kilde: travsportshistorie.dk', '50% 40%'],
  1997: ['derby-1997', 'Atom Tess i opløbet', 'Kilde: travsportshistorie.dk', '30% 50%'],
  2007: ['derby-2007', 'Leviti med laurbærkrans og derbydækken, mens kusken vinker med buketten', 'Kilde: travsportshistorie.dk', '50% 40%'],
  2017: ['derby-2017', 'Bvlgari Peak med laurbærkrans og derbydækken i 2017', 'Foto: Burt Seeger', '30% 50%'],
  2018: ['derby-2018', 'Chock Nock med laurbærkrans foran publikum i 2018', 'Foto: Burt Seeger', '46% 40%'],
  2020: ['derby-2020', 'Extreme med laurbærkrans og derbydækken i 2020', '', '35% 30%'],
  2021: ['festival', 'Festival of Speed med laurbærkrans og Steen Juul', 'Foto: Kjeld Mikkelsen', '50% 20%'],
};

// Karrieren i seks nedslag. Kilde: Travsportens Hall of Fame (thof.dk) og da.wikipedia.org.
const KARRIERE = [
  ['1968', 'Debut med sejr', 'Lidt over en uge efter sin 18-års fødselsdag kører Steen Juul sit første løb – den 31. august 1968 med Karat. Det bliver til sejr i første forsøg. De første år kører han som staldmand.',
    ['k-1974', 'Steen Juul som staldmand for Torino', 'Som staldmand for Torino efter sejren i Jydsk 2-årings Grand Prix 1974 – svigerfar Børge Simonsen i sulkyen · Kilde: thof.dk']],
  ['1974', 'Egen stald', 'Som 24-årig bliver han selvstændig træner den 1. december 1974. To år senere tager han championatet i Skive fra banens syvdobbelte champion.',
    ['k-1975', 'Steen Juul på æresrunde med Vera Ankergård på Skive Trav', '1975: æresrunde på Skive Trav med toårshoppen Vera Ankergård · Kilde: thof.dk']],
  ['1980', 'Landschampion', 'I 1977 slår han Tarok i Skovbo Eliteløb med Pondus Hanover til odds 26. I 1980 bliver han landschampion for første gang – med en ny sejrsrekord for en sæson: 216 sejre.',
    ['k-1977', 'Pondus Hanover med Steen Juul i sulkyen slår Tarok i Skovbo Eliteløb', 'Pondus Hanover og Steen Juul slår Tarok i Skovbo Eliteløb 1977 · Kilde: thof.dk']],
  ['1983', 'Til Charlottenlund', 'Flytter til Lunden den 15. januar 1983. Samme år sætter Dilli Hanover verdensrekord for hopper på 1000-meterbane, 1.13,5 – og For Ever Vixi giver den første derbysejr.',
    ['k-1983', 'Steen Juul og Dilli Hanover', 'Dilli Hanover og Steen Juul · Kilde: thof.dk']],
  ['2002', 'Legendary Lover K', 'Copenhagen Cup og den hidtil eneste dansktrænede samlede sejr i den europæiske Grand Circuit. Sæsonen giver 5.143.947 kr.',
    ['k-2002', 'Legendary Lover K vinder Copenhagen Cup 2002', 'Legendary Lover K vinder Copenhagen Cup 2002 · Kilde: thof.dk']],
  ['2021', 'Derby nr. 10', 'Festival of Speed giver derbysejr nummer ti som kusk – og dermed tangerer Steen Juul N. J. Kosters rekord.'],
];

// Billeder: navn → [forhold, bredder…]. Kilder står i billedteksterne og i bunden.
const BILLEDER = {
  'festival': [1.529, 800, 1170],
  'derby-1983': [1.406, 800],
  'vixi-ejer': [1.540, 616],
  'derby-1987': [0.689, 720],
  'derby-1990': [1.393, 800],
  'k-1974': [1.406, 554],
  'k-1975': [1.290, 601],
  'k-1977': [1.973, 590],
  'k-1983': [1.406, 700, 1100],
  'k-2002': [1.415, 700, 1100],
  'patrick': [2.127, 800, 1400],
  'lunden': [1.400, 900, 1600],
  'h-frodo': [1.515, 800],
  'h-monterey': [1.501, 800],
  'h-ostedantik': [1.501, 800],
  'h-keepthemoney': [1.515, 800],
  'copperfield': [1.382, 700, 1200],
  'derby-1993': [1.708, 900],
  'derby-1994': [1.032, 413],
  'derby-1997': [1.103, 441],
  'derby-2007': [0.865, 346],
  'derby-2017': [1.006, 505],
  'derby-2018': [1.473, 610],
  'derby-2020': [0.699, 420],
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
// Billeder på kortene i hestebanen: hest-id → [billede, alt, kredit, beskæring]. Kun billeder, hvor kilden siger, hvilken hest det er.
// Kilder: travet.dk – "Mesterskab for Danmark til Frodo Cash" (okt. 2025), "Perfekt sæsondebut for Monterey Market" (maj 2026),
// "Auktionsløbet 2024 til Lets Go Ostedantik" (artiklens hovedbillede), "Wedellsborgs Mindeløb til Keep The Money" (nov. 2025);
// New Watch: trav24.dk 3.10.2026 (samme billede som ved kusken).
const HESTEFOTO = {
  643267: ['h-frodo', 'Frodo Cash i front med Steen Juul i sulkyen', 'Foto: Burt Seeger', '14% 50%'],
  656701: ['h-monterey', 'Monterey Market i fuld fart', 'Kilde: travet.dk', '58% 50%'],
  651251: ['h-keepthemoney', 'Keep The Money med Steen Juul i sulkyen', 'Foto: Burt Seeger', '70% 40%'],
  659013: ['patrick', 'New Watch med laurbærkrans efter sejren i Jydsk 2-årings Grand Prix 2026', 'Foto: Ole Hindby', '38% 40%'],
  653150: ['h-ostedantik', 'Lets Go Ostedantik i vindercirklen med Steen Juul og ejerne', 'Foto: Kjeld Mikkelsen', '64% 40%'],
};

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
    kuskPL: (data.kusk ?? []).find((s) => s.aar === saeson.aar && s.starter > 0) ?? (data.kusk ?? []).find((s) => s.starter > 0),
    kuskFoer: (data.kusk ?? []).find((s) => s.aar === saeson.aar - 1),
    kuskFoedt: data.kuskFoedt ?? SITE.kusk?.foedt,
    storloeb: data.storloeb ?? [],
    kuskStorloeb: data.kuskStorloeb ?? [],
    traenerAar: Math.floor((d(idag) - d('1974-12-01')) / 31556952000), // hele år siden 1. december 1974
    kortheste: heste.filter((h) => HESTEKORT[h.id]),
  };
}

// ---------- fælles dele ----------

// Holdets logo: navnet fra Facebook-siden, TEAM JUUL, sat som forsidens store navn – JUUL i rødt.
const maerke = (cls = '') => `<span class="maerke ${cls}"><span>Team</span><span class="maerke__juul">Juul</span></span>`;

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
    <p>Billeder: Team Juuls Facebook-side – fotografer bl.a. Burt Seeger, Kjeld Mikkelsen og Gormfoto. Solvalla-fotoet: Lars Jakobsson/Kanal 75, <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0${nyFane}</a>. Arkivbilleder: Burt Seeger, travet.dk, travsportshistorie.dk og Travsportens Hall of Fame. Charlottenlund: Malouette, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener">CC BY-SA 2.0${nyFane}</a></p>
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

// Talord til overskrifter ("elleve gange Derby").
const TALORD = ['nul', 'én', 'to', 'tre', 'fire', 'fem', 'seks', 'syv', 'otte', 'ni', 'ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten', 'tyve'];
const talord = (n) => TALORD[n] ?? String(n);
const stort = (s) => s[0].toUpperCase() + s.slice(1);

// Alle derbysejre: listen ovenfor + nye, som dukker op blandt staldens store sejre (kusk ukendt → "Træner").
const derbyListe = (o) => [...DERBY, ...o.storloeb
  .filter((s) => /^Dansk Trav Derby \d{4}$/.test(s.navn) && !DERBY.some(([aar]) => String(aar) === s.dato.slice(0, 4)))
  .map((s) => [Number(s.dato.slice(0, 4)), s.hest, 'Træner'])].sort((a, b) => a[0] - b[0]);
const derbyTal = (o) => { const l = derbyListe(o); return { liste: l, kusk: l.filter(([, , rolle]) => /Kusk/.test(rolle)).length, traener: l.filter(([, , rolle]) => /træner/i.test(rolle)).length }; };

// Laurbærkransen til derbykort uden billede: blade parvis op ad begge sider af en cirkel.
const KRANS = (() => {
  let blade = '';
  for (const s of [-1, 1]) for (let i = 1; i <= 10; i++) {
    const v = i * 0.26; // radianer fra bunden af kransen
    const x = (100 + s * 78 * Math.sin(v)).toFixed(1), y = (100 + 78 * Math.cos(v)).toFixed(1);
    const retning = Math.atan2(-Math.sin(v), s * Math.cos(v)) * 180 / Math.PI;
    for (const d of [-34, 34]) blade += `<ellipse cx="${x}" cy="${y}" rx="13" ry="5" transform="rotate(${Math.round(retning + d)} ${x} ${y}) translate(9 0)"/>`;
  }
  return `<svg class="derby__krans" viewBox="0 0 200 200" aria-hidden="true"><g fill="currentColor">${blade}</g></svg>`;
})();

// Derbysejrene på en vandret bane, der kører forbi, mens man ruller lodret.
const derby = (o) => {
  const { liste, kusk, traener } = derbyTal(o);
  const [foerste, sidste] = [liste[0], liste.at(-1)];
  return `
<section class="derby" data-p="fast" style="--antal:${liste.length}">
  <div class="derby__ramme">
    <div class="wrap derby__hoved">
      <div>
        ${etiket('Dansk Trav Derby')}
        <h2>${stort(talord(liste.length))} gange Derby.</h2>
      </div>
      <p>${stort(talord(kusk))} sejre som kusk og ${talord(traener)} som træner – fra ${foerste[1]} i ${foerste[0]} til ${sidste[1]} i ${sidste[0]}.${kusk === 10 ? ' Med ti sejre som kusk tangerer Steen Juul N. J. Kosters rekord.' : kusk > 10 ? ` Med ${talord(kusk)} sejre som kusk har Steen Juul slået N. J. Kosters rekord.` : ''}</p>
      <div class="derby__bar" aria-hidden="true"><i></i></div>
    </div>
    <ol class="derby__spor">${liste.map(([aar, hest, rolle, note], i) => {
      const [foto, alt, kredit, pos] = DERBYFOTO[aar] ?? [];
      return `
      <li class="derby__kort${foto ? ' derby__kort--foto' : ''}" style="--i:${i}${pos ? `; --pos:${pos}` : ''}">
        ${foto ? billede(foto, alt, { sizes: '360px' }) : KRANS}
        <span class="derby__aar">${aar}</span>
        <div class="derby__tekst">
          <h3>${hest}</h3>
          <p>${rolle}${note ? `<br><span>${note}</span>` : ''}</p>
          ${kredit ? `<small class="derby__kredit">${kredit}</small>` : ''}
        </div>
      </li>`;
    }).join('')}
    </ol>
  </div>
</section>`;
};

// Kort, der lægger sig oven på hinanden, med en fast spalte ved siden af. kort = [[nummer/år, titel, tekst], …]
const stakSektion = ({ over, titel, tekst, valg = '', figur = '', kort }) => `
<section class="sek karriere">
  <div class="wrap karriere__gitter">
    <div class="karriere__fast">
      ${etiket(over)}
      <h2>${titel}</h2>
      <p class="indled">${tekst}</p>
      ${valg ? `<p class="valg">${valg}</p>` : ''}
      ${figur}
    </div>
    <ol class="stak">${kort.map(([nr, h, p, foto], i) => `
      <li class="stak__kort${foto ? ' stak__kort--foto' : ''}" style="--i:${i}">
        <span class="stak__aar">${nr}</span>
        <div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>
        ${foto ? `<figure class="stak__foto">${billede(foto[0], foto[1], { sizes: '(min-width: 1101px) 26vw, 88vw' })}<figcaption>${foto[2]}</figcaption></figure>` : ''}
      </li>`).join('')}
    </ol>
  </div>
</section>`;

const karriere = () => stakSektion({
  over: 'Karrieren',
  titel: 'Et liv i sulkyen.',
  tekst: 'Fra staldmand i Skive til rekordholder på Charlottenlund – seks nedslag i en karriere, der begyndte i 1968.',
  kort: KARRIERE,
});

// Det, stalden tilbyder – som kort på forsiden og som gitter på Stalden.
const YDELSER = (o) => [
  ['01', 'Træning af løbsheste', `${o.heste.length} heste står på træningslisten. I ${o.saeson.aar} har staldens heste været til start i ${dkListe(o.banerIAar)}.`],
  ['02', 'Tilkøring af ungheste', o.ungheste.length > 1 ? `Lige nu står ${o.ungheste.length} åringer og 2-årige på træningslisten og bygges op mod deres første starter.` : 'Ungheste køres til og bygges op mod deres første starter.'],
  ['03', 'Erfaring i sulkyen', `${SITE.fornavn} har kørt løb siden 1968.${o.kuskPL && SITE.kusk ? ` I dag kører staldens jockey, ${SITE.kusk.navn}, mange af hestene – i ${o.kuskPL.aar} ${o.kuskPL.starter} starter og ${o.kuskPL.sejre} sejre.` : ''}`],
];
const ydelser = (o) => `
    <ul class="ydelser">${YDELSER(o).map(([nr, h, p], i) => `
      <li data-vis style="--i:${i}">
        <span class="ydelser__nr" aria-hidden="true">${nr}</span>
        <h3>${h}</h3>
        <p>${p}</p>
      </li>`).join('')}
    </ul>`;

// Store sejre (førstepræmie på mindst 100.000 kr.) med løbets navn – hentes automatisk af build.mjs.
const storloebLinje = (s) => `${esc(s.hest)} · ${esc(bane(s.bane))}, ${kortDato(s.dato)}${tid(s.tid) ? ` · ${tid(s.tid)} over ${nf(s.distance)} m` : ''} · ${kr(s.praemie)}`;
const storloebListe = (liste) => `<ul class="storloeb">${liste.map((s) => `
        <li><b>${esc(s.navn || 'Storløb')}</b><span>${storloebLinje(s)}</span></li>`).join('')}
      </ul>`;

const kuskSektion = (o) => {
  if (!SITE.kusk) return '';
  const [fornavn, ...efternavn] = SITE.kusk.navn.split(' ');
  const pl = o.kuskPL, foer = o.kuskFoer;
  return `
<section class="kusk">
  <div class="kusk__hero parallax" data-p>
    ${billede('patrick', `${SITE.kusk.navn} vinker med buketten efter sejren med New Watch`, { sizes: '100vw' })}
    <p class="kusk__kredit">New Watch og ${SITE.kusk.navn} efter Jydsk 2-årings Grand Prix 2026 · Foto: Ole Hindby</p>
    <div class="wrap kusk__over">
      ${etiket('Jockey hos Steen Juul', ' data-vis')}
      <h2 class="kusk__navn" data-vis style="--i:1"><span>${fornavn}</span> <span>${efternavn.join(' ')}</span></h2>
    </div>
  </div>
  <div class="sek--papir kusk__info">
    <div class="wrap kusk__gitter">
      <div data-vis>
        <p class="indled">Født i ${o.kuskFoedt} og jockey hos ${SITE.person} med Charlottenlund som hjemmebane.${pl && foer?.starter && pl.starter >= foer.starter * 3 ? ` ${pl.aar} blev gennembruddet: fra ${foer.starter} starter året før til ${pl.starter} – og ${pl.sejre} sejre.` : pl ? ` I ${pl.aar} har han ${pl.sejre} sejre på ${pl.starter} starter.` : ''}</p>
        <blockquote class="kusk__citat"><p>»Det nye dream team i dansk travsport.«</p><cite>travservice.dk om ${SITE.person} og ${SITE.kusk.navn}, april 2026</cite></blockquote>
      </div>
      ${pl ? `<dl class="kusk__tal" data-vis style="--i:1">
        <div><dd data-tael="${pl.sejre}">${pl.sejre}</dd><dt>Sejre i ${pl.aar}</dt></div>
        <div><dd data-tael="${pl.starter}">${pl.starter}</dd><dt>Starter</dt></div>
        <div><dd>${pl.procent}<small>%</small></dd><dt>Sejrsprocent</dt></div>
        <div><dd>${(pl.praemier / 1e6).toLocaleString('da-DK', { maximumFractionDigits: 1 })}<small>mio. kr.</small></dd><dt>Indkørt</dt></div>
      </dl>` : '<div></div>'}
      ${o.kuskStorloeb.length ? `<div data-vis style="--i:2">
        <h3 class="mini">Største sejre</h3>
        <ol class="kusk__sejre">${o.kuskStorloeb.filter((s) => s.navn && !s.navn.startsWith('Løb ')).sort((a, b) => b.praemie - a.praemie).slice(0, 4).map((s) => `<li><span class="kusk__plads" aria-hidden="true">1</span><div><b>${esc(s.navn || 'Storløb')}</b><span>${storloebLinje(s)}</span></div></li>`).join('')}</ol>
      </div>` : '<div></div>'}
    </div>
  </div>
</section>`;
};

// Hestene på en vandret bane, der kører, mens man ruller: nye profiler med billede, de mest vindende, til sidst de unge på vej.
const hestebane = (o) => {
  const startede = o.loebsheste.filter((h) => !HESTEKORT[h.id]).slice(0, 8);
  const antal = o.kortheste.length + startede.length + (o.ustartede.length ? 1 : 0);
  return `
<section class="derby derby--heste" data-p="fast" style="--antal:${antal}">
  <div class="derby__ramme">
    <div class="wrap derby__hoved">
      <div>
        ${etiket('Hestene')}
        <h2>I stalden lige nu.</h2>
      </div>
      <div>
        <p>${o.heste.length} heste på træningslisten – ${o.loebsheste.length} har været til start, og ${o.ustartede.length} unge heste er på vej. Her er de mest vindende.</p>
        <p class="valg">${knap('heste/', `Hele træningslisten (${o.heste.length})`, 'knap--lys')}</p>
      </div>
      <div class="derby__bar" aria-hidden="true"><i></i></div>
    </div>
    <ol class="derby__spor">${o.kortheste.map((h) => `
      <li class="derby__kort derby__kort--foto hkort">
        <a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">
          ${billede(HESTEKORT[h.id][0], `${h.navn}, ${omHest(h)}`, { sizes: '360px' })}
          <span class="hkort__over">${h.starter ? 'Staldens profil' : 'Ny i stalden'}</span>
          <div class="derby__tekst">
            <h3>${esc(h.navn)}</h3>
            <p>${omHest(h)}<br><span>${afstamning(h)}</span></p>
          </div>${nyFane}
        </a>
      </li>`).join('')}${startede.map((h) => {
      const [foto, alt, kredit, pos] = HESTEFOTO[h.id] ?? [];
      return `
      <li class="derby__kort hkort${foto ? ' derby__kort--foto' : ''}"${pos ? ` style="--pos:${pos}"` : ''}>
        <a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">
          ${foto ? billede(foto, alt, { sizes: '360px' }) : ''}
          <span class="derby__aar">${sejre(h)}<small>${sejre(h) === 1 ? 'sejr' : 'sejre'}</small></span>
          <div class="derby__tekst">
            <h3>${esc(h.navn)}</h3>
            <p>${omHest(h)}<br><span>${afstamning(h)}</span></p>
            <dl>
              <div><dt>Starter</dt><dd>${h.starter}</dd></div>
              <div><dt>Indkørt</dt><dd>${kr(h.praemier)}</dd></div>
              <div><dt>Rekord</dt><dd>${bedsteRekord(h.rekord) || '–'}</dd></div>
            </dl>
            ${kredit ? `<small class="derby__kredit">${kredit}</small>` : ''}
          </div>${nyFane}
        </a>
      </li>`;
    }).join('')}${o.ustartede.length ? `
      <li class="derby__kort hkort hkort--vej">
        <a href="${R}heste/">
          <span class="derby__aar">${o.ustartede.length}<small>på vej</small></span>
          <div class="derby__tekst">
            <h3>De unge</h3>
            <p><span>${o.ustartede.map((h) => esc(h.navn)).join(' · ')}</span></p>
            <span class="hkort__ud">Hele træningslisten ${pil}</span>
          </div>
        </a>
      </li>` : ''}
    </ol>
  </div>
</section>`;
};

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

// Opløbet på Charlottenlund – frit billede fra Wikimedia Commons (CC BY-SA 2.0), vist over afsnittet om hjemmebanen.
const lundenFoto = () => `<figure class="lunden" data-vis>${billede('lunden', 'Opløbet på Charlottenlund Travbane med heste i sulky foran tribunen', { sizes: '(min-width: 1400px) 1300px, 94vw' })}<figcaption>Opløbet på Charlottenlund Travbane · Foto: Malouette, <a href="https://commons.wikimedia.org/wiki/File:Charlottenlund_Travbane.jpg" target="_blank" rel="noopener">Wikimedia Commons${nyFane}</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener">CC BY-SA 2.0${nyFane}</a></figcaption></figure>`;

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
<section class="sek sek--kant">
  <div class="wrap foelg">
    <div>
      ${etiket('Følg med', ' data-vis')}
      <h2 data-vis style="--i:1">Løbsdagene, før de sker.</h2>
      <p data-vis style="--i:2">På Facebook gennemgår Team Juul staldens starter før hver løbsdag – hest for hest – og fortæller, hvordan det gik${fb.length ? '. Her er de seneste opslag' : ''}.</p>
      ${SITE.anbefalinger ? `<p class="anbefal" data-vis style="--i:3"><b>${SITE.anbefalinger.procent}<small>%</small></b><span>anbefaler Team Juul på Facebook<small>${SITE.anbefalinger.antal} anmeldelser · ${SITE.anbefalinger.aflaest}</small></span></p>` : ''}
      <p class="valg" data-vis style="--i:4">${ekstern(SITE.facebook, 'Team Juul på Facebook', 'knap')}</p>
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
        <p class="hero__indled">${o.heste.length} heste i træning med Charlottenlund som hjemmebane – og en træner med næsten 8.000 sejre, ti derbysejre som kusk og en plads i Travsportens Hall of Fame.</p>
        <p class="valg">${knap('kontakt/', 'Kontakt stalden', 'knap--lys')} ${knap('heste/', 'Se hestene', 'knap--kant')}</p>
      </div>
    </div>
    <span class="hero__rul" aria-hidden="true">Rul</span>
  </div>
</section>
${baand()}

<section class="sek udsagn">
  <div class="wrap">
    ${etiket('Team Juul i dag')}
    <p class="udsagn__tekst" data-p>${ordvis(`I dag *${o.heste.length} heste* i træning, *Charlottenlund* som hjemmebane – og en træner med *næsten 8.000 sejre* bag sig.`)}</p>
    <ul class="rekorder">
      <li data-vis><small class="rekorder__over">Næsten</small><b data-tael="8000">8.000</b><span>sejre i karrieren</span><small>»tæt på 8000 sejre« – Sjællandske, dec. 2024</small></li>
      <li data-vis style="--i:1"><b data-tael="10">10</b><span>derbysejre som kusk</span><small>tangerer N. J. Kosters rekord</small></li>
      <li data-vis style="--i:2"><b data-tael="${o.traenerAar}">${o.traenerAar}</b><span>år som træner</span><small>siden 1. december 1974</small></li>
      <li data-vis style="--i:3"><b data-tael="35">35</b><span>championater på Charlottenlund</span><small>fra 1985 til 2024</small></li>
    </ul>
    <p class="note">Kilder: Sjællandske Medier (1. december 2024), Travsportens Hall of Fame (thof.dk), da.wikipedia.org og Charlottenlund Travbanes løbsprogram (5. januar 2025).</p>
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
    ${o.storloeb.some((s) => s.dato.startsWith(String(o.saeson.aar))) ? `<div class="storloeb-boks" data-vis>
      <h3 class="mini">Storløbssejre i ${o.saeson.aar}</h3>
      ${storloebListe(o.storloeb.filter((s) => s.dato.startsWith(String(o.saeson.aar))))}
    </div>` : ''}
  </div>
</section>

${hestebane(o)}

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

${kuskSektion(o)}
${stakSektion({
  over: 'Stalden',
  titel: `Træning med ${o.traenerAar} års erfaring.`,
  tekst: `${SITE.navn} træner ${o.heste.length} heste med Charlottenlund Trav som hjemmebane. Ring for en snak om din hest.`,
  valg: `${knap('kontakt/', 'Kontakt stalden')} ${link('stalden/', 'Om stalden')}`,
  figur: `<figure class="karriere__foto">${billede('sort', 'Sort travhest i trav foran tribunen', { sizes: '(min-width: 1101px) 34vw, 92vw' })}<figcaption>Fra løbsdagene · Team Juuls Facebook-side</figcaption></figure>`,
  kort: YDELSER(o),
})}
<section class="sek sek--flade">
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

<section class="sek citat-sek">
  <div class="wrap citat">
    <figure class="citat__foto parallax" data-p>${billede('extreme', 'Steen Juul og derbyvinderen Extreme med buketten efter en sejr', { sizes: '(min-width: 901px) 46vw, 92vw' })}</figure>
    <div class="citat__tekst">
      <blockquote data-vis>
        <p>»Steen Juul vil vinde – hver gang.«</p>
        <footer>Travsportens Hall of Fame om Steen Juul</footer>
      </blockquote>
      <p class="citat__note" data-vis style="--i:1">Billedet: Extreme og Steen efter sejren i Rex The Great – ifølge Team Juul i den hurtigste tid nogensinde på en dansk væddeløbsbane, 1.09,7a over 1600 meter. Extreme vandt Dansk Trav Derby i 2020.</p>
      <p class="valg" data-vis style="--i:2">${link('om-steen/', 'Historien, derbysejrene og championaterne')}</p>
    </div>
  </div>
</section>

<section class="sek sek--flade">
  <div class="wrap">${lundenFoto()}</div>
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
        <div><dt>Dansk Trav Derby</dt><dd>${derbyTal(o).kusk} sejre som kusk, ${derbyTal(o).traener} som træner</dd></div>
        <div><dt>Heste i træning</dt><dd>${o.heste.length}</dd></div>
      </dl>
    </aside>
    <div class="prosa">
      ${etiket('Historien', ' data-vis')}
      <h2 data-vis>Skive-drengen.</h2>
      <p class="indled" data-vis>${SITE.person} er født den 20. august 1950 og lærte faget hos Victor Borregård i Skive og senere hos Jørgen Hill og svigerfaren Børge Simonsen i Aarhus.</p>
      <p data-vis>Debuten kom den 31. august 1968 med Karat – og blev til sejr i første forsøg. Derefter lod succesen vente på sig: de fire første sæsoner gav tre sejre på 115 starter. I 1972–74 blev det til 30.</p>
      <p data-vis>Den 1. december 1974 blev han som 24-årig selvstændig træner. I 1976 tog han championatet i Skive fra banens syvdobbelte champion Karsten Andersen, og året efter slog han Tarok i Skovbo Eliteløb med Pondus Hanover – til odds 26. I 1980 blev han landschampion for første gang med en ny sæsonrekord på 216 sejre.</p>
      <figure class="prosa__foto" data-vis>${billede('copperfield', 'En ung Steen Juul med Copperfield og en buket', { sizes: '(min-width: 1101px) 680px, 92vw' })}<figcaption>En ung Steen Juul med Copperfield, som han selv kalder den første store stjerne i stalden · Foto: Burt Seeger</figcaption></figure>
      <p data-vis>Copperfield vandt blandt andet Fyens 4-års Grand Prix og Aalborg Store Pris og blev nr. 3 i Dansk Trav Derby. Lillesøsteren Dilli Hanover kom også til Steen Juul – og fik senere derbyvinderen New Quick.</p>
      <h2 data-vis>Lunden.</h2>
      <p data-vis>Den 15. januar 1983 flyttede Steen Juul til Charlottenlund. Samme år vandt Dilli Hanover i 1.13,5 – dansk rekord og verdensrekord for hopper på 1000-meterbane, en rekord der holdt i 16 år. Og samme år kom den første derbysejr.</p>
      <figure class="prosa__foto" data-vis>${billede('vixi-ejer', 'For Ever Vixi med Steen Juul og ejeren Ivar Hvidtfeldt', { sizes: '(min-width: 1101px) 680px, 92vw' })}<figcaption>For Ever Vixi med Steen Juul og ejeren Ivar Hvidtfeldt · Foto: Burt Seeger</figcaption></figure>
      <p data-vis>For Ever Vixi var købt i Sverige godt en uge før Derbyet. Steen Juul og ejeren Ivar Hvidtfeldt tog flyvebåden til Malmø for at prøvekøre hesten på Jägersro, og ugedagen før løbet sad han bag den for første gang. I Derbyet kom parret forbi den førende Fight Løjbjerg i opløbet.</p>
      <p data-vis>I 1985 fulgte det første Kriterium med Join Løjbjerg og det første af 35 championater på Charlottenlund til og med 2024.</p>
      <h2 data-vis>Ude i Europa.</h2>
      <p data-vis>Det største år ude kom i 2002. Legendary Lover K vandt Copenhagen Cup, Elite Rennen i Gelsenkirchen, Momarken Grand Prix og Kymi Grand Prix og blev den hidtil eneste dansktrænede samlede vinder af den europæiske Grand Circuit – med 5.143.947 kr. indkørt på sæsonen. Året efter blev parret nr. 7 i Prix d’Amérique.</p>
      <p data-vis>Senere har stjerner som Classic Grand Cru, In Cap’N Gown, Korvet Klintholm og Neo Holmsminde haft usædvanligt lange karrierer i stalden.</p>
      <blockquote data-vis><p>»Steen Juul vil vinde – hver gang.«</p><cite>Travsportens Hall of Fame (thof.dk)</cite></blockquote>
      <h2 data-vis>Rekorden.</h2>
      <p data-vis>I Dansk Trav Derby har Steen Juul ti sejre som kusk – fra For Ever Vixi i 1983 til Festival of Speed i 2021 – og tangerer dermed N. J. Kosters rekord. Som træner har han vundet løbet ${talord(derbyTal(o).traener)} gange, blandt andet i 2018, da Björn Goop kørte Chock Nock.</p>
      <p data-vis>De Jydske Grand Prix’er for 2- til 4-årige har givet 25 sejre, fra Camrose i 1978 til Daytona i 2019. Sejrstallet som kusk var officielt opgjort til 7.602 pr. 1. april 2020, og ved 50-års jubilæet som træner i december 2024 var han ifølge Sjællandske tæt på 8.000 sejre.</p>
      <p data-vis>I dag har ${SITE.navn} ${o.heste.length} heste på træningslisten, og i ${o.saeson.aar} er det indtil videre blevet til ${o.saeson.sejre} sejre på ${o.saeson.starter} starter som træner.</p>
      <p class="valg" data-vis>${ekstern(SITE.travinfo, 'Profilen på Travinfo')} ${ekstern(SITE.thof, 'Hall of Fame-artiklen')}</p>
      <p class="note" data-vis>Kilder: Travsportens Hall of Fame (thof.dk – Steen Juul og Lilli Hanover), travet.dk (22. august 2023), Sjællandske Medier (1. december 2024), da.wikipedia.org (Steen Juul; Dansk Trav Derby), Team Juul på Facebook og Dansk Hestevæddeløb.</p>
    </div>
  </div>
</section>

${karriere()}
${derby(o)}

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
${kuskSektion(o)}

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
  <div class="wrap">${lundenFoto()}</div>
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
    ${o.storloeb.length ? `<div class="storloeb-boks" data-vis style="--i:2">
      <h3 class="mini">Storløbssejre</h3>
      ${storloebListe(o.storloeb)}
      <p class="note">Sejre med mindst 100.000 kr. i førstepræmie, hentet fra Dansk Hestevæddeløb.</p>
    </div>` : ''}
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
