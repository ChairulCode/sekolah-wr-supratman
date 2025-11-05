import { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {
  Music,
  Palette,
  Code2,
  Microscope,
  Languages,
  Camera,
  Users,
  BookOpen,
  Trophy,
  Star,
} from "lucide-react";
import "./ekstrakulikuler.css";

interface Extracurricular {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  location: string;
  coach: string;
  level: string[];
  image: string;
  highlights: string[];
}

const Ekstrakurikuler = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const extracurriculars: Extracurricular[] = [
    {
      id: 1,
      name: "Paduan Suara",
      description:
        "Mengembangkan bakat menyanyi dan harmonisasi vokal dalam kelompok. Peserta akan belajar teknik vokal, membaca notasi, dan tampil dalam berbagai acara sekolah.",
      icon: <Music className="w-8 h-8" />,
      category: "Seni",
      location: "Aula Musik",
      coach: "Ibu Sari Dewi, S.Pd.",
      level: ["Pemula", "Menengah", "Lanjutan"],
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Juara 1 Festival Paduan Suara Tingkat Kota",
        "Tampil di Acara Wisuda Sekolah",
        "Rekaman Album Tahunan",
      ],
    },
    {
      id: 2,
      name: "Seni Lukis",
      description:
        "Menyalurkan kreativitas melalui media lukis. Mempelajari berbagai teknik melukis dari dasar hingga advanced dengan bimbingan guru profesional.",
      icon: <Palette className="w-8 h-8" />,
      category: "Seni",
      location: "Ruang Seni 301",
      coach: "Budi Santoso, S.Sn.",
      level: ["Pemula", "Menengah"],
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Pameran Karya Bulanan",
        "Kompetisi Seni Regional",
        "Workshop dengan Seniman Profesional",
      ],
    },
    {
      id: 3,
      name: "Sepak Bola",
      description:
        "Mengembangkan skill bermain sepak bola dengan teknik yang benar. Fokus pada teamwork, strategi, dan fisik yang optimal untuk pertandingan.",
      icon: <Trophy className="w-8 h-8" />, // Ganti dengan Trophy atau icon olahraga lain
      category: "Olahraga",
      location: "Lapangan Sepak Bola",
      coach: "Ahmad Rizki, S.Pd.",
      level: ["Pemula", "Menengah", "Tim Inti"],
      image:
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Juara Liga Pelajar Kota",
        "Turnamen Antar Sekolah",
        "Latihan dengan Pelatih Bersertifikat",
      ],
    },
    {
      id: 4,
      name: "Programming Club",
      description:
        "Belajar pemrograman dari dasar hingga advanced. Membuat website, aplikasi mobile, dan proyek IoT dengan teknologi terkini.",
      icon: <Code2 className="w-8 h-8" />,
      category: "Teknologi",
      location: "Lab Komputer 2",
      coach: "Dian Pratama, M.Kom.",
      level: ["Pemula", "Menengah", "Lanjutan"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Hackathon Nasional",
        "Proyek Kolaborasi dengan Industri",
        "Kompetisi Coding Tingkat Nasional",
      ],
    },
    {
      id: 5,
      name: "Science Club",
      description:
        "Eksperimen sains yang menarik dan aplikatif. Menjelajahi dunia fisika, kimia, dan biologi melalui praktikum yang menyenangkan.",
      icon: <Microscope className="w-8 h-8" />,
      category: "Sains",
      location: "Lab Sains Terpadu",
      coach: "Dr. Maya Sari, M.Si.",
      level: ["Pemula", "Menengah"],
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Olimpiade Sains Nasional",
        "Penelitian Sains Sederhana",
        "Kunjungan ke Pusat Sains",
      ],
    },
    {
      id: 6,
      name: "English Club",
      description:
        "Meningkatkan kemampuan bahasa Inggris melalui conversation, debate, dan creative writing. Lingkungan yang supportive untuk praktik bahasa.",
      icon: <Languages className="w-8 h-8" />,
      category: "Bahasa",
      location: "Ruang Bahasa 202",
      coach: "Sarah Johnson, S.Pd.",
      level: ["Pemula", "Menengah", "Lanjutan"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "English Debate Competition",
        "Story Telling Contest",
        "Native Speaker Sessions",
      ],
    },
    {
      id: 7,
      name: "Fotografi",
      description:
        "Belajar teknik fotografi dari dasar hingga profesional. Mencakupi portrait, landscape, dan fotografi dokumenter dengan equipment modern.",
      icon: <Camera className="w-8 h-8" />,
      category: "Seni",
      location: "Studio Fotografi",
      coach: "Rendra Wijaya, S.Sn.",
      level: ["Pemula", "Menengah"],
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Pameran Foto Tahunan",
        "Photo Walk Mingguan",
        "Workshop dengan Fotografer Profesional",
      ],
    },
    {
      id: 8,
      name: "Pramuka",
      description:
        "Mengembangkan karakter, leadership, dan kemandirian melalui kegiatan kepramukaan. Berbagai kegiatan outdoor dan survival skill.",
      icon: <Users className="w-8 h-8" />,
      category: "Organisasi",
      location: "Lapangan Upacara",
      coach: "Pak Joko Susilo, S.Pd.",
      level: ["Penggalang", "Penegak"],
      image:
        "https://images.unsplash.com/photo-1547891657-e1c8e38663b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: [
        "Perkemahan Tahunan",
        "Lomba Tingkat Regional",
        "Kegiatan Sosial Masyarakat",
      ],
    },
  ];

  const categories = [
    "Semua",
    "Seni",
    "Olahraga",
    "Teknologi",
    "Sains",
    "Bahasa",
    "Organisasi",
  ];

  const filteredExtracurriculars =
    selectedCategory === "Semua"
      ? extracurriculars
      : extracurriculars.filter(
          (extracurricular) => extracurricular.category === selectedCategory
        );

  return (
    <div className="ekstrakurikuler-page">
      <Navbar />

      {/* Hero Section */}
      <section className="ekstra-hero">
        <div className="ekstra-hero-content">
          <h1 className="ekstra-hero-title">
            Ekstrakurikuler
            <span className="ekstra-hero-accent"> WR Supratman</span>
          </h1>
          <p className="ekstra-hero-subtitle">
            Temukan passion dan kembangkan bakatmu melalui berbagai kegiatan
            ekstrakurikuler yang menarik dan mendidik
          </p>
          <div className="ekstra-hero-stats">
            <div className="stat-item">
              <Trophy className="stat-icon" />
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Prestasi</div>
              </div>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <div>
                <div className="stat-number">8</div>
                <div className="stat-label">Program</div>
              </div>
            </div>
            <div className="stat-item">
              <BookOpen className="stat-icon" />
              <div>
                <div className="stat-number">12</div>
                <div className="stat-label">Pelatih</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-section">
        <div className="container">
          <h2 className="category-title">Pilih Kategori</h2>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Grid */}
      <section className="extracurricular-section">
        <div className="container">
          <div className="extracurricular-grid">
            {filteredExtracurriculars.map((extracurricular) => (
              <div key={extracurricular.id} className="extracurricular-card">
                <div className="card-image-container">
                  <img
                    src={extracurricular.image}
                    alt={extracurricular.name}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <div className="card-icon">{extracurricular.icon}</div>
                    <div className="card-category">
                      {extracurricular.category}
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{extracurricular.name}</h3>
                  <p className="card-description">
                    {extracurricular.description}
                  </p>

                  <div className="card-levels">
                    {extracurricular.level.map((level, index) => (
                      <span key={index} className="level-badge">
                        {level}
                      </span>
                    ))}
                  </div>

                  <div className="card-highlights">
                    <h4 className="highlights-title">
                      <Star className="highlight-icon" />
                      Highlight Kegiatan
                    </h4>
                    <ul className="highlights-list">
                      {extracurricular.highlights.map((highlight, index) => (
                        <li key={index} className="highlight-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Ekstrakurikuler;
