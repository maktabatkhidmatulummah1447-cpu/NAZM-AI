/* =========================================================================
   NAZM AI — Official Website Script (Vanilla JavaScript)
   =========================================================================
   ALL EDITABLE VALUES ARE IN THE CONFIGURATION SECTION BELOW.
   Change values here only. You do not need to search the rest of the file.
   ========================================================================= */

/* ------------------------------ CONFIGURATION ------------------------------ */
const CONFIG = {
  // App name used across the site. Keep it exactly "NAZM AI".
  APP_NAME: "NAZM AI",

  // Current app version, e.g. "1.0.0". Empty = not yet released.
  APP_VERSION: "",

  // Release date, e.g. "2026-12-01". Empty = not yet released.
  RELEASE_DATE: "",

  // APK file size, e.g. "24 MB". Empty = unknown.
  APK_SIZE: "",

  // Minimum Android requirement, e.g. "Android 8.0 or higher". Empty = unknown.
  ANDROID_REQUIREMENTS: "",

  // Direct link to the APK on GitHub Releases. Empty = download disabled.
  // Example format only (not a real link):
  // "https://github.com/USERNAME/NAZM-AI/releases/download/v1.0.0/NAZM-AI.apk"
  APP_DOWNLOAD_URL: "",

  // Update notes shown in the Updates section. Empty = placeholder shown.
  UPDATE_NOTES_BN: {
    newFeatures: [],   // নতুন ফিচার — e.g. ["নতুন ফিচার ১", "নতুন ফিচার ২"]
    improvements: [],  // উন্নতি
    bugFixes: []       // বাগ ফিক্স
  },
  UPDATE_NOTES_EN: {
    newFeatures: [],   // New features — e.g. ["New feature 1"]
    improvements: [],  // Improvements
    bugFixes: []       // Bug fixes
  },

  // Developer email address. Empty = contact email button hidden.
  DEVELOPER_EMAIL: "sayedjamil118@gmail.com",

  // Developer Facebook page URL. Empty = Facebook button hidden.
  DEVELOPER_FACEBOOK_URL: "https://www.facebook.com/share/19xoSkFHkG/",

  // Developer biography (short paragraphs in each language).
  DEVELOPER_BIO_BN: "সাঈদ জামিল NAZM AI অ্যাপ্লিকেশনের ডেভেলপার হিসেবে অ্যাপটির উন্নয়ন, প্রযুক্তিগত রক্ষণাবেক্ষণ, আপডেট ও উন্নতির কাজ পরিচালনা করেন।",
  DEVELOPER_BIO_EN: "Sayed Jamil is the Application Developer of NAZM AI, responsible for developing the application, technical maintenance, updates, and software improvements.",

  // Developer photo file. Leave the file missing and the "SJ" avatar is shown.
  DEVELOPER_PHOTO: "assets/developer.jpg",

  // Official website URL (used for the Open Graph tag).
  WEBSITE_URL: "https://USERNAME.github.io/NAZM-AI-WEBSITE/",

  // Default language and theme (used on the first visit).
  DEFAULT_LANG: "bn",
  DEFAULT_THEME: "light"
};

/* ------------------------------ BILINGUAL DICTIONARY ------------------------------ */
/* Every visible text on the site is stored here. Keys are used in index.html
   via data-i18n="key" attributes. bn = Bangla, en = English. */
