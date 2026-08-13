/* ============================================================
   PODCAST WEBSITE — "Abwegig, aber vertretbar"
   JavaScript
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   1. Episoden-Daten
   ----------------------------------------------------------
   Neue Folgen einfach als Objekt ans Array anhängen.
   Die Liste wird automatisch auf der Startseite gerendert.
   ---------------------------------------------------------- */
const episodes = [
  {
    title: 'Folge 01 (ZR): Nutzungsausfallschaden',
    description: 'Porsche kaputt, Citroën als Ersatz – gibt es trotzdem Nutzungsausfall? 🚗⚖️\nIn dieser Folge sprechen wir über das BGH-Urteil vom 7. Oktober 2025 (VI ZR 246/24). Der BGH stellt klar: Wer ein zumutbares Ersatzfahrzeug nutzen kann, hat grundsätzlich keinen Anspruch auf Nutzungsausfall – auch wenn Fahrspaß, Prestige und Komfort deutlich geringer sind.\nEin spannender Fall zu Nutzungsausfall, Leasing und der Frage, wann der Verlust eines Fahrzeugs wirklich einen ersatzfähigen Schaden darstellt.',
    image: 'images/episode-01.jpg',
    spotify: 'https://open.spotify.com/episode/4ysiSUkQiZgsgschRZtSjY'
  },
  {
    title: 'Folge 02 (StrR): Distanzfälle',
    description: '💣 Der Täter baut eine Sprengfalle für eine ganz bestimmte Person. Doch das Paket wird von jemand anderem aufgehoben – und explodiert.\nError in persona oder aberratio ictus?\nIn Folge 2 sprechen wir über einen aktuellen BGH-Beschluss zu den Distanzdelikten und die Frage, wie es strafrechtlich zu behandeln ist, wenn bei einer aus der Hand gegebenen Tat am Ende das „falsche“ Opfer getroffen wird.\n🎙️ Folge 2: Distanzdelikte ⚖️ BGH, Beschl. v. 14.07.2025 – 4 StR 281/25',
    image: 'images/episode-02.jpg',
    spotify: 'https://open.spotify.com/episode/25RWdgNGaGcKgaJZ8vMugz'
  },
  {
    title: 'Folge 03 (ÖR): Äußerungen eines Ministers in einer Talkshow',
    description: 'In der ZDF-Talkshow „Markus Lanz“ bezeichnete Daniel Günther das Nachrichtenportal NIUS unter anderem als faktenfrei sowie als „Feind der Demokratie“. 📺 NIUS verlangte daraufhin vom Land Schleswig-Holstein die Unterlassung und den öffentlichen Widerruf dieser Äußerungen. ⚖️ Das Schleswig-Holsteinische Oberverwaltungsgericht wies die Beschwerde jedoch ab, da Günther in der Sendung als Parteipolitiker im Meinungskampf und nicht als staatlicher Amtsträger gesprochen habe. 🏛️ Seine Aussagen sind dem Land somit nicht als hoheitliches Handeln zuzurechnen, weshalb kein öffentlich-rechtlicher Anspruch besteht. ❌',
    articleLinks: [
      {
        label: '📖 Zum Beitrag auf examensgerecht.de ➔',
        url: 'https://examensgerecht.de/aeusserungsrecht-ministerpraesident-markus-lanz/'
      }
    ],
    image: 'images/episode-03.jpg',
    spotify: 'https://open.spotify.com/episode/0AfTcTdRnefC6X0lEdEC0J'
  },
  {
    title: 'Folge 04 (ZR): Rangsdorfer Hausdrama',
    description: 'In dieser Folge besprechen wir das Urteil des BGH vom 14. März 2025 – V ZR 153/23. Nach der rückwirkenden Aufhebung einer Zwangsversteigerung musste der BGH klären, was mit einem inzwischen errichteten Wohnhaus passiert. Der BGH entschied: Der Hausbau kann eine nützliche Verwendung nach § 996 BGB sein, entscheidend ist die objektive Wertsteigerung. Einen Abriss kann der Eigentümer vom gutgläubigen und unverklagten Besitzer grundsätzlich nicht verlangen.',
    articleLinks: [
      {
        label: '📄 BGH Pressemitteilung Nr. 052/2025 ➔',
        url: 'https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025052.html'
      },
      {
        label: '📖 Zum Beitrag auf examensgerecht.de ➔',
        url: 'https://examensgerecht.de/rangsdorfer-hausdrama/'
      }
    ],
    image: 'images/episode-04.jpg',
    spotify: 'https://open.spotify.com/episode/66nLNf96iUwDxa7UePw8tb'
  },
  {
    title: 'Folge 05 (StrR): Sukzessive Qualifikation',
    description: 'Der BGH befasste sich in diesem Fall mit der Frage der sukzessiven Qualifikation beim schweren Raub (§ 250 StGB) nach einem Juwelierüberfall mit Reizgaseinsatz. 💎 Nach der Rechtsprechung des BGH kann ein gefährliches Werkzeug auch noch in der Phase zwischen Vollendung und Beendigung der Tat verwendet werden, um die Beute zu sichern. 🏃‍♂️💨 Wichtig ist hierbei die Abgrenzung zum schweren räuberischen Diebstahl (§§ 252, 250 StGB) sowie das Vorliegen eines raubspezifischen Zusammenhangs. ⚖️ Der Einsatz des Nötigungsmittels zur Beutesicherung wird im Rahmen der Mittäterschaft zugerechnet, was erhebliche Relevanz für Konkurrenzen und den Aufbau in der Examensklausur hat. 🎓',
    articleLinks: [
      {
        label: '📖 Zum Beitrag auf examensgerecht.de ➔',
        url: 'https://examensgerecht.de/sukzessive-qualifiziert/#3_Tatbestand_des_250_I_Nr_1_Nr_1a_Var_2_StGB'
      }
    ],
    image: 'images/episode-05.jpg',
    spotify: 'https://open.spotify.com/episode/2uttYyFsTaMIHGPGuFt2P8'
  },
  {
    title: 'Folge 06 (EurR): Der EuGH als Gesetzlicher Richter im Sinne des Art. 101 I 2 GG',
    description: 'Kann eine Bundesbehörde wie das BVL selbst Verfassungsbeschwerde beim Bundesverfassungsgericht einreichen, wenn ein Gericht eine Frage nicht dem EuGH vorgelegt hat? 🤔\nIn dieser Folge beleuchten wir den Beschluss des BVerfG (1 BvR 1523/23):\n🏛️ Zulässigkeit & Grundrechte: Warum Behörden sich ausnahmsweise auf Justizgrundrechte wie den „gesetzlichen Richter“ (Art. 101 Abs. 1 S. 2 GG) berufen dürfen.\n 🇪🇺EU-Recht: Ist der EuGH "gesetzlicher Richter" iSd. Art. 101 GG und wenn ja warum?.\n⚖️ Keine Pflichtverletzung: Weshalb das OVG die Vorlage an den EuGH nicht willkürlich unterlassen hat und die Verfassungsbeschwerde letztlich scheiterte.\nEine kompakte Jura-Dosis zu den Grenzen der Verfassungsbeschwerde und der Vorlagepflicht an den EuGH! 🎧✨',
    image: 'images/episode-06.jpg',
    spotify: null,
    comingSoon: true
  },
  {
    title: 'Folge 07 (ZR): Abzug "Neu für Alt" im Kauf- und Werkvertragsrecht',
    description: 'Coming Soon 🎙️',
    image: 'images/episode-07.png',
    spotify: null,
    comingSoon: true
  }
];


