import type { QuranData } from './types';

// This is a placeholder for the full Quran data.
// A complete version of this file would be very large.
// This includes Surah Al-Fatiha, and a few verses from Al-Baqarah, and An-Nas
export const quranData: QuranData = [
  {
    id: 1,
    name: {
      ar: 'سُورَةُ ٱلْفَاتِحَةِ',
      en: 'Al-Fatiha',
      bn: 'আল-ফাতিহা',
      transliteration: 'Al-Fatiha',
    },
    total_verses: 7,
    verses: [
      {
        id: 1,
        text: {
          ar: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
          bn_muhiuddin: 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে শুরু করছি।',
          bn_tanzil: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।',
          en_sahih: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
          en_transliteration: "Bismillāhi r-raḥmāni r-raḥīm",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001001.mp3',
      },
      {
        id: 2,
        text: {
          ar: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
          bn_muhiuddin: 'যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।',
          bn_tanzil: 'যাবতীয় প্রশংসা জগৎসমূহের প্রতিপালক আল্লাহরই।',
          en_sahih: '[All] praise is [due] to Allah, Lord of the worlds -',
          en_transliteration: "Al ḥamdu lillāhi rabbi l-ʿālamīn",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001002.mp3',
      },
      {
        id: 3,
        text: {
          ar: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
          bn_muhiuddin: 'যিনি নিতান্ত মেহেরবান ও দয়ালু।',
          bn_tanzil: 'যিনি পরম করুণাময়, অতি দয়ালু।',
          en_sahih: 'The Entirely Merciful, the Especially Merciful,',
          en_transliteration: "Ar raḥmāni r-raḥīm",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001003.mp3',
      },
      {
        id: 4,
        text: {
          ar: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
          bn_muhiuddin: 'যিনি বিচার দিনের মালিক।',
          bn_tanzil: 'বিচার দিনের মালিক।',
          en_sahih: 'Sovereign of the Day of Recompense.',
          en_transliteration: "Māliki yawmi d-dīn",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001004.mp3',
      },
      {
        id: 5,
        text: {
          ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
          bn_muhiuddin: 'আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।',
          bn_tanzil: 'আমরা কেবল তোমারই ‘ইবাদাত করি এবং কেবলমাত্র তোমারই সাহায্য প্রার্থনা করি।',
          en_sahih: 'It is You we worship and You we ask for help.',
          en_transliteration: "Iyyāka naʿbudu wa iyyāka nastaʿīn",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001005.mp3',
      },
      {
        id: 6,
        text: {
          ar: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
          bn_muhiuddin: 'আমাদেরকে সরল পথ দেখাও,',
          bn_tanzil: 'আমাদেরকে সরল পথের হিদায়াত দিন।',
          en_sahih: 'Guide us to the straight path -',
          en_transliteration: "Ihdinā ṣ-ṣirāṭa l-mustaqīm",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001006.mp3',
      },
      {
        id: 7,
        text: {
          ar: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
          bn_muhiuddin: 'সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।',
          bn_tanzil: 'তাদের পথ, যাদেরকে আপনি নি‘আমাত দিয়েছেন, যাদের উপর আপনার ক্রোধ আপতিত হয়নি এবং যারা পথভ্রষ্টও নয়।',
          en_sahih: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
          en_transliteration: "Ṣirāṭa llaḏīna anʿamta ʿalayhim ġayri l-maġḍūbi ʿalayhim walā ḍ-ḍāllīn",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/001007.mp3',
      },
    ],
  },
  {
    id: 2,
    name: {
      ar: 'سورة البقرة',
      en: 'Al-Baqarah',
      bn: 'আল-বাকারা',
      transliteration: 'Al-Baqara',
    },
    total_verses: 286,
    verses: [
        {
            "id": 1,
            "text": {
                "ar": "الٓمٓ",
                "bn_muhiuddin": "আলিফ লাম মীম।",
                "bn_tanzil": "আলিফ-লাম-মীম",
                "en_sahih": "Alif, Lam, Meem.",
                "en_transliteration": "Alif-Lām-Mīm"
            },
            "audio": "https://everyayah.com/data/Alafasy_128kbps/002001.mp3"
        },
        {
            "id": 2,
            "text": {
                "ar": "ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
                "bn_muhiuddin": "এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,",
                "bn_tanzil": "এ সেই কিতাব, যাতে কোন সন্দেহ নেই, মুত্তাকীদের জন্য হিদায়াত।",
                "en_sahih": "This is the Book about which there is no doubt, a guidance for those conscious of Allah -",
                "en_transliteration": "Dhālika l-kitābu lā rayba fīh, hudan li-l-muttaqīn"
            },
            "audio": "https://everyayah.com/data/Alafasy_128kbps/002002.mp3"
        },
        {
            "id": 3,
            "text": {
                "ar": "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ",
                "bn_muhiuddin": "যারা অদেখা বিষয়ের উপর বিশ্বাস স্থাপন করে এবং নামায প্রতিষ্ঠা করে। আর আমি তাদেরকে যে রুযী দান করেছি তা থেকে ব্যয় করে।",
                "bn_tanzil": "যারা গায়েবের প্রতি ঈমান আনে, সালাত কায়েম করে এবং আমি তাদেরকে যে রিয্ক দিয়েছি তা থেকে ব্যয় করে।",
                "en_sahih": "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
                "en_transliteration": "Alladhīna yu'minūna bi-l-ghaybi wa yuqīmūna ṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn"
            },
            "audio": "https://everyayah.com/data/Alafasy_128kbps/002003.mp3"
        },
        {
            "id": 4,
            "text": {
                "ar": "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ",
                "bn_muhiuddin": "এবং যারা বিশ্বাস স্থাপন করেছে সেসব বিষয়ের উপর যা কিছু তোমার প্রতি অবতীর্ণ হয়েছে এবং সেসব বিষয়ের উপর যা তোমার পূর্ববর্তীদের প্রতি অবতীর্ণ হয়েছে। আর আখেরাতকে যারা নিশ্চিত বলে বিশ্বাস করে।",
                "bn_tanzil": "আর যারা ঈমান আনে তাতে, যা তোমার প্রতি নাযিল করা হয়েছে এবং যা তোমার পূর্বে নাযিল করা হয়েছে। আর আখিরাতের প্রতি তারা ইয়াকীন রাখে।",
                "en_sahih": "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
                "en_transliteration": "Wa-lladhīna yu'minūna bi-mā unzila ilayka wa mā unzila min qablika wa bi-l-'ākhirati hum yūqinūn"
            },
            "audio": "https://everyayah.com/data/Alafasy_128kbps/002004.mp3"
        },
        {
            "id": 5,
            "text": {
                "ar": "أُو۟لَـٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
                "bn_muhiuddin": "তারাই নিজেদের পালনকর্তার পক্ষ থেকে সুপথ প্রাপ্ত, আর তারাই যথার্থ সফলকাম।",
                "bn_tanzil": "তারা তাদের রবের পক্ষ থেকে হিদায়াতের উপর রয়েছে এবং তারাই সফলকাম।",
                "en_sahih": "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
                "en_transliteration": "Ulā'ika ʿalā hudan min rabbihim wa ulā'ika humu l-mufliḥūn"
            },
            "audio": "https://everyayah.com/data/Alafasy_128kbps/002005.mp3"
        }
    ]
  },
  {
    id: 3,
    "name": {
      "ar": "سورة آل عمران",
      "en": "Aal-E-Imran",
      "bn": "আল-ইমরান",
      "transliteration": "Aal-E-Imran"
    },
    "total_verses": 200,
    "verses": []
  },
  {
    "id": 4,
    "name": {
      "ar": "سورة النساء",
      "en": "An-Nisa",
      "bn": "আন-নিসা",
      "transliteration": "An-Nisa"
    },
    "total_verses": 176,
    "verses": []
  },
  {
    "id": 5,
    "name": {
      "ar": "سورة المائدة",
      "en": "Al-Ma'idah",
      "bn": "আল-মায়িদাহ",
      "transliteration": "Al-Ma'idah"
    },
    "total_verses": 120,
    "verses": []
  },
  {
    "id": 6,
    "name": {
      "ar": "سورة الأنعام",
      "en": "Al-An'am",
      "bn": "আল-আন’আম",
      "transliteration": "Al-An'am"
    },
    "total_verses": 165,
    "verses": []
  },
  {
    "id": 7,
    "name": {
      "ar": "سورة الأعراف",
      "en": "Al-A'raf",
      "bn": "আল-আ’রাফ",
      "transliteration": "Al-A'raf"
    },
    "total_verses": 206,
    "verses": []
  },
  {
    "id": 8,
    "name": {
      "ar": "سورة الأنفال",
      "en": "Al-Anfal",
      "bn": "আল-আনফাল",
      "transliteration": "Al-Anfal"
    },
    "total_verses": 75,
    "verses": []
  },
  {
    "id": 9,
    "name": {
      "ar": "سورة التوبة",
      "en": "At-Tawbah",
      "bn": "আত-তাওবাহ",
      "transliteration": "At-Tawbah"
    },
    "total_verses": 129,
    "verses": []
  },
  {
    "id": 10,
    "name": {
      "ar": "سورة يونس",
      "en": "Yunus",
      "bn": "ইউনুস",
      "transliteration": "Yunus"
    },
    "total_verses": 109,
    "verses": []
  },
  {
    "id": 11,
    "name": {
      "ar": "سورة هود",
      "en": "Hud",
      "bn": "হুদ",
      "transliteration": "Hud"
    },
    "total_verses": 123,
    "verses": []
  },
  {
    "id": 12,
    "name": {
      "ar": "سورة يوسف",
      "en": "Yusuf",
      "bn": "ইউসুফ",
      "transliteration": "Yusuf"
    },
    "total_verses": 111,
    "verses": []
  },
  {
    "id": 13,
    "name": {
      "ar": "سورة الرعد",
      "en": "Ar-Ra'd",
      "bn": "আর-রা’দ",
      "transliteration": "Ar-Ra'd"
    },
    "total_verses": 43,
    "verses": []
  },
  {
    "id": 14,
    "name": {
      "ar": "سورة إبراهيم",
      "en": "Ibrahim",
      "bn": "ইবরাহীম",
      "transliteration": "Ibrahim"
    },
    "total_verses": 52,
    "verses": []
  },
  {
    "id": 15,
    "name": {
      "ar": "سورة الحجر",
      "en": "Al-Hijr",
      "bn": "আল-হিজর",
      "transliteration": "Al-Hijr"
    },
    "total_verses": 99,
    "verses": []
  },
  {
    "id": 16,
    "name": {
      "ar": "سورة النحل",
      "en": "An-Nahl",
      "bn": "আন-নাহল",
      "transliteration": "An-Nahl"
    },
    "total_verses": 128,
    "verses": []
  },
  {
    "id": 17,
    "name": {
      "ar": "سورة الإسراء",
      "en": "Al-Isra",
      "bn": "আল-ইসরা",
      "transliteration": "Al-Isra"
    },
    "total_verses": 111,
    "verses": []
  },
  {
    "id": 18,
    "name": {
      "ar": "سورة الكهف",
      "en": "Al-Kahf",
      "bn": "আল-কাহফ",
      "transliteration": "Al-Kahf"
    },
    "total_verses": 110,
    "verses": []
  },
  {
    "id": 19,
    "name": {
      "ar": "سورة مريم",
      "en": "Maryam",
      "bn": "মারইয়াম",
      "transliteration": "Maryam"
    },
    "total_verses": 98,
    "verses": []
  },
  {
    "id": 20,
    "name": {
      "ar": "سورة طه",
      "en": "Taha",
      "bn": "ত্ব-হা",
      "transliteration": "Taha"
    },
    "total_verses": 135,
    "verses": []
  },
  {
    "id": 21,
    "name": {
      "ar": "سورة الأنبياء",
      "en": "Al-Anbya",
      "bn": "আল-আম্বিয়া",
      "transliteration": "Al-Anbya"
    },
    "total_verses": 112,
    "verses": []
  },
  {
    "id": 22,
    "name": {
      "ar": "سورة الحج",
      "en": "Al-Hajj",
      "bn": "আল-হজ্জ",
      "transliteration": "Al-Hajj"
    },
    "total_verses": 78,
    "verses": []
  },
  {
    "id": 23,
    "name": {
      "ar": "سورة المؤمنون",
      "en": "Al-Mu'minun",
      "bn": "আল-মু’মিনুন",
      "transliteration": "Al-Mu'minun"
    },
    "total_verses": 118,
    "verses": []
  },
  {
    "id": 24,
    "name": {
      "ar": "سورة النور",
      "en": "An-Nur",
      "bn": "আন-নূর",
      "transliteration": "An-Nur"
    },
    "total_verses": 64,
    "verses": []
  },
  {
    "id": 25,
    "name": {
      "ar": "سورة الفرقان",
      "en": "Al-Furqan",
      "bn": "আল-ফুরকান",
      "transliteration": "Al-Furqan"
    },
    "total_verses": 77,
    "verses": []
  },
  {
    "id": 26,
    "name": {
      "ar": "سورة الشعراء",
      "en": "Ash-Shu'ara",
      "bn": "আশ-শু’আরা",
      "transliteration": "Ash-Shu'ara"
    },
    "total_verses": 227,
    "verses": []
  },
  {
    "id": 27,
    "name": {
      "ar": "سورة النمل",
      "en": "An-Naml",
      "bn": "আন-নমল",
      "transliteration": "An-Naml"
    },
    "total_verses": 93,
    "verses": []
  },
  {
    "id": 28,
    "name": {
      "ar": "سورة القصص",
      "en": "Al-Qasas",
      "bn": "আল-কাসাস",
      "transliteration": "Al-Qasas"
    },
    "total_verses": 88,
    "verses": []
  },
  {
    "id": 29,
    "name": {
      "ar": "سورة العنكبوت",
      "en": "Al-Ankabut",
      "bn": "আল-’আনকাবূত",
      "transliteration": "Al-Ankabut"
    },
    "total_verses": 69,
    "verses": []
  },
  {
    "id": 30,
    "name": {
      "ar": "سورة الروم",
      "en": "Ar-Rum",
      "bn": "আর-রূম",
      "transliteration": "Ar-Rum"
    },
    "total_verses": 60,
    "verses": []
  },
  {
    "id": 31,
    "name": {
      "ar": "سورة لقمان",
      "en": "Luqman",
      "bn": "লুকমান",
      "transliteration": "Luqman"
    },
    "total_verses": 34,
    "verses": []
  },
  {
    "id": 32,
    "name": {
      "ar": "سورة السجدة",
      "en": "As-Sajdah",
      "bn": "আস-সাজদাহ",
      "transliteration": "As-Sajdah"
    },
    "total_verses": 30,
    "verses": []
  },
  {
    "id": 33,
    "name": {
      "ar": "سورة الأحزاب",
      "en": "Al-Ahzab",
      "bn": "আল-আহযাব",
      "transliteration": "Al-Ahzab"
    },
    "total_verses": 73,
    "verses": []
  },
  {
    "id": 34,
    "name": {
      "ar": "سورة سبأ",
      "en": "Saba",
      "bn": "সাবা",
      "transliteration": "Saba"
    },
    "total_verses": 54,
    "verses": []
  },
  {
    "id": 35,
    "name": {
      "ar": "سورة فاطر",
      "en": "Fatir",
      "bn": "ফাতির",
      "transliteration": "Fatir"
    },
    "total_verses": 45,
    "verses": []
  },
  {
    "id": 36,
    "name": {
      "ar": "سورة يس",
      "en": "Ya-Sin",
      "bn": "ইয়াসীন",
      "transliteration": "Ya-Sin"
    },
    "total_verses": 83,
    "verses": []
  },
  {
    "id": 37,
    "name": {
      "ar": "سورة الصافات",
      "en": "As-Saffat",
      "bn": "আস-সাফফাত",
      "transliteration": "As-Saffat"
    },
    "total_verses": 182,
    "verses": []
  },
  {
    "id": 38,
    "name": {
      "ar": "سورة ص",
      "en": "Sad",
      "bn": "সদ",
      "transliteration": "Sad"
    },
    "total_verses": 88,
    "verses": []
  },
  {
    "id": 39,
    "name": {
      "ar": "سورة الزمر",
      "en": "Az-Zumar",
      "bn": "আয-যুমার",
      "transliteration": "Az-Zumar"
    },
    "total_verses": 75,
    "verses": []
  },
  {
    "id": 40,
    "name": {
      "ar": "سورة غافر",
      "en": "Ghafir",
      "bn": "গাফির",
      "transliteration": "Ghafir"
    },
    "total_verses": 85,
    "verses": []
  },
  {
    "id": 41,
    "name": {
      "ar": "سورة فصلت",
      "en": "Fussilat",
      "bn": "ফুসসিলাত",
      "transliteration": "Fussilat"
    },
    "total_verses": 54,
    "verses": []
  },
  {
    "id": 42,
    "name": {
      "ar": "سورة الشورى",
      "en": "Ash-Shuraa",
      "bn": "আশ-শূরা",
      "transliteration": "Ash-Shuraa"
    },
    "total_verses": 53,
    "verses": []
  },
  {
    "id": 43,
    "name": {
      "ar": "سورة الزخرف",
      "en": "Az-Zukhruf",
      "bn": "আয-যুখরুফ",
      "transliteration": "Az-Zukhruf"
    },
    "total_verses": 89,
    "verses": []
  },
  {
    "id": 44,
    "name": {
      "ar": "سورة الدخان",
      "en": "Ad-Dukhan",
      "bn": "আদ-দুখান",
      "transliteration": "Ad-Dukhan"
    },
    "total_verses": 59,
    "verses": []
  },
  {
    "id": 45,
    "name": {
      "ar": "سورة الجاثية",
      "en": "Al-Jathiyah",
      "bn": "আল-জাসিয়াহ",
      "transliteration": "Al-Jathiyah"
    },
    "total_verses": 37,
    "verses": []
  },
  {
    "id": 46,
    "name": {
      "ar": "سورة الأحقاف",
      "en": "Al-Ahqaf",
      "bn": "আল-আহকাফ",
      "transliteration": "Al-Ahqaf"
    },
    "total_verses": 35,
    "verses": []
  },
  {
    "id": 47,
    "name": {
      "ar": "سورة محمد",
      "en": "Muhammad",
      "bn": "মুহাম্মাদ",
      "transliteration": "Muhammad"
    },
    "total_verses": 38,
    "verses": []
  },
  {
    "id": 48,
    "name": {
      "ar": "سورة الفتح",
      "en": "Al-Fath",
      "bn": "আল-ফাতহ",
      "transliteration": "Al-Fath"
    },
    "total_verses": 29,
    "verses": []
  },
  {
    "id": 49,
    "name": {
      "ar": "سورة الحجرات",
      "en": "Al-Hujurat",
      "bn": "আল-হুজুরাত",
      "transliteration": "Al-Hujurat"
    },
    "total_verses": 18,
    "verses": []
  },
  {
    "id": 50,
    "name": {
      "ar": "سورة ق",
      "en": "Qaf",
      "bn": "কফ",
      "transliteration": "Qaf"
    },
    "total_verses": 45,
    "verses": []
  },
  {
    "id": 51,
    "name": {
      "ar": "سورة الذاريات",
      "en": "Adh-Dhariyat",
      "bn": "আয-যারিয়াত",
      "transliteration": "Adh-Dhariyat"
    },
    "total_verses": 60,
    "verses": []
  },
  {
    "id": 52,
    "name": {
      "ar": "سورة الطور",
      "en": "At-Tur",
      "bn": "আত-তুর",
      "transliteration": "At-Tur"
    },
    "total_verses": 49,
    "verses": []
  },
  {
    "id": 53,
    "name": {
      "ar": "سورة النجم",
      "en": "An-Najm",
      "bn": "আন-নাজম",
      "transliteration": "An-Najm"
    },
    "total_verses": 62,
    "verses": []
  },
  {
    "id": 54,
    "name": {
      "ar": "سورة القمر",
      "en": "Al-Qamar",
      "bn": "আল-কামার",
      "transliteration": "Al-Qamar"
    },
    "total_verses": 55,
    "verses": []
  },
  {
    "id": 55,
    "name": {
      "ar": "سورة الرحمن",
      "en": "Ar-Rahman",
      "bn": "আর-রহমান",
      "transliteration": "Ar-Rahman"
    },
    "total_verses": 78,
    "verses": []
  },
  {
    "id": 56,
    "name": {
      "ar": "سورة الواقعة",
      "en": "Al-Waqi'ah",
      "bn": "আল-ওয়াকি’আহ",
      "transliteration": "Al-Waqi'ah"
    },
    "total_verses": 96,
    "verses": []
  },
  {
    "id": 57,
    "name": {
      "ar": "سورة الحديد",
      "en": "Al-Hadid",
      "bn": "আল-হাদীদ",
      "transliteration": "Al-Hadid"
    },
    "total_verses": 29,
    "verses": []
  },
  {
    "id": 58,
    "name": {
      "ar": "سورة المجادلة",
      "en": "Al-Mujadila",
      "bn": "আল-মুজাদালাহ",
      "transliteration": "Al-Mujadila"
    },
    "total_verses": 22,
    "verses": []
  },
  {
    "id": 59,
    "name": {
      "ar": "سورة الحشر",
      "en": "Al-Hashr",
      "bn": "আল-হাশর",
      "transliteration": "Al-Hashr"
    },
    "total_verses": 24,
    "verses": []
  },
  {
    "id": 60,
    "name": {
      "ar": "سورة الممتحنة",
      "en": "Al-Mumtahanah",
      "bn": "আল-মুমতাহিনাহ",
      "transliteration": "Al-Mumtahanah"
    },
    "total_verses": 13,
    "verses": []
  },
  {
    "id": 61,
    "name": {
      "ar": "سورة الصف",
      "en": "As-Saf",
      "bn": "আস-সফ",
      "transliteration": "As-Saf"
    },
    "total_verses": 14,
    "verses": []
  },
  {
    "id": 62,
    "name": {
      "ar": "سورة الجمعة",
      "en": "Al-Jumu'ah",
      "bn": "আল-জুমু’আহ",
      "transliteration": "Al-Jumu'ah"
    },
    "total_verses": 11,
    "verses": []
  },
  {
    "id": 63,
    "name": {
      "ar": "سورة المنافقون",
      "en": "Al-Munafiqun",
      "bn": "আল-মুনাফিকুন",
      "transliteration": "Al-Munafiqun"
    },
    "total_verses": 11,
    "verses": []
  },
  {
    "id": 64,
    "name": {
      "ar": "سورة التغابن",
      "en": "At-Taghabun",
      "bn": "আত-তাগাবুন",
      "transliteration": "At-Taghabun"
    },
    "total_verses": 18,
    "verses": []
  },
  {
    "id": 65,
    "name": {
      "ar": "سورة الطلاق",
      "en": "At-Talaq",
      "bn": "আত-তালাক",
      "transliteration": "At-Talaq"
    },
    "total_verses": 12,
    "verses": []
  },
  {
    "id": 66,
    "name": {
      "ar": "سورة التحريم",
      "en": "At-Tahrim",
      "bn": "আত-তাহরীম",
      "transliteration": "At-Tahrim"
    },
    "total_verses": 12,
    "verses": []
  },
  {
    "id": 67,
    "name": {
      "ar": "سورة الملك",
      "en": "Al-Mulk",
      "bn": "আল-মুলক",
      "transliteration": "Al-Mulk"
    },
    "total_verses": 30,
    "verses": []
  },
  {
    "id": 68,
    "name": {
      "ar": "سورة القلم",
      "en": "Al-Qalam",
      "bn": "আল-কালাম",
      "transliteration": "Al-Qalam"
    },
    "total_verses": 52,
    "verses": []
  },
  {
    "id": 69,
    "name": {
      "ar": "سورة الحاقة",
      "en": "Al-Haqqah",
      "bn": "আল-হাক্কাহ",
      "transliteration": "Al-Haqqah"
    },
    "total_verses": 52,
    "verses": []
  },
  {
    "id": 70,
    "name": {
      "ar": "سورة المعارج",
      "en": "Al-Ma'arij",
      "bn": "আল-মা’আরিজ",
      "transliteration": "Al-Ma'arij"
    },
    "total_verses": 44,
    "verses": []
  },
  {
    "id": 71,
    "name": {
      "ar": "سورة نوح",
      "en": "Nuh",
      "bn": "নূহ",
      "transliteration": "Nuh"
    },
    "total_verses": 28,
    "verses": []
  },
  {
    "id": 72,
    "name": {
      "ar": "سورة الجن",
      "en": "Al-Jinn",
      "bn": "আল-জিন",
      "transliteration": "Al-Jinn"
    },
    "total_verses": 28,
    "verses": []
  },
  {
    "id": 73,
    "name": {
      "ar": "سورة المزمل",
      "en": "Al-Muzzammil",
      "bn": "আল-মুযযামমিল",
      "transliteration": "Al-Muzzammil"
    },
    "total_verses": 20,
    "verses": []
  },
  {
    "id": 74,
    "name": {
      "ar": "سورة المدثر",
      "en": "Al-Muddaththir",
      "bn": "আল-মুদ্দাসসির",
      "transliteration": "Al-Muddaththir"
    },
    "total_verses": 56,
    "verses": []
  },
  {
    "id": 75,
    "name": {
      "ar": "سورة القيامة",
      "en": "Al-Qiyamah",
      "bn": "আল-কিয়ামাহ",
      "transliteration": "Al-Qiyamah"
    },
    "total_verses": 40,
    "verses": []
  },
  {
    "id": 76,
    "name": {
      "ar": "سورة الانسان",
      "en": "Al-Insan",
      "bn": "আল-ইনসান",
      "transliteration": "Al-Insan"
    },
    "total_verses": 31,
    "verses": []
  },
  {
    "id": 77,
    "name": {
      "ar": "سورة المرسلات",
      "en": "Al-Mursalat",
      "bn": "আল-মুরসালাত",
      "transliteration": "Al-Mursalat"
    },
    "total_verses": 50,
    "verses": []
  },
  {
    "id": 78,
    "name": {
      "ar": "سورة النبأ",
      "en": "An-Naba",
      "bn": "আন-নাবা",
      "transliteration": "An-Naba"
    },
    "total_verses": 40,
    "verses": []
  },
  {
    "id": 79,
    "name": {
      "ar": "سورة النازعات",
      "en": "An-Nazi'at",
      "bn": "আন-নাযি’য়াত",
      "transliteration": "An-Nazi'at"
    },
    "total_verses": 46,
    "verses": []
  },
  {
    "id": 80,
    "name": {
      "ar": "سورة عبس",
      "en": "Abasa",
      "bn": "’য়াবাসা",
      "transliteration": "Abasa"
    },
    "total_verses": 42,
    "verses": []
  },
  {
    "id": 81,
    "name": {
      "ar": "سورة التكوير",
      "en": "At-Takwir",
      "bn": "আত-তাকওয়ীর",
      "transliteration": "At-Takwir"
    },
    "total_verses": 29,
    "verses": []
  },
  {
    "id": 82,
    "name": {
      "ar": "سورة الإنفطار",
      "en": "Al-Infitar",
      "bn": "আল-ইনফিতার",
      "transliteration": "Al-Infitar"
    },
    "total_verses": 19,
    "verses": []
  },
  {
    "id": 83,
    "name": {
      "ar": "سورة المطففين",
      "en": "Al-Mutaffifin",
      "bn": "আল-মুতফফিফীন",
      "transliteration": "Al-Mutaffifin"
    },
    "total_verses": 36,
    "verses": []
  },
  {
    "id": 84,
    "name": {
      "ar": "سورة الإنشقاق",
      "en": "Al-Inshiqaq",
      "bn": "আল-ইনশিকাক",
      "transliteration": "Al-Inshiqaq"
    },
    "total_verses": 25,
    "verses": []
  },
  {
    "id": 85,
    "name": {
      "ar": "سورة البروج",
      "en": "Al-Buruj",
      "bn": "আল-বুরূজ",
      "transliteration": "Al-Buruj"
    },
    "total_verses": 22,
    "verses": []
  },
  {
    "id": 86,
    "name": {
      "ar": "سورة الطارق",
      "en": "At-Tariq",
      "bn": "আত-তারিক",
      "transliteration": "At-Tariq"
    },
    "total_verses": 17,
    "verses": []
  },
  {
    "id": 87,
    "name": {
      "ar": "سورة الأعلى",
      "en": "Al-A'la",
      "bn": "আল-আ’লা",
      "transliteration": "Al-A'la"
    },
    "total_verses": 19,
    "verses": []
  },
  {
    "id": 88,
    "name": {
      "ar": "سورة الغاشية",
      "en": "Al-Ghashiyah",
      "bn": "আল-গাশিয়াহ",
      "transliteration": "Al-Ghashiyah"
    },
    "total_verses": 26,
    "verses": []
  },
  {
    "id": 89,
    "name": {
      "ar": "سورة الفجر",
      "en": "Al-Fajr",
      "bn": "আল-ফজর",
      "transliteration": "Al-Fajr"
    },
    "total_verses": 30,
    "verses": []
  },
  {
    "id": 90,
    "name": {
      "ar": "سورة البلد",
      "en": "Al-Balad",
      "bn": "আল-বালাদ",
      "transliteration": "Al-Balad"
    },
    "total_verses": 20,
    "verses": []
  },
  {
    "id": 91,
    "name": {
      "ar": "سورة الشمس",
      "en": "Ash-Shams",
      "bn": "আশ-শামস",
      "transliteration": "Ash-Shams"
    },
    "total_verses": 15,
    "verses": []
  },
  {
    "id": 92,
    "name": {
      "ar": "سورة الليل",
      "en": "Al-Layl",
      "bn": "আল-লাইল",
      "transliteration": "Al-Layl"
    },
    "total_verses": 21,
    "verses": []
  },
  {
    "id": 93,
    "name": {
      "ar": "سورة الضحى",
      "en": "Ad-Duhaa",
      "bn": "আদ-দুহা",
      "transliteration": "Ad-Duhaa"
    },
    "total_verses": 11,
    "verses": []
  },
  {
    "id": 94,
    "name": {
      "ar": "سورة الشرح",
      "en": "Ash-Sharh",
      "bn": "আশ-শারহ",
      "transliteration": "Ash-Sharh"
    },
    "total_verses": 8,
    "verses": []
  },
  {
    "id": 95,
    "name": {
      "ar": "سورة التين",
      "en": "At-Tin",
      "bn": "আত-তীন",
      "transliteration": "At-Tin"
    },
    "total_verses": 8,
    "verses": []
  },
  {
    "id": 96,
    "name": {
      "ar": "سورة العلق",
      "en": "Al-Alaq",
      "bn": "আল-’আলাক",
      "transliteration": "Al-Alaq"
    },
    "total_verses": 19,
    "verses": []
  },
  {
    "id": 97,
    "name": {
      "ar": "سورة القدر",
      "en": "Al-Qadr",
      "bn": "আল-কদর",
      "transliteration": "Al-Qadr"
    },
    "total_verses": 5,
    "verses": []
  },
  {
    "id": 98,
    "name": {
      "ar": "سورة البينة",
      "en": "Al-Bayyinah",
      "bn": "আল-বাইয়্যিনাহ",
      "transliteration": "Al-Bayyinah"
    },
    "total_verses": 8,
    "verses": []
  },
  {
    "id": 99,
    "name": {
      "ar": "سورة الزلزلة",
      "en": "Az-Zalzalah",
      "bn": "আয-যালযালাহ",
      "transliteration": "Az-Zalzalah"
    },
    "total_verses": 8,
    "verses": []
  },
  {
    "id": 100,
    "name": {
      "ar": "سورة العاديات",
      "en": "Al-Adiyat",
      "bn": "আল-’আদিয়াত",
      "transliteration": "Al-Adiyat"
    },
    "total_verses": 11,
    "verses": []
  },
  {
    "id": 101,
    "name": {
      "ar": "سورة القارعة",
      "en": "Al-Qari'ah",
      "bn": "আল-কারি’আহ",
      "transliteration": "Al-Qari'ah"
    },
    "total_verses": 11,
    "verses": []
  },
  {
    "id": 102,
    "name": {
      "ar": "سورة التكاثر",
      "en": "At-Takathur",
      "bn": "আত-তাকাসুর",
      "transliteration": "At-Takathur"
    },
    "total_verses": 8,
    "verses": []
  },
  {
    "id": 103,
    "name": {
      "ar": "سورة العصر",
      "en": "Al-Asr",
      "bn": "আল-’আসর",
      "transliteration": "Al-Asr"
    },
    "total_verses": 3,
    "verses": []
  },
  {
    "id": 104,
    "name": {
      "ar": "سورة الهمزة",
      "en": "Al-Humazah",
      "bn": "আল-হুমাযাহ",
      "transliteration": "Al-Humazah"
    },
    "total_verses": 9,
    "verses": []
  },
  {
    "id": 105,
    "name": {
      "ar": "سورة الفيل",
      "en": "Al-Fil",
      "bn": "আল-ফীল",
      "transliteration": "Al-Fil"
    },
    "total_verses": 5,
    "verses": []
  },
  {
    "id": 106,
    "name": {
      "ar": "سورة قريش",
      "en": "Quraysh",
      "bn": "কুরাইশ",
      "transliteration": "Quraysh"
    },
    "total_verses": 4,
    "verses": []
  },
  {
    "id": 107,
    "name": {
      "ar": "سورة الماعون",
      "en": "Al-Ma'un",
      "bn": "আল-মা’উন",
      "transliteration": "Al-Ma'un"
    },
    "total_verses": 7,
    "verses": []
  },
  {
    "id": 108,
    "name": {
      "ar": "سورة الكوثر",
      "en": "Al-Kawthar",
      "bn": "আল-কাউসার",
      "transliteration": "Al-Kawthar"
    },
    "total_verses": 3,
    "verses": []
  },
  {
    "id": 109,
    "name": {
      "ar": "سورة الكافرون",
      "en": "Al-Kafirun",
      "bn": "আল-কাফিরূন",
      "transliteration": "Al-Kafirun"
    },
    "total_verses": 6,
    "verses": []
  },
  {
    "id": 110,
    "name": {
      "ar": "سورة النصر",
      "en": "An-Nasr",
      "bn": "আন-নাসর",
      "transliteration": "An-Nasr"
    },
    "total_verses": 3,
    "verses": []
  },
  {
    "id": 111,
    "name": {
      "ar": "سورة المسد",
      "en": "Al-Masad",
      "bn": "আল-মাসাদ",
      "transliteration": "Al-Masad"
    },
    "total_verses": 5,
    "verses": []
  },
  {
    "id": 112,
    "name": {
      "ar": "سورة الإخلاص",
      "en": "Al-Ikhlas",
      "bn": "আল-ইখলাস",
      "transliteration": "Al-Ikhlas"
    },
    "total_verses": 4,
    "verses": []
  },
  {
    "id": 113,
    "name": {
      "ar": "سورة الفلق",
      "en": "Al-Falaq",
      "bn": "আল-ফালাক",
      "transliteration": "Al-Falaq"
    },
    "total_verses": 5,
    "verses": []
  },
  {
    id: 114,
    name: {
      ar: 'سُورَةُ النَّاسِ',
      en: 'An-Nas',
      bn: 'আন-নাস',
      transliteration: 'An-Nas',
    },
    total_verses: 6,
    verses: [
      {
        id: 1,
        text: {
          ar: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
          bn_muhiuddin: 'বলুন, আমি আশ্রয় গ্রহণ করছি মানুষের পালনকর্তার,',
          bn_tanzil: 'বল, ‘আমি আশ্রয় চাচ্ছি মানুষের রবের কাছে,',
          en_sahih: 'Say, "I seek refuge in the Lord of mankind,',
          en_transliteration: "Qul aʿūḏu birabbi n-nās",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/114001.mp3',
      },
      {
        id: 2,
        text: {
          ar: 'مَلِكِ ٱلنَّاسِ',
          bn_muhiuddin: 'মানুষের অধিপতির,',
          bn_tanzil: 'মানুষের অধিপতির কাছে,',
          en_sahih: 'The Sovereign of mankind.',
          en_transliteration: "Maliki n-nās",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/114002.mp3',
      },
      {
        id: 3,
        text: {
          ar: 'إِلَـٰهِ ٱلنَّاسِ',
          bn_muhiuddin: 'মানুষের মা’বুদের,',
          bn_tanzil: 'মানুষের ইলাহের কাছে,',
          en_sahih: 'The God of mankind,',
          en_transliteration: "Ilāhi n-nās",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/114003.mp3',
      },
      {
        id: 4,
        text: {
          ar: 'مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ',
          bn_muhiuddin: 'তার অনিষ্ট থেকে, যে কুমন্ত্রণা দেয় ও আত্নগোপন করে,',
          bn_tanzil: 'আত্মগোপনকারী কুমন্ত্রণাদাতার অনিষ্ট থেকে,',
          en_sahih: 'From the evil of the retreating whisperer -',
          en_transliteration: "Min šarri l-waswāsi l-ḫannās",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/114004.mp3',
      },
      {
        id: 5,
        text: {
          ar: 'ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ',
          bn_muhiuddin: 'যে কুমন্ত্রণা দেয় মানুষের অন্তরে,',
          bn_tanzil: 'যে মানুষের অন্তরে কুমন্ত্রণা দেয়—',
          en_sahih: 'Who whispers [evil] into the breasts of mankind -',
          en_transliteration: "Alladhī yuwaswisu fī ṣudūri n-nās",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/114005.mp3',
      },
      {
        id: 6,
        text: {
          ar: 'مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ',
          bn_muhiuddin: 'জ্বিনের মধ্য থেকে অথবা মানুষের মধ্য থেকে।',
          bn_tanzil: 'জিন ও মানুষ থেকে’।',
          en_sahih: 'From among the jinn and mankind."',
          en_transliteration: "Mina l-jinnati wa-n-nās",
        },
        audio: 'https://everyayah.com/data/Alafasy_128kbps/114006.mp3',
      },
    ],
  },
];
