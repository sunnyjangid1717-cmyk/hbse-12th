// 1. Live Countdown Timer Logic (Target: Feb 27, 2027)
const targetDate = new Date("February 27, 2027 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const dElem = document.getElementById("timer-days");
        const hElem = document.getElementById("timer-hours");
        const mElem = document.getElementById("timer-mins");
        const sElem = document.getElementById("timer-secs");

        if (dElem) dElem.innerText = days < 10 ? '0' + days : days;
        if (hElem) hElem.innerText = hours < 10 ? '0' + hours : hours;
        if (mElem) mElem.innerText = minutes < 10 ? '0' + minutes : minutes;
        if (sElem) sElem.innerText = seconds < 10 ? '0' + seconds : seconds;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 2. Main Tab Switching Logic
function switchTab(tabName) {
    const tabs = ['high-yield', 'youtube', 'scheduler', 'papers'];
    
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        const content = document.getElementById(`content-${t}`);
        
        if (btn && content) {
            if (t === tabName) {
                btn.className = "px-5 py-2.5 text-sm font-bold rounded-xl bg-sky-500 text-slate-950 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-sky-500/20 transition-all";
                content.classList.remove('hidden');
            } else {
                btn.className = "px-5 py-2.5 text-sm font-bold rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2 whitespace-nowrap border border-slate-800 transition-all";
                content.classList.add('hidden');
            }
        }
    });
}

// 3. YouTube Subject Sub-Filtering Logic
function filterYT(subject) {
    const categories = ['all', 'phy', 'chem', 'math', 'cs', 'eng', 'hin'];
    
    // Highlight Active Filter Button
    categories.forEach(cat => {
        const btn = document.getElementById(`yt-btn-${cat}`);
        if (btn) {
            if (cat === subject) {
                btn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-red-500 text-white transition";
            } else {
                btn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition";
            }
        }
    });

    // Show/Hide YT Video Cards
    const cards = document.querySelectorAll('.yt-card');
    cards.forEach(card => {
        if (subject === 'all' || card.classList.contains(subject)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// 4. Bilingual Language Switcher (Hindi <-> English)
let currentLang = 'hi';

const langData = {
    hi: {
        "mission": "Mission 90%+ HBSE Board",
        "banner-title": "हरियाणा बोर्ड 12वीं परीक्षा काउंटडाउन",
        "banner-subtitle": "भौतिकी, रसायन, गणित, कंप्यूटर, हिंदी एवं अंग्रेजी की संपूर्ण तैयारी एक स्थान पर।",
        "unit-days": "दिन",
        "unit-hours": "घंटे",
        "unit-mins": "मिनट",
        "unit-secs": "सेकंड",
        "tab-notes": "Zero-to-Hero High-Yield Topics",
        "tab-youtube": "YouTube One-Shot Lectures",
        "tab-schedule": "Smart Scheduler",
        "tab-papers": "Direct HBSE Board Papers",
        "yt-title": "बेस्ट YouTube वन-शॉट लेक्चर्स (सभी विषय)",
        "yt-sub": "विषय चुनें और सीधे भारत के टॉप YouTube टीचर्स के लेक्चर्स से पढ़ें।",
        "sch-title": "स्मार्ट बोर्ड स्टडी रूटीन (Smart Study Plan)",
        "sch-sub": "कम समय में मेरिट हासिल करने का मास्टर टाइम-टेबल।",
        "papers-title": "आधिकारिक HBSE बोर्ड पेपर्स (डायरेक्ट डाउनलोड लिंक्स)",
        "papers-sub": "मुख्य वेबसाइट पर बिना भटके सीधे आधिकारिक HBSE क्वेश्चन पेपर्स और मॉडल पेपर्स डाउनलोड करें।"
    },
    en: {
        "mission": "Mission 90%+ HBSE Board",
        "banner-title": "HBSE Class 12 Board Exam Countdown",
        "banner-subtitle": "Complete Preparation for Physics, Chemistry, Maths, CS, Hindi & English in One Place.",
        "unit-days": "DAYS",
        "unit-hours": "HOURS",
        "unit-mins": "MINS",
        "unit-secs": "SECS",
        "tab-notes": "Zero-to-Hero High-Yield Topics",
        "tab-youtube": "YouTube One-Shot Lectures",
        "tab-schedule": "Smart Scheduler",
        "tab-papers": "Direct HBSE Board Papers",
        "yt-title": "Best YouTube One-Shot Lectures (All Subjects)",
        "yt-sub": "Select subject and learn directly from India's top educators.",
        "sch-title": "Smart Board Study Routine",
        "sch-sub": "Master time-table to secure merit in less time.",
        "papers-title": "Official HBSE Board Papers (Direct Download Links)",
        "papers-sub": "Directly access HBSE official model papers & previous year question sets."
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    document.getElementById('lang-label').innerText = currentLang === 'hi' ? 'English' : 'हिंदी';

    const keys = Object.keys(langData[currentLang]);
    keys.forEach(key => {
        const elems = document.querySelectorAll(`[data-key="${key}"]`);
        elems.forEach(el => {
            el.innerText = langData[currentLang][key];
        });
    });
}

// 5. Persistent Progress Bar (LocalStorage)
function saveProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const states = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem('hbse_cyber_progress', JSON.stringify(states));
}

function loadProgress() {
    const saved = localStorage.getItem('hbse_cyber_progress');
    if (saved) {
        try {
            const states = JSON.parse(saved);
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((cb, index) => {
                if (states[index] !== undefined) cb.checked = states[index];
            });
        } catch (e) {
            console.error("Progress restoration error", e);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
});