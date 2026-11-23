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

    /**
 * HBSE Class 12 Website - Complete Logic
 * Includes:
 * 1. Biology Teacher & Chapter Video Switcher
 * 2. Live Exam Countdown & Automatic Exam-Day Look Switcher
 * 3. Rotating Hindi & English Study Quotes (with Live API)
 * 4. Sequential Auto-Play Padhai Motivation Videos (Vikas Divyakirti, Alakh Pandey, etc.)
 * 5. 2024 - 2027 Sample Papers Year Filter
 */

/* ==========================================================================
   PART 1: Biology Section Video Switcher
   ========================================================================== */

const BIOLOGY_LECTURES = {
  vipin: "qeOhnLUGCe4",   // Vipin Sharma Sir - Sexual Reproduction in Flowering Plants
  samapti: "Ckc0gS9Kvrg", // Samapti Sinha Mam - Human Reproduction One-Shot
  ritu: "LhqhdKRHt7g"     // Ritu Rattewal Mam - Principles of Inheritance & Variation
};

function switchBioTeacher(teacherKey, clickedButton) {
  const player = document.getElementById("bio-main-player");
  const videoId = BIOLOGY_LECTURES[teacherKey];

  if (!player || !videoId) return;

  player.src = `https://youtube.com{videoId}?autoplay=1&rel=0`;

  const allButtons = document.querySelectorAll(".bio-teacher-btn");
  allButtons.forEach((btn) => btn.classList.remove("active"));

  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}

function playBioChapter(videoId) {
  const player = document.getElementById("bio-main-player");
  if (!player || !videoId) return;

  player.src = `https://youtube.com{videoId}?autoplay=1&rel=0`;

  const allButtons = document.querySelectorAll(".bio-teacher-btn");
  allButtons.forEach((btn) => btn.classList.remove("active"));
}

/* ==========================================================================
   PART 2: Live Exam Countdown, Rotating Quotes & Auto-Playlist Videos
   ========================================================================== */

// Target HBSE Exam Date
const HBSE_EXAM_DATE = new Date("March 1, 2027 09:00:00").getTime();

// Real Hindi & English Study Motivation Quotes
const STUDY_QUOTES_LIST = [
  "\"क्यों डरें ज़िंदगी में क्या होगा, कुछ ना होगा तो तजुर्बा होगा।\" — Dr. Vikas Divyakirti",
  "\"पढ़ाई को अपनी मजबूरी नहीं, अपनी ताकत बनाओ।\" — Alakh Pandey (PW)",
  "\"हमेशा याद रखो, आप अपनी प्रॉब्लम से कई गुना बड़े हो।\" — Sandeep Maheshwari",
  "\"देखिये, भगवान केवल उन्ही की मदद करता है जो कड़ी मेहनत करते हैं।\" — Dr. A.P.J. Abdul Kalam",
  "\"जैसे नोट गिनते समय ध्यान नहीं भटकता, वैसे ही पढ़ाई करते समय भी ध्यान नहीं भटकना चाहिए।\" — Khan Sir",
  "\"It always seems impossible until it's done.\" — Nelson Mandela"
];

// Sequential Padhai Motivation YouTube Video IDs
const PADHAI_VIDEO_PLAYLIST = [
  "icKhsQtVlLs", // 1. Dr. Vikas Divyakirti - Kuch na hoga toh tajurba hoga
  "LwjSbN5-tEU", // 2. Alakh Pandey Sir (PW) - Study Motivation
  "R8OFOURSZZA", // 3. Sandeep Maheshwari - Addiction to Education
  "3pg0nzainMo"  // 4. Khan Sir - Best Study Motivation
];

let quoteCursor = 0;
let activeVideoIdx = 0;
let motivationYtPlayer = null;
let isYtApiLoaded = false;

