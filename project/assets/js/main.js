// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu.classList.remove('active');
        }
    });
});

// Counter Animation
function animateCounter(element, target) {
    let count = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 30);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            if (!counter.classList.contains('counted')) {
                counter.classList.add('counted');
                animateCounter(counter, target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    observer.observe(counter);
});

// Filter Spécialités
const filterButtons = document.querySelectorAll('.filter-btn');
const specialites = document.querySelectorAll('.specialite');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        specialites.forEach(specialite => {
            const category = specialite.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                specialite.classList.remove('hide');
            } else {
                specialite.classList.add('hide');
            }
        });
    });
});

// Form Validation
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Message envoyé avec succès!');
            form.reset();
        } else {
            alert('Veuillez remplir tous les champs');
        }
    });
}

// Navbar Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
