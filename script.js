/* =========================================================
   NORTHSTAR LEARNING PORTAL
   Add your verified YouTube video IDs and direct PDF URLs below.
   ========================================================= */

// 1) Set the official exam date only after verifying the HBSE date sheet.
// Format: "YYYY-MM-DDTHH:MM:SS+05:30"
const EXAM_DATE = "2027-02-25T12:30:00+05:30"; // PROVISIONAL estimate only; replace when HBSE publishes the official date sheet.

// Verified official sample-paper PDFs where available. For other years, open the official board paper library.
const PAPER_LINKS = {
  "12|2027|Biology|sample": "https://bseh.org.in/uploads/files/0998e28ecb8f059ef3d3e8c134704585.pdf",
  "12|2027|Chemistry|sample": "https://bseh.org.in/uploads/files/f36812211035f976d39a11f820ed794b.pdf",
  "12|2027|Computer Science|sample": "https://bseh.org.in/uploads/files/ddd278e97508f26b8b63fba67d28adeb.pdf",
  "12|2027|Mathematics|sample": "https://bseh.org.in/uploads/files/ae9d7beb32f069e6ea32b7b3ed3b0744.pdf",
  "12|2027|Physics|sample": "https://bseh.org.in/uploads/files/b0f4ac54c93d8799188c975487845a9a.pdf",
  "10|2026|Science|sample": "https://bseh.org.in/uploads/files/10eea3f5dbca45e1b96fc71c6ed84826.pdf",
  "10|2026|Mathematics|sample": "https://www.haryanaboard.com/papers/class-10-model-paper-mathematics-standard-set-s-2026.pdf",
  "10|2026|Social Science|sample": "https://www.haryanaboard.com/papers/class-10-model-paper-social-science-017-2026.pdf"
};
const PAPER_HUBS = {
  "10|sample|2027": "https://bseh.org.in/model-paper-stepwise-marking-scheme-classwise-202627",
  "12|sample|2027": "https://bseh.org.in/class-12th-model-paper-stepwise-marking-scheme-202627",
  "10|sample|2026": "https://bseh.org.in/model-paper-stepwise-marking-scheme-classwise-202627",
  "12|sample|2026": "https://bseh.org.in/class-12th-model-paper-stepwise-marking-scheme-202526",
  "10|sample|2025": "https://bseh.org.in/model-paper-stepwise-marking-scheme-classwise-202627",
  "12|sample|2025": "https://bseh.org.in/class-12th-model-paper-stepwise-marking-scheme-202526",
  "10|previous|2026": "https://bseh.org.in/secondary-old-question-paper-2026",
  "12|previous|2026": "https://bseh.org.in/srsec-old-question-paper-march-2026",
  "10|previous|2025": "https://previousyearquestions.app/haryana-board-class-10/2025/",
  "10|previous|2024": "https://previousyearquestions.app/haryana-board-class-10/2024/",
  "10|previous|2023": "https://previousyearquestions.app/haryana-board-class-10/2023/",
  "10|previous|2022": "https://previousyearquestions.app/haryana-board-class-10/",
  "10|previous|2019": "https://previousyearquestions.app/haryana-board-class-10/",
  "10|previous|2017": "https://previousyearquestions.app/haryana-board-class-10/",
  "10|previous|2016": "https://previousyearquestions.app/haryana-board-class-10/",
  "12|previous|2025": "https://schools.aglasem.com/hbse-question-papers/",
  "12|previous|2024": "https://schools.aglasem.com/hbse-question-papers/",
  "12|previous|2023": "https://schools.aglasem.com/hbse-question-papers/",
  "12|previous|2022": "https://schools.aglasem.com/hbse-question-papers/",
  "12|previous|2021": "https://schools.aglasem.com/hbse-question-papers/"
};

