/* ============================================
   AFRIDI - EXACT LENIS CLONE
   Smooth Scroll + Animations
   ============================================ */

// ============================================
// Lenis Smooth Scroll - LENIS CONFIG
// ============================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ============================================
// Custom Cursor
// ============================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;

    if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
    }

    if (cursorFollower) {
        cursorFollower.style.left = `${followerX}px`;
        cursorFollower.style.top = `${followerY}px`;
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .nav-btn, .showcase-item, .feature-item, .cta-btn');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor?.classList.add('hover');
        cursorFollower?.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        cursor?.classList.remove('hover');
        cursorFollower?.classList.remove('hover');
    });
});

// ============================================
// Scroll Reveal Animations
// ============================================
const revealElements = document.querySelectorAll(`
    .title-word,
    .big-text-line,
    .cta-line,
    .feature-item,
    .showcase-item,
    .body-text
`);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Remove visible class when element leaves viewport (reverse scroll)
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ============================================
// Hero Title Parallax
// ============================================
const heroTitle = document.querySelector('.hero-title');
const heroSubtitleRow = document.querySelector('.hero-subtitle-row');

if (heroTitle) {
    lenis.on('scroll', ({ scroll }) => {
        const yOffset = scroll * 0.3;
        const opacity = Math.max(0, 1 - scroll / 600);

        heroTitle.style.transform = `translateY(${yOffset}px)`;
        heroTitle.style.opacity = opacity;

        if (heroSubtitleRow) {
            heroSubtitleRow.style.transform = `translateY(${yOffset * 0.5}px)`;
            heroSubtitleRow.style.opacity = opacity;
        }
    });
}

// ============================================
// Vertical Line Animation
// ============================================
const verticalLines = document.querySelectorAll('.vertical-line');

const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scaleY(1)';
        } else {
            // Reset line when out of view (reverse scroll)
            entry.target.style.transform = 'scaleY(0)';
        }
    });
}, {
    threshold: 0.1
});

verticalLines.forEach(line => {
    line.style.transform = 'scaleY(0)';
    line.style.transformOrigin = 'top';
    line.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
    lineObserver.observe(line);
});

// ============================================
// Smooth Scroll Navigation
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            lenis.scrollTo(targetElement, {
                offset: -100,
                duration: 1.5
            });
        }
    });
});

// ============================================
// Bottom Nav Scroll Behavior
// ============================================
const bottomNav = document.querySelector('.bottom-nav');
let lastScroll = 0;

if (bottomNav) {
    bottomNav.style.transition = 'transform 0.4s ease, opacity 0.4s ease';

    lenis.on('scroll', ({ scroll }) => {
        if (scroll > lastScroll && scroll > 300) {
            bottomNav.style.transform = 'translateY(120%)';
        } else {
            bottomNav.style.transform = 'translateY(0)';
        }
        lastScroll = scroll;
    });
}

// ============================================
// Glow Frame Scroll Effect
// ============================================
const glowFrame = document.querySelector('.glow-frame');

if (glowFrame) {
    lenis.on('scroll', ({ scroll, limit, velocity }) => {
        const progress = scroll / limit;
        const velo = Math.min(Math.abs(velocity), 100);
        const intensity = 0.15 + (progress * 0.1) + (velo * 0.002);

        glowFrame.style.borderColor = `rgba(154, 166, 178, ${intensity})`;
    });
}

// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Hero title animation
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';

        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    // Hero subtitle animation
    if (heroSubtitleRow) {
        heroSubtitleRow.style.opacity = '0';

        setTimeout(() => {
            heroSubtitleRow.style.transition = 'opacity 0.8s ease';
            heroSubtitleRow.style.opacity = '1';
        }, 600);
    }

    // Bottom nav animation
    if (bottomNav) {
        bottomNav.style.opacity = '0';
        bottomNav.style.transform = 'translateY(30px)';

        setTimeout(() => {
            bottomNav.style.opacity = '1';
            bottomNav.style.transform = 'translateY(0)';
        }, 800);
    }
});

// ============================================
// Console
// ============================================
console.log('%c AFRIDI ', 'background: #9AA6B2; color: #F8FAFC; font-family: Anton, sans-serif; font-size: 32px; padding: 20px 40px;');
console.log('%c Creative Developer ', 'color: #1a1a2e; font-size: 14px;');
