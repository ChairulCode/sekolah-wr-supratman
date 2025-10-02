// Existing types
export type NavType = "scroll" | "link" | "route";

export interface NavTab {
  name: string;
  id: string;
  type: NavType;
  scrollTo?: string;
  children?: NavTab[];
}

export const navTabs: NavTab[] = [
  { name: "Home", id: "/", type: "route" },
  {
    name: "Tingkatan",
    id: "/Tingkatan",
    type: "route",
    children: [
      { name: "PG-TK", id: "/tingkatan/PG-TK", type: "route" },
      { name: "SD", id: "/tingkatan/SD", type: "route" },
      { name: "SMP", id: "/tingkatan/SMP", type: "route" },
      { name: "SMA", id: "/tingkatan/SMA", type: "route" },
    ],
  },
  { name: "Fasilitas", id: "/Fasilitas", type: "route" },
  { name: "Lagu Mars", id: "/Lagu-Mars", type: "route" },
];

export interface Slide {
  id: number;
  content: string;
  image: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    content: "Slide 1 - Welcome",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 2,
    content: "Slide 2 - Our Vision",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 3,
    content: "Slide 3 - Our Mission",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 4,
    content: "Slide 4 - Achievements",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 5,
    content: "Slide 5 - Activities",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 6,
    content: "Slide 6 - Facilities",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 7,
    content: "Slide 7 - Teachers",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 8,
    content: "Slide 8 - Students",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 9,
    content: "Slide 9 - Events",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
  {
    id: 10,
    content: "Slide 10 - Contact Us",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200",
  },
];

export interface WelcomeData {
  headingEmoji: string;
  headingMain: string;
  headingSub: string;
  description: string;
  highlight: string;
  buttonText: string;
}

export const welcomeData: WelcomeData = {
  headingEmoji: "👋",
  headingMain: "Selamat Datang",
  headingSub: "Di Website Resmi Perguruan WR Supratman Medan",
  description: `Website ini menyajikan berbagai informasi tentang Perguruan WR
  Supratman Medan. Berbahagia sekali kami dapat menjumpai Anda. Telah
  menjadi kewajiban kami untuk memperkenalkan diri dan
  menginformasikan sekolah kami yang mengutamakan pendidikan
  berkarakter, sains, teknologi informasi, dan penguasaan 3 bahasa, `,
  highlight: ` (TriLingual : Bahasa Indonesia, Bahasa Inggris, dan Bahasa Mandarin)`,
  buttonText: "Mulai Jelajah",
};

export interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Penerimaan Siswa Baru TP 2025/2026",
    date: "2 September 2025",
    content:
      "Perguruan WR Supratman Medan membuka pendaftaran siswa baru untuk Tahun Pelajaran 2025/2026. Silakan menghubungi bagian administrasi sekolah untuk informasi lebih lanjut.",
  },
  {
    id: 2,
    title: "Ujian Tengah Semester (UTS) Ganjil",
    date: "15 Oktober 2025",
    content:
      "Pelaksanaan Ujian Tengah Semester (UTS) Ganjil akan dimulai pada tanggal 15 Oktober 2025. Mohon siswa mempersiapkan diri sebaik-baiknya.",
  },
  {
    id: 3,
    title: "Libur Hari Raya Natal",
    date: "25 Desember 2025",
    content:
      "Sekolah akan diliburkan mulai tanggal 24–26 Desember 2025 dalam rangka Hari Raya Natal. Fasilitas belajar Fasilitas akan kembali aktif pada tanggal 27 Desember 2025.",
  },
];