// 3) Add YouTube video IDs for each topic.
// Use the video ID only, not the full URL.
// Example URL: https://www.youtube.com/watch?v=VIDEO_ID
const SUBJECTS = {
  PCM: [
    {name:"Physics",icon:"⚡",chapters:[
      {name:"Electric Charges and Fields",topics:["Electric charge","Conductors and insulators","Coulomb's law","Electric field","Electric field lines","Electric dipole","Gauss's law"],videos:{}},
      {name:"Electrostatic Potential and Capacitance",topics:["Electric potential","Potential difference","Equipotential surfaces","Capacitance","Combination of capacitors","Energy stored in a capacitor"],videos:{}},
      {name:"Current Electricity",topics:["Electric current","Ohm's law","Drift velocity","Resistance and resistivity","Cells and internal resistance","Kirchhoff's rules"],videos:{}},
      {name:"Moving Charges and Magnetism",topics:["Magnetic force","Motion in a magnetic field","Biot-Savart law","Ampere's circuital law","Force between parallel currents","Moving coil galvanometer"],videos:{}},
      {name:"Magnetism and Matter",topics:["Bar magnet","Magnetic field lines","Earth's magnetism","Magnetic properties of materials"],videos:{}},
      {name:"Electromagnetic Induction",topics:["Magnetic flux","Faraday's laws","Lenz's law","Eddy currents","Self and mutual induction"],videos:{}},
      {name:"Alternating Current",topics:["AC voltage and current","AC through resistor","Inductor and capacitor","LCR series circuit","Resonance","Transformer"],videos:{}},
      {name:"Electromagnetic Waves",topics:["Displacement current","Electromagnetic waves","Electromagnetic spectrum"],videos:{}},
      {name:"Ray Optics and Optical Instruments",topics:["Reflection of light","Spherical mirrors","Refraction of light","Total internal reflection","Refraction at spherical surfaces","Lenses","Optical instruments"],videos:{}},
      {name:"Wave Optics",topics:["Huygens principle","Reflection and refraction using wavefronts","Interference","Young's double slit experiment","Diffraction","Polarisation"],videos:{}},
      {name:"Dual Nature of Radiation and Matter",topics:["Photoelectric effect","Einstein's photoelectric equation","Matter waves","de Broglie relation"],videos:{}},
      {name:"Atoms",topics:["Alpha particle scattering","Bohr model","Hydrogen spectrum"],videos:{}},
      {name:"Nuclei",topics:["Atomic mass and size","Mass-energy relation","Nuclear force","Radioactivity","Nuclear fission and fusion"],videos:{}},
      {name:"Semiconductor Electronics",topics:["Energy bands","Intrinsic and extrinsic semiconductors","p-n junction diode","Rectifier","Logic gates"],videos:{}}
    ]},
    {name:"Chemistry",icon:"🧪",chapters:[
      {name:"Solutions",topics:["Types of solutions","Concentration terms","Solubility","Colligative properties","Abnormal molar mass"],videos:{}},
      {name:"Electrochemistry",topics:["Electrochemical cells","Nernst equation","Conductance","Kohlrausch law","Electrolysis","Batteries and corrosion"],videos:{}},
      {name:"Chemical Kinetics",topics:["Rate of reaction","Factors affecting rate","Rate law","Order and molecularity","Integrated rate equations","Arrhenius equation"],videos:{}},
      {name:"The d- and f-Block Elements",topics:["Transition elements","Trends in properties","Potassium dichromate","Potassium permanganate","Lanthanides and actinides"],videos:{}},
      {name:"Coordination Compounds",topics:["Werner's theory","Ligands","Nomenclature","Isomerism","Bonding","Applications"],videos:{}},
      {name:"Haloalkanes and Haloarenes",topics:["Nomenclature","Nature of C-X bond","Preparation","Physical properties","Chemical reactions"],videos:{}},
      {name:"Alcohols, Phenols and Ethers",topics:["Preparation","Properties of alcohols","Phenols","Ethers","Chemical reactions"],videos:{}},
      {name:"Aldehydes, Ketones and Carboxylic Acids",topics:["Nomenclature","Preparation","Nucleophilic addition","Oxidation and reduction","Carboxylic acids"],videos:{}},
      {name:"Amines",topics:["Classification","Preparation","Physical properties","Chemical reactions","Diazonium salts"],videos:{}},
      {name:"Biomolecules",topics:["Carbohydrates","Proteins","Enzymes","Vitamins","Nucleic acids"],videos:{}}
    ]},
    {name:"Mathematics",icon:"📐",chapters:[
      {name:"Relations and Functions",topics:["Types of relations","Equivalence relations","One-one and onto functions","Composition of functions","Inverse trigonometric functions"],videos:{}},
      {name:"Matrices",topics:["Types of matrices","Operations","Transpose","Symmetric and skew-symmetric matrices","Inverse of a matrix"],videos:{}},
      {name:"Determinants",topics:["Determinants","Properties","Area of triangle","Minors and cofactors","Adjoint and inverse","Linear equations"],videos:{}},
      {name:"Continuity and Differentiability",topics:["Continuity","Differentiability","Chain rule","Implicit differentiation","Logarithmic differentiation","Rolle's and Lagrange's theorems"],videos:{}},
      {name:"Applications of Derivatives",topics:["Rate of change","Increasing and decreasing functions","Tangents and normals","Maxima and minima"],videos:{}},
      {name:"Integrals",topics:["Integration as inverse differentiation","Methods of integration","Definite integrals","Properties of definite integrals"],videos:{}},
      {name:"Applications of Integrals",topics:["Area under curves","Area between curves"],videos:{}},
      {name:"Differential Equations",topics:["Order and degree","General and particular solutions","Variable separable","Linear differential equations"],videos:{}},
      {name:"Vector Algebra",topics:["Types of vectors","Addition","Scalar and vector products","Direction cosines"],videos:{}},
      {name:"Three Dimensional Geometry",topics:["Direction cosines","Line in space","Angle between lines","Shortest distance"],videos:{}},
      {name:"Linear Programming",topics:["Constraints","Feasible region","Corner point method"],videos:{}},
      {name:"Probability",topics:["Conditional probability","Multiplication theorem","Bayes theorem","Random variables","Binomial distribution"],videos:{}}
    ]}
  ],
  PCB: [
    {name:"Physics",icon:"⚡",chapters:[]},
    {name:"Chemistry",icon:"🧪",chapters:[]},
    {name:"Biology",icon:"🧬",chapters:[
      {name:"Sexual Reproduction in Flowering Plants",topics:["Flower structure","Pre-fertilisation events","Pollination","Double fertilisation","Post-fertilisation events","Apomixis and polyembryony"],videos:{}},
      {name:"Human Reproduction",topics:["Male reproductive system","Female reproductive system","Gametogenesis","Menstrual cycle","Fertilisation and implantation","Pregnancy and embryonic development","Parturition and lactation"],videos:{}},
      {name:"Reproductive Health",topics:["Reproductive health problems","Contraceptive methods","Medical termination of pregnancy","Sexually transmitted infections","Infertility"],videos:{}},
      {name:"Principles of Inheritance and Variation",topics:["Mendelian inheritance","Inheritance of one gene","Inheritance of two genes","Sex determination","Mutation","Genetic disorders"],videos:{}},
      {name:"Molecular Basis of Inheritance",topics:["DNA and RNA","DNA replication","Transcription","Genetic code","Translation","Gene expression regulation","Human genome project","DNA fingerprinting"],videos:{}},
      {name:"Evolution",topics:["Origin of life","Evolutionary evidence","Adaptive radiation","Biological evolution","Hardy-Weinberg principle","Human evolution"],videos:{}},
      {name:"Human Health and Disease",topics:["Common diseases","Immunity","Vaccination","AIDS","Cancer","Drugs and alcohol abuse"],videos:{}},
      {name:"Microbes in Human Welfare",topics:["Microbes in household products","Industrial products","Sewage treatment","Biogas","Biocontrol agents","Biofertilisers"],videos:{}},
      {name:"Biotechnology: Principles and Processes",topics:["Principles of biotechnology","Tools of recombinant DNA technology","Process of recombinant DNA technology"],videos:{}},
      {name:"Biotechnology and its Applications",topics:["Biotechnological applications in agriculture","Insulin and medicine","Gene therapy","Molecular diagnosis","Transgenic animals","Ethical issues"],videos:{}},
      {name:"Organisms and Populations",topics:["Organism and environment","Population attributes","Population growth","Population interactions"],videos:{}},
      {name:"Ecosystem",topics:["Ecosystem structure","Productivity","Decomposition","Energy flow","Ecological pyramids"],videos:{}},
      {name:"Biodiversity and Conservation",topics:["Biodiversity","Patterns of biodiversity","Importance of biodiversity","Loss of biodiversity","Conservation"],videos:{}},
      {name:"Environmental Issues",topics:["Air pollution","Water pollution","Solid waste","Agrochemicals","Ozone depletion","Deforestation"],videos:{}}
    ]}
  ],
  CS: [
    {name:"Computer Science",icon:"💻",chapters:[
      {name:"Python Revision",topics:["Python basics","Data types","Operators","Conditional statements","Loops","Functions"],videos:{}},
      {name:"Python Libraries",topics:["NumPy basics","Pandas basics","Matplotlib basics"],videos:{}},
      {name:"Computer Networks",topics:["Network types","Network devices","Network topologies","Protocols","Internet and web services"],videos:{}},
      {name:"Database Management",topics:["Database concepts","Relational model","SQL commands","Aggregate functions","Joins"],videos:{}},
      {name:"Societal Impacts",topics:["Digital footprint","Cyber safety","Intellectual property","Cybercrime","E-waste"],videos:{}}
    ]}
  ]
};

