document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
          menu.classList.remove('scale-y-0');
          menu.classList.add('scale-y-100');
        }, 10);
      } else {
        menu.classList.remove('scale-y-100');
        menu.classList.add('scale-y-0');
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 300);
      }
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('scale-y-100');
        menu.classList.add('scale-y-0');
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 300);
      });
    });
  }

  const animatedSections = document.querySelectorAll('section');

  const showOnScroll = () => {
    animatedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && section.classList.contains('opacity-0')) {
        section.classList.remove('opacity-0', 'translate-y-10');
        section.classList.add('opacity-100', 'translate-y-0');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  showOnScroll();
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Scroll hacia abajo, pero solo si bajaste más de 50px
    header.classList.add('opacity-0');
    header.classList.remove('opacity-100');
  } else if (scrollTop < lastScrollTop) {
    // Scroll hacia arriba
    header.classList.remove('opacity-0');
    header.classList.add('opacity-100');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

