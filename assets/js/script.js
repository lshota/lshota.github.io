(() => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');
  const worksGrid = document.getElementById('worksGrid');
  const worksMoreBtn = document.getElementById('worksMoreBtn');

  if (worksGrid && worksMoreBtn) {
    const worksMoreText = worksMoreBtn.querySelector('.works__more-text');
    worksMoreBtn.addEventListener('click', () => {
      const expanded = worksGrid.classList.toggle('is-expanded');
      worksMoreBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      if (worksMoreText) {
        worksMoreText.textContent = expanded ? '閉じる' : 'もっと見る';
      }
      if (!expanded) {
        worksGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        /* localStorage unavailable */
      }
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && nav) {
    const closeNav = () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeNav();
    });
  }

  const revealTargets = document.querySelectorAll(
    '.section__title, .section__label, .about, .skill-group, .work-card, .timeline__item, .contact__list, .hero__greeting, .hero__name, .hero__title, .hero__lead, .hero__actions'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
})();
