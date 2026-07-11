/* Crescente Parrucchiere — i18n IT/EN, nav mobile, reveal */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_shop: 'La bottega',
      nav_services: 'Servizi',
      nav_ritual: 'Il rito',
      nav_hours: 'Orari e dove',
      call_short: 'Chiama',
      call_cta: 'Chiama',
      dialect_note: '— dal 1999',
      hero_sub: 'Parrucchiere da uomo',
      hero_lead: 'Dal 1999 forbici, rasoio e chiacchiere in via Borsieri. Si entra per un taglio, si torna per tutto il resto.',
      see_services: 'Guarda i servizi',
      marquee: 'Dal 1999 · Via Borsieri 41 — Milano Isola · Il 94% dei clienti lo consiglia · Forbici, macchinetta, rasoio · ',
      marquee2: 'Dal 1999 · Via Borsieri 41 — Milano Isola · Il 94% dei clienti lo consiglia · Forbici, macchinetta, rasoio · ',
      shop_title: 'La bottega',
      shop_pull: 'Prima del Bosco Verticale, prima dei dehors: in via Borsieri c’era già Crescente.',
      shop_p1: 'Pinuccio Crescente alza la serranda al civico 41 nel 1999, quando l’Isola era ancora un quartiere di cortili e officine. Da allora il quartiere è cambiato tre volte; la bottega no: una poltrona, uno specchio, una lama affilata e il tempo che serve.',
      shop_p2: 'Niente playlist studiate, niente pacchetti “grooming experience”. Un barbiere vero, di quelli che ti guardano la testa prima di accendere la macchinetta — e che dopo la seconda volta sanno già come li porti.',
      stat1: 'anni in via Borsieri',
      stat2: 'dei clienti lo consiglia',
      stat3: 'lingue: italiano e milanese',
      services_title: 'Servizi e listino',
      s1: 'Taglio',
      s2: 'Taglio e barba',
      s3: 'Barba — macchinetta e rifinitura',
      s4: 'Rasatura tradizionale al rasoio, con panno caldo',
      s5: 'Taglio ragazzi — fino a 12 anni',
      s6: 'Sistemata veloce — contorni e collo',
      services_note: 'Listino indicativo: per conferme e richieste particolari, una telefonata basta.',
      ritual_title: 'Il rito',
      r1_t: 'Il consulto',
      r1_p: 'Due parole davanti allo specchio: com’è adesso, come la vuoi, cosa ci sta davvero.',
      r2_t: 'Il lavoro',
      r2_p: 'Forbici e macchinetta, con calma. La sfumatura si fa a strati, non a cronometro.',
      r3_t: 'Il finale',
      r3_p: 'Panno caldo, rifinitura al rasoio, spazzola. Fuori con la testa a posto.',
      review_txt: 'dei clienti consiglia Crescente nelle recensioni pubbliche.',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì',
      tue_fri: 'Martedì — Venerdì',
      sat: 'Sabato',
      sun: 'Domenica',
      closed: 'chiuso',
      closed2: 'chiuso',
      hours_note: 'Meglio una telefonata prima: si fa presto.',
      metro: 'M5 Isola, cinque minuti a piedi',
      maps: 'Apri in Google Maps',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_since: 'Dal 1999',
      f_line: 'Barbiere da uomo, vecchia scuola.',
      aria_top: 'Crescente Parrucchiere — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_shop: 'The shop',
      nav_services: 'Services',
      nav_ritual: 'The ritual',
      nav_hours: 'Hours & location',
      call_short: 'Call',
      call_cta: 'Call',
      dialect_note: '— “the Isola barber”, since 1999',
      hero_sub: 'Men’s barbershop',
      hero_lead: 'Scissors, razors and conversation on Via Borsieri since 1999. You come in for a haircut; you come back for everything else.',
      see_services: 'See services',
      marquee: 'Since 1999 · Via Borsieri 41 — Milano Isola · 94% of clients recommend it · Scissors, clippers, razor · ',
      marquee2: 'Since 1999 · Via Borsieri 41 — Milano Isola · 94% of clients recommend it · Scissors, clippers, razor · ',
      shop_title: 'The shop',
      shop_pull: 'Before the Bosco Verticale, before the pavement cafés: Crescente was already on Via Borsieri.',
      shop_p1: 'Pinuccio Crescente first rolled up the shutter at number 41 in 1999, when Isola was still a neighbourhood of courtyards and workshops. The area has changed three times since; the shop hasn’t: one chair, one mirror, a sharp blade and the time it takes.',
      shop_p2: 'No curated playlists, no “grooming experience” bundles. A real barber — the kind who studies your head before switching on the clippers, and who by your second visit already knows how you like it cut.',
      stat1: 'years on Via Borsieri',
      stat2: 'of clients recommend it',
      stat3: 'languages: Italian and Milanese',
      services_title: 'Services & price list',
      s1: 'Haircut',
      s2: 'Haircut & beard',
      s3: 'Beard trim — clippers and line-up',
      s4: 'Traditional straight-razor shave, hot towel',
      s5: 'Kids’ cut — up to 12',
      s6: 'Quick tidy-up — edges and neck',
      services_note: 'Indicative prices: for anything specific, a phone call is all it takes.',
      ritual_title: 'The ritual',
      r1_t: 'The consult',
      r1_p: 'A few words in front of the mirror: how it is, how you want it, what actually works.',
      r2_t: 'The work',
      r2_p: 'Scissors and clippers, unhurried. A proper fade is built in layers, not against the clock.',
      r3_t: 'The finish',
      r3_p: 'Hot towel, razor edging, a brush-down. You walk out looking sharp.',
      review_txt: 'of clients recommend Crescente in public reviews.',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      mon: 'Monday',
      tue_fri: 'Tuesday — Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'closed',
      closed2: 'closed',
      hours_note: 'Best to call ahead — it only takes a minute.',
      metro: 'M5 Isola station, a five-minute walk',
      maps: 'Open in Google Maps',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_since: 'Since 1999',
      f_line: 'Old-school men’s barbershop.',
      aria_top: 'Crescente Parrucchiere — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('crescente-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('crescente-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- anni e copyright dinamici ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-years-since]').forEach(function (el) {
    var since = parseInt(el.getAttribute('data-years-since'), 10);
    if (!isNaN(since)) el.textContent = String(nowYear - since);
  });
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-head, .split-main, .split-side, .ledger, .steps .step, .review-band, .hours, .where');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