/* ----------------------------------------------------------
   2. DOM-Elemente
   ---------------------------------------------------------- */
const hamburgerBtn   = document.getElementById('hamburger-btn');
const offCanvasNav   = document.getElementById('off-canvas-nav');
const navOverlay     = document.getElementById('nav-overlay');
const navCloseBtn    = document.getElementById('nav-close-btn');
const episodesList   = document.getElementById('episodes-list');
const episodeModal   = document.getElementById('episode-modal');
const modalCloseBtn  = document.getElementById('modal-close-btn');
const modalBody      = document.getElementById('modal-body');


/* ----------------------------------------------------------
   3. Off-Canvas-Menü
   ---------------------------------------------------------- */

/**
 * Öffnet das seitliche Navigationsmenü.
 */
function openNav() {
  offCanvasNav.classList.add('open');
  navOverlay.classList.add('visible');
  hamburgerBtn.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  navOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Scroll sperren
}

/**
 * Schließt das seitliche Navigationsmenü.
 */
function closeNav() {
  offCanvasNav.classList.remove('open');
  navOverlay.classList.remove('visible');
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  navOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Scroll freigeben
}

// Event-Listener
hamburgerBtn.addEventListener('click', function () {
  const isOpen = offCanvasNav.classList.contains('open');
  isOpen ? closeNav() : openNav();
});

navCloseBtn.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

// Escape-Taste schließt das Menü
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && offCanvasNav.classList.contains('open')) {
    closeNav();
  }
});


/* ----------------------------------------------------------
   4. Episoden-Modal & Liste rendern
   ---------------------------------------------------------- */

// Spotify Icon SVG für den Button im Modal
const spotifySVG = `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.72-.66 13.44 1.621.42.24.54.84.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z"/>
  </svg>
`;

/**
 * Öffnet das Episoden-Detail-Modal
 */
