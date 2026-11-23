/**
 * HBSE 12th Merit Engine PRO - Complete Logic
 * Includes:
 * 1. Live Countdown Timer (Target: Feb 27, 2027) + Automatic Exam-Day Look Switcher
 * 2. Rotating Real Hindi & English Study Motivation Quotes
 * 3. Sequential Auto-Play Padhai Motivation Videos (Vikas Divyakirti, Alakh Pandey, etc.)
 * 4. Biology Live Video Switcher & Subject Sub-Filtering
 * 5. 2024 - 2027 Sample Papers Year Filter, Language Toggle & Progress Persistence
 */

// 1. Live Countdown Timer Logic (Target: Feb 27, 2027)
const targetDate = new Date("February 27, 2027 09:00:00").getTime();

// Real Hindi & English Padhai Motivation Quotes
const studyMotivationQuotes = [
    "\"क्यों डरें ज़िंदगी में क्या होगा, कुछ ना होगा तो तजुर्बा होगा।\" — Dr. Vikas Divyakirti",
    "\"पढ़ाई को अपनी मजबूरी नहीं, अपनी ताकत बनाओ।\" — Alakh Pandey (PW)",
    "\"हमेशा याद रखो, आप अपनी प्रॉब्लम से कई गुना बड़े हो।\" — Sandeep Maheshwari",
    "\"देखिये, भगवान केवल उन्ही की मदद करता है जो कड़ी मेहनत करते हैं।\" — Dr. A.P.J. Abdul Kalam",
    "\"जैसे नोट गिनते समय ध्यान नहीं भटकता, वैसे ही पढ़ाई करते समय भी ध्यान नहीं भटकना चाहिए।\" — Khan Sir",
    "\"It always seems impossible until it's done.\" — Nelson Mandela"
];

// Sequential Padhai Motivation YouTube Video IDs
const padhaiMotivationPlaylist = [
    "icKhsQtVlLs", // 1. Dr. Vikas Divyakirti - Kuch na hoga toh tajurba hoga
    "LwjSbN5-tEU", // 2. Alakh Pandey Sir (PW) - Study Motivation
    "R8OFOURSZZA", // 3. Sandeep Maheshwari - Addiction to Education
    "3pg0nzainMo"  // 4. Khan Sir - Best Study Motivation
];

let quoteIndex = 0;
let activeMentorIndex = 0;
let motivationPlayer = null;
let ytScriptInjected = false;

// Smoothly cycle Hindi & English quotes every 5 seconds
async function rotateLiveQuotes() {
    const quoteEl = document.getElementById("live-quote-display");
    if (!quoteEl) return;

    quoteEl.classList.remove("quote-fade-in");
    quoteEl.classList.add("quote-fade-out");

    setTimeout(async () => {
        if (quoteIndex % 2 === 0) {
            quoteEl.innerText = studyMotivationQuotes[quoteIndex % studyMotivationQuotes.length];
        } else {
            try {
                const response = await fetch("https://dummyjson.com");
                if (!response.ok) throw new Error("API unavailable");
                const data = await response.json();
                quoteEl.innerText = `"${data.quote}" — ${data.author}`;
            } catch (error) {
                quoteEl.innerText = studyMotivationQuotes[quoteIndex % studyMotivationQuotes.length];
            }
        }
        quoteIndex++;
        quoteEl.classList.remove("quote-fade-out");
        quoteEl.classList.add("quote-fade-in");
    }, 500);
}
setInterval(rotateLiveQuotes, 5000);

// Countdown Loop
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(countdownTimer);
        triggerExamDayMotivationMode();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const dElem = document.getElementById("timer-days");
    const hElem = document.getElementById("timer-hours");
    const mElem = document.getElementById("timer-mins");
    const sElem = document.getElementById("timer-secs");

    if (dElem) dElem.innerText = days < 10 ? "0" + days : days;
    if (hElem) hElem.innerText = hours < 10 ? "0" + hours : hours;
    if (mElem) mElem.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (sElem) sElem.innerText = seconds < 10 ? "0" + seconds : seconds;
}
updateCountdown();

// Switch Banner Look & Unlock Auto-Play Motivation Playlist when timer ends
function triggerExamDayMotivationMode() {
    const banner = document.getElementById("hero-countdown-banner");
    const badge = document.getElementById("banner-badge");
    const title = document.getElementById("banner-main-title");
    const timerBox = document.getElementById("countdown-grid-box");
    const videoHub = document.getElementById("exam-day-motivation-hub");

    if (banner) banner.classList.add("exam-day-glow");
    if (badge) {
        badge.innerText = "EXAM SHOWTIME // ALL THE BEST";
        badge.className = "text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/40";
    }
    if (title) title.innerText = "अब वक्त है खुद को साबित करने का! All The Best Warriors!";
    if (timerBox) timerBox.classList.add("hidden");
    if (videoHub) videoHub.classList.remove("hidden");

    injectYouTubeIframeApi();
}