// Reuse the complete chapter maps for shared science subjects in the PCB stream.
SUBJECTS.PCB[0].chapters = SUBJECTS.PCM[0].chapters;
SUBJECTS.PCB[1].chapters = SUBJECTS.PCM[1].chapters;

const SUBJECT_META = {
  Physics:{description:"Concepts, derivations, numericals and board revision."},
  Chemistry:{description:"Physical, organic and inorganic chemistry."},
  Biology:{description:"NCERT concepts, diagrams and important questions."},
  Mathematics:{description:"Formulas, methods and problem-solving practice."},
  "Computer Science":{description:"Programming, databases and computer fundamentals."}
};

const TEXT = {
  en:{
    navHome:"Home",navSubjects:"Subjects",navPapers:"HBSE Papers",navPlanner:"Study Planner",
    heroEyebrow:"YOUR BOARD EXAM STUDY COMPANION",heroTitle:"Learn with focus.<br><em>Prepare with confidence.</em>",
    heroText:"A clean place for chapter-wise learning, video lessons, notes and board exam papers.",
    exploreSubjects:"Explore subjects",findPapers:"Find papers",noSiteAds:"No third-party ads or pop-up promotions on this website",
    countEyebrow:"KEEP YOUR GOAL IN SIGHT",countTitle:"HBSE Board Exam Countdown",
    days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds",details:"View detailed time remaining ↓",
    totalDays:"Total days",totalWeeks:"Total weeks",calendarMonths:"Calendar months + days",totalHours:"Total hours",totalMinutes:"Total minutes",
    learning:"LEARNING SPACE",chooseStream:"Choose your stream",streamText:"Choose a stream to see its subjects and learning resources.",
    paperLibrary:"PAPER LIBRARY",hbseResources:"HBSE sample papers & previous papers",paperText:"Choose a class, year and subject. A linked PDF opens directly without visiting the board homepage.",
    classLabel:"Class",yearLabel:"Year",subjectLabel:"Subject",paperTypeLabel:"Paper type",openPdf:"Open PDF",
    yourRoutine:"YOUR ROUTINE",studyPlanner:"Study planner & progress",plannerText:"Tick off your daily study goals. Your checklist stays saved on this device.",
    todaysGoals:"Today's goals",addGoal:"Add",learningProgress:"Learning progress",completed:"completed",resetGoals:"Reset today's goals",
    quickAccess:"QUICK ACCESS",studyResources:"Study resources",videoLessons:"Video lessons",videoDesc:"Topic-wise teacher lectures",
    samplePapers:"Sample papers",sampleDesc:"Practice for board exams",previousPapers:"Previous papers",previousDesc:"Past board question papers",
    notesPdfs:"Notes & PDFs",notesDesc:"Chapter-wise revision material",footerLine:"Learn today. Lead tomorrow.",rights:"All rights reserved.",
    footerNote:"Independent study resource. Not an official HBSE website.",openTopics:"View chapters →",noChapters:"Chapter list is being prepared.",
    addGoalPlaceholder:"Add a study goal...",noPdf:"No verified PDF link has been added for this selection yet.",
    examNotSet:"Exam date will be set after checking the official HBSE date sheet.",examDone:"The configured exam date has passed.",
    noGoals:"No goals added yet.",topicVideoMissing:"Video lecture will appear here after a valid YouTube video ID is added.",
    bookmark:"☆ Bookmark topic",bookmarked:"★ Bookmarked",openYoutube:"Open on YouTube"
  },
  hi:{
    navHome:"होम",navSubjects:"विषय",navPapers:"HBSE पेपर",navPlanner:"स्टडी प्लानर",
    heroEyebrow:"आपकी बोर्ड परीक्षा की तैयारी का साथी",heroTitle:"ध्यान से सीखें।<br><em>आत्मविश्वास से तैयारी करें।</em>",
    heroText:"अध्यायवार पढ़ाई, वीडियो लेक्चर, नोट्स और बोर्ड परीक्षा के पेपर एक ही जगह।",
    exploreSubjects:"विषय देखें",findPapers:"पेपर खोजें",noSiteAds:"इस वेबसाइट पर कोई बाहरी विज्ञापन या पॉप-अप प्रमोशन नहीं",
    countEyebrow:"अपने लक्ष्य पर ध्यान रखें",countTitle:"HBSE बोर्ड परीक्षा काउंटडाउन",
    days:"दिन",hours:"घंटे",minutes:"मिनट",seconds:"सेकंड",details:"पूरा समय देखें ↓",
    totalDays:"कुल दिन",totalWeeks:"कुल सप्ताह",calendarMonths:"कैलेंडर महीने + दिन",totalHours:"कुल घंटे",totalMinutes:"कुल मिनट",
    learning:"पढ़ाई का स्थान",chooseStream:"अपनी स्ट्रीम चुनें",streamText:"विषय और पढ़ाई की सामग्री देखने के लिए स्ट्रीम चुनें।",
    paperLibrary:"पेपर लाइब्रेरी",hbseResources:"HBSE सैंपल पेपर और पुराने पेपर",paperText:"कक्षा, वर्ष और विषय चुनें। लिंक किया गया PDF सीधे खुलेगा।",
    classLabel:"कक्षा",yearLabel:"वर्ष",subjectLabel:"विषय",paperTypeLabel:"पेपर का प्रकार",openPdf:"PDF खोलें",
    yourRoutine:"आपकी दिनचर्या",studyPlanner:"स्टडी प्लानर और प्रगति",plannerText:"अपने रोज़ के पढ़ाई के लक्ष्य पूरे होने पर टिक करें।",
    todaysGoals:"आज के लक्ष्य",addGoal:"जोड़ें",learningProgress:"पढ़ाई की प्रगति",completed:"पूरे हुए",resetGoals:"आज के लक्ष्य रीसेट करें",
    quickAccess:"त्वरित सुविधा",studyResources:"पढ़ाई की सामग्री",videoLessons:"वीडियो लेक्चर",videoDesc:"टॉपिक के अनुसार शिक्षक के लेक्चर",
    samplePapers:"सैंपल पेपर",sampleDesc:"बोर्ड परीक्षा का अभ्यास",previousPapers:"पिछले वर्षों के पेपर",previousDesc:"पुराने बोर्ड प्रश्नपत्र",
    notesPdfs:"नोट्स और PDF",notesDesc:"अध्यायवार रिवीजन सामग्री",footerLine:"आज सीखें। कल आगे बढ़ें।",rights:"सर्वाधिकार सुरक्षित।",
    footerNote:"स्वतंत्र अध्ययन वेबसाइट। HBSE की आधिकारिक वेबसाइट नहीं।",openTopics:"अध्याय देखें →",noChapters:"अध्यायों की सूची तैयार की जा रही है।",
    addGoalPlaceholder:"पढ़ाई का लक्ष्य लिखें...",noPdf:"इस चयन के लिए अभी सत्यापित PDF लिंक नहीं जोड़ा गया है।",
    examNotSet:"आधिकारिक HBSE डेटशीट की पुष्टि के बाद परीक्षा की तारीख जोड़ी जाएगी।",examDone:"निर्धारित परीक्षा की तारीख बीत चुकी है।",
    noGoals:"अभी कोई लक्ष्य नहीं जोड़ा गया।",topicVideoMissing:"सही YouTube Video ID जोड़ने के बाद लेक्चर यहाँ दिखाई देगा।",
    bookmark:"☆ टॉपिक सेव करें",bookmarked:"★ सेव किया गया",openYoutube:"YouTube पर खोलें"
  }
};

