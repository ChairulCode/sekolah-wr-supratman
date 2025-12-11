import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { announcements1 } from "../../data";
import "./css/prestasi-tingkatan.css";
import Footer from "../../components/footer";

interface ExpandedState {
  [key: number]: boolean;
}

const TingkatanPrestasi = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();

  const [expandedCards, setExpandedCards] = useState<ExpandedState>({});

  // Filter berdasarkan tingkatan
  const filteredAnnouncements = announcements1.filter(
    (item) => item.level.toLowerCase() === level?.toLowerCase()
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Format level title
  const getLevelTitle = (level: string | undefined) => {
    const levelMap: { [key: string]: string } = {
      "pg-tk": "PG & TK",
      sd: "SD",
      smp: "SMP",
      sma: "SMA",
    };
    return levelMap[level?.toLowerCase() || ""] || level?.toUpperCase();
  };

  return (
    <div className="tp-page">
      {/* Breadcrumb */}
      <div className="tp-breadcrumb" data-aos="fade-down">
        <button
          onClick={() => navigate("/prestasi")}
          className="tp-breadcrumb-link"
        >
          Prestasi
        </button>
        <span className="tp-breadcrumb-separator">/</span>
        <span className="tp-breadcrumb-current">{getLevelTitle(level)}</span>
      </div>

      <section className="tingkatan-prestasi-section">
        {/* HEADER */}
        <div className="tp-header" data-aos="fade-down">
          <h1>🏆 Prestasi Tingkat {getLevelTitle(level)}</h1>
          <p>
            Menampilkan {filteredAnnouncements.length} prestasi gemilang siswa
            di tingkat {getLevelTitle(level)}
          </p>
        </div>

        {/* KONTEN */}
        {filteredAnnouncements.length > 0 ? (
          <div className="tp-grid">
            {filteredAnnouncements.map((item, index) => (
              <div
                key={item.id}
                className="tp-card"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                {/* HEADER CARD */}
                <div className="tp-badge">{item.date}</div>
                <h2 className="tp-title">{item.title}</h2>

                {/* TEXT */}
                <p
                  className={`tp-text ${
                    expandedCards[item.id] ? "expanded" : ""
                  }`}
                >
                  {item.content}
                </p>

                {/* EXPAND BUTTON */}
                {item.content.length > 150 && (
                  <button
                    className="tp-expand-btn"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {expandedCards[item.id]
                      ? "Lihat Lebih Sedikit ↑"
                      : "Lihat Selengkapnya ↓"}
                  </button>
                )}

                {/* BUTTON DETAIL */}
                <button
                  className="tp-btn"
                  onClick={() => navigate(`/prestasi/${item.id}`)}
                >
                  Baca Selengkapnya →
                </button>
              </div>
            ))}
          </div>
        ) : (
          // NO DATA
          <div className="tp-empty" data-aos="fade-up">
            <h2>Belum ada prestasi di tingkat {getLevelTitle(level)} 🎯</h2>
            <p>
              Prestasi untuk tingkat <b>{getLevelTitle(level)}</b> akan
              ditampilkan di sini apabila sudah tersedia.
            </p>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default TingkatanPrestasi;
