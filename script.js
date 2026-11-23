/**
 * HBSE Class 12th Unified Academic Hub
 * - Subject-wise Date Sheet Countdown Engine (2027)
 * - Auto-unlocks HBSE Official Logo & Dr. Vikas Divyakirti + Alakh Pandey Motivation Playlist
 * - 14 Complete Subjects with Direct Sample Paper PDFs & In-Website YouTube Embeds
 */

// 1. HBSE Class 12th Tentative Date Sheet Schedule (Evening Shift: 12:30 PM)
const DEFAULT_HBSE_DATESHEET = [
    { id: "english",    subject: "English Core",             date: "2027-02-27T12:30:00", stream: "All Streams" },
    { id: "physics",    subject: "Physics / Economics",      date: "2027-03-02T12:30:00", stream: "Science / Arts / Comm" },
    { id: "history",    subject: "History / Accountancy",    date: "2027-03-05T12:30:00", stream: "Arts / Commerce" },
    { id: "chemistry",  subject: "Chemistry / Business St.", date: "2027-03-09T12:30:00", stream: "Science / Commerce" },
    { id: "hindi",      subject: "Hindi Core",               date: "2027-03-12T12:30:00", stream: "All Streams" },
    { id: "maths",      subject: "Mathematics / Pol. Sci.",  date: "2027-03-16T12:30:00", stream: "Non-Med / Arts" },
    { id: "biology",    subject: "Biology / Geography",      date: "2027-03-20T12:30:00", stream: "Medical / Arts" },
    { id: "cs",         subject: "Computer Science (CS)",    date: "2027-03-24T12:30:00", stream: "Skill / Optional" },
    { id: "music",      subject: "Hindustani Music",         date: "2027-03-27T12:30:00", stream: "Arts / Music" }
];

let hbseSchedule = JSON.parse(localStorage.getItem("hbse_2027_datesheet")) || DEFAULT_HBSE_DATESHEET;
let selectedExamId = null;

