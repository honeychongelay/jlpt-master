/**
 * JLPT Learning Master
 * Supports: Vocab, Kanji Cards + Multi-Unit Flashcards, Grammar, Reading
 */

const APP = {
  AVAILABLE_SKILLS: {
    n2: ["vocab", "kanji", "grammar"],
    n5: [], n4: [], n3: [], n1: []
  },

  state: {
    level: "n2",
    skill: "kanji",
    unitIndex: 0,
    sectionIndex: 0,
    searchQuery: "",
    cache: {},
    activeList: [],

    // Flashcard State
    kanjiMode: "list", // "list" | "flashcard"
    fcDeck: [],
    fcCurrentIndex: 0,

    grammarFcDeck: [],
    grammarFcCurrentIndex: 0

  },

  dom: {
    navHomeLogo: document.getElementById("navHomeLogo"),
    breadcrumbTrail: document.getElementById("breadcrumbTrail"),
    trailHome: document.getElementById("trailHome"),
    trailLevel: document.getElementById("trailLevel"),
    trailSkill: document.getElementById("trailSkill"),
    trailSkillSep: document.getElementById("trailSkillSep"),
    viewHome: document.getElementById("viewHome"),
    viewSkills: document.getElementById("viewSkills"),
    viewContent: document.getElementById("viewContent"),
    skillLevelBadge: document.getElementById("skillLevelBadge"),
    backToHomeBtn: document.getElementById("backToHomeBtn"),
    backToSkillsBtn: document.getElementById("backToSkillsBtn"),
    contentHeading: document.getElementById("contentHeading"),
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    unitsStrip: document.getElementById("unitsStrip"),
    unitsTrack: document.getElementById("unitsTrack"),
    sectionsStrip: document.getElementById("sectionsStrip"),
    sectionsTrack: document.getElementById("sectionsTrack"),
    countTag: document.getElementById("countTag"),
    noticeBanner: document.getElementById("noticeBanner"),
    tableContainer: document.getElementById("tableContainer"),
    grammarContainer: document.getElementById("grammarContainer"),
    kanjiContainer: document.getElementById("kanjiContainer"),
    readingContainer: document.getElementById("readingContainer"),
    tableBody: document.getElementById("tableBody"),
    thMain: document.getElementById("thMain"),
    thSub: document.getElementById("thSub"),
    stepperFooter: document.getElementById("stepperFooter"),
    prevSectionBtn: document.getElementById("prevSectionBtn"),
    nextSectionBtn: document.getElementById("nextSectionBtn"),
    stepIndicator: document.getElementById("stepIndicator"),

    // Flashcard DOM Elements
    kanjiModeToggleWrap: document.getElementById("kanjiModeToggleWrap"),
    modeListBtn: document.getElementById("modeListBtn"),
    modeFlashcardBtn: document.getElementById("modeFlashcardBtn"),
    flashcardContainer: document.getElementById("flashcardContainer"),
    fcUnitsCheckboxes: document.getElementById("fcUnitsCheckboxes"),
    fcSelectAllBtn: document.getElementById("fcSelectAllBtn"),
    fcClearAllBtn: document.getElementById("fcClearAllBtn"),
    fcStartPracticeBtn: document.getElementById("fcStartPracticeBtn"),
    fcStage: document.getElementById("fcStage"),
    fcCounterBadge: document.getElementById("fcCounterBadge"),
    fcShuffleBtn: document.getElementById("fcShuffleBtn"),
    fcCardElement: document.getElementById("fcCardElement"),
    fcCardInner: document.getElementById("fcCardInner"),
    fcFrontVocab: document.getElementById("fcFrontVocab"),
    fcFrontRootKanji: document.getElementById("fcFrontRootKanji"),
    fcBackReading: document.getElementById("fcBackReading"),
    fcBackMeaning: document.getElementById("fcBackMeaning"),
    fcBackOn: document.getElementById("fcBackOn"),
    fcBackKun: document.getElementById("fcBackKun"),
    fcBackMnemonic: document.getElementById("fcBackMnemonic"),
    fcPrevBtn: document.getElementById("fcPrevBtn"),
    fcFlipBtn: document.getElementById("fcFlipBtn"),
    fcNextBtn: document.getElementById("fcNextBtn"),

    //grammar flashcard
    grammarFlashcardContainer: document.getElementById("grammarFlashcardContainer"),
    grammarFcCounterBadge: document.getElementById("grammarFcCounterBadge"),
    grammarFcShuffleBtn: document.getElementById("grammarFcShuffleBtn"),
    grammarFcCardElement: document.getElementById("grammarFcCardElement"),
    grammarFcCardInner: document.getElementById("grammarFcCardInner"),
    grammarFcFrontPattern: document.getElementById("grammarFcFrontPattern"),
    grammarFcBackMeaning: document.getElementById("grammarFcBackMeaning"),
    grammarFcBackJp: document.getElementById("grammarFcBackJp"),
    grammarFcBackMm: document.getElementById("grammarFcBackMm"),
    grammarFcPrevBtn: document.getElementById("grammarFcPrevBtn"),
    grammarFcFlipBtn: document.getElementById("grammarFcFlipBtn"),
    grammarFcNextBtn: document.getElementById("grammarFcNextBtn")
  },

  init() {
    this.bindEvents();
    this.initFlashcardCheckboxes(18);
    this.showHomeView();
  },

  bindEvents() {
    // Level Selection
    document.querySelectorAll(".level-card").forEach(card => {
      card.addEventListener("click", () => this.openSkillsView(card.dataset.level));
    });

    // Skill Selection Guard
    document.querySelectorAll(".skill-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (card.classList.contains("is-disabled")) {
          e.preventDefault();
          return;
        }
        this.openContentView(card.dataset.skill);
      });
    });

    // Header Back buttons
    this.dom.navHomeLogo.addEventListener("click", () => this.showHomeView());
    this.dom.trailHome.addEventListener("click", () => this.showHomeView());
    this.dom.backToHomeBtn.addEventListener("click", () => this.showHomeView());
    this.dom.trailLevel.addEventListener("click", () => this.openSkillsView(this.state.level));
    this.dom.backToSkillsBtn.addEventListener("click", () => this.openSkillsView(this.state.level));

    // Search
    this.dom.searchInput.addEventListener("input", (e) => {
      this.state.searchQuery = e.target.value.trim().toLowerCase();
      this.dom.clearSearchBtn.style.display = this.state.searchQuery ? "block" : "none";
      this.renderCurrentSkillView();
    });

    this.dom.clearSearchBtn.addEventListener("click", () => {
      this.dom.searchInput.value = "";
      this.state.searchQuery = "";
      this.dom.clearSearchBtn.style.display = "none";
      this.renderCurrentSkillView();
    });

    // Mode Toggle (List vs Flashcard)
    this.dom.modeListBtn.addEventListener("click", () => this.setKanjiMode("list"));
    this.dom.modeFlashcardBtn.addEventListener("click", () => this.setKanjiMode("flashcard"));

    // Flashcard Actions
    this.dom.fcSelectAllBtn.addEventListener("click", () => this.toggleAllCheckboxes(true));
    this.dom.fcClearAllBtn.addEventListener("click", () => this.toggleAllCheckboxes(false));
    this.dom.fcStartPracticeBtn.addEventListener("click", () => this.buildAndStartFlashcardDeck());
    this.dom.fcShuffleBtn.addEventListener("click", () => this.shuffleDeck());
    
    // Flip Card
    this.dom.fcCardElement.addEventListener("click", () => this.toggleCardFlip());
    this.dom.fcFlipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleCardFlip();
    });

    // Flashcard Navigation
    this.dom.fcPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigateCard(-1);
    });
    this.dom.fcNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigateCard(1);
    });

    this.dom.prevSectionBtn.addEventListener("click", () => this.prevSection());
    this.dom.nextSectionBtn.addEventListener("click", () => this.nextSection());

    // Grammar Flashcard Events
    this.dom.grammarFcCardElement.addEventListener("click", () => {
      this.dom.grammarFcCardInner.classList.toggle("is-flipped");
    });
    this.dom.grammarFcFlipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.dom.grammarFcCardInner.classList.toggle("is-flipped");
    });
    this.dom.grammarFcPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigateGrammarCard(-1);
    });
    this.dom.grammarFcNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigateGrammarCard(1);
    });
    this.dom.grammarFcShuffleBtn.addEventListener("click", () => {
      this.state.grammarFcDeck.sort(() => Math.random() - 0.5);
      this.state.grammarFcCurrentIndex = 0;
      this.renderCurrentGrammarFlashcard();
    });

  },

  showHomeView() {
    this.dom.viewHome.style.display = "block";
    this.dom.viewSkills.style.display = "none";
    this.dom.viewContent.style.display = "none";
    this.dom.breadcrumbTrail.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  openSkillsView(level) {
    this.state.level = level.toLowerCase();
    this.dom.skillLevelBadge.textContent = level.toUpperCase();
    this.dom.trailLevel.textContent = level.toUpperCase();

    const readySkills = this.AVAILABLE_SKILLS[this.state.level] || [];

    document.querySelectorAll(".skill-card").forEach(card => {
      const skillName = card.dataset.skill;
      const badge = card.querySelector(".skill-badge-tag");

      if (readySkills.includes(skillName)) {
        card.classList.remove("is-disabled");
        card.classList.add("is-ready");
        if (badge) badge.textContent = (skillName === "kanji") ? "18 Units • Flashcards" : "Ready";
      } else {
        card.classList.add("is-disabled");
        card.classList.remove("is-ready");
        if (badge) badge.textContent = "Coming Soon";
      }
    });

    this.dom.viewHome.style.display = "none";
    this.dom.viewSkills.style.display = "block";
    this.dom.viewContent.style.display = "none";
    
    this.dom.breadcrumbTrail.style.display = "flex";
    this.dom.trailSkillSep.style.display = "none";
    this.dom.trailSkill.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  openContentView(skill) {
    this.state.skill = skill.toLowerCase();
    this.state.unitIndex = 0;
    this.state.sectionIndex = 0;
    this.state.searchQuery = "";
    this.state.kanjiMode = "list";
    this.dom.searchInput.value = "";
    this.dom.clearSearchBtn.style.display = "none";

    this.dom.trailSkillSep.style.display = "inline";
    this.dom.trailSkill.style.display = "inline";
    this.dom.trailSkill.textContent = this.capitalize(skill);

    this.dom.viewHome.style.display = "none";
    this.dom.viewSkills.style.display = "none";
    this.dom.viewContent.style.display = "block";

    // Show mode switcher only for Kanji
    //this.dom.kanjiModeToggleWrap.style.display = (skill === "kanji") ? "flex" : "none";
    this.dom.kanjiModeToggleWrap.style.display = (skill === "kanji" || skill === "grammar") ? "flex" : "none";
    this.setKanjiMode("list");

    this.loadData();
  },

  setKanjiMode(mode) {
    this.state.kanjiMode = mode;
    this.dom.modeListBtn.classList.toggle("active", mode === "list");
    this.dom.modeFlashcardBtn.classList.toggle("active", mode === "flashcard");

    if (this.state.skill === "grammar") {
      if (mode === "flashcard") {
        this.dom.grammarContainer.style.display = "none";
        this.dom.grammarFlashcardContainer.style.display = "flex";
        this.dom.countTag.textContent = "Grammar Flashcard Mode";
        this.buildAndStartGrammarFlashcards();
      } else {
        this.dom.grammarFlashcardContainer.style.display = "none";
        this.dom.grammarContainer.style.display = "flex";
        this.renderCurrentSkillView();
      }
      return;
    }

    if (mode === "flashcard") {
      this.dom.unitsStrip.style.display = "none";
      this.dom.kanjiContainer.style.display = "none";
      this.dom.tableContainer.style.display = "none";
      this.dom.flashcardContainer.style.display = "flex";
      this.dom.countTag.textContent = "Flashcard Training Mode";
    } else {
      this.dom.flashcardContainer.style.display = "none";
      if (this.state.skill === "kanji") {
        this.dom.unitsStrip.style.display = "block";
        this.renderCurrentSkillView();
      }
    }
  },

  initFlashcardCheckboxes(totalUnits) {
    this.dom.fcUnitsCheckboxes.innerHTML = "";
    for (let i = 1; i <= totalUnits; i++) {
      const label = document.createElement("label");
      label.className = "fc-chk-label";
      label.innerHTML = `
        <input type="checkbox" value="${i}" ${i === 1 ? "checked" : ""}>
        Unit ${i}
      `;
      this.dom.fcUnitsCheckboxes.appendChild(label);
    }
  },

  toggleAllCheckboxes(status) {
    this.dom.fcUnitsCheckboxes.querySelectorAll("input[type='checkbox']").forEach(chk => {
      chk.checked = status;
    });
  },

  async buildAndStartFlashcardDeck() {
    const selectedUnits = Array.from(
      this.dom.fcUnitsCheckboxes.querySelectorAll("input[type='checkbox']:checked")
    ).map(chk => parseInt(chk.value, 10));

    if (selectedUnits.length === 0) {
      alert("Please select at least 1 unit to practice! / အနည်းဆုံး Unit ၁ ခု ရွေးချယ်ပေးပါ");
      return;
    }

    this.showNotice("ကတ်ပြားများ ပြင်ဆင်နေသည်... Preparing Flashcards...");
    const deck = [];

    for (const u of selectedUnits) {
      const numPadded = String(u).padStart(2, "0");
      const numRaw = String(u);

      const paths = [
        `data/${this.state.level}/kanji/chapter${numPadded}.json`,
        `data/${this.state.level}/kanji/chapter${numRaw}.json`,
        `data/${this.state.level}/kanji/unit${numPadded}.json`,
        `data/${this.state.level}/kanji/unit${numRaw}.json`
      ];

      let data = this.state.cache[`${this.state.level}_kanji_${u - 1}`];
      if (!data) {
        for (const p of paths) {
          try {
            const res = await fetch(p);
            if (res.ok) { data = await res.json(); break; }
          } catch (e) {}
        }
      }

      if (data) {
        const cards = data.cards || data.vocab || data;
        if (Array.isArray(cards)) {
          cards.forEach(k => {
            const onR = (k.readings && k.readings.on) ? k.readings.on : "—";
            const kunR = (k.readings && k.readings.kun) ? k.readings.kun : "—";

            // Extract each vocabulary word into the deck
            if (k.vocab && k.vocab.length > 0) {
              k.vocab.forEach(v => {
                deck.push({
                  vocab: v.kanji || k.kanji,
                  hiragana: v.hiragana || "",
                  meaning: v.meaning || "",
                  parent_kanji: k.kanji,
                  on: onR,
                  kun: kunR,
                  mnemonic: k.mnemonic || ""
                });
              });
            } else {
              // Fallback if no sub-vocab
              deck.push({
                vocab: k.kanji,
                hiragana: kunR !== "—" ? kunR : onR,
                meaning: k.meaning || "",
                parent_kanji: k.kanji,
                on: onR,
                kun: kunR,
                mnemonic: k.mnemonic || ""
              });
            }
          });
        }
      }
    }

    this.hideNotice();

    if (deck.length === 0) {
      alert("No vocabulary found in the selected units.");
      return;
    }

    // Shuffle deck
    this.state.fcDeck = deck.sort(() => Math.random() - 0.5);
    this.state.fcCurrentIndex = 0;

    this.dom.fcStage.style.display = "flex";
    this.renderCurrentFlashcard();
  },

  renderCurrentFlashcard() {
    const deck = this.state.fcDeck;
    const idx = this.state.fcCurrentIndex;
    const item = deck[idx];

    if (!item) return;

    // Reset Flip
    this.dom.fcCardInner.classList.remove("is-flipped");

    // Update Counter
    this.dom.fcCounterBadge.textContent = `Card ${idx + 1} / ${deck.length}`;

    // Populate Front
    this.dom.fcFrontVocab.textContent = item.vocab;
    this.dom.fcFrontRootKanji.textContent = item.parent_kanji;

    // Populate Back
    this.dom.fcBackReading.textContent = item.hiragana;
    this.dom.fcBackMeaning.textContent = item.meaning;
    this.dom.fcBackOn.textContent = item.on;
    this.dom.fcBackKun.textContent = item.kun;

    if (item.mnemonic) {
      this.dom.fcBackMnemonic.style.display = "block";
      this.dom.fcBackMnemonic.innerHTML = `💡 ${this.formatMnemonic(item.mnemonic, item.meaning)}`;
    } else {
      this.dom.fcBackMnemonic.style.display = "none";
    }
  },

  toggleCardFlip() {
    this.dom.fcCardInner.classList.toggle("is-flipped");
  },

  navigateCard(delta) {
    const newIdx = this.state.fcCurrentIndex + delta;
    if (newIdx >= 0 && newIdx < this.state.fcDeck.length) {
      this.state.fcCurrentIndex = newIdx;
      this.renderCurrentFlashcard();
    }
  },

  shuffleDeck() {
    this.state.fcDeck.sort(() => Math.random() - 0.5);
    this.state.fcCurrentIndex = 0;
    this.renderCurrentFlashcard();
  },

  async loadData() {
    const { level, skill, unitIndex } = this.state;
    this.showNotice("読み込み中... Loading data...");

    // 1. GRAMMAR
    if (skill === "grammar") {
      this.dom.unitsStrip.style.display = "none";
      this.dom.sectionsStrip.style.display = "none";
      this.dom.stepperFooter.style.display = "none";
      this.dom.contentHeading.textContent = `${level.toUpperCase()} Grammar`;

      const candidateGrammarPaths = [
        `data/${level}/grammar.json`,
        `data/${level.toUpperCase()}/grammar.json`,
        `data/${level}/grammar/grammar.json`
      ];

      const cacheKey = `${level}_grammar`;
      let loadedGrammar = this.state.cache[cacheKey] || null;

      if (!loadedGrammar) {
        for (const p of candidateGrammarPaths) {
          try {
            const res = await fetch(p);
            if (res.ok) { loadedGrammar = await res.json(); break; }
          } catch (e) {}
        }
      }

      if (loadedGrammar) {
        this.state.cache[cacheKey] = loadedGrammar;
        this.hideNotice();
        this.state.activeList = this.normalizeGrammar(loadedGrammar);
        this.renderCurrentSkillView();
      } else {
        this.showNotice(`【${level.toUpperCase()} - Grammar】File not found at data/${level}/grammar.json`);
        this.clearContentDisplay();
      }
      return;
    }

    // 2. KANJI
    if (skill === "kanji") {
      this.dom.sectionsStrip.style.display = "none";
      this.dom.stepperFooter.style.display = "none";

      const totalUnits = (level === "n2") ? 18 : 10;
      this.renderUnitsTrack(totalUnits);
      this.dom.unitsStrip.style.display = (this.state.kanjiMode === "list") ? "block" : "none";
      this.dom.contentHeading.textContent = `${level.toUpperCase()} Kanji • Unit ${unitIndex + 1}`;

      const numPadded = String(unitIndex + 1).padStart(2, "0");
      const numRaw = String(unitIndex + 1);

      const candidateKanjiPaths = [
        `data/${level}/kanji/chapter${numPadded}.json`,
        `data/${level}/kanji/chapter${numRaw}.json`,
        `data/${level}/kanji/unit${numPadded}.json`,
        `data/${level}/kanji/unit${numRaw}.json`,
        `data/${level}/kanji/Unit${numPadded}.json`,
        `data/${level}/kanji/Unit${numRaw}.json`
      ];

      const cacheKey = `${level}_kanji_${unitIndex}`;
      let loadedKanji = this.state.cache[cacheKey] || null;

      if (!loadedKanji) {
        for (const p of candidateKanjiPaths) {
          try {
            const res = await fetch(p);
            if (res.ok) { loadedKanji = await res.json(); break; }
          } catch (e) {}
        }
      }

      if (loadedKanji) {
        this.state.cache[cacheKey] = loadedKanji;
        this.hideNotice();
        this.state.activeList = loadedKanji.cards || loadedKanji.vocab || loadedKanji;
        if (this.state.kanjiMode === "list") this.renderCurrentSkillView();
      } else {
        this.showNotice(`【${level.toUpperCase()} - Kanji】Unit ${unitIndex + 1} file not found.`);
        this.clearContentDisplay();
      }
      return;
    }

    // 3. VOCABULARY
    const numPadded = String(unitIndex + 1).padStart(2, "0");
    const numRaw = String(unitIndex + 1);

    const candidatePaths = [
      `data/${level}/${skill}/chapter${numPadded}.json`,
      `data/${level}/${skill}/chapter${numRaw}.json`,
      `data/${level}/${skill}/unit${numPadded}.json`,
      `data/${level}/${skill}/unit${numRaw}.json`
    ];
    const cacheKey = `${level}_${skill}_${unitIndex}`;

    if (level === "n2" && skill === "vocab") {
      this.renderUnitsTrack(12);
      this.dom.unitsStrip.style.display = "block";
    } else {
      this.dom.unitsStrip.style.display = "none";
    }

    let loadedChapter = this.state.cache[cacheKey] || null;
    if (!loadedChapter) {
      for (const p of candidatePaths) {
        try {
          const res = await fetch(p);
          if (res.ok) { loadedChapter = await res.json(); break; }
        } catch (e) {}
      }
    }

    if (loadedChapter) {
      this.state.cache[cacheKey] = loadedChapter;
      this.hideNotice();
      this.renderSections(loadedChapter);
    } else {
      this.showNotice(`【${level.toUpperCase()} - ${this.capitalize(skill)}】Unit ${unitIndex + 1} data not available.`);
      this.clearContentDisplay();
    }
  },

  normalizeGrammar(rawList) {
    if (!Array.isArray(rawList)) rawList = rawList.grammar || rawList.data || [];
    return rawList.map((item, idx) => ({
      no: idx + 1,
      pattern: item["Grammar Pattern"] || item["Grammar"] || item.pattern || "",
      meaning_burmese: item["Myanmar Meaning"] || item["မြန်မာဘာသာပြန်"] || item.meaning_burmese || "",
      example_jp: item["Example (Japanese)"] || item["Example Sentence (Japanese)"] || item.example_jp || "",
      example_burmese: item["Example (Myanmar)"] || item["ဥပမာ စာကြောင်း (Burmese)"] || item.example_burmese || ""
    }));
  },

  renderUnitsTrack(total) {
    this.dom.unitsTrack.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const btn = document.createElement("button");
      btn.className = `unit-tag ${i === this.state.unitIndex ? "active" : ""}`;
      btn.textContent = `Unit ${i + 1}`;
      btn.addEventListener("click", () => {
        this.state.unitIndex = i;
        this.state.sectionIndex = 0;
        this.loadData();
      });
      this.dom.unitsTrack.appendChild(btn);
    }
  },

  renderSections(chapterData) {
    if (!chapterData.sections || chapterData.sections.length === 0) {
      this.showNotice("No sections available in this unit.");
      return;
    }

    this.dom.sectionsTrack.innerHTML = "";
    this.dom.sectionsStrip.style.display = "block";

    chapterData.sections.forEach((sec, idx) => {
      const btn = document.createElement("button");
      btn.className = `sec-tag ${idx === this.state.sectionIndex ? "active" : ""}`;
      btn.textContent = `§${sec.section || idx + 1} ${sec.title || ""}`;
      btn.addEventListener("click", () => {
        this.state.sectionIndex = idx;
        Array.from(this.dom.sectionsTrack.children).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.updateActiveDataset();
      });
      this.dom.sectionsTrack.appendChild(btn);
    });

    this.updateActiveDataset();
  },

  updateActiveDataset() {
    const { level, skill, unitIndex, sectionIndex } = this.state;
    const cacheKey = `${level}_${skill}_${unitIndex}`;
    const chapterData = this.state.cache[cacheKey];

    if (!chapterData) return;
    const sec = chapterData.sections[sectionIndex];
    this.state.activeList = sec ? (sec.vocab || []) : [];

    this.dom.contentHeading.textContent = sec 
      ? `Unit ${unitIndex + 1} • §${sec.section || sectionIndex + 1} ${sec.title || ""}` 
      : `${level.toUpperCase()} ${this.capitalize(skill)}`;

    this.renderCurrentSkillView();
    this.updateStepper(chapterData.sections.length);
  },

  renderCurrentSkillView() {
    this.dom.tableContainer.style.display = "none";
    if (this.dom.grammarContainer) this.dom.grammarContainer.style.display = "none";
    if (this.dom.kanjiContainer) this.dom.kanjiContainer.style.display = "none";
    if (this.dom.readingContainer) this.dom.readingContainer.style.display = "none";

    let list = this.state.activeList || [];

    // Global Search Filter
    if (this.state.searchQuery) {
      const q = this.state.searchQuery;
      list = list.filter(v =>
        (v.kanji && v.kanji.toLowerCase().includes(q)) ||
        (v.pattern && v.pattern.toLowerCase().includes(q)) ||
        (v.meaning && v.meaning.toLowerCase().includes(q)) ||
        (v.meaning_burmese && v.meaning_burmese.toLowerCase().includes(q)) ||
        (v.mnemonic && v.mnemonic.toLowerCase().includes(q)) ||
        (v.hiragana && v.hiragana.toLowerCase().includes(q))
      );
    }

    this.dom.countTag.textContent = `Showing ${list.length} items`;
    if (list.length === 0) {
      this.showNotice("該当する項目がありません (No items match).");
      return;
    }
    this.hideNotice();

    // =====================================
    // 1. KANJI MASTER CARDS
    // =====================================
    if (this.state.skill === "kanji") {
      this.dom.kanjiContainer.style.display = "flex";
      this.dom.kanjiContainer.innerHTML = "";

      list.forEach((k, idx) => {
        const card = document.createElement("div");
        card.className = "kanji-master-card";
        const onReading = (k.readings && k.readings.on) ? k.readings.on : "—";
        const kunReading = (k.readings && k.readings.kun) ? k.readings.kun : "—";

        card.innerHTML = `
          <div class="kanji-card-top">
            <div class="kanji-main-info">
              <span class="kanji-num-badge">${k.id || idx + 1}.</span>
              <div class="kanji-glyph">${k.kanji || ""}</div>
              <div class="kanji-readings-box">
                <div class="reading-row">
                  <span class="badge-on">ON</span>
                  <span class="reading-text">${onReading}</span>
                </div>
                <div class="reading-row">
                  <span class="badge-kun">KUN</span>
                  <span class="reading-text">${kunReading}</span>
                </div>
              </div>
            </div>
            <div class="kanji-meaning-pill">${k.meaning || ""}</div>
          </div>

          ${k.mnemonic ? `
          <div class="kanji-mnemonic-box">
            💡 ${this.formatMnemonic(k.mnemonic, k.meaning)}
          </div>` : ""}

          ${(k.vocab && k.vocab.length > 0) ? `
          <div class="kanji-vocab-table-wrap">
            <table class="kanji-sub-table">
              <thead>
                <tr>
                  <th>Kanji</th>
                  <th>Hiragana</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                ${k.vocab.map(v => `
                  <tr>
                    <td class="kv-kanji">${v.kanji || ""}</td>
                    <td class="kv-kana">${v.hiragana || ""}</td>
                    <td class="kv-meaning">${v.meaning || ""}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>` : ""}
        `;
        this.dom.kanjiContainer.appendChild(card);
      });
      return;
    }

    // =====================================
    // 2. GRAMMAR CARDS
    // =====================================
    if (this.state.skill === "grammar") {
      this.dom.grammarContainer.style.display = "flex";
      this.dom.grammarContainer.innerHTML = "";

      list.forEach(item => {
        const card = document.createElement("div");
        card.className = "grammar-item-card";
        card.innerHTML = `
          <div class="grammar-card-header">
            <div class="grammar-pattern-wrap">
              <span class="grammar-index-badge">#${item.no || "-"}</span>
              <h3 class="grammar-pattern-title">${item.pattern || ""}</h3>
            </div>
            <span class="grammar-meaning-badge">${item.meaning_burmese || ""}</span>
          </div>

          ${(item.example_jp || item.example_burmese) ? `
          <div class="grammar-example-box">
            ${item.example_jp ? `
            <div class="example-row">
              <span class="ex-tag jp">例文</span>
              <p class="ex-jp-text">${item.example_jp}</p>
            </div>` : ""}
            ${item.example_burmese ? `
            <div class="example-row">
              <span class="ex-tag mm">အဓိပ္ပာယ်</span>
              <p class="ex-mm-text">${item.example_burmese}</p>
            </div>` : ""}
          </div>` : ""}
        `;
        this.dom.grammarContainer.appendChild(card);
      });
      return;
    }

    // =====================================
    // 3. VOCABULARY TABLE
    // =====================================
    this.dom.tableContainer.style.display = "block";
    this.dom.tableBody.innerHTML = "";
    list.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="col-no">${item.no || "-"}</td>
        <td class="col-main">${item.kanji || ""}</td>
        <td class="col-sub">${item.hiragana || ""}</td>
        <td class="col-meaning">${item.meaning_burmese || ""}</td>
      `;
      this.dom.tableBody.appendChild(tr);
    });
  },

  updateStepper(total) {
    this.dom.stepperFooter.style.display = "flex";
    this.dom.stepIndicator.textContent = `Section ${this.state.sectionIndex + 1} of ${total}`;
    this.dom.prevSectionBtn.disabled = this.state.sectionIndex === 0;
    this.dom.nextSectionBtn.disabled = this.state.sectionIndex === total - 1;
  },

  prevSection() {
    if (this.state.sectionIndex > 0) {
      this.state.sectionIndex--;
      this.updateSectionHighlight();
      this.updateActiveDataset();
    }
  },

  nextSection() {
    const { level, skill, unitIndex } = this.state;
    const cacheKey = `${level}_${skill}_${unitIndex}`;
    const chapterData = this.state.cache[cacheKey];
    if (!chapterData) return;

    if (this.state.sectionIndex < chapterData.sections.length - 1) {
      this.state.sectionIndex++;
      this.updateSectionHighlight();
      this.updateActiveDataset();
    }
  },

  updateSectionHighlight() {
    Array.from(this.dom.sectionsTrack.children).forEach((b, idx) => {
      b.classList.toggle("active", idx === this.state.sectionIndex);
    });
  },

  showNotice(msg) {
    this.dom.noticeBanner.textContent = msg;
    this.dom.noticeBanner.style.display = "block";
  },

  hideNotice() {
    this.dom.noticeBanner.style.display = "none";
  },

  clearContentDisplay() {
    this.dom.sectionsStrip.style.display = "none";
    this.dom.tableBody.innerHTML = "";
    if (this.dom.grammarContainer) this.dom.grammarContainer.innerHTML = "";
    if (this.dom.kanjiContainer) this.dom.kanjiContainer.innerHTML = "";
    this.dom.countTag.textContent = "Showing 0 items";
    this.dom.stepperFooter.style.display = "none";
  },

  // Exact Parser Preserved as requested
  formatMnemonic(text, mainMeaning = "") {
    if (!text) return "";

    let formatted = text;

    // 1. Highlight English component words
    formatted = formatted.replace(/\b([a-zA-Z]+)\b/g, '<span class="comp-word">$1</span>');

    // 2. Intelligent Meaning Matcher
    let matched = false;
    if (mainMeaning) {
      const parts = mainMeaning.split(/[\/,]/).map(s => s.trim()).filter(Boolean);
      for (const part of parts) {
        const stem = part.replace(/(သည်|တယ်|ခြင်း|မည်)$/, '').trim();
        if (stem.length >= 2 && formatted.includes(stem)) {
          const escaped = stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`(${escaped}[\\u1000-\\u109F]*)`, 'g');
          formatted = formatted.replace(regex, '<span class="action">$1</span>');
          matched = true;
          break;
        }
      }
    }

    // 3. Fallback: Exclude particle markers (ကို, က, မှာ, နဲ့, သို့) and underline ONLY the action verb
    if (!matched) {
      formatted = formatted.replace(/(?:ကို|က|မှာ|နဲ့|သို့|\))\s*([က-အ][\u1000-\u109F]*?(?:ပေးနေတယ်|ဝေပေးနေတယ်|ဖြန့်ဝေပေးနေတယ်|ဖြစ်တယ်|လုပ်တယ်|နေတယ်|တယ်|တာ))/g, (match, verb) => {
        return match.replace(verb, `<span class="action">${verb.trim()}</span>`);
      });
    }

    // 4. Color radicals inside brackets: (土) -> ( [green]土[/green] )
    formatted = formatted.replace(/\(([^)]+)\)/g, '<span class="bracket">(</span><span class="radical">$1</span><span class="bracket">)</span>');

    return formatted;
  },

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};


document.addEventListener("DOMContentLoaded", () => APP.init());