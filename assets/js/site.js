// Sticky top, mobilmenu og diskrete indtoninger. Ingen afhængigheder.
window.__klar = true;

const rod = document.documentElement;
const vedScroll = () => rod.classList.toggle('er-scrollet', scrollY > 24);
addEventListener('scroll', vedScroll, { passive: true });
vedScroll();

const menu = document.getElementById('menu');
// Knapperne har også commandfor/command, så menuen virker uden JavaScript i nyere browsere.
document.querySelector('.top .burger')?.addEventListener('click', () => { if (!menu.open) menu.showModal(); });
menu?.addEventListener('click', (e) => { if (menu.open && e.target.closest('[data-luk], a')) menu.close(); });

const io = new IntersectionObserver((poster) => {
  for (const p of poster) if (p.isIntersecting) { p.target.classList.add('ses'); io.unobserve(p.target); }
}, { rootMargin: '0px 0px -4% 0px', threshold: 0.01 });
document.querySelectorAll('[data-vis]').forEach((el) => io.observe(el));

// Tallene tæller op, når de kommer til syne. Uden JavaScript eller med reduceret bevægelse står de bare der.
const taelOp = (el) => {
  const maal = Number(el.dataset.tael); const start = performance.now();
  const trin = (nu) => { const x = Math.min(1, (nu - start) / 1000); el.textContent = Math.round(maal * (1 - (1 - x) ** 3)).toLocaleString('da-DK'); if (x < 1) requestAnimationFrame(trin); };
  requestAnimationFrame(trin);
};
const taelIO = new IntersectionObserver((poster) => { for (const p of poster) if (p.isIntersecting) { taelIO.unobserve(p.target); taelOp(p.target); } }, { threshold: 0.5 });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.querySelectorAll('[data-tael]').forEach((el) => taelIO.observe(el));

// Rulleeffekterne: hvert [data-p] får --p fra 0 til 1, efter hvor langt man er rullet. CSS'en gør resten.
// data-p="fast" er et fastlåst afsnit (måles fra dets top rammer skærmens top, til dets bund gør), ellers måles fra
// elementet dukker op forneden, til det forsvinder foroven. Kun med klassen .fx (sat i <head>, ikke ved reduceret bevægelse).
if (rod.classList.contains('fx')) {
  const ruller = [...document.querySelectorAll('[data-p]')];
  const fremdrift = document.querySelector('.fremdrift');
  const sidst = new Map();
  let venter = false;
  const opdater = () => {
    venter = false;
    const h = innerHeight;
    // Først alle målinger, derefter alle ændringer – blandes de, må browseren beregne siden forfra for hvert element.
    const nye = ruller.map((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -h || r.top > 2 * h) return null;
      const p = el.dataset.p === 'fast' ? -r.top / Math.max(1, r.height - h) : (h - r.top) / (h + r.height);
      return Math.min(1, Math.max(0, p)).toFixed(3);
    });
    const side = (scrollY / Math.max(1, rod.scrollHeight - h)).toFixed(3);
    ruller.forEach((el, i) => { if (nye[i] !== null && sidst.get(el) !== nye[i]) { sidst.set(el, nye[i]); el.style.setProperty('--p', nye[i]); } });
    // Kun på stregen selv – sat på <html> ville hele siden blive genberegnet ved hvert billede.
    fremdrift?.style.setProperty('--side', side);
  };
  const planlaeg = () => { if (!venter) { venter = true; requestAnimationFrame(opdater); } };
  addEventListener('scroll', planlaeg, { passive: true });
  addEventListener('resize', planlaeg);
  opdater();
}

// Billedet øverst ligger i fuld størrelse og skaleres ned, så det lige dækker pillen. Skaleringen klares af grafikkortet,
// i modsætning til at ændre bredde og højde. Faktoren afhænger af skærmen og måles ved start og ny skærmstørrelse.
const heroFoto = document.querySelector('.hero__foto');
if (heroFoto) {
  const maal = () => {
    const s = getComputedStyle(heroFoto); const em = parseFloat(s.fontSize);
    const b = parseFloat(s.getPropertyValue('--pb')) * em; const h = parseFloat(s.getPropertyValue('--ph')) * em;
    const img = heroFoto.querySelector('img');
    heroFoto.style.setProperty('--s0', Math.min(1, Math.max(b / img.offsetWidth, h / img.offsetHeight) * 1.04).toFixed(3));
  };
  maal();
  heroFoto.querySelector('img').addEventListener('load', maal);
  addEventListener('resize', maal);
}
