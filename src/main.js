import './style.css'

// --- Countdown Timer Logic ---
const targetDate = new Date('August 13, 2026 09:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) countdownEl.innerHTML = "<p class='text-2xl font-bold text-orange-600 uppercase tracking-widest'>The School has Started!</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the DOM elements if they exist
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
    if (minsEl) minsEl.innerText = minutes.toString().padStart(2, '0');
    if (secsEl) secsEl.innerText = seconds.toString().padStart(2, '0');
};

// Initial run and then every second
if (document.getElementById('countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// --- Notify Me Form Handling ---
const notifyForm = document.getElementById('notify-form');
const formMessage = document.getElementById('form-message');

if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = notifyForm.querySelector('input').value;
        
        // Log sign-up (This is where you'd connect to Cvent API or a simple sheet)
        console.log(`New sign-up: ${email}`);
        
        // UI Feedback
        notifyForm.classList.add('hidden');
        if (formMessage) formMessage.classList.remove('hidden');
        
        // Save to local storage so user doesn't see form again
        localStorage.setItem('notified_email', email);
    });
}