function openEpisodeModal(episode, index) {
  if (!episodeModal || !modalBody) return;

  // Beschreibung formatieren
  let descriptionHTML = episode.description;

  // Web-URLs in klickbare Links umwandeln
  descriptionHTML = descriptionHTML.replace(/(https?:\/\/[^\s]+)/g, function(url) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // Falls Artikel-Links vorhanden sind, als Buttons am Ende anfügen
  let articleLinksHTML = '';
  if (episode.articleLinks && episode.articleLinks.length > 0) {
    const buttons = episode.articleLinks.map(function(linkObj) {
      return `
        <a href="${linkObj.url}" target="_blank" rel="noopener noreferrer" class="modal-article-link">
          ${linkObj.label}
        </a>
      `;
    }).join('');

    articleLinksHTML = `
      <div style="margin-top: var(--sp-lg); display: flex; flex-direction: column; gap: var(--sp-xs); align-items: center;">
        ${buttons}
      </div>
    `;
  }

  const spotifyButtonHTML = episode.comingSoon
    ? `<span class="btn-spotify btn-spotify--disabled" aria-disabled="true">
        ${spotifySVG}
        Demnächst auf Spotify
      </span>`
    : `<a href="${episode.spotify}" target="_blank" rel="noopener noreferrer" class="btn-spotify">
        ${spotifySVG}
        Auf Spotify anhören
      </a>`;

  modalBody.innerHTML = `
    <img
      src="${episode.image}"
      alt="Cover: ${episode.title}"
      class="modal-hero-cover"
      width="220"
      height="220"
    >
    <h2 class="modal-episode-title" id="modal-episode-title">${episode.title}</h2>
    ${spotifyButtonHTML}
    <div class="modal-description">
      ${descriptionHTML}
      ${articleLinksHTML}
    </div>
  `;

  episodeModal.classList.add('visible');
  episodeModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/**
 * Schließt das Episoden-Detail-Modal
 */
function closeEpisodeModal() {
  if (!episodeModal) return;
  episodeModal.classList.remove('visible');
  episodeModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Modal Event Listener
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeEpisodeModal);
}

if (episodeModal) {
  episodeModal.addEventListener('click', function (e) {
    if (e.target === episodeModal) {
      closeEpisodeModal();
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && episodeModal && episodeModal.classList.contains('visible')) {
    closeEpisodeModal();
  }
});

/**
 * Erzeugt das HTML für eine einzelne Episode in der Übersicht.
 * @param {Object} episode  – Objekt mit title, description, image, spotify
 * @param {number} index    – Laufender Index (0-basiert)
 * @returns {HTMLElement}
 */
function createEpisodeCard(episode, index) {
  const card = document.createElement('div');
  card.className = 'episode-card' + (episode.comingSoon ? ' episode-card--coming-soon' : '');
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', episode.title + (episode.comingSoon ? ' – Demnächst verfügbar' : ' – Details anzeigen'));

  // SVG-Icon: Play oder Uhr für Coming Soon
  const iconSVG = episode.comingSoon
    ? `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>`
    : `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;

  const comingSoonBadge = episode.comingSoon
    ? `<span class="episode-coming-soon-badge">Coming Soon</span>`
    : '';

  card.innerHTML = `
    <img
      src="${episode.image}"
      alt="Cover: ${episode.title}"
      class="episode-cover"
      width="90"
      height="90"
      loading="lazy"
    >
    <div class="episode-info">
      <span class="episode-number">Episode ${index + 1} ${comingSoonBadge}</span>
      <h3 class="episode-title">${episode.title}</h3>
      <p class="episode-desc">${episode.description}</p>
    </div>
    <div class="episode-play-icon" aria-hidden="true">
      ${iconSVG}
    </div>
  `;

  card.addEventListener('click', function () {
    openEpisodeModal(episode, index);
  });

  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEpisodeModal(episode, index);
    }
  });

  return card;
}

/**
 * Rendert alle Episoden in die Liste.
 */
function renderEpisodes() {
  if (!episodesList) return; // Seite hat keinen Episoden-Bereich

  // Container leeren (falls erneut aufgerufen)
  episodesList.innerHTML = '';

  episodes.forEach(function (episode, index) {
    const card = createEpisodeCard(episode, index);
    episodesList.appendChild(card);
  });
}

// Initial rendern
renderEpisodes();


/* ----------------------------------------------------------
   5. Scroll-Animationen (Fade-In)
   ---------------------------------------------------------- */

/**
 * Beobachtet Elemente mit .fade-in und blendet sie ein,
 * sobald sie im Viewport sichtbar werden.
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const staggerContainers = document.querySelectorAll('.fade-in-stagger');

  // IntersectionObserver für einzelne Elemente
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // nur einmal
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // Staggered children: jedes Kind einzeln beobachten + verzögern
  staggerContainers.forEach(function (container) {
    const staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Alle Kinder nacheinander einblenden
          const children = Array.from(entry.target.children);
          children.forEach(function (child, i) {
            setTimeout(function () {
              child.classList.add('visible');
            }, i * 100); // 100ms Versatz pro Kind
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    });

    staggerObserver.observe(container);
  });
}

initScrollAnimations();


/* ----------------------------------------------------------
   6. Kontaktformular
   (Entfällt, da direkter E-Mail-Link verwendet wird)
   ---------------------------------------------------------- */


/* ----------------------------------------------------------
   7. Aktive Navigation markieren
   ---------------------------------------------------------- */

/**
 * Setzt den .active-Zustand im Off-Canvas-Menü
 * basierend auf dem aktuellen Dateinamen.
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage);
  });
}

setActiveNavLink();