let currentLang = localStorage.getItem("portalLang") || "en";
let currentStream = "PCM";
let activeTopic = null;
let goals = JSON.parse(localStorage.getItem("studyGoals") || "[]");
let bookmarks = JSON.parse(localStorage.getItem("studyBookmarks") || "[]");

const $ = (id) => document.getElementById(id);
const t = (key) => TEXT[currentLang][key] || TEXT.en[key] || key;

function applyLanguage(){
  document.documentElement.lang = currentLang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(TEXT[currentLang][key]) el.innerHTML=TEXT[currentLang][key];
  });
  $("langBtn").textContent = currentLang === "en" ? "हिन्दी" : "English";
  $("goalInput").placeholder = t("addGoalPlaceholder");
  renderSubjects();
  renderGoals();
  if($("paperStatus")) updatePaperHint();
}
$("langBtn").addEventListener("click",()=>{
  currentLang=currentLang==="en"?"hi":"en";
  localStorage.setItem("portalLang",currentLang);
  applyLanguage();
});

$("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("portalTheme",document.body.classList.contains("dark")?"dark":"light");
});
if(localStorage.getItem("portalTheme")==="dark") document.body.classList.add("dark");

$("menuBtn").addEventListener("click",()=>$("mobileNav").classList.toggle("open"));
document.querySelectorAll("#mobileNav a").forEach(a=>a.addEventListener("click",()=>$("mobileNav").classList.remove("open")));