const I18N = {
  bn: {
    navHome: "হোম",
    navAbout: "NAZM সম্পর্কে",
    navFeatures: "ফিচার",
    navPreview: "অ্যাপ প্রিভিউ",
    navDownload: "ডাউনলোড",
    navUpdates: "আপডেট",
    navDeveloper: "ডেভেলপার",
    navManagement: "ব্যবস্থাপনা",
    navContact: "যোগাযোগ",
    menuOpen: "মেনু খুলুন",
    menuClose: "মেনু বন্ধ করুন",
    themeToggle: "থিম পরিবর্তন করুন",
    langLabel: "ভাষা",

    heroBadge: "অফিসিয়াল অ্যাপ ওয়েবসাইট",
    heroTitle: "NAZM AI",
    heroArabic: "نظم AI",
    heroIntroBn: "NAZM AI একটি আধুনিক ব্যক্তিগত ব্যবস্থাপনা ও উৎপাদনশীলতা অ্যাপ। এটি দৈনন্দিন কাজ, সময়, রুটিন, পরিকল্পনা ও ব্যক্তিগত কার্যক্রমকে এক জায়গায় সুশৃঙ্খলভাবে পরিচালনা করতে সহায়তা করে। বিভিন্ন প্রয়োজনীয় টুল ও AI সহায়তার সমন্বয়ে ব্যবহারকারীর দৈনন্দিন জীবনকে সহজ ও কার্যকর করার উদ্দেশ্যে এটি তৈরি করা হয়েছে।",
    heroIntroEn: "NAZM AI is a modern personal management and productivity application designed to help users organize daily tasks, time, routines, plans, and personal activities. It brings together useful tools and AI assistance to make everyday life more organized and efficient.",
    heroDownload: "অ্যাপ ডাউনলোড করুন",
    heroExplore: "ফিচার দেখুন",

    aboutTitle: "NAZM AI সম্পর্কে",
    aboutSubtitle: "About NAZM AI",
    aboutWhatTitle: "NAZM AI কী?",
    aboutWhatBody: "NAZM AI একটি Android অ্যাপ্লিকেশন, যা ব্যক্তিগত কাজ, সময়, রুটিন ও পরিকল্পনাকে একটি সুশৃঙ্খল কাঠামোতে সাজাতে সাহায্য করে।",
    aboutWhatBodyEn: "NAZM AI is an Android application that helps you arrange personal tasks, time, routines and plans within one organized structure.",
    aboutVisionTitle: "দৃষ্টিভঙ্গি (Vision)",
    aboutVisionBody: "প্রযুক্তি ও প্রয়োজনীয় সহায়ক টুলের মাধ্যমে মানুষের দৈনন্দিন জীবনকে আরও শৃঙ্খলাবদ্ধ ও কার্যকর করা।",
    aboutPurposeTitle: "উদ্দেশ্য (Purpose)",
    aboutPurposeBody: "দৈনন্দিন কাজ, সময় ব্যবস্থাপনা, অভ্যাস, পরিকল্পনা ও ব্যক্তিগত কার্যক্রমকে একটি সমন্বিত প্ল্যাটফর্মে নিয়ে আসা। ব্যবহারকারীদের আরও সুশৃঙ্খল, সচেতন ও উৎপাদনশীল জীবনযাপনে সহায়তা করাই NAZM AI-এর মূল উদ্দেশ্য।",
    aboutPurposeBodyEn: "The purpose of NAZM AI is to bring daily tasks, time management, habits, planning, and personal activities together into one integrated platform, helping users live more organized, mindful, and productive lives.",
    aboutObjTitle: "লক্ষ্যসমূহ (Objectives)",
    aboutObj1: "দৈনন্দিন কাজ ও সময়সূচি এক জায়গায় সাজানো",
    aboutObj2: "রুটিন ও অভ্যাস নিয়মিতভাবে অনুসরণ করতে সহায়তা",
    aboutObj3: "গুরুত্বপূর্ণ কাজের জন্য সময়মতো মনে করিয়ে দেওয়া",
    aboutObj4: "সহজ ও পরিষ্কার ব্যবহারকারী অভিজ্ঞতা দেওয়া",
    aboutUxTitle: "ব্যবহারকারী অভিজ্ঞতার দর্শন (UX Philosophy)",
    aboutUxBody: "সহজ, পরিষ্কার ও শান্ত ইন্টারফেস, যাতে ব্যবহারকারী মনোযোগ হারান না এবং প্রয়োজনীয় কাজ দ্রুত সম্পন্ন করতে পারেন।",

    featuresTitle: "সকল ফিচারসমূহ",
    featuresSubtitle: "All Features",

    previewTitle: "অ্যাপের এক ঝলক",
    previewSubtitle: "App Preview",
    previewHint: "ছবিতে ক্লিক করে বড় করে দেখুন",
    lbClose: "বন্ধ করুন",
    lbPrev: "আগের ছবি",
    lbNext: "পরের ছবি",
    shot1Caption: "NAZM AI Light Splash Screen",
    shot1Desc: "অ্যাপের লাইট থিমে পরিচিতিমূলক স্ক্রিন।",
    shot1Alt: "NAZM AI লাইট স্প্ল্যাশ স্ক্রিন",
    shot2Caption: "NAZM AI Brand Splash Screen",
    shot2Desc: "নাজম AI-এর নিজস্ব পরিচয় ও ব্র্যান্ডিং স্ক্রিন।",
    shot2Alt: "NAZM AI ব্র্যান্ড স্প্ল্যাশ স্ক্রিন",
    shot3Caption: "NAZM AI Main Dashboard",
    shot3Desc: "কাজ, ক্যালেন্ডার, রিমাইন্ডার, রুটিন, নোটসহ অ্যাপের মূল ড্যাশবোর্ড।",
    shot3Alt: "NAZM AI মূল ড্যাশবোর্ড",

    downloadTitle: "অ্যাপ ডাউনলোড",
    downloadSubtitle: "Download",
    dlVersion: "সংস্করণ (Version)",
    dlRelease: "প্রকাশের তারিখ (Release date)",
    dlSize: "APK সাইজ",
    dlAndroid: "ন্যূনতম Android প্রয়োজনীয়তা",
    dlButton: "APK ডাউনলোড করুন",
    dlUnavailable: "অ্যাপটি এখনো ডাউনলোডের জন্য প্রস্তুত নয়। শীঘ্রই এখানে ডাউনলোড লিংক যুক্ত হবে।",
    dlNotSet: "শীঘ্রই জানানো হবে",
    dlGuideTitle: "ইনস্টলেশন গাইড",
    dlStep1: "উপরের বাটন থেকে APK ফাইলটি ডাউনলোড করুন।",
    dlStep2: "ফোনের সেটিংসে গিয়ে \"অজানা উৎস থেকে ইনস্টল\" (Install unknown apps) অনুমতি দিন।",
    dlStep3: "ডাউনলোড হওয়া APK ফাইলে ট্যাপ করে Install বাটনে ক্লিক করুন।",
    dlStep4: "ইনস্টল শেষ হলে NAZM AI খুলে ব্যবহার শুরু করুন।",

    updatesTitle: "আপডেট",
    updatesSubtitle: "Updates",
    updLatest: "সর্বশেষ সংস্করণ",
    updNotes: "কী নতুন আছে (What's New)",
    updNew: "নতুন ফিচার",
    updImp: "উন্নতি",
    updFix: "বাগ ফিক্স",
    updNone: "এখনো নিশ্চিত আপডেটের তথ্য প্রকাশ করা হয়নি। নতুন আপডেট প্রকাশিত হলে এখানে দেখানো হবে।",
    updButton: "সর্বশেষ আপডেট ডাউনলোড করুন",

    devTitle: "অ্যাপ ডেভেলপার",
    devSubtitle: "Application Developer",
    devName: "সাঈদ জামিল",
    devNameEn: "Sayed Jamil",
    devDesignation: "Application Developer · Software Developer & Technical Maintainer",
    devRespTitle: "দায়িত্বসমূহ",
    devResp1: "অ্যাপ্লিকেশন উন্নয়ন ও প্রযুক্তিগত বাস্তবায়ন",
    devResp2: "প্রযুক্তিগত রক্ষণাবেক্ষণ (Technical maintenance)",
    devResp3: "সফটওয়্যার উন্নতি ও আপডেট",
    devEmail: "ইমেইল",
    devFacebook: "Facebook",

    mgmtTitle: "প্রতিষ্ঠা ও ব্যবস্থাপনা",
    mgmtSubtitle: "Founder & Management",
    mgmtLabel: "Founder & Main Management",
    mgmtOrgName: "খিদমাতুল উম্মাহ পাঠাগার",
    mgmtOrgNameEn: "Khidmatul Ummah Library",
    mgmtDesig: "Founder & Main Management of NAZM AI",
    mgmtBodyBn: "নাজম AI-এর প্রতিষ্ঠা ও প্রধান ব্যবস্থাপনা খিদমাতুল উম্মাহ পাঠাগারের অধীনে পরিচালিত। অ্যাপের সার্বিক ব্যবস্থাপনা, পরিচালনা, উন্নয়ন পরিকল্পনা ও কার্যক্রমের তত্ত্বাবধান এই ব্যবস্থাপনা পরিচয়ের অধীনে থাকবে।",
    mgmtBodyEn: "NAZM AI is founded and primarily managed under Khidmatul Ummah Library. Its overall management, operational oversight, development planning, and future direction are associated with the library's management.",

    contactTitle: "যোগাযোগ",
    contactSubtitle: "Contact & Feedback",
    contactIntro: "পরামর্শ, মতামত, বাগ রিপোর্ট বা অ্যাপ-সংক্রান্ত যেকোনো প্রশ্নে যোগাযোগ করুন।",
    contactIntroEn: "For suggestions, feedback, bug reports or any app-related inquiry, please get in touch.",
    contactEmailBtn: "ইমেইল পাঠান",
    contactFbBtn: "Facebook-এ যোগাযোগ",
    contactNotSet: "যোগাযোগের তথ্য এখনো যুক্ত করা হয়নি।",
    contactTypeSuggest: "পরামর্শ (Suggestions)",
    contactTypeFeedback: "মতামত (Feedback)",
    contactTypeBug: "বাগ রিপোর্ট (Bug report)",
    contactTypeInquiry: "অ্যাপ-সংক্রান্ত প্রশ্ন (Inquiry)",

    backToTop: "উপরে যান",

    footerDesc: "NAZM AI — দৈনন্দিন কাজ, সময় ও পরিকল্পনা সুশৃঙ্খলভাবে পরিচালনার জন্য একটি আধুনিক ব্যক্তিগত ব্যবস্থাপনা অ্যাপ।",
    footerQuick: "দ্রুত লিংক",
    footerDownload: "ডাউনলোড",
    footerContact: "যোগাযোগ",
    footerFounder: "Founder & Main Management:",
    footerDeveloper: "Application Developer:",
    footerCopy: "© 2026 NAZM AI. সর্বস্বত্ব সংরক্ষিত।",

    notSet: "শীঘ্রই জানানো হবে",
    feat01: "কাজ", feat01En: "Tasks", feat01D: "দৈনন্দিন কাজ তৈরি, সাজানো, পরিচালনা এবং সম্পন্ন করার জন্য।", feat01DEn: "Create, organize, manage, and complete daily tasks.",
    feat02: "ক্যালেন্ডার", feat02En: "Calendar", feat02D: "তারিখ অনুযায়ী কাজ, সময় ও কার্যক্রম সাজানোর জন্য।", feat02DEn: "Organize tasks, schedules, and activities by date.",
    feat03: "রিমাইন্ডার", feat03En: "Reminders", feat03D: "গুরুত্বপূর্ণ কাজ ও বিষয় মনে করিয়ে দেওয়ার জন্য।", feat03DEn: "Get reminders for important tasks and activities.",
    feat04: "অ্যালার্ম", feat04En: "Alarm", feat04D: "নির্দিষ্ট সময়ে সতর্কতা বা অ্যালার্ম দেওয়ার জন্য।", feat04DEn: "Set alarms and time-based alerts.",
    feat05: "রুটিন", feat05En: "Routine", feat05D: "দৈনন্দিন অভ্যাস ও নিয়মিত কাজ সাজানোর জন্য।", feat05DEn: "Organize daily routines and recurring habits.",
    feat06: "নোট", feat06En: "Notes", feat06D: "প্রয়োজনীয় তথ্য, চিন্তা, লেখা ও নোট সংরক্ষণের জন্য।", feat06DEn: "Save notes, thoughts, information, and important text.",
    feat07: "স্টপওয়াচ", feat07En: "Stopwatch", feat07D: "সময় পরিমাপ ও বিভিন্ন কার্যক্রমের সময় হিসাব রাখার জন্য।", feat07DEn: "Measure time and track duration.",
    feat08: "AI সহায়ক", feat08En: "AI Assistant", feat08D: "AI-ভিত্তিক সহায়তা এবং প্রশ্নের উত্তর পাওয়ার জন্য।", feat08DEn: "Get AI-powered assistance and answers to your questions.",
    feat09: "রিপোর্ট", feat09En: "Reports", feat09D: "ব্যবহারকারীর কার্যক্রম ও তথ্যের প্রতিবেদন দেখার জন্য।", feat09DEn: "View activity reports and relevant summaries.",
    feat10: "ইতিহাস", feat10En: "History", feat10D: "পূর্ববর্তী কার্যক্রম ও রেকর্ড দেখার জন্য।", feat10DEn: "Review previous activities and records.",
    feat11: "প্রোফাইল", feat11En: "Profile", feat11D: "ব্যবহারকারীর ব্যক্তিগত প্রোফাইল ও তথ্য পরিচালনার জন্য।", feat11DEn: "Manage user profile and personal information.",
    feat12: "সেটিংস", feat12En: "Settings", feat12D: "অ্যাপের বিভিন্ন পছন্দ, কনফিগারেশন ও সেটিংস নিয়ন্ত্রণের জন্য।", feat12DEn: "Configure app preferences and settings."
  },

  en: {
    navHome: "Home",
    navAbout: "About NAZM",
    navFeatures: "Features",
    navPreview: "App Preview",
    navDownload: "Download",
    navUpdates: "Updates",
    navDeveloper: "Developer",
    navManagement: "Management",
    navContact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeToggle: "Toggle theme",
    langLabel: "Language",

    heroBadge: "Official Application Website",
    heroTitle: "NAZM AI",
    heroArabic: "نظم AI",
    heroIntroBn: "NAZM AI একটি আধুনিক ব্যক্তিগত ব্যবস্থাপনা ও উৎপাদনশীলতা অ্যাপ। এটি দৈনন্দিন কাজ, সময়, রুটিন, পরিকল্পনা ও ব্যক্তিগত কার্যক্রমকে এক জায়গায় সুশৃঙ্খলভাবে পরিচালনা করতে সহায়তা করে। বিভিন্ন প্রয়োজনীয় টুল ও AI সহায়তার সমন্বয়ে ব্যবহারকারীর দৈনন্দিন জীবনকে সহজ ও কার্যকর করার উদ্দেশ্যে এটি তৈরি করা হয়েছে।",
    heroIntroEn: "NAZM AI is a modern personal management and productivity application designed to help users organize daily tasks, time, routines, plans, and personal activities. It brings together useful tools and AI assistance to make everyday life more organized and efficient.",
    heroDownload: "Download App",
    heroExplore: "Explore Features",

    aboutTitle: "About NAZM AI",
    aboutSubtitle: "About NAZM AI",
    aboutWhatTitle: "What is NAZM AI?",
    aboutWhatBody: "NAZM AI is an Android application that helps you arrange personal tasks, time, routines and plans within one organized structure.",
    aboutWhatBodyEn: "NAZM AI is an Android application that helps you arrange personal tasks, time, routines and plans within one organized structure.",
    aboutVisionTitle: "Vision",
    aboutVisionBody: "To make everyday life more disciplined and effective through technology and useful supporting tools.",
    aboutPurposeTitle: "Purpose",
    aboutPurposeBody: "The purpose of NAZM AI is to bring daily tasks, time management, habits, planning, and personal activities together into one integrated platform, helping users live more organized, mindful, and productive lives.",
    aboutPurposeBodyEn: "The purpose of NAZM AI is to bring daily tasks, time management, habits, planning, and personal activities together into one integrated platform, helping users live more organized, mindful, and productive lives.",
    aboutObjTitle: "Objectives",
    aboutObj1: "Organize daily tasks and schedules in one place",
    aboutObj2: "Help follow routines and habits regularly",
    aboutObj3: "Remind you of important tasks on time",
    aboutObj4: "Provide a simple and clear user experience",
    aboutUxTitle: "User Experience Philosophy",
    aboutUxBody: "A simple, clean and calm interface so users stay focused and complete essential tasks quickly.",

    featuresTitle: "All Features",
    featuresSubtitle: "Features",

    previewTitle: "App Preview",
    previewSubtitle: "App Preview",
    previewHint: "Click an image to enlarge",
    lbClose: "Close",
    lbPrev: "Previous image",
    lbNext: "Next image",
    shot1Caption: "NAZM AI Light Splash Screen",
    shot1Desc: "Introductory screen in the app's light theme.",
    shot1Alt: "NAZM AI light splash screen",
    shot2Caption: "NAZM AI Brand Splash Screen",
    shot2Desc: "The brand identity and branding screen of NAZM AI.",
    shot2Alt: "NAZM AI brand splash screen",
    shot3Caption: "NAZM AI Main Dashboard",
    shot3Desc: "The main dashboard with tasks, calendar, reminders, routines and notes.",
    shot3Alt: "NAZM AI main dashboard",

    downloadTitle: "Download the App",
    downloadSubtitle: "Download",
    dlVersion: "Version",
    dlRelease: "Release date",
    dlSize: "APK size",
    dlAndroid: "Minimum Android requirement",
    dlButton: "Download APK",
    dlUnavailable: "The app is not available for download yet. A download link will be added here soon.",
    dlNotSet: "Coming soon",
    dlGuideTitle: "Installation Guide",
    dlStep1: "Download the APK file using the button above.",
    dlStep2: "Go to phone settings and allow \"Install unknown apps\" for your browser.",
    dlStep3: "Tap the downloaded APK file and press Install.",
    dlStep4: "Once installed, open NAZM AI and start using it.",

    updatesTitle: "Updates",
    updatesSubtitle: "Updates",
    updLatest: "Latest version",
    updNotes: "What's New",
    updNew: "New features",
    updImp: "Improvements",
    updFix: "Bug fixes",
    updNone: "No confirmed release details have been published yet. New updates will appear here.",
    updButton: "Download latest update",

    devTitle: "Application Developer",
    devSubtitle: "Developer Profile",
    devName: "Sayed Jamil",
    devNameEn: "Sayed Jamil",
    devDesignation: "Application Developer · Software Developer & Technical Maintainer",
    devRespTitle: "Responsibilities",
    devResp1: "Application development and technical implementation",
    devResp2: "Technical maintenance",
    devResp3: "Software improvements and updates",
    devEmail: "Email",
    devFacebook: "Facebook",

    mgmtTitle: "Founder & Management",
    mgmtSubtitle: "Founder & Management",
    mgmtLabel: "Founder & Main Management",
    mgmtOrgName: "Khidmatul Ummah Library",
    mgmtOrgNameEn: "Khidmatul Ummah Library",
    mgmtDesig: "Founder & Main Management of NAZM AI",
    mgmtBodyBn: "নাজম AI-এর প্রতিষ্ঠা ও প্রধান ব্যবস্থাপনা খিদমাতুল উম্মাহ পাঠাগারের অধীনে পরিচালিত। অ্যাপের সার্বিক ব্যবস্থাপনা, পরিচালনা, উন্নয়ন পরিকল্পনা ও কার্যক্রমের তত্ত্বাবধান এই ব্যবস্থাপনা পরিচয়ের অধীনে থাকবে।",
    mgmtBodyEn: "NAZM AI is founded and primarily managed under Khidmatul Ummah Library. Its overall management, operational oversight, development planning, and future direction are associated with the library's management.",

    contactTitle: "Contact",
    contactSubtitle: "Contact & Feedback",
    contactIntro: "For suggestions, feedback, bug reports or any app-related inquiry, please get in touch.",
    contactIntroEn: "For suggestions, feedback, bug reports or any app-related inquiry, please get in touch.",
    contactEmailBtn: "Send Email",
    contactFbBtn: "Contact on Facebook",
    contactNotSet: "Contact details have not been added yet.",
    contactTypeSuggest: "Suggestions",
    contactTypeFeedback: "Feedback",
    contactTypeBug: "Bug report",
    contactTypeInquiry: "App inquiry",

    backToTop: "Back to top",

    footerDesc: "NAZM AI — a modern personal management app for organizing daily tasks, time and plans.",
    footerQuick: "Quick Links",
    footerDownload: "Download",
    footerContact: "Contact",
    footerFounder: "Founder & Main Management:",
    footerDeveloper: "Application Developer:",
    footerCopy: "© 2026 NAZM AI. All rights reserved.",

    notSet: "Coming soon",
    feat01: "Tasks", feat01En: "Tasks", feat01D: "Create, organize, manage, and complete daily tasks.", feat01DEn: "Create, organize, manage, and complete daily tasks.",
    feat02: "Calendar", feat02En: "Calendar", feat02D: "Organize tasks, schedules, and activities by date.", feat02DEn: "Organize tasks, schedules, and activities by date.",
    feat03: "Reminders", feat03En: "Reminders", feat03D: "Get reminders for important tasks and activities.", feat03DEn: "Get reminders for important tasks and activities.",
    feat04: "Alarm", feat04En: "Alarm", feat04D: "Set alarms and time-based alerts.", feat04DEn: "Set alarms and time-based alerts.",
    feat05: "Routine", feat05En: "Routine", feat05D: "Organize daily routines and recurring habits.", feat05DEn: "Organize daily routines and recurring habits.",
    feat06: "Notes", feat06En: "Notes", feat06D: "Save notes, thoughts, information, and important text.", feat06DEn: "Save notes, thoughts, information, and important text.",
    feat07: "Stopwatch", feat07En: "Stopwatch", feat07D: "Measure time and track duration.", feat07DEn: "Measure time and track duration.",
    feat08: "AI Assistant", feat08En: "AI Assistant", feat08D: "Get AI-powered assistance and answers to your questions.", feat08DEn: "Get AI-powered assistance and answers to your questions.",
    feat09: "Reports", feat09En: "Reports", feat09D: "View activity reports and relevant summaries.", feat09DEn: "View activity reports and relevant summaries.",
    feat10: "History", feat10En: "History", feat10D: "Review previous activities and records.", feat10DEn: "Review previous activities and records.",
    feat11: "Profile", feat11En: "Profile", feat11D: "Manage user profile and personal information.", feat11DEn: "Manage user profile and personal information.",
    feat12: "Settings", feat12En: "Settings", feat12D: "Configure app preferences and settings.", feat12DEn: "Configure app preferences and settings."
  }
};

