(function () {
  'use strict';

  const SELECTORS = {
    burger: '.nav__burger',
    menu: '.nav__menu',
    navLinks: '.nav__link',
    reachForm: '#reach-form',
  };

  function initNav() {
    const burger = document.querySelector(SELECTORS.burger);
    const menu = document.querySelector(SELECTORS.menu);
    const links = document.querySelectorAll(SELECTORS.navLinks);

    const closeMenu = () => {
      burger?.classList.remove('active');
      menu?.classList.remove('active');
      document.body.style.overflow = '';
    };

    burger?.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu?.classList.toggle('active');
      document.body.style.overflow = menu?.classList.contains('active') ? 'hidden' : '';
    });

    links.forEach((link) => link.addEventListener('click', closeMenu));
  }

  async function handleReachFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        alert('Thanks for your submission!');
        form.reset();
      }
    } catch {
      alert('Oops! There was a problem submitting your form.');
    }
  }

  function initReachForm() {
    const form = document.querySelector(SELECTORS.reachForm);
    form?.addEventListener('submit', handleReachFormSubmit);
  }

  function init() {
    initNav();
    initReachForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
