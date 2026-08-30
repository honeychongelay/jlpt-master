/**
 * JLPT Learning Master
 * Supports: Vocab (12 Units), Kanji (18 Units Cards), Grammar (Flat Cards), Reading
 */
// UNIVERSAL DUMMY / DEMO DATA REPOSITORY
// ====================================================
const DUMMY_REPOSITORY = {
  // 1. VOCABULARY DUMMY (Sections & Words)
  vocab: {
    chapter: 1,
    sections: [
      {
        section: 1,
        title: "基本語彙 (Sample Demo)",
        vocab: [
          { no: 1, kanji: "約束", hiragana: "やくそく", meaning_burmese: "ကတိ / ချိန်းဆိုမှု" },
          { no: 2, kanji: "案内する", hiragana: "あんないする", meaning_burmese: "လမ်းပြသည် / ရှင်းပြသည်" },
          { no: 3, kanji: "準備", hiragana: "じゅんび", meaning_burmese: "ကြိုတင်ပြင်ဆင်မှု" },
          { no: 4, kanji: "生活", hiragana: "せいかつ", meaning_burmese: "လူနေမှုဘဝ / နေထိုင်မှု" },
          { no: 5, kanji: "経験", hiragana: "けいけん", meaning_burmese: "အတွေ့အကြုံ" }
        ]
      }
    ]
  },

  // 2. KANJI DUMMY
  kanji: [
    {
      id: "01",
      kanji: "雷",
      meaning: "မိုးကြိုး",
      readings: { on: "ライ", kun: "かみなり" },
      mnemonic: "မိုး (雨) ရွာနေချိန် လယ်ကွင်း (田) ထဲကို မိုးကြိုးပစ်ချလိုက်တယ်",
      vocab: [
        { kanji: "雷", hiragana: "かみなり", meaning: "မိုးကြိုး" },
        { kanji: "地雷", hiragana: "じらい", meaning: "မြေမြှုပ်မိုင်း" },
        { kanji: "雷鳴", hiragana: "らいめい", meaning: "မိုးကြိုးသံ" }
      ]
    },
    {
      id: "02",
      kanji: "配",
      meaning: "ဝေငှသည်",
      readings: { on: "ハイ", kun: "くば・る" },
      mnemonic: "မိမိကိုယ်တိုင် (己) က အရက်အိုး (酉) ကို ဖြန့်ဝေပေးနေတယ်",
      vocab: [
        { kanji: "配る", hiragana: "くばる", meaning: "ဝေငှသည်" },
        { kanji: "配達", hiragana: "はいたつ", meaning: "ပို့ဆောင်ခြင်း" },
        { kanji: "心配", hiragana: "しんぱい", meaning: "စိတ်ပူသည်" }
      ]
    }
  ],

  // 3. GRAMMAR DUMMY
  grammar: [
    {
      no: 1,
      pattern: "〜かねる",
      meaning_burmese: "〜ဖို့ခက်တယ် / မလုပ်နိုင်ဘူး",
      example_jp: "その件については私にはわかりかねます。",
      example_burmese: "အဲ့ဒီကိစ္စနဲ့ပတ်သက်ပြီးတော့ ကျွန်တော့်အတွက် နားလည်ဖို့ခက်ပါတယ်"
    },
    {
      no: 2,
      pattern: "〜に基づいて",
      meaning_burmese: "〜ကို အခြေခံပြီး / အပေါ်မူတည်ပြီး",
      example_jp: "この映画は実際の事件に基づいて作られました。",
      example_burmese: "ဒီရုပ်ရှင်ကို ဖြစ်ရပ်မှန်အပေါ် အခြေခံပြီး ရိုက်ကူးထားခြင်းဖြစ်သည်"
    },
    {
      no: 3,
      pattern: "〜に違いない",
      meaning_burmese: "〜ဖြစ်မှာ သေချာတယ် / ဖြစ်ဖို့များတယ်",
      example_jp: "彼が犯人に違いない。",
      example_burmese: "သူက တရားခံဖြစ်မှာ သေချာတယ်"
    }
  ],

  // 4. READING DUMMY
  reading: [
    {
      id: "sample-demo",
      title: "練習 1 (Sample Demo) • 現代社会とコミュニケーション",
      theme: "第1部 評論・解説・エッセイなど (Demo Preview)",
      reading_point: {
        focus: "対比（子供と大人）に注目する",
        explanation_mm: "စာပိုဒ်ထဲတွင် ကလေးနှင့် လူကြီးတို့၏ ဆက်သွယ်ပြောဆိုပုံ နှိုင်းယှဉ်ချက် (対比) ကို သတိပြုဖတ်ရှုရပါမည်။"
      },
      passage_sentences: [
        {
          jp: "この前、教師の人と話していて、子供がTVゲームばかりして、友達同士遊ばないから困っているとぼやいていました。",
          mm: "မကြာသေးခင်က ဆရာတစ်ယောက်နဲ့ စကားပြောဖြစ်တော့ ကလေးတွေက TV Game တွေချည်းဆော့ပြီး သူငယ်ချင်းအချင်းချင်း အတူမကစားကြလို့ စိတ်ညစ်ရတယ်လို့ ညည်းတွားနေခဲ့ပါတယ်။"
        },
        {
          jp: "TVゲームに対するもっとも一般的な批判です。大人が緊張を避けるためにカラオケに行くのと同様に、子供もゲームをします。",
          mm: "ဒါကတော့ TV Game တွေအပေါ် အများဆုံးဝေဖန်လေ့ရှိတဲ့ အချက်ဖြစ်ပါတယ်။ လူကြီးတွေ တင်းမာမှုကို ရှောင်ရှားဖို့ ကာရာအိုကေသွားသလို ကလေးတွေလည်း Game ဆော့ကြတာဖြစ်ပါတယ်။"
        },
        {
          jp: "そして、子供は緊張する瞬間、ある者はTVゲームのスイッチを入れ、ある者はコミックを手に取るのですよ、と思ってしまうのです。",
          mm: "ဒါ့အပြင် ကလေးတွေဟာ စိတ်လှုပ်ရှားတင်းမာလာတဲ့အခါ တချို့က TV Game ဖွင့်ပြီး တချို့က စာအုပ်ကို ကောက်ကိုင်လိုက်ကြတာပါပဲလို့ တွေးမိပါတယ်။"
        }
      ],
      source: "新完全マスター 読解 (Demo Preview)",
      question: {
        question_text_jp: "この文章の内容として最も適切なものはどれか。",
        question_text_mm: "ဤစာပိုဒ်၏ အကြောင်းအရာနှင့် ပတ်သက်၍ အသင့်တော်ဆုံးအချက်မှာ အဘယ်နည်း။",
        options: [
          { num: 1, jp: "子供がTVゲームをするのは、友達と遊ぶのが嫌いだからだ。", mm: "ကလေးတွေ TV Game ဆော့တာဟာ သူငယ်ချင်းတွေနဲ့ ကစားရတာ မကြိုက်လို့ဖြစ်သည်" },
          { num: 2, jp: "子供がTVゲームをするのは緊張を避けるためで、大人がカラオケに行くのと同じだ。", mm: "ကလေးတွေ TV Game ဆော့တာဟာ တင်းမာမှုကို ရှောင်ရှားဖို့ဖြစ်ပြီး လူကြီးတွေ ကာရာအိုကေ သွားတာနဲ့ အတူတူပင် ဖြစ်သည်" },
          { num: 3, jp: "子供がTVゲームをすることを批判するなら、大人もカラオケに行くべきではない。", mm: "ကလေးတွေ Game ဆော့တာကို ဝေဖန်မယ်ဆိုရင် လူကြီးတွေလည်း ကာရာအိုကေ မသွားသင့်ပါ" },
          { num: 4, jp: "大人は子供の生活の知恵を理解していない。", mm: "လူကြီးများသည် ကလေးတို့၏ ဘဝနေထိုင်မှုအတွေ့အကြုံကို နားမလည်ပါ" }
        ]
      },
      answer_explanation: {
        correct_option: 2,
        correct_summary_jp: "正解：2（緊張を避けるために、大人はカラオケに行き、子供はテレビゲームをする。）",
        correct_summary_mm: "အဖြေမှန် - ၂ (စိတ်တင်းမာမှုကို ရှောင်ရှားရန် လူကြီးများသည် ကာရာအိုကေသွားကြပြီး ကလေးများသည် TV Game ဆော့ကြခြင်းဖြစ်သည်)",
        rationale: [
          { opt: 1, text: "友達と遊ぶのが嫌いとは書かれていません。(သူငယ်ချင်းများနှင့် ကစားရတာမကြိုက်ဟု မဖော်ပြထားပါ)" },
          { opt: 2, text: "【正解】大人がカラオケに行くのと同様、子供も緊張を避けるためにゲームをする。(လူကြီးတွေ ကာရာအိုကေသွားသလို ကလေးတွေလည်း စိတ်တင်းမာမှုကိုရှောင်ဖို့ Game ဆော့ခြင်းဖြစ်သည်)" },
          { opt: 3, text: "大人も行くべきではないという主張ではありません。(လူကြီးတွေ မသွားသင့်ဘူးဆိုသည့် အဓိပ္ပာယ်မဟုတ်ပါ)" },
          { opt: 4, text: "大人が理解していないという話ではありません。(နားမလည်ဟု ဖော်ပြထားခြင်းမရှိပါ)" }
        ]
      },
      vocab_list: [
        { kanji: "批判", hiragana: "ひはん", meaning: "ဝေဖန်မှု / အပြစ်တင်ခြင်း" },
        { kanji: "緊張", hiragana: "きんちょう", meaning: "စိတ်လှုပ်ရှားမှု / တင်းမာမှု" },
        { kanji: "敏感", hiragana: "びんかん", meaning: "အကဲဆတ်သော / ထိလွယ်ရှလွယ်သော" }
      ]
    }
  ]
};