export interface Activity {
  id: number;
  date: string;
  title: string;
  content: string;
  image: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    date: "20 September 2025",
    title: "Upacara Hari Kemerdekaan",
    content:
      "Sekolah mengadakan upacara memperingati Hari Kemerdekaan Indonesia dengan khidmat di lapangan sekolah.",
    image: "/images/activity1.jpg",
  },
  {
    id: 2,
    date: "5 Oktober 2025",
    title: "Lomba Sains Antar Kelas",
    content:
      "Siswa-siswi mengikuti lomba sains untuk mengasah kemampuan akademik sekaligus menumbuhkan jiwa kompetitif yang sehat.",
    image: "/images/activity2.jpg",
  },
  {
    id: 3,
    date: "12 Desember 2025",
    title: "Pentas Seni Sekolah",
    content:
      "Acara tahunan yang menampilkan kreativitas siswa dalam bidang seni tari, musik, dan drama.",
    image: "/images/activity3.jpg",
  },
];

// NEW: Fasilitas Data Structure
export interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const facilities: Facility[] = [
  {
    id: 1,
    name: "Kantin",
    description:
      "Kantin sekolah yang bersih dan nyaman dengan berbagai pilihan makanan bergizi untuk siswa dan guru.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
    icon: "🍽️",
  },
  {
    id: 2,
    name: "Sarana Parkir",
    description:
      "Area parkir yang luas dan aman untuk kendaraan siswa, guru, dan tamu sekolah.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800",
    icon: "🅿️",
  },
  {
    id: 3,
    name: "Perpustakaan",
    description:
      "Perpustakaan modern dengan koleksi buku yang lengkap dan ruang baca yang nyaman.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
    icon: "📚",
  },
  {
    id: 4,
    name: "Lapangan Basket",
    description:
      "Lapangan basket standar yang dilengkapi dengan pencahayaan untuk latihan dan pertandingan.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    icon: "🏀",
  },
  {
    id: 5,
    name: "Lapangan Futsal",
    description:
      "Lapangan futsal indoor dengan standar internasional untuk kegiatan olahraga siswa.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    icon: "⚽",
  },
  {
    id: 6,
    name: "Lapangan Voli",
    description:
      "Lapangan voli outdoor yang memenuhi standar untuk mendukung prestasi olahraga siswa.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800",
    icon: "🏐",
  },
  {
    id: 7,
    name: "Ruang Diskusi",
    description:
      "Ruang diskusi yang dilengkapi dengan fasilitas modern untuk kegiatan belajar kelompok.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
    icon: "💬",
  },
];

// data lagu mars
export const songs = [
  {
    id: 1,
    title: "MARS PERGURUAN W.R.SUPRATMAN",
    subtitle: "Lagu Kebanggaan Sekolah",
    lyrics: [
      "SMK Negeri Satu tercinta",
      "Tempat kami menuntut ilma",
      "Dengan tekad dan semangat membara",
      "Meraih cita di masa depan",
      "",
      "Guru pembimbing penuh dedikasi",
      "Membina kami dengan kasih sayang",
      "Ilmu dan akhlak kami tegakkan",
      "Demi nusa dan bangsa tercinta",
      "",
      "Reff:",
      "Maju terus pantang mundur",
      "SMK Negeri Satu jaya",
      "Berprestasi dan berbudi",
      "Mengharumkan nama sekolah kita",
    ],
    composer: "Karya Bapak Susanto, S.Pd",
    year: "2020",
    youtubeUrl: "https://www.youtube.com/watch?v=eewfP3ueoRg",
  },
  {
    id: 2,
    title: "MARS PERGURUAN W.R.SUPRATMAN",
    subtitle: "Lagu Kebanggaan Sekolah",
    lyrics: [
      "SMK Negeri Satu tercinta",
      "Tempat kami menuntut ilma",
      "Dengan tekad dan semangat membara",
      "Meraih cita di masa depan",
      "",
      "Guru pembimbing penuh dedikasi",
      "Membina kami dengan kasih sayang",
      "Ilmu dan akhlak kami tegakkan",
      "Demi nusa dan bangsa tercinta",
      "",
      "Reff:",
      "Maju terus pantang mundur",
      "SMK Negeri Satu jaya",
      "Berprestasi dan berbudi",
      "Mengharumkan nama sekolah kita",
    ],
    composer: "Karya Bapak Susanto, S.Pd",
    year: "2020",
    youtubeUrl: "https://www.youtube.com/watch?v=eewfP3ueoRg",
  },
];