function renderSubjects(){
  const grid=$("subjectGrid");
  grid.innerHTML="";
  const subjects=SUBJECTS[currentStream]||[];
  subjects.forEach(subject=>{
    const card=document.createElement("article");
    card.className="subject-card";
    const chapterCount=subject.chapters.length;
    card.innerHTML=`<div class="subject-icon">${subject.icon}</div><h3>${subject.name}</h3><p>${SUBJECT_META[subject.name]?.description||"Chapter-wise learning resources."}</p><button type="button">${t("openTopics")}</button>`;
    card.querySelector("button").addEventListener("click",()=>showChapters(subject));
    grid.appendChild(card);
  });
}
document.querySelectorAll(".stream-tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".stream-tab").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentStream=btn.dataset.stream;
  renderSubjects();
}));

function showChapters(subject){
  window.setStudyAtmosphere?.(subject.name);
  const dialog=$("topicDialog");
  $("dialogSubject").textContent=subject.name.toUpperCase();
  $("dialogTitle").textContent=subject.name+" – Chapters";
  const frame=$("videoFrame");
  frame.innerHTML="";
  const list=document.createElement("div");
  list.className="chapter-list";
  list.style.cssText="width:100%;max-height:360px;overflow:auto;text-align:left;display:grid;gap:8px";
  if(!subject.chapters.length){
    list.textContent=t("noChapters");
  }else{
    subject.chapters.forEach((chapter,ci)=>{
      const details=document.createElement("details");
      details.open=ci===0;
      details.style.cssText="background:#172b4b;border-radius:9px;padding:11px;color:white";
      const summary=document.createElement("summary");
      summary.textContent=chapter.name;
      summary.style.cssText="cursor:pointer;font-weight:700;font-size:13px";
      details.appendChild(summary);
      chapter.topics.forEach(topic=>{
        const row=document.createElement("button");
        row.textContent="▶  "+topic;
        row.style.cssText="display:block;width:100%;text-align:left;margin-top:8px;padding:8px;border:0;border-radius:7px;background:#263e64;color:#e8f0ff;font-size:11px";
        row.addEventListener("click",()=>showTopic(subject.name,chapter,topic));
        details.appendChild(row);
      });
      list.appendChild(details);
    });
  }
  frame.appendChild(list);
  $("youtubeFallback").classList.add("hidden");
  $("bookmarkBtn").classList.add("hidden");
  $("dialogNote").textContent=currentLang==="hi"?"किसी टॉपिक को चुनकर उसका वीडियो खोलें।":"Choose a topic to find a matching video lesson.";
  dialog.showModal();
}