/* ------------------------------ STATE ------------------------------ */
let currentLang = CONFIG.DEFAULT_LANG;
let currentTheme = CONFIG.DEFAULT_THEME;
let lightboxIndex = 0;

const SCREENSHOTS = [
  { src: "assets/screenshot-light.jpg", captionKey: "shot1Caption", descKey: "shot1Desc", altKey: "shot1Alt" },
  { src: "assets/screenshot-green.jpg", captionKey: "shot2Caption", descKey: "shot2Desc", altKey: "shot2Alt" },
  { src: "assets/screenshot-dashboard.jpg", captionKey: "shot3Caption", descKey: "shot3Desc", altKey: "shot3Alt" }
];

const FEATURES = [
  { n: "01", icon: "✓", k: "feat01" },
  { n: "02", icon: "▦", k: "feat02" },
  { n: "03", icon: "◔", k: "feat03" },
  { n: "04", icon: "⏰", k: "feat04" },
  { n: "05", icon: "↻", k: "feat05" },
  { n: "06", icon: "✎", k: "feat06" },
  { n: "07", icon: "◷", k: "feat07" },
  { n: "08", icon: "✦", k: "feat08" },
  { n: "09", icon: "▮", k: "feat09" },
  { n: "10", icon: "↺", k: "feat10" },
  { n: "11", icon: "◉", k: "feat11" },
  { n: "12", icon: "⚙", k: "feat12" }
];

