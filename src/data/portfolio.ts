export const slugifyProjectTitle = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

type Dictionary = {
  profile: {
    name: string;
    nickname: string;
    role: string;
    school: string;
    major: string;
    status: string;
    location: string;
    email: string;
    tagline: string;
    heroLines: string[];
    summary: string;
    organization: {
      name: string;
      position: string;
      description: string;
    };
  };
  capabilities: { title: string; meta: string }[];
  featuredProjects: {
    number: string;
    title: string;
    category: string;
    role: string;
    status: string;
    stack: string;
    summary: string;
    caseStudy: { problem: string; solution: string; result: string };
  }[];
  supportingProjects: { number: string; title: string; stack: string }[];
  organizationHighlights: string[];
  learningNotes: { title: string; summary: string }[];
  ui: Record<string, string>;
};

// Reusable types derived from the dictionary shape
export type Profile = Dictionary["profile"];
export type Capability = Dictionary["capabilities"][number];
export type LearningNote = Dictionary["learningNotes"][number];
export type FeaturedProject = Dictionary["featuredProjects"][number];

const dictionaries: Record<"en" | "id", Dictionary> = {
  id: {
    ui: {
      brief: "[RINGKASAN]",
      stack: "[KEMAMPUAN]",
      archive: "[ARSIP]",
      records: "[CATATAN]",
      contact: "[KONTAK]",
      init_contact: "MULAI_KONTAK_",
      open_to_work: "TERSEDIA_UNTUK_BEKERJA",
      profile_brief: "// RINGKASAN_PROFIL",
      tech_ops: "// KEMAMPUAN_TEKNIS",
      leadership_record: "// REKAM_JEJAK_KEPEMIMPINAN",
      work_archive: "// ARSIP_KARYA",
      learning_records: "// CATATAN_BELAJAR",
      collab_brief: "// KERTAS_KOLABORASI",
      view_archive: "LIHAT_ARSIP",
      hero_title: "FRESH GRADUATE FOKUS PADA SISTEM SOFTWARE DUNIA NYATA.",
      hero_desc:
        "Saya Raihan Ariansyah, fresh graduate RPL dari SMK Negeri 13 Bandung. Saya terbiasa membangun struktur sistem: autentikasi, CRUD, database, REST API, dashboard, Firebase, monitoring realtime, mobile app, dan koneksi perangkat IoT.",
      leadership_title: "PENGALAMAN KEPEMIMPINAN DENGAN POLA PIKIR SISTEM.",
      leadership_desc:
        "Anggota Komisi A di MPK SMK Negeri 13 Bandung. Pengalaman organisasi ini menjadi dasar cara saya melihat software: jelas, terstruktur, dan bisa dipakai orang lain.",
      archive_title: "ARSIP STUDI KASUS UNTUK MASALAH PRAKTIS.",
      notes_title: "BAGAIMANA SAYA MENDOKUMENTASIKAN KEPUTUSAN SAAT MEMBANGUN.",
      notes_desc: "Catatan pendek ini membantu portfolio terasa matang, bukan hanya galeri screenshot.",
      contact_title: "MARI BANGUN SISTEM SOFTWARE YANG PRAKTIS.",
      back_to_archive: "← KEMBALI_KE_ARSIP",
      project_meta: "> META_PROYEK_",
    },
    profile: {
      name: "Raihan Ariansyah",
      nickname: "Raihan",
      role: "Fullstack Developer & Fresh Graduate Software Engineer",
      school: "SMK Negeri 13 Bandung",
      major: "Rekayasa Perangkat Lunak / RPL",
      status: "Fresh Graduate",
      location: "Bandung, Indonesia",
      email: "raihanariansyah160307@gmail.com",
      tagline: "Sistem software praktis dengan pendekatan studi kasus.",
      heroLines: ["Sistem software", "praktis dengan", "pendekatan studi kasus."],
      summary:
        "Saya membangun sistem web, layanan backend, aplikasi mobile, dan alat terintegrasi IoT dengan struktur yang bersih, studi kasus nyata, dan rekayasa siap produksi.",
      organization: {
        name: "MPK SMK Negeri 13 Bandung",
        position: "Anggota Komisi A",
        description:
          "Membantu koordinasi, pengawasan kegiatan, komunikasi organisasi, dan penyelesaian masalah dalam lingkungan sekolah.",
      },
    },
    capabilities: [
      { title: "Fullstack Web", meta: "Laravel | Next.js | TypeScript" },
      { title: "Sistem Backend", meta: "Go | REST API | Auth Flow" },
      { title: "Desain Database", meta: "PostgreSQL | MySQL | Firestore" },
      { title: "Aplikasi Mobile", meta: "Flutter | Dart | Firebase" },
      { title: "Integrasi IoT", meta: "ESP32 | MQTT | Sensor" },
      { title: "Integrasi API", meta: "JSON | External API | Dashboard" },
      { title: "Pengembangan AI", meta: "Copilot | Claude | Prompt Engineering" },
    ],
    featuredProjects: [
      {
        number: "01",
        title: "ABSENTA13",
        category: "Sistem Absensi Sekolah",
        role: "Perancang & Pengembang Sistem",
        status: "Dalam Pengembangan / Studi Kasus",
        stack: "Flutter | Firebase | Firestore | QR Code",
        summary:
          "Sistem absensi digital untuk SMK Negeri 13 Bandung dengan data terstruktur dan alur sekolah yang praktis.",
        caseStudy: {
          problem: "Absensi sekolah membutuhkan alur yang lebih bersih dari sekadar rekap manual: identitas siswa, bukti kehadiran, dan visibilitas data harus tetap konsisten.",
          solution: "Sistem dibingkai berdasarkan akses peran, koleksi Firestore, alur absensi QR, dan pelaporan yang dapat dibaca untuk operasional sekolah.",
          result: "Studi kasus terfokus yang menunjukkan pemikiran mobile, database, autentikasi, dan alur kerja sekolah nyata dalam satu proyek.",
        },
      },
      {
        number: "02",
        title: "Manajemen Tracking",
        category: "Dashboard Realtime",
        role: "Fullstack Developer / Kontributor",
        status: "Studi Kasus",
        stack: "React | TypeScript | NestJS | WebSocket",
        summary:
          "Dashboard pelacakan untuk data lokasi, riwayat rute, perangkat, pengguna, dan pemantauan realtime.",
        caseStudy: {
          problem: "Sistem pelacakan realtime bisa menjadi berantakan ketika data perangkat, pengguna, rute, dan riwayat tidak dipisahkan dengan jelas.",
          solution: "Arahan dashboard memprioritaskan struktur entitas yang jelas, pemantauan berbasis peta, pembaruan websocket, dan panel metadata.",
          result: "Studi kasus portfolio yang mengkomunikasikan arsitektur dashboard, aliran data realtime, dan keputusan UI operasional.",
        },
      },
    ],
    supportingProjects: [
      { number: "03", title: "Absensi App", stack: "Flutter | Firebase" },
      { number: "04", title: "IoT Workshop Kit / IWK", stack: "ESP32 | MQTT" },
      { number: "05", title: "HoyoSense", stack: "Konsep Smart City" },
      { number: "06", title: "Hoyonimeku", stack: "Integrasi API" },
    ],
    organizationHighlights: [
      "Koordinasi komunikasi dan evaluasi kegiatan sekolah sebagai Anggota Komisi A MPK.",
      "Terbiasa memecah masalah organisasi menjadi alur kerja, tanggung jawab, dan keputusan yang jelas.",
      "Membawa kebiasaan kepemimpinan, dokumentasi, dan komunikasi ke cara membangun software.",
    ],
    learningNotes: [
      {
        title: "Pemikiran Backend-first",
        summary: "Merancang model data, akses peran, kontrak API, dan alur error sebelum mempercantik antarmuka.",
      },
      {
        title: "Studi kasus yang mudah dibaca",
        summary: "Setiap proyek ditulis sebagai masalah, keputusan, dan hasil agar mudah dinilai oleh recruiter atau mentor.",
      },
      {
        title: "Responsif berdasarkan struktur",
        summary: "Layout desktop, tablet, dan mobile dibuat dari hierarki konten yang sama, bukan sekadar diperkecil.",
      },
      {
        title: "Membangun dengan bantuan AI",
        summary: "Saya memanfaatkan AI (Copilot, Claude, ChatGPT) secara intensif untuk riset, debugging, dan iterasi cepat — sambil tetap meninjau, memahami, dan bertanggung jawab atas setiap keputusan teknis.",
      },
    ],
  },
  en: {
    ui: {
      brief: "[BRIEF]",
      stack: "[STACK]",
      archive: "[ARCHIVE]",
      records: "[RECORDS]",
      contact: "[CONTACT]",
      init_contact: "INIT_CONTACT_",
      open_to_work: "OPEN_TO_WORK",
      profile_brief: "// PROFILE_BRIEF",
      tech_ops: "// TECH_OPS",
      leadership_record: "// LEADERSHIP_RECORD",
      work_archive: "// WORK_ARCHIVE",
      learning_records: "// LEARNING_RECORDS",
      collab_brief: "// COLLABORATION_BRIEF",
      view_archive: "VIEW_ARCHIVE",
      hero_title: "FRESH GRADUATE FOCUSED ON REAL-WORLD SOFTWARE SYSTEMS.",
      hero_desc:
        "I am Raihan Ariansyah, an RPL fresh graduate from SMK Negeri 13 Bandung. I am accustomed to building system structures: authentication, CRUD, databases, REST APIs, dashboards, Firebase, realtime monitoring, mobile apps, and IoT device connections.",
      leadership_title: "LEADERSHIP EXPERIENCE WITH A SYSTEMS MINDSET.",
      leadership_desc:
        "Member of Commission A at MPK SMK Negeri 13 Bandung. This organizational experience is the foundation of how I view software: clear, structured, and usable by others.",
      archive_title: "CASE STUDY ARCHIVE FOR PRACTICAL PROBLEMS.",
      notes_title: "HOW I DOCUMENT DECISIONS WHILE BUILDING.",
      notes_desc: "These short notes help the portfolio feel mature, rather than just a gallery of screenshots.",
      contact_title: "LET'S BUILD PRACTICAL SOFTWARE SYSTEMS.",
      back_to_archive: "← BACK_TO_ARCHIVE",
      project_meta: "> PROJECT_META_",
    },
    profile: {
      name: "Raihan Ariansyah",
      nickname: "Raihan",
      role: "Fullstack Developer & Fresh Graduate Software Engineer",
      school: "SMK Negeri 13 Bandung",
      major: "Software Engineering / RPL",
      status: "Fresh Graduate",
      location: "Bandung, Indonesia",
      email: "raihanariansyah160307@gmail.com",
      tagline: "Practical software systems with a case-study mindset.",
      heroLines: ["Practical software", "systems with a", "case-study mindset."],
      summary:
        "I build web systems, backend services, mobile apps, and IoT-integrated tools with clean structure, real use cases, and production-ready engineering.",
      organization: {
        name: "MPK SMK Negeri 13 Bandung",
        position: "Commission A Member",
        description:
          "Assisted in coordination, activity supervision, organizational communication, and problem-solving within the school environment.",
      },
    },
    capabilities: [
      { title: "Fullstack Web", meta: "Laravel | Next.js | TypeScript" },
      { title: "Backend System", meta: "Go | REST API | Auth Flow" },
      { title: "Database Design", meta: "PostgreSQL | MySQL | Firestore" },
      { title: "Mobile App", meta: "Flutter | Dart | Firebase" },
      { title: "IoT Integration", meta: "ESP32 | MQTT | Sensor" },
      { title: "API Integration", meta: "JSON | External API | Dashboard" },
      { title: "AI-Augmented Dev", meta: "Copilot | Claude | Prompt Engineering" },
    ],
    featuredProjects: [
      {
        number: "01",
        title: "ABSENTA13",
        category: "School Attendance System",
        role: "System Designer & Developer",
        status: "In Development / Case Study",
        stack: "Flutter | Firebase | Firestore | QR Code",
        summary:
          "Digital attendance system for SMK Negeri 13 Bandung with structured data and practical school flow.",
        caseStudy: {
          problem: "School attendance needs a cleaner flow than manual recap: student identity, attendance proof, and data visibility must stay consistent.",
          solution: "The system is framed around role-based access, Firestore collections, QR attendance flow, and readable reporting for school operations.",
          result: "A focused case study that shows mobile, database, authentication, and real school workflow thinking in one project.",
        },
      },
      {
        number: "02",
        title: "Manajemen Tracking",
        category: "Realtime Dashboard",
        role: "Fullstack Developer / Contributor",
        status: "Case Study",
        stack: "React | TypeScript | NestJS | WebSocket",
        summary:
          "Tracking dashboard for location data, route history, devices, users, and realtime monitoring.",
        caseStudy: {
          problem: "Realtime tracking systems can become noisy when device, user, route, and history data are not separated clearly.",
          solution: "The dashboard direction prioritizes clear entity structure, map-first monitoring, websocket updates, and metadata panels.",
          result: "A portfolio case study that communicates dashboard architecture, realtime data flow, and operational UI decisions.",
        },
      },
    ],
    supportingProjects: [
      { number: "03", title: "Absensi App", stack: "Flutter | Firebase" },
      { number: "04", title: "IoT Workshop Kit / IWK", stack: "ESP32 | MQTT" },
      { number: "05", title: "HoyoSense", stack: "Smart City Concept" },
      { number: "06", title: "Hoyonimeku", stack: "API Integration" },
    ],
    organizationHighlights: [
      "Communication coordination and school activity evaluation as a Member of Commission A MPK.",
      "Accustomed to breaking down organizational problems into clear workflows, responsibilities, and decisions.",
      "Bringing leadership, documentation, and communication habits to the way software is built.",
    ],
    learningNotes: [
      {
        title: "Backend-first thinking",
        summary: "Designing data models, role access, API contracts, and error flows before beautifying the interface.",
      },
      {
        title: "Readable case studies",
        summary: "Every project is written as a problem, decision, and result to make it easy for recruiters or mentors to evaluate.",
      },
      {
        title: "Responsive by structure",
        summary: "Desktop, tablet, and mobile layouts are built from the same content hierarchy, not just scaled down.",
      },
      {
        title: "Building with AI assistance",
        summary: "I lean heavily on AI tools (Copilot, Claude, ChatGPT) for research, debugging, and fast iteration — while still reviewing, understanding, and owning every technical decision.",
      },
    ],
  },
};