const APP = {
  state: {
    level: "n2",         // n5, n4, n3, n2, n1
    skill: "vocab",      // vocab, kanji, grammar, reading
    unitIndex: 0,
    sectionIndex: 0,
    searchQuery: "",
    cache: {},
    activeList: []
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
    stepIndicator: document.getElementById("stepIndicator")
  },

  init() {
    this.bindEvents();
    this.showHomeView();
  },

  bindEvents() {
    document.querySelectorAll(".level-card").forEach(card => {
      card.addEventListener("click", () => this.openSkillsView(card.dataset.level));
    });

    document.querySelectorAll(".skill-card").forEach(card => {
      card.addEventListener("click", () => this.openContentView(card.dataset.skill));
    });

    this.dom.navHomeLogo.addEventListener("click", () => this.showHomeView());
    this.dom.trailHome.addEventListener("click", () => this.showHomeView());
    this.dom.backToHomeBtn.addEventListener("click", () => this.showHomeView());
    this.dom.trailLevel.addEventListener("click", () => this.openSkillsView(this.state.level));
    this.dom.backToSkillsBtn.addEventListener("click", () => this.openSkillsView(this.state.level));

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

    this.dom.prevSectionBtn.addEventListener("click", () => this.prevSection());
    this.dom.nextSectionBtn.addEventListener("click", () => this.nextSection());
  },

  showHomeView() {
    this.dom.viewHome.style.display = "block";
    this.dom.viewSkills.style.display = "none";
    this.dom.viewContent.style.display = "none";
    this.dom.breadcrumbTrail.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  AVAILABLE_SKILLS: {
    n2: ["vocab", "kanji", "grammar"], // Add "reading" here when ready
    n5: [], // Empty means all disabled
    n4: [],
    n3: [],
    n1: []
  },

  openSkillsView(level) {
    this.state.level = level.toLowerCase();
    this.dom.skillLevelBadge.textContent = level.toUpperCase();
    this.dom.trailLevel.textContent = level.toUpperCase();

    // Check available skills for this level
    const readySkills = this.AVAILABLE_SKILLS[this.state.level] || [];

    document.querySelectorAll(".skill-card").forEach(card => {
      const skillName = card.dataset.skill;
      const badge = card.querySelector(".skill-badge-tag");

      if (readySkills.includes(skillName)) {
        // Skill HAS Data -> Clickable
        card.classList.remove("is-disabled");
        card.classList.add("is-ready");
        if (badge) badge.textContent = "Ready • စတင်လေ့လာမည်";
      } else {
        // Skill HAS NO Data -> Disabled & Unclickable
        card.classList.add("is-disabled");
        card.classList.remove("is-ready");
        if (badge) badge.textContent = "Coming Soon • မရရှိသေးပါ";
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
    this.dom.searchInput.value = "";
    this.dom.clearSearchBtn.style.display = "none";

    this.dom.trailSkillSep.style.display = "inline";
    this.dom.trailSkill.style.display = "inline";
    this.dom.trailSkill.textContent = this.capitalize(skill);

    this.dom.viewHome.style.display = "none";
    this.dom.viewSkills.style.display = "none";
    this.dom.viewContent.style.display = "block";

    this.loadData();
  },

  async loadData() {
    const { level, skill, unitIndex } = this.state;
    this.showNotice("読み込み中... Loading data...");

    // 1. GRAMMAR (Flat)
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

    // 2. KANJI (Units 1 to 18)
    if (skill === "kanji") {
      this.dom.sectionsStrip.style.display = "none";
      this.dom.stepperFooter.style.display = "none";

      const totalUnits = (level === "n2") ? 18 : 10;
      this.renderUnitsTrack(totalUnits);
      this.dom.unitsStrip.style.display = "block";
      this.dom.contentHeading.textContent = `${level.toUpperCase()} Kanji • Unit ${unitIndex + 1}`;

      const numPadded = String(unitIndex + 1).padStart(2, "0");
      const numRaw = String(unitIndex + 1);

      const candidateKanjiPaths = [
        `data/${level}/kanji/chapter${numPadded}.json`,
        `data/${level}/kanji/chapter${numRaw}.json`,
        `data/${level}/kanji/unit${numPadded}.json`,
        `data/${level}/kanji/unit${numRaw}.json`,
        `data/${level}/kanji/Unit${numPadded}.json`,
        `data/${level}/kanji/Unit${numRaw}.json`,
        `data/${level.toUpperCase()}/kanji/chapter${numPadded}.json`,
        `data/${level.toUpperCase()}/kanji/unit${numPadded}.json`
      ];

      const cacheKey = `${level}_kanji_${unitIndex}`;
      let loadedKanji = this.state.cache[cacheKey] || null;

      if (!loadedKanji) {
        for (const p of candidateKanjiPaths) {
          try {
            const res = await fetch(p);
            if (res.ok) { 
              loadedKanji = await res.json(); 
              break; 
            }
          } catch (e) {}
        }
      }

      if (loadedKanji) {
        this.state.cache[cacheKey] = loadedKanji;
        this.hideNotice();
        this.state.activeList = loadedKanji.cards || loadedKanji.vocab || loadedKanji;
        this.renderCurrentSkillView();
      } else {
        this.showNotice(`【${level.toUpperCase()} - Kanji】Unit ${unitIndex + 1} file not uploaded yet.`);
        this.clearContentDisplay();
      }
      return;
    }

    // 3. VOCABULARY (Units & Sections)
    const numPadded = String(unitIndex + 1).padStart(2, "0");
    const numRaw = String(unitIndex + 1);

    const candidatePaths = [
      `data/${level}/${skill}/chapter${numPadded}.json`,
      `data/${level}/${skill}/chapter${numRaw}.json`,
      `data/${level}/${skill}/unit${numPadded}.json`,
      `data/${level}/${skill}/unit${numRaw}.json`,
      `data/${level.toUpperCase()}/${skill}/chapter${numPadded}.json`
    ];
    const cacheKey = `${level}_${skill}_${unitIndex}`;

    if (level === "n2" && skill === "vocab") {
      this.renderUnitsTrack(12);
      this.dom.unitsStrip.style.display = "block";
    } else {
      this.dom.unitsStrip.style.display = "none";
    }

    if (this.state.cache[cacheKey]) {
      this.hideNotice();
      this.renderSections(this.state.cache[cacheKey]);
      return;
    }

    let loadedChapter = null;
    for (const p of candidatePaths) {
      try {
        const res = await fetch(p);
        if (res.ok) { loadedChapter = await res.json(); break; }
      } catch (e) {}
    }

    if (loadedChapter) {
      this.state.cache[cacheKey] = loadedChapter;
      this.hideNotice();
      this.renderSections(loadedChapter);
    } else {
      this.showNotice(`【${level.toUpperCase()} - ${this.capitalize(skill)}】Unit ${unitIndex + 1} data not available yet.`);
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
    // 1. RENDER KANJI MASTER CARDS
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
          <!-- Top Row: Number, Kanji, Readings, Meaning -->
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

          <!-- Mnemonic Box with Auto-Colored Elements -->
          ${k.mnemonic ? `
          <div class="kanji-mnemonic-box">
            💡 ${this.formatMnemonic(k.mnemonic, k.meaning)}
          </div>` : ""}

          <!-- Vocabulary Sub-Table with Solid Black Text -->
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
    // 2. RENDER GRAMMAR CARDS
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
    // 3. RENDER VOCAB TABLE
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
    this.dom.tableContainer.style.display = "none";
    if (this.dom.grammarContainer) this.dom.grammarContainer.style.display = "none";
    if (this.dom.kanjiContainer) this.dom.kanjiContainer.style.display = "none";
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

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

document.addEventListener("DOMContentLoaded", () => APP.init());