/* ------------------------------ HELPERS ------------------------------ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key] || key);
const hasText = (v) => typeof v === "string" && v.trim().length > 0;
const hasList = (v) => Array.isArray(v) && v.length > 0;

/* ------------------------------ LANGUAGE ------------------------------ */
function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "bn";
  document.documentElement.lang = currentLang === "bn" ? "bn" : "en";
  document.documentElement.dir = "ltr";

  // Text content
  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  // Attributes (alt, aria-label, title)
  $$("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))));
  $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))));

  // Language switcher state
  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  renderFeatures();
  renderScreenshots();
  renderDownloadInfo();
  renderUpdates();
  renderDeveloper();
  renderContact();
  renderFooter();
  updateLightbox();

  try { localStorage.setItem("nazm-lang", currentLang); } catch (e) { /* storage unavailable */ }
}

/* ------------------------------ THEME ------------------------------ */
function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  const btn = $("#themeToggle");
  if (btn) {
    btn.setAttribute("aria-pressed", String(currentTheme === "dark"));
    btn.textContent = currentTheme === "dark" ? "☀" : "☾";
  }
  try { localStorage.setItem("nazm-theme", currentTheme); } catch (e) { /* storage unavailable */ }
}

/* ------------------------------ RENDERING ------------------------------ */
function renderFeatures() {
  const grid = $("#featuresGrid");
  if (!grid) return;
  grid.innerHTML = FEATURES.map((f) => {
    const name = currentLang === "bn" ? t(f.k) : t(f.k + "En");
    const other = currentLang === "bn" ? t(f.k + "En") : t(f.k);
    const desc = currentLang === "bn" ? t(f.k + "D") : t(f.k + "DEn");
    return `
      <article class="feature-card reveal">
        <span class="feature-num">${f.n}</span>
        <div class="feature-icon" aria-hidden="true">${f.icon}</div>
        <h3>${name}</h3>
        <p class="feature-sub">${other}</p>
        <p>${desc}</p>
      </article>`;
  }).join("");
  observeReveals();
}