// Smoothly rotate quotes every 5 seconds
async function cycleMotivationalQuotes() {
  const quoteEl = document.getElementById("live-motivation-quote");
  if (!quoteEl) return;

  quoteEl.classList.remove("quote-visible");
  quoteEl.classList.add("quote-hidden");

  setTimeout(async () => {
    if (quoteCursor % 2 === 0) {
      quoteEl.innerText = STUDY_QUOTES_LIST[quoteCursor % STUDY_QUOTES_LIST.length];
    } else {
      try {
        const res = await fetch("https://dummyjson.com");
        if (!res.ok) throw new Error("Network response error");
        const data = await res.json();
        quoteEl.innerText = `"${data.quote}" — ${data.author}`;
      } catch (err) {
        quoteEl.innerText = STUDY_QUOTES_LIST[quoteCursor % STUDY_QUOTES_LIST.length];
      }
    }

    quoteCursor++;
    quoteEl.classList.remove("quote-hidden");
    quoteEl.classList.add("quote-visible");
  }, 500);
}

setInterval(cycleMotivationalQuotes, 5000);

// Live Countdown Loop
const hbseTimerInterval = setInterval(() => {
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const now = new Date().getTime();
  const remaining = HBSE_EXAM_DATE - now;

  if (remaining <= 0) {
    clearInterval(hbseTimerInterval);
    activateExamDayMode();
    return;
  }

  daysEl.innerText = String(Math.floor(remaining / (1000 * 60 * 60 * 24))).padStart(2, "0");
  hoursEl.innerText = String(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  minsEl.innerText = String(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  secsEl.innerText = String(Math.floor((remaining % (1000 * 60)) / 1000)).padStart(2, "0");
}, 1000);

// Activate Motivational Theme & Video Hub when timer finishes
function activateExamDayMode() {
  const banner = document.getElementById("exam-motivation-banner");
  const title = document.getElementById("exam-banner-title");
  const timerGrid = document.getElementById("live-timer-grid");
  const videoHub = document.getElementById("exam-day-video-hub");

  if (banner) banner.classList.add("exam-mode-active");
  if (title) title.innerText = "IT'S SHOWTIME! ALL THE BEST WARRIORS!";
  if (timerGrid) timerGrid.style.display = "none";
  if (videoHub) videoHub.style.display = "block";

  loadYouTubePlaylistApi();
}

function loadYouTubePlaylistApi() {
  if (isYtApiLoaded) return;
  isYtApiLoaded = true;

  const scriptTag = document.createElement("script");
  scriptTag.src = "https://youtube.com";
  document.head.appendChild(scriptTag);
}

// YouTube IFrame API Ready Callback
window.onYouTubeIframeAPIReady = function () {
  const playerContainer = document.getElementById("hbse-motivation-player");
  if (!playerContainer) return;

  motivationYtPlayer = new YT.Player("hbse-motivation-player", {
    videoId: PADHAI_VIDEO_PLAYLIST[activeVideoIdx],
    playerVars: {
      autoplay: 1,
      rel: 0
    },
    events: {
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          activeVideoIdx = (activeVideoIdx + 1) % PADHAI_VIDEO_PLAYLIST.length;
          motivationYtPlayer.loadVideoById(PADHAI_VIDEO_PLAYLIST[activeVideoIdx]);
          highlightActiveMentorTab(activeVideoIdx);
        }
      }
    }
  });
};

function selectMentorVideo(index, clickedBtn) {
  activeVideoIdx = index;
  if (motivationYtPlayer && typeof motivationYtPlayer.loadVideoById === "function") {
    motivationYtPlayer.loadVideoById(PADHAI_VIDEO_PLAYLIST[activeVideoIdx]);
  }
  highlightActiveMentorTab(index, clickedBtn);
}

function highlightActiveMentorTab(index, clickedBtn) {
  const tabs = document.querySelectorAll(".mentor-tab");
  tabs.forEach((tab, idx) => {
    if (clickedBtn) {
      tab.classList.toggle("active", tab === clickedBtn);
    } else {
      tab.classList.toggle("active", idx === index);
    }
  });
}

/* ==========================================================================
   PART 3: 2024 - 2027 HBSE Sample Papers Year Filter hello world im sunny boss
   ========================================================================== */

function filterHbsePapers(year, clickedBtn) {
  const cards = document.querySelectorAll(".hbse-paper-card");
  const buttons = document.querySelectorAll(".year-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));
  if (clickedBtn) clickedBtn.classList.add("active");

  cards.forEach((card) => {
    const cardYear = card.getAttribute("data-year");
    if (year === "all" || cardYear === year) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

}

window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
});
