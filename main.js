window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash');
        if(splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.classList.add('splash-hidden'), 1000);
        }
    }, 1500);
});

const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
if(themeBtn) themeBtn.innerText = savedTheme === 'dark' ? 'الوضع الساطع' : 'الوضع الليلي';

if(themeBtn) {
    themeBtn.onclick = () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeBtn.innerText = next === 'dark' ? 'الوضع الساطع' : 'الوضع الليلي';
    };
}

const modal = document.getElementById('booking-modal');
const openBtn = document.getElementById('open-booking');
const closeBtn = document.querySelector('.close');
if(openBtn) openBtn.onclick = () => modal.style.display = 'flex';
if(closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