function renderScreenshots() {
  const track = $("#galleryTrack");
  if (!track) return;
  track.innerHTML = SCREENSHOTS.map((s, i) => `
    <figure class="shot">
      <button type="button" class="shot-btn" data-index="${i}" aria-label="${t(s.captionKey)}">
        <img src="${s.src}" alt="${t(s.altKey)}" loading="lazy" decoding="async" />
      </button>
      <figcaption>
        <strong>${t(s.captionKey)}</strong>
        <span>${t(s.descKey)}</span>
      </figcaption>
    </figure>`).join("");
  const hint = $("#previewHint");
  if (hint) hint.textContent = t("previewHint");
}

function renderDownloadInfo() {
  const setVal = (id, value, fallbackKey) => {
    const el = document.getElementById(id);
    if (el) el.textContent = hasText(value) ? value : t(fallbackKey);
  };
  setVal("infoVersion", CONFIG.APP_VERSION, "dlNotSet");
  setVal("infoRelease", CONFIG.RELEASE_DATE, "dlNotSet");
  setVal("infoSize", CONFIG.APK_SIZE, "dlNotSet");
  setVal("infoAndroid", CONFIG.ANDROID_REQUIREMENTS, "dlNotSet");

  const available = hasText(CONFIG.APP_DOWNLOAD_URL);
  ["downloadBtn", "heroDownloadBtn", "updateDownloadBtn"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    if (available) {
      btn.setAttribute("href", CONFIG.APP_DOWNLOAD_URL);
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-disabled");
      btn.setAttribute("download", "");
    } else {
      btn.removeAttribute("href");
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-disabled");
      btn.removeAttribute("download");
    }
  });
  const notice = $("#downloadNotice");
  if (notice) notice.hidden = available;
}

