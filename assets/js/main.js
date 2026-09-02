// SV RENTAL CAR LLC - Interactive Behaviors & GHL Embed Handlers

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer & Accessibility
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('hidden');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (mobileMenuClose) mobileMenuClose.focus();
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (mobileMenuBtn) mobileMenuBtn.focus();
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      closeMobileMenu();
    }
  });

  // 2. Sticky Header Transition on Scroll
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-onyx/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-white/10');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-onyx/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-white/10');
      header.classList.add('bg-transparent');
    }
  });

  // 3. Accessible FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    if (trigger && content) {
      trigger.setAttribute('id', `faq-btn-${index}`);
      content.setAttribute('id', `faq-content-${index}`);
      trigger.setAttribute('aria-controls', `faq-content-${index}`);
      
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close others
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // 4. Interactive Fleet Filter
  const fleetButtons = document.querySelectorAll('.fleet-tab-btn');
  const fleetCards = document.querySelectorAll('.fleet-card-item');

  fleetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFleet = btn.getAttribute('data-fleet');

      fleetButtons.forEach(b => {
        b.classList.remove('active', 'bg-gold', 'text-onyx', 'font-bold');
        b.classList.add('bg-card-dark', 'text-slate-300');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active', 'bg-gold', 'text-onyx', 'font-bold');
      btn.classList.remove('bg-card-dark', 'text-slate-300');
      btn.setAttribute('aria-selected', 'true');

      fleetCards.forEach(card => {
        if (targetFleet === 'all' || card.getAttribute('data-fleet-type') === targetFleet) {
          card.classList.remove('hidden');
          card.style.display = 'block';
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Fallback Form Action (Opens Direct Dispatch / Call)
  const fallbackBookingForms = document.querySelectorAll('.ghl-fallback-form');
  fallbackBookingForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = '6029215953';
      window.location.href = `tel:${phone}`;
    });
  });
});