function showTopic(subjectName,chapter,topic){
  window.setStudyAtmosphere?.(subjectName,topic);
  activeTopic={subjectName,chapterName:chapter.name,topic};
  $("dialogSubject").textContent=subjectName+" / "+chapter.name;
  $("dialogTitle").textContent=topic;
  const videoId=chapter.videos?.[topic]||"";
  const frame=$("videoFrame");
  frame.innerHTML="";
  if(videoId){
    const iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`;
    iframe.title=topic+" video lecture";
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen=true;
    frame.appendChild(iframe);
    $("youtubeFallback").href=`https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
    $("youtubeFallback").classList.remove("hidden");
  }else{
    const wrap=document.createElement("div");
    wrap.style.cssText="display:grid;gap:12px;justify-items:center;padding:20px;max-width:520px";
    const msg=document.createElement("p");
    msg.textContent=currentLang==="hi"?"इस टॉपिक का verified video ID अभी जोड़ा नहीं गया है। नीचे बटन से इसी टॉपिक के lecture खोजें।":"A verified video ID has not been added for this topic yet. Use the button below to find lectures for this exact topic.";
    const search=document.createElement("a");
    const activeClass = $("classSelect")?.value || "12";
    const query=encodeURIComponent(`HBSE Class ${activeClass} ${subjectName} ${chapter.name} ${topic} explanation lecture`);
    search.href=`https://www.youtube.com/results?search_query=${query}`;
    search.target="_blank";search.rel="noopener";search.textContent=currentLang==="hi"?"YouTube पर lecture खोजें":"Find lecture on YouTube";
    search.style.cssText="background:#2864e8;color:white;padding:11px 16px;border-radius:9px;text-decoration:none;font-weight:700;font-size:12px";
    wrap.append(msg,search);frame.appendChild(wrap);
    $("youtubeFallback").classList.add("hidden");
  }
  $("bookmarkBtn").classList.remove("hidden");
  const key=bookmarkKey(activeTopic);
  $("bookmarkBtn").textContent=bookmarks.includes(key)?t("bookmarked"):t("bookmark");
  $("dialogNote").textContent=currentLang==="hi"?"नोट: YouTube अपने विज्ञापनों और वीडियो प्लेबैक को नियंत्रित करता है। यह वेबसाइट विज्ञापन inject नहीं करती और YouTube के विज्ञापन bypass नहीं करती।":"Note: YouTube controls its own ads and playback. This site does not inject ads or bypass YouTube advertising.";
}
function bookmarkKey(x){return `${x.subjectName}|${x.chapterName}|${x.topic}`;}
$("bookmarkBtn").addEventListener("click",()=>{
  if(!activeTopic)return;
  const key=bookmarkKey(activeTopic);
  bookmarks=bookmarks.includes(key)?bookmarks.filter(x=>x!==key):[...bookmarks,key];
  localStorage.setItem("studyBookmarks",JSON.stringify(bookmarks));
  $("bookmarkBtn").textContent=bookmarks.includes(key)?t("bookmarked"):t("bookmark");
});
$("closeDialog").addEventListener("click",()=>$("topicDialog").close());
$("topicDialog").addEventListener("click",e=>{if(e.target===$("topicDialog"))$("topicDialog").close();});