function renderUpdates() {
  const setVal = (id, value, fallbackKey) => {
    const el = document.getElementById(id);
    if (el) el.textContent = hasText(value) ? value : t(fallbackKey);
  };
  setVal("updVersion", CONFIG.APP_VERSION, "dlNotSet");
  setVal("updDate", CONFIG.RELEASE_DATE, "dlNotSet");

  const notes = currentLang === "bn" ? CONFIG.UPDATE_NOTES_BN : CONFIG.UPDATE_NOTES_EN;
  const hasNotes = hasList(notes.newFeatures) || hasList(notes.improvements) || hasList(notes.bugFixes);
  const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

  const body = $("#updNotesBody");
  if (body) {
    body.innerHTML = hasNotes
      ? `
        ${hasList(notes.newFeatures) ? `<h4>${t("updNew")}</h4>${list(notes.newFeatures)}` : ""}
        ${hasList(notes.improvements) ? `<h4>${t("updImp")}</h4>${list(notes.improvements)}` : ""}
        ${hasList(notes.bugFixes) ? `<h4>${t("updFix")}</h4>${list(notes.bugFixes)}` : ""}`
      : `<p class="muted">${t("updNone")}</p>`;
  }
}

function renderDeveloper() {
  const bio = currentLang === "bn" ? CONFIG.DEVELOPER_BIO_BN : CONFIG.DEVELOPER_BIO_EN;
  const bioEl = $("#devBio");
  if (bioEl) bioEl.textContent = bio;

  const emailBtn = $("#devEmailBtn");
  const emailTxt = $("#devEmailText");
  if (emailBtn) {
    if (hasText(CONFIG.DEVELOPER_EMAIL)) {
      emailBtn.href = "mailto:" + CONFIG.DEVELOPER_EMAIL;
      emailBtn.hidden = false;
      if (emailTxt) emailTxt.textContent = CONFIG.DEVELOPER_EMAIL;
    } else {
      emailBtn.hidden = true;
    }
  }

  const fbBtn = $("#devFbBtn");
  if (fbBtn) {
    if (hasText(CONFIG.DEVELOPER_FACEBOOK_URL)) {
      fbBtn.href = CONFIG.DEVELOPER_FACEBOOK_URL;
      fbBtn.hidden = false;
    } else {
      fbBtn.hidden = true;
    }
  }

  const avatar = $("#devAvatar");
  if (avatar) {
    avatar.innerHTML = `<span class="avatar-initials">SJ</span>`;
    const probe = new Image();
    probe.onload = () => {
      avatar.innerHTML = `<img src="${CONFIG.DEVELOPER_PHOTO}" alt="${currentLang === "bn" ? t("devName") : t("devNameEn")}" />`;
    };
    probe.src = CONFIG.DEVELOPER_PHOTO;
  }
}

