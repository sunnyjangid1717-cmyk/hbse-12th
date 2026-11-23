NORTHSTAR LEARNING PORTAL — VERSION 3

INSTALL
1. Extract the ZIP into a normal folder (do not open index.html inside the ZIP preview).
2. Keep index.html, style.css and script.js together in the same folder.
3. Open index.html, or run the folder with VS Code Live Server.

FIXES IN V3
- Class 10 and Class 12 paper selectors now have separate subject lists and year lists.
- Known official sample-paper PDFs open directly.
- For selections without a verified direct PDF, the matching BSEH archive/model-paper page opens instead of a broken/empty link.
- Class 10 and Class 12 previous-paper archive routes added for years with available sources.
- PCB Physics and Chemistry now reuse the PCM chapter/topic lists instead of appearing empty.
- Added responsive motion, animated hero glow, card transitions, chapter interaction and reduced-motion accessibility.
- Countdown runs every second using the provisional target already configured in script.js.

PAPER SOURCE NOTES
Official HBSE pages used include:
- Class 10 model paper / marking scheme: https://bseh.org.in/model-paper-stepwise-marking-scheme-classwise-202627
- Class 12 model papers 2026-27: https://bseh.org.in/class-12th-model-paper-stepwise-marking-scheme-202627
- Class 12 old papers 2026: https://bseh.org.in/srsec-old-question-paper-march-2026
- Class 10 old papers 2026: https://bseh.org.in/secondary-old-question-paper-2026
Some earlier-year archive selections open a paper-library page; select the required subject and set there. Not every year/subject has a separately verified direct PDF URL in this static package.

YOUTUBE NOTE
The site can embed a lesson only when a real YouTube video ID is entered in that topic's chapter.videos object in script.js. If no ID exists, the topic offers a targeted YouTube search link instead of showing a fake/broken player. YouTube controls its own ads and availability. This static site cannot guarantee ad-free YouTube playback.

COUNTDOWN NOTE
EXAM_DATE is currently set to a provisional date in script.js. It is not an official HBSE date sheet. Replace it when BSEH publishes the confirmed date/time.

The chapter/topic dataset is starter curriculum data and should be checked against the latest HBSE syllabus before treating it as exhaustive. This is an independent study website, not an official HBSE website.


V3.1 MOTIVATION TICKER
- Added a continuous horizontal motivation ticker at the bottom of the page, above the footer.
- Includes original motivational lines in English and Hindi, repeated seamlessly for continuous scrolling.
- Pauses on hover/focus and respects reduced-motion accessibility settings.
- Responsive layout works on mobile and desktop.


VERSION 4 — COSMIC FUTURE VISUAL UPDATE
- Premium dark cosmic theme with cyan / electric-blue / violet gradients.
- Responsive animated particle starfield with subtle connecting lines on larger screens.
- Glassmorphism cards, glow borders, aurora lighting and smoother hover transitions.
- Particle motion respects reduced-motion accessibility and pauses while the tab is hidden.
- New cosmic.js is required alongside index.html, style.css and script.js.


VERSION 5 — LIVE SUBJECT ATMOSPHERE
- Selecting a subject changes the live background theme automatically.
- Mathematics: floating formulas, equations, calculus and theorem symbols.
- Physics: moving formula notation with a subtle animated wave.
- Chemistry: floating chemical formulas and connected molecule-like particles.
- Biology: DNA/genetics/cell terms with a softly connected particle field.
- Computer Science: floating code and binary symbols.
- Opening a topic updates the live badge with the selected topic name.
- Responsive canvas animation is lightweight, pauses in hidden tabs and respects reduced-motion settings.
- Keep topic-atmosphere.js in the same folder as index.html, script.js, style.css and cosmic.js.