export const getPortfolioData = (locale: "en" | "id" = "id") => {
  return dictionaries[locale];
};

export const getAllProjects = (locale: "en" | "id" = "id") => {
  const data = dictionaries[locale];
  return [
    ...data.featuredProjects.map((project) => ({
      ...project,
      slug: slugifyProjectTitle(project.title),
      description: project.summary,
      caseStudy: project.caseStudy,
    })),
    ...data.supportingProjects.map((project) => ({
      ...project,
      slug: slugifyProjectTitle(project.title),
      category: locale === "id" ? "Proyek Pendukung" : "Supporting Build",
      role: "Developer",
      status: "Portfolio Project",
      summary: locale === "id" 
        ? `${project.title} adalah proyek pendukung yang difokuskan pada ${project.stack}.`
        : `${project.title} is a supporting portfolio build focused on ${project.stack}.`,
      description: locale === "id" 
        ? `${project.title} adalah proyek pendukung yang difokuskan pada ${project.stack}.`
        : `${project.title} is a supporting portfolio build focused on ${project.stack}.`,
      caseStudy: {
        problem: locale === "id" 
          ? "Sebuah proyek pendukung tetap membutuhkan tujuan, cakupan, dan batasan teknis yang jelas agar berguna sebagai bukti portofolio."
          : "A supporting build still needs a clear purpose, scope, and technical boundary to be useful as portfolio evidence.",
        solution: locale === "id"
          ? `Proyek ini berpusat pada ${project.stack}, dengan memperhatikan struktur implementasi dan catatan penyampaian yang mudah dibaca.`
          : `The project is positioned around ${project.stack}, with attention to implementation structure and readable delivery notes.`,
        result: locale === "id"
          ? "Entri portofolio ringkas yang mendukung studi kasus utama dan menunjukkan jangkauan teknis yang lebih luas."
          : "A compact portfolio entry that supports the main case studies and shows broader technical range.",
      },
    })),
  ];
};