function renderContact() {
  const emailBtn = $("#contactEmail");
  const fbBtn = $("#contactFb");
  const note = $("#contactNote");
  const hasEmail = hasText(CONFIG.DEVELOPER_EMAIL);
  const hasFb = hasText(CONFIG.DEVELOPER_FACEBOOK_URL);

  if (emailBtn) {
    emailBtn.hidden = !hasEmail;
    if (hasEmail) emailBtn.href = "mailto:" + CONFIG.DEVELOPER_EMAIL;
  }
  if (fbBtn) {
    fbBtn.hidden = !hasFb;
    if (hasFb) fbBtn.href = CONFIG.DEVELOPER_FACEBOOK_URL;
  }
  if (note) note.hidden = hasEmail || hasFb ? true : false;
}

function renderFooter() {
  const fb = $("#footerFb");
  if (fb) {
    fb.hidden = !hasText(CONFIG.DEVELOPER_FACEBOOK_URL);
    if (!fb.hidden) fb.href = CONFIG.DEVELOPER_FACEBOOK_URL;
  }
  const mail = $("#footerMail");
  if (mail) {
    mail.hidden = !hasText(CONFIG.DEVELOPER_EMAIL);
    if (!mail.hidden) mail.href = "mailto:" + CONFIG.DEVELOPER_EMAIL;
  }
}