function injectYouTubeIframeApi() {
    if (ytScriptInjected) return;
    ytScriptInjected = true;

    const tag = document.createElement("script");
    tag.src = "https://youtube.com";
    document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = function () {
    const container = document.getElementById("auto-motivation-player");
    if (!container) return;

    motivationPlayer = new YT.Player("auto-motivation-player", {
        videoId: padhaiMotivationPlaylist[activeMentorIndex],
        playerVars: { autoplay: 1, rel: 0 },
        events: {
            onStateChange: function (event) {
                if (event.data === YT.PlayerState.ENDED) {
                    activeMentorIndex = (activeMentorIndex + 1) % padhaiMotivationPlaylist.length;
                    motivationPlayer.loadVideoById(padhaiMotivationPlaylist[activeMentorIndex]);
                    updateMentorButtonStyles(activeMentorIndex);
                }
            }
        }
    });
};

function playMentorAtIndex(index, clickedBtn) {
    activeMentorIndex = index;
    if (motivationPlayer && typeof motivationPlayer.loadVideoById === "function") {
        motivationPlayer.loadVideoById(padhaiMotivationPlaylist[activeMentorIndex]);
    }
    updateMentorButtonStyles(index, clickedBtn);
}

function updateMentorButtonStyles(index, clickedBtn) {
    const buttons = document.querySelectorAll(".mentor-switch-btn");
    buttons.forEach((btn, idx) => {
        const isActive = clickedBtn ? btn === clickedBtn : idx === index;
        if (isActive) {
            btn.className = "mentor-switch-btn active-mentor px-4 py-2 rounded-xl text-xs font-bold border border-amber-400 bg-amber-400 text-slate-950 transition";
        } else {
            btn.className = "mentor-switch-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-700 bg-slate-900 text-slate-200 hover:border-amber-400 transition";
        }
    });
}

// 2. Main Tab Switching Logic
function switchTab(tabName) {
    const tabs = ["high-yield", "youtube", "scheduler", "papers"];

    tabs.forEach((t) => {
        const btn = document.getElementById(`tab-${t}`);
        const content = document.getElementById(`content-${t}`);

        if (btn && content) {
            if (t === tabName) {
                btn.className = "px-5 py-2.5 text-sm font-bold rounded-xl bg-sky-500 text-slate-950 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-sky-500/20 transition-all";
                content.classList.remove("hidden");
            } else {
                btn.className = "px-5 py-2.5 text-sm font-bold rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2 whitespace-nowrap border border-slate-800 transition-all";
                content.classList.add("hidden");
            }
        }
    });
}

// 3. Biology Live Video Switcher & YouTube Subject Sub-Filtering
const BIOLOGY_TEACHER_VIDEOS = {
    vipin: "qeOhnLUGCe4",   // Vipin Sharma Sir (PW)
    samapti: "Ckc0gS9Kvrg", // Samapti Sinha Mam
    ritu: "LhqhdKRHt7g"     // Ritu Rattewal Mam
};

function switchBioTeacher(teacherKey, clickedBtn) {
    const player = document.getElementById("bio-main-player");
    const videoId = BIOLOGY_TEACHER_VIDEOS[teacherKey];
    if (!player || !videoId) return;

    player.src = `https://youtube.com{videoId}?autoplay=1&rel=0`;

    document.querySelectorAll(".bio-teacher-btn").forEach((btn) => {
        btn.className = "bio-teacher-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition";
    });
    if (clickedBtn) {
        clickedBtn.className = "bio-teacher-btn active px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 transition";
    }
}

function filterYT(subject) {
    const categories = ["all", "bio", "phy", "chem", "math", "cs", "eng", "hin"];

    categories.forEach((cat) => {
        const btn = document.getElementById(`yt-btn-${cat}`);
        if (btn) {
            if (cat === subject) {
                btn.className = "px-3 py-1.5 text-xs font-bold rounded-lg bg-red-500 text-white transition";
            } else {
                btn.className = "px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition";
            }
        }
    });

    const cards = document.querySelectorAll(".yt-card");
    cards.forEach((card) => {
        if (subject === "all" || card.classList.contains(subject)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// 4. 2024 - 2027 Sample Papers Year Filter
function filterHbsePapers(year, clickedBtn) {
    const cards = document.querySelectorAll(".hbse-paper-item");
    const buttons = document.querySelectorAll(".paper-year-btn");

    buttons.forEach((btn) => {
        btn.className = "paper-year-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition";
    });
    if (clickedBtn) {