// Countdown: date is intentionally not guessed. Configure EXAM_DATE above after official confirmation.
function updateCountdown(){
  if(!EXAM_DATE){
    $("examDateLabel").textContent=t("examNotSet");
    ["days","hours","minutes","seconds"].forEach(id=>$(id).textContent="--");
    return;
  }
  const target=new Date(EXAM_DATE);
  if(Number.isNaN(target.getTime())){$("examDateLabel").textContent="Invalid exam date in script.js";return;}
  $("examDateLabel").textContent=(currentLang==="hi"?"अनुमानित लक्ष्य (आधिकारिक तारीख नहीं): ":"Estimated target (not an official date): ")+target.toLocaleString(currentLang==="hi"?"hi-IN":"en-IN",{dateStyle:"full",timeStyle:"short"});
  const diff=target.getTime()-Date.now();
  if(diff<=0){
    $("examDateLabel").textContent=t("examDone");
    ["days","hours","minutes","seconds"].forEach(id=>$(id).textContent="0");
    return;
  }
  const totalSeconds=Math.floor(diff/1000);
  const d=Math.floor(totalSeconds/86400),h=Math.floor(totalSeconds%86400/3600),m=Math.floor(totalSeconds%3600/60),s=totalSeconds%60;
  $("days").textContent=d.toLocaleString();$("hours").textContent=String(h).padStart(2,"0");
  $("minutes").textContent=String(m).padStart(2,"0");$("seconds").textContent=String(s).padStart(2,"0");
  $("totalDays").textContent=d.toLocaleString();
  $("weeks").textContent=(diff/604800000).toFixed(2);
  const start=new Date(),end=new Date(target);
  let months=(end.getFullYear()-start.getFullYear())*12+(end.getMonth()-start.getMonth());
  const anchor=new Date(start);anchor.setMonth(anchor.getMonth()+months);
  if(anchor>end)months--;
  const monthAnchor=new Date(start);monthAnchor.setMonth(monthAnchor.getMonth()+months);
  const daysRemainder=Math.floor((end-monthAnchor)/86400000);
  $("months").textContent=`${months} mo ${daysRemainder} d`;
  $("totalHours").textContent=Math.floor(diff/3600000).toLocaleString();
  $("totalMinutes").textContent=Math.floor(diff/60000).toLocaleString();
}
$("detailsBtn").addEventListener("click",()=>{
  const box=$("countDetails");box.classList.toggle("hidden");
  $("detailsBtn").setAttribute("aria-expanded",String(!box.classList.contains("hidden")));
});
updateCountdown();setInterval(updateCountdown,1000);