/* ------------------------------ GALLERY & LIGHTBOX ------------------------------ */
function openLightbox(index) {
  lightboxIndex = index;
  const lb = $("#lightbox");
  if (!lb) return;
  updateLightbox();
  lb.hidden = false;
  document.body.classList.add("no-scroll");
  $("#lbClose")?.focus();
}

function closeLightbox() {
  const lb = $("#lightbox");
  if (!lb) return;
  lb.hidden = true;
  document.body.classList.remove("no-scroll");
}

function stepLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + SCREENSHOTS.length) % SCREENSHOTS.length;
  updateLightbox();
}

function updateLightbox() {
  const img = $("#lbImage");
  if (!img) return;
  const s = SCREENSHOTS[lightboxIndex];
  img.src = s.src;
  img.alt = t(s.altKey);
  $("#lbCaption").textContent = t(s.captionKey);
  $("#lbDesc").textContent = t(s.descKey);
  $("#lbCount").textContent = `${lightboxIndex + 1} / ${SCREENSHOTS.length}`;
}

/* ------------------------------ NAVIGATION & MENU ------------------------------ */
function setupNav() {
  const toggle = $("#menuToggle");
  const menu = $("#navMenu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
  };

  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  $$("#navMenu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  const header = $("#siteHeader");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
    const top = $("#backToTop");
    if (top) top.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ------------------------------ SCROLL REVEAL ------------------------------ */
let revealObserver = null;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  $$(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

/* ------------------------------ SWIPE SUPPORT ------------------------------ */
function setupSwipe(el, onLeft, onRight) {
  if (!el) return;
  let startX = 0;
  let startY = 0;
  el.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  el.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? onLeft() : onRight();
    }
  }, { passive: true });
}

/* ------------------------------ INITIALISATION ------------------------------ */
function init() {
  // Load saved preferences
  let savedLang = null;
  let savedTheme = null;
  try {
    savedLang = localStorage.getItem("nazm-lang");
    savedTheme = localStorage.getItem("nazm-theme");
  } catch (e) { /* storage unavailable */ }

  applyTheme(savedTheme || CONFIG.DEFAULT_THEME);
  applyLanguage(savedLang || CONFIG.DEFAULT_LANG);

  // Language switcher
  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // Theme toggle
  $("#themeToggle")?.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // Gallery click -> lightbox
  $("#galleryTrack")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".shot-btn");
    if (btn) openLightbox(Number(btn.dataset.index));
  });
  $("#galleryTrack")?.addEventListener("keydown", (e) => {
    const btn = e.target.closest(".shot-btn");
    if (btn && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openLightbox(Number(btn.dataset.index));
    }
  });

  // Lightbox controls
  $("#lbClose")?.addEventListener("click", closeLightbox);
  $("#lbPrev")?.addEventListener("click", () => stepLightbox(-1));
  $("#lbNext")?.addEventListener("click", () => stepLightbox(1));
  $("#lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    const lb = $("#lightbox");
    if (!lb || lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
  setupSwipe($("#lightbox"), () => stepLightbox(1), () => stepLightbox(-1));

  // Gallery horizontal scroll buttons
  $("#galleryPrev")?.addEventListener("click", () => {
    $("#galleryTrack")?.scrollBy({ left: -300, behavior: "smooth" });
  });
  $("#galleryNext")?.addEventListener("click", () => {
    $("#galleryTrack")?.scrollBy({ left: 300, behavior: "smooth" });
  });

  // Back to top
  $("#backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  setupNav();
  observeReveals();
}

document.addEventListener("DOMContentLoaded", init);