function formatExamDate(isoStr) {
    const d = new Date(isoStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function getAutoNextExam() {
    const now = new Date().getTime();
    const sorted = [...hbseSchedule].sort((a, b) => new Date(a.date) - new Date(b.date));
    return sorted.find(item => new Date(item.date).getTime() > now) || sorted[0];
}

function initDateSheetUI() {
    const selectEl = document.getElementById("countdown-subject-select");
    const stripEl = document.getElementById("datesheet-timeline-strip");
    const editorGrid = document.getElementById("date-inputs-grid");

    if (!selectedExamId) {
        selectedExamId = getAutoNextExam().id;
    }

    if (selectEl) {
        selectEl.innerHTML = hbseSchedule.map(item => `
            <option value="${item.id}" ${item.id === selectedExamId ? "selected" : ""}>
                ${item.subject} (${formatExamDate(item.date)})
            </option>
        `).join("");
    }

    if (stripEl) {
        const now = new Date().getTime();
        stripEl.innerHTML = hbseSchedule.map(item => {
            const examTime = new Date(item.date).getTime();
            const daysLeft = Math.ceil((examTime - now) / (1000 * 60 * 60 * 24));
            const isSelected = item.id === selectedExamId;
            const statusText = daysLeft > 0 ? `${daysLeft} Days Left` : "Exam Started";

            return `
                <div onclick="changeTargetExam('${item.id}')" class="cursor-pointer p-2.5 rounded-xl border transition ${isSelected ? 'bg-sky-500/15 border-sky-400' : 'bg-slate-900/80 border-slate-800 hover:border-slate-600'}">
                    <div class="text-[10px] font-bold text-amber-400">${formatExamDate(item.date)}</div>
                    <div class="text-xs font-extrabold text-white truncate mt-0.5">${item.subject}</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">${statusText}</div>
                </div>
            `;
        }).join("");
    }

    if (editorGrid) {
        editorGrid.innerHTML = hbseSchedule.map(item => `
            <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <label class="block font-bold text-slate-300 mb-1">${item.subject}</label>
                <input type="datetime-local" id="edit-date-${item.id}" value="${item.date.slice(0, 16)}" class="w-full bg-slate-950 text-white px-2 py-1 rounded border border-slate-700 text-xs">
            </div>
        `).join("");
    }

    const exam = hbseSchedule.find(e => e.id === selectedExamId) || getAutoNextExam();
    const heading = document.getElementById("hero-heading");
    const dateBadge = document.getElementById("next-exam-date-badge");
    if (heading) heading.innerText = `अगला पेपर: ${exam.subject}`;
    if (dateBadge) dateBadge.innerText = `Date: ${formatExamDate(exam.date)} • 12:30 PM (${exam.stream})`;
}

function changeTargetExam(examId) {
    selectedExamId = examId;
    initDateSheetUI();
}

function toggleDateEditor() {
    const modal = document.getElementById("datesheet-editor-modal");
    if (modal) modal.classList.toggle("hidden");
}

function saveCustomDates() {
    hbseSchedule = hbseSchedule.map(item => {
        const inputEl = document.getElementById(`edit-date-${item.id}`);
        return (inputEl && inputEl.value) ? { ...item, date: inputEl.value + ":00" } : item;
    });
    localStorage.setItem("hbse_2027_datesheet", JSON.stringify(hbseSchedule));
    toggleDateEditor();
    initDateSheetUI();
}

function resetDefaultDates() {
    localStorage.removeItem("hbse_2027_datesheet");
    hbseSchedule = [...DEFAULT_HBSE_DATESHEET];
    selectedExamId = getAutoNextExam().id;
    toggleDateEditor();
    initDateSheetUI();
}

// 2. Rotating Quotes & Exam-Day Logo + Motivation Playlist
const GENUINE_QUOTES = [
    "\"क्यों डरें ज़िंदगी में क्या होगा, कुछ ना होगा तो तजुर्बा होगा।\" — Dr. Vikas Divyakirti",
    "\"पढ़ाई को अपनी मजबूरी नहीं, अपनी ताकत बनाओ।\" — Alakh Pandey (PW)",
    "\"हमेशा याद रखो, आप अपनी प्रॉब्लम से कई गुना बड़े हो।\" — Sandeep Maheshwari",
    "\"देखिये, भगवान केवल उन्ही की मदद करता है जो कड़ी मेहनत करते हैं।\" — Dr. A.P.J. Abdul Kalam",
    "\"It always seems impossible until it's done.\" — Nelson Mandela"
];

const MOTIVATION_PLAYLIST_IDS = ["icKhsQtVlLs", "LwjSbN5-tEU", "R8OFOURSZZA", "3pg0nzainMo"];
let qIdx = 0;
let mVideoIdx = 0;
let ytPlaylistPlayer = null;
let apiLoaded = false;

setInterval(async () => {
    const qEl = document.getElementById("rotating-quote-text");
    if (!qEl) return;

    qEl.classList.remove("quote-show");
    qEl.classList.add("quote-hide");

    setTimeout(async () => {
        if (qIdx % 2 === 0) {
            qEl.innerText = GENUINE_QUOTES[qIdx % GENUINE_QUOTES.length];
        } else {
            try {
                const res = await fetch("https://dummyjson.com");
                const data = await res.json();
                qEl.innerText = `"${data.quote}" — ${data.author}`;
            } catch (e) {
                qEl.innerText = GENUINE_QUOTES[qIdx % GENUINE_QUOTES.length];
            }
        }
        qIdx++;
        qEl.classList.remove("quote-hide");
        qEl.classList.add("quote-show");
    }, 450);
}, 5000);

setInterval(() => {
    const targetExam = hbseSchedule.find(e => e.id === selectedExamId) || getAutoNextExam();
    const diff = new Date(targetExam.date).getTime() - new Date().getTime();

    if (diff <= 0) {
        activateExamDayTheme(targetExam.subject);
        return;
    }

    document.getElementById("t-days").innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    document.getElementById("t-hours").innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    document.getElementById("t-mins").innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    document.getElementById("t-secs").innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");
}, 1000);

function activateExamDayTheme(subjectName) {
    const spinner = document.getElementById("live-spinner-icon");
    const hbseImg = document.getElementById("hbse-official-logo");
    const logoBox = document.getElementById("brand-logo-box");

    if (spinner) spinner.classList.add("hidden");
    if (hbseImg) hbseImg.classList.remove("hidden");
    if (logoBox) {
        logoBox.classList.remove("bg-slate-900", "border-sky-500/30");
        logoBox.classList.add("bg-white", "border-amber-400");
    }

    const hero = document.getElementById("countdown-hero-card");
    const heading = document.getElementById("hero-heading");
    const boxes = document.getElementById("countdown-boxes");
    const motSection = document.getElementById("exam-day-motivation-section");

    if (hero) hero.classList.add("exam-day-active");
    if (heading) heading.innerText = `Exam Day (${subjectName}): All The Best Warriors!`;
    if (boxes) boxes.classList.add("hidden");
    if (motSection) motSection.classList.remove("hidden");

    if (!apiLoaded) {
        apiLoaded = true;
        const tag = document.createElement("script");
        tag.src = "https://youtube.com";
        document.head.appendChild(tag);
    }
}

window.onYouTubeIframeAPIReady = function () {
    if (!document.getElementById("yt-motivation-playlist")) return;
    ytPlaylistPlayer = new YT.Player("yt-motivation-playlist", {
        videoId: MOTIVATION_PLAYLIST_IDS[mVideoIdx],
        playerVars: { autoplay: 1, rel: 0 },
        events: {
            onStateChange: function (e) {
                if (e.data === YT.PlayerState.ENDED) {
                    mVideoIdx = (mVideoIdx + 1) % MOTIVATION_PLAYLIST_IDS.length;
                    ytPlaylistPlayer.loadVideoById(MOTIVATION_PLAYLIST_IDS[mVideoIdx]);
                    highlightMentorTab(mVideoIdx);
                }
            }
        }
    });
};

function switchMotivationVideo(idx, btn) {
    mVideoIdx = idx;
    if (ytPlaylistPlayer && typeof ytPlaylistPlayer.loadVideoById === "function") {
        ytPlaylistPlayer.loadVideoById(MOTIVATION_PLAYLIST_IDS[mVideoIdx]);
    }
    highlightMentorTab(idx, btn);
}

function highlightMentorTab(idx, clickedBtn) {
    document.querySelectorAll(".mentor-btn").forEach((b, i) => {