// Paper library: only open verified direct PDFs; otherwise open the matching official archive/library page.
const PAPER_SUBJECTS = {
  "10": ["English","Hindi","Mathematics","Science","Social Science","Computer Science","Sanskrit","Punjabi","Urdu"],
  "12": ["English","Hindi","Physics","Chemistry","Biology","Mathematics","Computer Science","Physical Education","Economics","History","Political Science"]
};
function fillPaperSubjects(){
  const cls=$("classSelect").value;
  $("paperSubject").innerHTML=(PAPER_SUBJECTS[cls]||[]).map(s=>`<option value="${s}">${s}</option>`).join("");
}
function fillPaperYears(){
  const cls=$("classSelect").value;
  const years=cls==="10"?[2027,2026,2025,2024,2023,2022,2019,2017,2016]:[2027,2026,2025,2024,2023];
  $("yearSelect").innerHTML=years.map(y=>`<option value="${y}">${y}</option>`).join("");
}
$("classSelect").addEventListener("change",()=>{fillPaperYears();fillPaperSubjects();updatePaperHint();});
$("yearSelect").addEventListener("change",updatePaperHint);
$("paperType").addEventListener("change",updatePaperHint);
fillPaperYears();fillPaperSubjects();
function updatePaperHint(){
  const cls=$("classSelect").value, year=$("yearSelect").value, type=$("paperType").value;
  const hasDirect=!!PAPER_LINKS[`${cls}|${year}|${$("paperSubject").value}|${type}`];
  $("paperStatus").textContent=hasDirect
    ? (currentLang==="hi"?"इस विषय का सत्यापित PDF उपलब्ध है। PDF सीधे खुलेगा।":"A verified PDF is available for this selection and will open directly.")
    : (currentLang==="hi"?"इस चुनाव के लिए बोर्ड/पेपर लाइब्रेरी खुलेगी; वहाँ विषय और सेट चुनें।":"The matching board paper library will open; choose the subject and set there.");
}
$("paperSubject").addEventListener("change",updatePaperHint);
$("openPaperBtn").addEventListener("click",()=>{
  const cls=$("classSelect").value,year=$("yearSelect").value,subject=$("paperSubject").value,type=$("paperType").value;
  const key=`${cls}|${year}|${subject}|${type}`;
  const url=PAPER_LINKS[key] || PAPER_HUBS[`${cls}|${type}|${year}`];
  if(!url){
    $("paperStatus").textContent=currentLang==="hi"?"इस साल का verified link अभी उपलब्ध नहीं है। दूसरे उपलब्ध वर्ष को चुनें।":"No verified link is listed for this year yet. Please choose another available year.";
    return;
  }
  const tab=window.open(url,"_blank");
  if(!tab){$("paperStatus").textContent=currentLang==="hi"?"ब्राउज़र ने नया tab रोका। Pop-ups allow करके दोबारा कोशिश करें।":"Your browser blocked the new tab. Allow pop-ups and try again.";return;}
  $("paperStatus").textContent=PAPER_LINKS[key]?(currentLang==="hi"?"PDF खुल गया।":"PDF opened."):(currentLang==="hi"?"पेपर लाइब्रेरी खुल गई। वहाँ अपना विषय चुनें।":"Paper library opened. Select your subject there.");
});
updatePaperHint();

// Study goals saved locally on this device.
function renderGoals(){
  const list=$("goalList");list.innerHTML="";
  if(!goals.length){const empty=document.createElement("li");empty.textContent=t("noGoals");list.appendChild(empty);}
  goals.forEach((goal,index)=>{
    const li=document.createElement("li");
    const check=document.createElement("input");check.type="checkbox";check.checked=goal.done;
    check.addEventListener("change",()=>{goals[index].done=check.checked;saveGoals();});
    const text=document.createElement("span");text.textContent=goal.text;if(goal.done)text.className="done";
    const del=document.createElement("button");del.className="delete-goal";del.textContent="×";del.setAttribute("aria-label","Delete goal");
    del.addEventListener("click",()=>{goals.splice(index,1);saveGoals();});
    li.append(check,text,del);list.appendChild(li);
  });
  updateProgress();
}
function saveGoals(){localStorage.setItem("studyGoals",JSON.stringify(goals));renderGoals();}
function updateProgress(){
  const done=goals.filter(g=>g.done).length,total=goals.length,pct=total?Math.round(done/total*100):0;
  $("progressPercent").textContent=pct+"%";
  $("progressRing").style.setProperty("--progress",pct+"%");
  $("progressText").textContent=`${done} of ${total} goals completed`;
}
$("goalForm").addEventListener("submit",e=>{
  e.preventDefault();const value=$("goalInput").value.trim();if(!value)return;
  goals.push({text:value,done:false});$("goalInput").value="";saveGoals();
});
$("resetGoals").addEventListener("click",()=>{goals=[];saveGoals();});
$("yearNow").textContent=new Date().getFullYear();
applyLanguage();
renderSubjects();
